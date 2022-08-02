output "dersu_public_site_cloud_run_url" {
  value = google_cloud_run_service.site.status[0].url
}
