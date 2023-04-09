# Text-Editor
Progressive Web Applications (PWA) Challenge: Text Editor

## Description

This app is a single-page application that runs in the browser. It features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

This application utilizes methods for getting and storing data to an IndexedDB database. It uses a package called idb, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

You can access the Heroku deployed application using the following link:

https://text-editor586.herokuapp.com/

## User Story

```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Table of Contents

- [Installation](#installation)
- [Technologies](#Technologies)
- [Usage](#usage)
- [License](#license)

## Installation

The application can be invoked through the command line using the following command:

```
npm start
```

## Technologies

* Uses the [express package](https://www.npmjs.com/package/express).
* Uses the [if-env package](https://www.npmjs.com/package/if-env) 
* Uses the [concurrently package](https://www.npmjs.com/package/concurrently) 
* Uses the [nodemon package](https://www.npmjs.com/package/nodemon) 
* Uses the [babel compiler](https://www.npmjs.com/package/@babel/core) 
* Uses the [webpack module bundler](https://www.npmjs.com/package/webpack) 

## Usage

* You can access the file in the GitHub repository: https://github.com/karinnesagir/Text-Editor

* Access the website using the following link:

[Live website](https://text-editor586.herokuapp.com/)

* Example of the application's appearance and functionality:

![homepage](./assets/images/homepage.jpg)
![storage](./assets/images/storage.jpg)
![manifest](./assets/images/manifest.jpg)
![service worker](./assets/images/service-worker.jpg)
![jate](./assets/images/jate.jpg)
![install](./assets/images/install.jpg)

## License

MIT License

Copyright (c) [2022]

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
