# Doctor Whom

#### Created _04.21-23.2017_

#### By Mark Fisher


## Description
A webapp that enables the user to search for medical professionals near their location.


## User story

As a user, I should be able to search for medical professionals in my area by either symptom or by the professional's name (first or last).


## Setup/Installation Requirements

* _Clone the repository_
* Head to [the better doctor API](https://developer.betterdoctor.com/) to sign up for an API key
* Once you have a key, create a file in the parent directory called, ".env"
  * Within it, add the line, `exports.apiKey = "YOUR_KEY_ID_HERE";`
  * Save the file
* Repeat the above steps with the google geocode API , adding an `exports.mapKey = "YOUR_GOOGLE_GEOCODE_API_KEY_HERE"` line below it.
* Alternatively, email mark.aaron.fisher@gmail.com for a copy of his .env file
* Open the terminal, and run the following commands
```
npm install
bower install
gulp build
gulp serve
```

### License

Copyright (c) 2017 Mark Fisher

This software is licensed under the MIT license.
