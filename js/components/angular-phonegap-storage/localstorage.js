'use strict';
/*
  angular component for using PhoneGap's localstorage

  Dependencies : 
    angular-phonegap-ready by Brian Ford
*/
angular.module('malikov.phonegap.storage',
  ['btford.phonegap.ready']).
  factory('localstorage', function (phonegapReady) {
    
    var localstorage = {
      getKey : phonegapReady(function (index) {

        index = typeof index !== 'undefined'? index : 0;
        return window.localStorage.key(index);      
      }),
      setItem : phonegapReady(function (key,value) {
        key = typeof key !== 'undefined'? key : false;
        value = typeof value !== 'undefined'? value : false;
        
        if(!key || !value)
          return false;

          window.localStorage.setItem(key,value);
          
        return true;
      }),
      getItem : phonegapReady(function(key){
        key = typeof key !== 'undefined'? key : false;

        if(!key)
          return 'undefined';

        return window.localStorage.getItem(key);
      }),
      removeItem : phonegapReady(function(key){
        key = typeof key !== 'undefined'? key : false;

        if(!key)
          return false;
        
        window.localStorage.removeItem(key);

        return true;
      }),
      clear : phonegapReady(function(){
        window.localStorage.clear();
      })

    };

    return localstorage; 

  });