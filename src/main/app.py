from flask import Flask
from flask.ext.classy import FlaskView, route
import json
import requests
from ConfigParser import SafeConfigParser

parser = SafeConfigParser()
parser.read('config.ini')

api_key = parser.get("settings", "api_key")
group_name = parser.get("settings", "group_name")
event_id = parser.get("settings", "event_id")

url = "https://api.meetup.com/{}/events/{}/attendance?key={}".format(group_name,event_id,api_key)

app = Flask(__name__)

class AttendanceView(FlaskView):
    def index(self):
        return "Hello World"


    @route('/complete/')
    def get_roster(self):
        req = requests.get(url)
        response = req.json()
        # List of all the attendees
        all_attendees = []
        for attendee in response:
            temp = {}
            temp[attendee['member']['id']] = str(attendee['member']['name']).lower()
            all_attendees.append(temp)
        return json.dumps(all_attendees), 200


AttendanceView.register(app)

if __name__ == '__main__':
    app.run()
