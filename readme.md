## What is Project?
This Is a Random Drink Generator for the Bay Area Boba Chain TPumps.

Users can randomize their entire drink if they like and can view previously generated drinks to spark their adventurous ideas.

## Setup

To Start Project can first navigate to your directory in the terminal and type:

    git clone Project Link

After cloning, you should setup your virtual python environment.

Type:
  
    python -m venv .venv

To activate the venv navigate to the directory where .venv is located and type on a WINDOWS machine:

    .venv\Scripts\activate

Now that your are in the venv. Install the python libraries by typing:

    pip install -r ./requirements.txt

Ensure That Python is an environment variable or just add python to the beginning of the command.

Now you should navigate to tpumpRandomizer/app and add a new file called .env.

This will store your Airtable API key which you must obtain from the airtable site.

Add the API key and enter:

     DB_KEY="<API KEY>"

Now that everything is setup we can run the project.

Navigate to ./tpumpRandomizer and to run locally type:

    python manage.py runserver

    