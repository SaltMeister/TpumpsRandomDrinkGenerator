from django.shortcuts import render
from django.http import JsonResponse
import json
from django.conf import settings
from pyairtable import Api
from datetime import datetime
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.
@ensure_csrf_cookie
def home(request):
    return render(request, "base.html", None)

@ensure_csrf_cookie
def history(request):
    return render(request, "history.html",None)    

def drink(request):
    api = Api(settings.DB_KEY)
    table = api.table('appcSvSOQ9iYDcm0v', 'tbls8mlm4wjySTeAi') # Base name | Table Name

    # Create Drink In DB
    if request.method == "POST":
        data = request.body
        data = data.decode('utf-8') # Convert Bytes to String
        data = json.loads(data) # String to json object

        # Verify Input
        if("body" not in data):
            return JsonResponse(
                {
                    "Success": False,
                    "Reason": "Incorrect Body Parameters"
                }
            )
        data = data['body'];
        print(data)
        flavors = data['flavors']
        iceSetting = data['iceSetting']
        sugarSetting = data['sugarSetting']
        milkSetting = data['milkSetting']
        blendSetting = data['blendSetting']
        teaSetting = data['teaSetting']
        dateData = str(datetime.now())

        flavorString = ""

        for flavor in flavors:
            flavorString += flavor + " "
        
        # Set Milk Boolean
        if milkSetting == "no milk":
            milkSetting = False
        else:
            milkSetting = True
            
        print(blendSetting)
        # Set Blend Boolean
        if blendSetting == "no blend":
            blendSetting = False
        else:
            blendSetting = True

        table.create({
            "flavors": flavorString,
            "sugarSetting": sugarSetting,
            "iceSetting": iceSetting,
            "teaSetting": teaSetting,
            "isBlended": blendSetting,
            "isAddMilk": milkSetting,
            "date": dateData
        })
        # TODO Add Object data to airtable
        returnDict = {
            "success": True,
            "body": data
        }

        return JsonResponse(returnDict)
    # Return All Drink Settings
    elif request.method == "GET":
        try:
            # Grab Latest 20 items from the table
            dbData = table.all(
                sort=["-date"], 
                max_records=10
                )

            return JsonResponse({
                "success": True,
                "body": dbData
            })
        except Exception as e:
            return JsonResponse({
                "success": False,
                "reason": str(e)
            })

    return JsonResponse({
        "success": False,
        "reason": "Error From Database"
    })
