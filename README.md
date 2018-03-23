# Doctor Doctor, give me the news...

#### _By David Lewis_

## Description
_This is the Epicodus weekly project for week 2 of the JavaScript course. This application takes in either a name or a symptom and returns a list of all the doctors in Portland, OR that meet that criteria using the BetterDoctor API._

### Specifications
* Spec 1: Enter a medical issue to receive a list of doctors in the Portland area that fit the search query.

* Spec 2: Enter a name to receive a list of doctors in the Portland area that fit the search query.

* Spec 3: If the response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients

* Spec 4: If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.

* Spec 5: f the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)


## Setup/Installation Requirements

* _Clone this GitHub repository_
Clone to your Desktop.

```
git clone https://github.com/dlewiski/doctor-doctor
```
In terminal, navigate to the root directory of the project

* _Setup application_

```
npm install
```
```
npm run build
```

* _Get your API key_

  * Visit the BetterDoctor API site and click “Get a free API key”
  * Fill out the form
  * Your API key should be listed on the front page (ex: “a2c356ibgh44…..”) or under My Account > Applications.

* _Add your API key_

* Create a file called .env in the root directory
* In the .env file add your like this exports.apiKey=[YOUR API KEY GOES HERE]

* _Run application_

In terminal, make sure to navigate to the root directory of the project

```
npm start
```

## Support and Contact Details

_To suggest changes, submit a pull request in the GitHub repository._

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* Karma
* Jasmine
* Node JS
* ES Lint
* Webpack
* Babel
* BetterDoctor API

### License

*MIT License*

Copyright (c) 2018 **_David Lewis_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
