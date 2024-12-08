## Deployment

In order to deploy the project.

1. Ensure Django secret key is in environment variable
2. Adjust Nginx reverse proxy in nginx.conf to where you will host the django application.
3. Adjust Django Settings static url to url of where nginx will be hosted.
4. Copy all file in static folder sub-folders and paste them into the static folder.
> You can use django's provided command
```
python manage.py collectstatic
```

6. Build the docker containers using the docker compose yaml.
```
docker compose build
```
7. Deploy the containers on your choice of cloud service. 

8. Once you have your deployed site URL. You can map the url to a Domain vendor like Cloud Flare

9. Make sure that ALLOWED_HOSTS and CSRF_TRUSTED_ORIGINS are properly.
> For CSRF_TRUSTED_ORIGIN, you must set it in the format
> https://[**CNAME/SubDomain**].[**SiteName/Domain**].[**TopLevelDomain**]

> Alternatively you can use a * in https://*.[**SiteName**].[**TopLevel**] to allow all sub domains

### The following will deploying on Google Cloud
1. Following Google Documentation, Download/Setup Google CLI, and enable Google Artifacts.
2. Set up a new repository in Google Artifacts. This will be where your docker containers will be stored and uploaded.
3. Using Google CLI authenticate your project to prepare for pushing your docker image to the cloud.
> From https://cloud.google.com/artifact-registry/docs/docker/authentication
```
gcloud auth login
gcloud auth configure-docker HOSTNAME-LIST
```
4. Using Google CLI, provide a tag for the 2 docker containers using the commands

```docker tag [image name]:[Tag Name] [location name]/[Google Artifact Repo Name]/[Google Artifact Image Name]:[Tag Name]```
> I used ```us-west1-docker.pkg.dev```
This will tag the docker image which will reflect on Docker desktop.

5. Push the docker image by typing:

```docker push /[Google Artifact Repo Name]/[Google Artifact Image Name]:[Tag Name]```
> It should load and upload the layers of the container

6. On Google Cloud Run, create a new service and select your uploaded container.
>Make sure to set the port to the associated container for **80 with Nginx** and **8000 with Django**
7. Repeat from step 1 for the other docker image.

This should get a running deployment of the project working on the cloud.
