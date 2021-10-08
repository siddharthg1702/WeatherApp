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
    # title = "Create the input image"
    return render_template("layouts/index.html")
    # return send_static_file("layouts/index.html")
    # return send_from_directory("templates/layouts/index.html")

@app.route("/locationWeather/")
def getLocationWeather() :
    # ipaddr = request.remote_addr
    # ipaddr = "104.32.174.164"
    ipaddr = "76.175.120.199"

    print(request.remote_addr)

    url = "https://ipinfo.io/"+ipaddr+"/?token=c3bc9b00e82ff9"
    response = requests.request("GET", url)
    print(json.dumps(response.json(), indent = 4))
    fetched_addr = response.json()["city"] + ", " + response.json()["region"] + ", " + response.json()["country"]

    location = response.json()["loc"]

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
    "apikey":"Hq3xyrVErOhFMH0wF6apxXgcWp5bDYlt"}

    # response = requests.request("GET", url, params=querystring)
    # print(response.text)

    # with open('data-1d.txt', 'w') as outfile:
    #     json.dump(response.json(), outfile)

    # with open('data-1h.txt', 'w') as outfile:
    #     json.dump(response.json(), outfile)


    with open('data-1h.txt') as json_file:
        response = json.load(json_file)
    results_1h = response['data']['timelines'][0]['intervals']

    with open('data-1d.txt') as json_file:
        response = json.load(json_file)
    results_1d = response['data']['timelines'][0]['intervals']


    # t = response.json()['data']['timelines'][0]['intervals'][0]['values']['temperature']

    print("Weather Forecast")
    print("================")

    # results = response.json()['data']['timelines'][0]['intervals']
    results = response['data']['timelines'][0]['intervals']
    for daily_result in results:
        date = daily_result['startTime'][0:10]
        temp = round(daily_result['values']['temperature'])
        print("On",date,"it will be", temp, "F")
    
    result_json = {"data_1h": results_1h, "data_1d" : results_1d, "address": fetched_addr}
    return jsonify(result_json)
    # result_json["address"] = fetched_addr
    
    # return jsonify(results)

@app.route("/getmethod/")
def getWeather() :
    address_data = request.args
    address = address_data["street"] + ", " + address_data["city"] + ", " + address_data["state"]

    url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDX0WTX5PLyLFkRtRP9wvmB5k-ICZyHiBc"
    response = requests.request("GET", url)

    url = "https://api.tomorrow.io/v4/timelines"

    location = str(response.json()["results"][0]["geometry"]["location"]["lat"]) + ", " + str(response.json()["results"][0]["geometry"]["location"]["lng"])
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
                "visibility", "moonPhase", 
                "cloudCover"],
    "units":"imperial",
    "timesteps":"1d",
    "apikey":"Hq3xyrVErOhFMH0wF6apxXgcWp5bDYlt"}

    # response = requests.request("GET", url, params=querystring)
    # print(response.text)

    # with open('data.txt', 'w') as outfile:
    #     json.dump(response.json(), outfile)

    with open('data.txt') as json_file:
        response = json.load(json_file)

    t = response['data']['timelines'][0]['intervals'][0]['values']['temperature']

    print("Weather Forecast")
    print("================")

    results = response['data']['timelines'][0]['intervals']
    for daily_result in results:
        date = daily_result['startTime'][0:10]
        temp = round(daily_result['values']['temperature'])
        print("On",date,"it will be", temp, "F")
    
    ip = request.remote_addr

    result_json = jsonify(results)
    # result_json["address"] = 

    return jsonify(results)



@app.route("/postmethod", methods=["GET"])
def post_javascript_data():
    jsdata = request.form["form_data"]
    print(jsdata)

    

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug = True)