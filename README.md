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
`git clone https://github.com/chanakaDe/ensembl-ui.git`

After repository is cloned, go inside of repository directory and install dependencies there:

`cd ensembl-ui`

`npm install`

This will setup a working copy of ensembl-ui on your local machine

### Running local copy

To run local copy in development mode, execute:

`gulp serve`

This script should automatically open template in your default browser.

To run local copy in production mode, execute:

`gulp serve:dist`

This command will create a folder named 'release' in root folder of the project. It is a basic HTML application.

### How to deploy built HTML application using Heroku

Heroku doesn't support static web site deployment. So we have to deploy our HTML application as a PHP application. We can do that using only 1 PHP file. To deploy our application using Heroku, we need Github also.

Copy built version(release folder) and make a new HTML project out of it. Now you have a pire HTML application. Now we need to instergrate Git into it.

Go to root directory and use `git init.`
Here your initial repository is created.
Then you will give following commands:

`git add .`

`git commit –m “Your Message”`

Now you need to push your project to github repository. In order to do so, you need to create a new Github project for your new HTML application.

After creating the new repository for the application, use following commands:

`git remote add origin “add github repository url without quotes”`

`git push -u origin master`

Now you need to use Heroku functions to add this application to Heroku. In order to do so, you need to execute following commands:

`heroku login`

You need to enter your Heroku username and password.

Now go to your root directory of your working repository in command prompt and write:

`touch composer.json`

composer.json basically helps heroku to understand that the project or any website you are deploying is a php project. So in short the composer.json is just the indicator. After making composer.json file you will open that json file on notepad and just type:

`{}`

After this Now type:

`touch index.php`

#### Now you need to rename your index.html file to home.html in order to use as a PHP application.

Now opne index.php file and add following code there.

`<?php include_once("home.html"); ?>`

#### Make sure to commit and push each and every change you make according to normal git procedure.

Now use the following commad to create a new application in Heroku:

`heroku create “your app name without quotes”`

So we have just deployed a dummy web app on Heroku and git remote called heroku is also created in the repository.
But wait not so fast we haven’t pushed the files on the remote Heroku. So now we must write the following command to push the git repository on Heroku.

`git push heroku master`

#### Application is deployed now. Use following command to opne the application on your default browser.

`heroku open`

Feel free to report any kind of issues via official issues here.
