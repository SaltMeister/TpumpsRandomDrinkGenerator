In order to deploy the project.

1. Ensure Django secret key is in environment variable
2. Adjust Nginx reverse proxy to where you will host the django application.
3. Adjust Django Settings staticurl to url of where nginx will be hosted.
4. Copy all file in static folder subfolders and paste them into the static folder.
5. Build the docker containers using the docker compose yaml.
6. Deploy the containers on your choice of cloud service. The following will be for Google Cloud

7. Following Google Documentation, Setup Google CLI, and enable Google Artifacts.
8. Set up Google Artifact by creatig a new repository.
9. Using Google CLI authenticate your project to prep for pushing your docker image to the cloud.
10. Using Google CLI, provide a tag for the 2 docker containers using the commands

  docker tag [image name]:[Tag Name] us-west1.docker.pkg.dev/[Google Artifact Repo Name]/[Google Artifact Image Name]:[Tag Name]

  This will tag the docker image which will reflect on Docker desktop.
11. Push the docker image by typing:
  docker push us-west1.docker.pkg.dev/[Google Artifact Repo Name]/[Google Artifact Image Name]:[Tag Name]

  It should load and upload the layers of the container
12. On Google Cloud Run, create a new service and select your uploaded container. Make sure to set the port to the associated container for 80 with Nginx and 8000 with Django.

13. Repeat from step 10 for the other docker image.