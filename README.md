# A very simple app

Simple app made using angular,phonegap, [onsenUI](http://onsenui.io/).


## Running the app

Install [node.js](http://nodejs.org/)
Install [PhoneGap](http://phonegap.com/install/)

	npm install -g phonegap

Check if phonegap's installed

	phonegap -v

Create your app using the phonegap's command line :

	cordova create hello com.example.hello "HelloWorld"
	cd hello

Add your platforms :

	cordova platform add android
	cordova platform add ios
	
Delete all file in your www folder.

Clone this repo, then copy all files in your wwww folder.

Make sure you have included the splashcreen plugin in your project.

	cordova plugin add org.apache.cordova.splashscreen
	cordova build

Then run it : 

	cordova run android

## License
MIT
