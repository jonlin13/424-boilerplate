$(document).ready(function(){
  //function calls for initialization:
  UI.myFunctionName();
});


//JS Modules with Revealing pattern

var UI = (function(){

  var myFunctionName = function(){
    console.log('App is running');
  };

  return{
    myFunctionName: myFunctionName
  };

})();
