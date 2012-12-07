'use strict';

/* Controllers */


function WelcomeCtrl($scope) {
}


function InputCtrl($scope, $rootScope) {

  
  $scope.input = function() {
    $scope.words[$scope.pos++] = $scope.txt;
    $scope.txt = '';
  }

  if (window.webkitSpeechRecognition === undefined) {
    document.body.innerHTML = 'Activate<br/>speech Javascript API first';
    return;
  }

  var sr = new webkitSpeechRecognition();
  sr.maxAlternatives = 1;
  sr.lang = navigator.language;
  sr.continuous = true;
  sr.interimResults = true;
  sr.start();
  sr.onresult = function(e) {
    var result = e.result[0].transcript;
    
    if (result.charAt(result.length-1) === '*') {
      //document.body.style.color = 'red';
    } else {
      //document.body.style.color = 'darkgrey';
      $scope.words[$scope.pos++] = result;
      $scope.apply();
    }
  }
  
  
  
}

function ReadCtrl($scope, $rootScope) {
  console.log($scope);
  console.log($rootScope);
  console.log('ReadCtrl');
}