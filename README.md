# ensembl-ui
This application is created to query track infomation using provided data sources. (Ensembl Elastic-Search data source).
Users can query throgh this application using provided parameters.

1.  Unique keyword
2.  Species
3.  Type
4.  Release
5.  Division

Then user can get a full list of results according to the parameters they requested.

### Main technologies used in the project.

1. Node.JS
2. AngularJS
3. Gulp
4. Bower
5. JQuery
6. Bootstrap CSS Framework

### How to clone repository and install dependencies

You will need to clone source code of ensembl-ui repository. To do this open console and execute following lines:
```
git clone https://github.com/chanakaDe/ensembl-ui.git
```

#### To install bower dependencies and also gulp , first you need to install these 2 packages first.

```
npm install -g bower
npm install -g gulp
```

After repository is cloned, go inside of repository directory and install dependencies there:
```
cd ensembl-ui
npm install
```

This will setup a working copy of ensembl-ui on your local machine

### How to change the data source URL via the application ?

This is the front end of the main application part. This application can be configure with other REST APIs to get data.
To change the application main data source url, go to the following link:

https://github.com/chanakaDe/ensembl-ui/blob/master/src/app/url.js

You can see `url.js` file is there.

Change the `var mainHost = "https://ensembl-elastic-rest.herokuapp.com/api/elastic-test/master/";` location according to the new data source need to be intergrated.

### Running local copy

To run local copy in development mode, execute:
```
gulp serve
```

This script should automatically open template in your default browser.

To run local copy in production mode, execute:
```
gulp serve:dist
```

This command will create a folder named 'release' in root folder of the project. It is a basic HTML application.

### How to deploy built HTML application using Heroku

Heroku doesn't support static web site deployment. So we have to deploy our HTML application as a PHP application. We can do that using only 1 PHP file. To deploy our application using Heroku, we need Github also.

Copy built version(release folder) and make a new HTML project out of it. Now you have a pire HTML application. Now we need to instergrate Git into it and deply into Heroku.

```
cd release
echo '{}' > composer.json
echo '<?php include_once("home.html"); ?>' > index.php
mv index.html home.html
git init
git add .
git commit -m 'Your message'
git remote add origin “add github repository url without quotes”
git push -u origin master
```

Now use the following commad to create a new application in Heroku:

```
heroku create “your app name without quotes”
git push heroku master
heroku open
```
#### Now the application will opne in your default web brower. Enjoy !!!!

Feel free to report any kind of issues via official issues here.
