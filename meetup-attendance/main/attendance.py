from flask import Flask
from flask.ext.classy import FlaskView, route
import json
import requests
from ConfigParser import SafeConfigParser

parser = SafeConfigParser()
parser.read('config.ini')

api_key = parser.get("settings", "api_key")
group_name = parser.get("settings", "group_name")

app = Flask(__name__)

class ApiView(FlaskView):

    def index(self):
        return "Hello World"


    @route('/roster/<event_id>/complete/')
    def get_roster(self, event_id):
        """
        Description: Get list of all the people who RSVP'd `yes`
        Params:
            - event_id: unique number repersenting a single event (found in the URL)

        URL: <Host-IP>/api/roster/<event_id>/complete/ 
        Sample Request: <Host-IP>/api/roster/224668752/complete/ 
        """
        event_id = int(event_id)
        url = "https://api.meetup.com/{}/events/{}/attendance?key={}".format(group_name,event_id,api_key)
        req = requests.get(url)
        response = req.json()
        # List of all the attendees
        all_attendees = []
        for attendee in response:
            temp = {}
            temp[attendee['member']['id']] = str(attendee['member']['name']).lower()
            all_attendees.append(temp)
        return json.dumps(all_attendees), 200


    @route('/<event_id>/mark/<member_id>/<member_status>/', endpoint='mark_attendance')
    def mark_attendance(self, event_id, member_id, member_status):
        """
        Description: Marks the attendance of an individual.
        Params:
            - event_id: unique number repersenting a single event (found in the URL)
            - member_id: ID of each member of the group, can be fetched by /complete/ API
            - member_status: can be `absent` or `attended` or `noshow`

        URL: <Host-IP>/api/<event_id>/mark/<member_id>/<member_status>/ 
        Sample Request: <Host-IP>/api/224668752/mark/58178002/absent/ 
        """
        event_id = int(event_id)
        payload = {'member':member_id, 'status':member_status}
        url = "https://api.meetup.com/{}/events/{}/attendance?key={}".format(group_name,event_id,api_key)
        req = requests.post(url, params=payload)
        response = req.json()
        return json.dumps(response), 200


ApiView.register(app)

# if __name__ == '__main__':
#     app.run()
