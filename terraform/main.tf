# NOTE JD: leaving this here until we have the new infrastructure ready

# module cloud_run {
#   source   = "garbetjie/cloud-run/google"
#   name     = "dersu-public-site"
#   image    = "gcr.io/dersu-assistant/public-site:${var.dersu_public_site_docker_image_tag}"
#   location = var.region
#   # map_domains         = ["dersu.uz"]
#   allow_public_access = true
#   port                = 80
# }


resource "google_cloud_run_service" "site" {
  project = var.project_id
  provider = google-beta
  name     = "${terraform.workspace}-public-site"
  location = var.region

  template {
    spec {
      containers {
        image = "gcr.io/dersu-assistant/public-site:${var.dersu_public_site_docker_image_tag}"
        resources {
          limits = {
            cpu = "2000m"
            memory = "1024Mi"
          }
        }  
        volume_mounts {
          name = "configuration"
          mount_path = "/app/secrets"
        }
        ports {
          container_port = 3000
        }
      }
      volumes {
        name = "configuration"
        secret {
          secret_name = google_secret_manager_secret.configuration-secret.secret_id
          items {
            key = data.google_secret_manager_secret_version.configuration-version.version
            path = ".env"
          }
        }
      }
    }
    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale"      = "2"
        "autoscaling.knative.dev/maxScale"      = "10"
        "run.googleapis.com/client-name"        = "terraform"
      }
    }
  }

  metadata {
    annotations = {
      generated-by = "magic-modules"
      "run.googleapis.com/launch-stage" = "BETA"
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  lifecycle {
    ignore_changes = [
        metadata.0.annotations,
    ]
  }  
}

data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "site-no-auth-access" {
  location    = google_cloud_run_service.site.location
  project     = google_cloud_run_service.site.project
  service     = google_cloud_run_service.site.name
  policy_data = data.google_iam_policy.noauth.policy_data
}


data "google_secret_manager_secret_version" "configuration-version" {
  secret = google_secret_manager_secret.configuration-secret.name
  depends_on = [google_secret_manager_secret_version.configuration]
}

resource "google_secret_manager_secret" "configuration-secret" {
  project = var.project_id
  secret_id = "${terraform.workspace}-public-site-configuration"

  replication {
    automatic = true
  }
}

resource "google_secret_manager_secret_version" "configuration" {
  secret = google_secret_manager_secret.configuration-secret.name
  secret_data = <<EOT
NEXT_PUBLIC_BASE_DOMAIN_URL="https://${terraform.workspace}-site.dersu.uz"
NEXT_PUBLIC_ENABLE_PLAUSIBLE="true"
EOT
}