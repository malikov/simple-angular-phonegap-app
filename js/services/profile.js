'use.strict'

var app = angular.module('MobileDev');

app.factory('Profile',['localstorage', function(localstorage){
  	
  	var profile = {
  		storageName : 'profileInfo',
  		name : '',
  		email : '',
  		saveInfo : function(){
  			/*
				info should be an object of the following form 
				{
					name : name_content,
					email : email_content
				}
        we stringify info
  			*/

        var input = JSON.stringify({name : this.name, email : this.email});

        return localstorage.setItem(this.storageName,input);
  		},
  		loadInfo : function(){
  			// loading info from the localstorage
  			var info =  localstorage.getItem(this.storageName);

  			if(info === null)
  				return false;

        /*
          parse the data that I've retrieved I know it's
        */
        var parsedInfo = JSON.parse(info);

  			this.name = parsedInfo.name;
  			this.email = parsedInfo.email;

  			return true;
  		}
  	};

  	return profile;
  }])