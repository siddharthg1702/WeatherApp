import io
import os
import requests
import pprint
import json

import numpy as np
from flask import Flask, jsonify, make_response, render_template, request
from werkzeug.utils import send_from_directory

app = Flask(__name__)
app.secret_key = "s3cr3t"
app.debug = False
app._static_folder = os.path.abspath("templates/static/")


@app.route("/", methods=["GET"])
def index():
    return app.send_static_file("index.html")

@app.route("/locationWeather/")
def getLocationWeather() :

    fetched_data = request.args
    print(fetched_data)

    location = None
    fetched_addr = None

    if(fetched_data["checked"] == "true"):
        print("Location not mentioned")
        # ipaddr = request.remote_addr
        ipaddr = "76.175.120.199"

        print(request.remote_addr)

        url = "https://ipinfo.io/"+ipaddr+"/?token=c3bc9b00e82ff9"
        response = requests.request("GET", url)
        print(json.dumps(response.json(), indent = 4))
        fetched_addr = response.json()["city"] + ", " + response.json()["region"] + " " + response.json()["postal"] + ", " + response.json()["country"]

        location = response.json()["loc"]
    
    else : 
        print("Location given")
        address = fetched_data["street"] + ", " + fetched_data["city"] + ", " + fetched_data["state"]
        fetched_addr = address

        url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDX0WTX5PLyLFkRtRP9wvmB5k-ICZyHiBc"
        response = requests.request("GET", url)

        fetched_addr = response.json()["results"][0]["formatted_address"]

        print(response.json())

        location = str(response.json()["results"][0]["geometry"]["location"]["lat"]) + ", " + str(response.json()["results"][0]["geometry"]["location"]["lng"])

    url = "https://api.tomorrow.io/v4/timelines"

    print(location)

    querystring = {
    "location":location,
    "fields":["temperature", "temperatureApparent",
                "temperatureMin", "temperatureMax", 
                "windSpeed", "windDirection", 
                "humidity", "pressureSeaLevel", 
                "uvIndex", "weatherCode", 
                "precipitationProbability", "precipitationType", 
                "sunriseTime", "sunsetTime", 
                "visibility", 
                "moonPhase", 
                "cloudCover"],
    "units":"imperial",
    "timesteps":"1d",
    "timezone" : "America/Los_Angeles",
    "apikey":"Hq3xyrVErOhFMH0wF6apxXgcWp5bDYlt"}

    response = requests.request("GET", url, params=querystring)
    print(response.text)

    # with open('data-1d.txt') as json_file:
    #     response = json.load(json_file)
    # results_1d = response['data']['timelines'][0]['intervals']

    print("Daily Forecast")
    print("================")

    results_1d = response.json()['data']['timelines'][0]['intervals']
    # results_1d = response['data']['timelines'][0]['intervals']
    for daily_result in results_1d:
        date = daily_result['startTime'][0:10]
        temp = round(daily_result['values']['temperature'])
        print("On",date,"it will be", temp, "F")

    querystring = {
    "location":location,
    "fields":["temperature", "temperatureApparent",
                "temperatureMin", "temperatureMax", 
                "windSpeed", "windDirection", 
                "humidity", "pressureSeaLevel", 
                "uvIndex", "weatherCode", 
                "precipitationProbability", "precipitationType", 
                "visibility", 
                "cloudCover"],
    "units":"imperial",
    "timesteps":"1h",
    "timezone" : "America/Los_Angeles",
    "apikey":"Hq3xyrVErOhFMH0wF6apxXgcWp5bDYlt"}

    response = requests.request("GET", url, params=querystring)
    print(response.text)

    # with open('data-1h.txt') as json_file:
    #     response = json.load(json_file)
    # results_1h = response['data']['timelines'][0]['intervals']

    print("Hourly Forecast")
    print("================")


    results_1h = response.json()['data']['timelines'][0]['intervals']
    # results_1h = response['data']['timelines'][0]['intervals']
    for daily_result in results_1h:
        date = daily_result['startTime'][0:10]
        temp = round(daily_result['values']['temperature'])
        print("On",date,"it will be", temp, "F")

    # with open('data-1d.txt', 'w') as outfile:
    #     json.dump(response.json(), outfile)

    # with open('data-1h.txt', 'w') as outfile:
    #     json.dump(response.json(), outfile)

    # t = response.json()['data']['timelines'][0]['intervals'][0]['values']['temperature']
    
    result_json = {"data_1h": results_1h, "data_1d" : results_1d, "address": fetched_addr}
    return jsonify(result_json)    

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug = True)