# Eventflow App

This is an event management app that allows the creation of events that the user will then be able to promote.
The app can be found at https://react-project-eventflow.vercel.app/

## Getting Started

To view the project please visit https://react-project-eventflow.vercel.app/

If you want to run the project locally you will need a copy of the proper API keys.

Clone down the repo and run `npm i`

After, run `npm start` to startup a local server. The port number does not matter.

The app will give you this error `Firebase: Error (auth/invalid-api-key)` and that is because it needs the proper environment variables to access the database. Please reach out to the project owner for a copy of the API keys.

## Main features

Users are able to create a new event, specifying the location, description and time of event.
After creating an event a pdf flyer is able to be generated and printed for promotion. The flyer will have a QR
code on it that attendees are able to scan and sign up for the event.

After people sign up to an event, the user will be able to view all the people that have signed up to the event.

## Backend

The database for this app is using Google's Firebase for all GET, POST, and PATCH functionality.
