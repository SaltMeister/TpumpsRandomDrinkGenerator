## What and Why I made Project?
This Is a Random Drink Generator for the Bay Area Boba Chain TPumps.

Users can randomize their entire drink if they like and can view previously generated drinks to spark their adventurous ideas.

I enjoy drinking boba a lot and whenever I am at Tpumps I ask for 3 random numbers to order a randomly flavored drink.
This site will simplify the process and allow others to try out something different than what is on display.

## Setup Local Development
**Process Performed on Windows Machines**
To Start Project can first navigate to your directory in the terminal and type:

> git clone Project Link

After cloning, you should setup your virtual python environment.

Type:
  
> python -m venv .venv

To activate the venv navigate to the directory where .venv is located and type on a **WINDOWS** machine:

> .venv\Scripts\activate

Now that your are in the venv. Install the python libraries by typing:

> pip install -r ./requirements.txt

```Make sure you are in directory with the requirements.txt file```

Now you should navigate to tpumpRandomizer/app and add a new file called .env.
This will store your Airtable API key which you must obtain from the airtable site.
Add the API key and enter:

> DB_KEY="[API KEY]"

Currently the Django App settings.py is set for my own deployment. In order to run locally, we must alter some settings
In the settings.py, go to STATIC_URL and **delete** the line, and uncomment the other STATIC_URL. This will let Django locate the static files locally.

```Set Debug = True during development``` 

Now that everything is setup we can run the project by first navigating to ./tpumpRandomizer and to run locally type:

> python manage.py runserver

## Deployment

    Steps located in deployingReadme.md
