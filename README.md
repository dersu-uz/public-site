# Dersu

This is the source code for Dersu's public site at [dersu.uz](https://dersu.uz).

A static site generated with [NextJS](https://nextjs.org/).

## Local development

Docker and Make required.

Run `make` at the root folder and head off to http://localhost:4000 or use your IP in the local network to check on devices.

### Local configuration

Public variables can be defined in the `.env` file with default values that will be used in production.

Those values can be overwriten locally with a `.env.local` file (git ignored).

## Continuous integration and deployment

The Docker image for the Cloud Run service is built and deployed via Terraform on commits to the `main` branch.

If you need to build and deploy locally you first need a working installation of `gcloud` with the appropriate authentication (including `$GOOGLE_APPLICATION_CREDENTIALS`). Then you can build and deploy by building the Docker image, pushing it to the registry and applying the changes (Terraform steps will ask for the Docker image tag):

```
gcloud builds submit --tag gcr.io/dersu-assistant/public-site:some-local-change
make infra-plan
make infra-apply
```
