module cloud_run {
  source   = "garbetjie/cloud-run/google"
  name     = "dersu-public-site"
  image    = "gcr.io/dersu-assistant/public-site:${var.dersu_public_site_docker_image_tag}"
  location = var.region
  # map_domains         = ["dersu.uz"]
  allow_public_access = true
  port                = 80
}
