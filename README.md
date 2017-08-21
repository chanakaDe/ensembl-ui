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
https://github.com/chanakaDe/ensembl-ui.git

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
