terraform {
  required_version = "1.2.6"

  backend "gcs" {
    bucket = "dersu-public-site--terraform-state"
    prefix = "terraform/state"
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

data "google_client_config" "default" {
}
