from django.shortcuts import render
from django.http import JsonResponse
import json
from django.conf import settings
from pyairtable import Api

# Create your views here.
def home(request):
    return render(request, "base.html", None)

def history(request):
    return render(request, "history.html",None)    

def drink(request):
    api = Api(settings.DB_KEY)
    table = api.table('appcSvSOQ9iYDcm0v', 'tbls8mlm4wjySTeAi') # Base name | Table Name
    print(table.all())

    # Create Drink In DB
    if request.method == "POST":
        data = request.body
        data = data.decode('utf-8') # Convert Bytes to String
        data = json.loads(data) # String to json object


        # Verify Input
        if('body' not in data):
            return JsonResponse(
                {
                    "Success": False,
                    "Reason": "Incorrect Body Parameters"
                }
            )

        #table.create({""})
        # TODO Add Object data to airtable
        returnDict = {
            "Success": True,
        }

        return JsonResponse(data)

    return JsonResponse({
        "Success": False,
        "Reason": "Could No Add To Database"
    })
