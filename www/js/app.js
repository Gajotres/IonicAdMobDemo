// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('AdmobController', function($scope, $ionicPlatform, $cordovaAdMob, $window) {
  $ionicPlatform.ready(function() {

    // Configuration object holding kyes
	var adMobId = {
		admob_banner_key: '',
		admob_interstitial_key: ''
	};

    // Configuration object holding banner positions
	var adMobPosition = {
		BOTTOM_CENTER: 8
	};	
	
	$scope.showBannerAd = function() {
		
		try {
			
			console.log('Show Banner Ad');			
			
			$cordovaAdMob.createBannerView({
				adId: adMobId.admob_banner_key,
				position: adMobPosition.BOTTOM_CENTER,
				isTesting: true,
				autoShow: true
			});

		} catch (e) {
			alert(e);
		}		
	}
	
	$scope.showInterstitialAd = function() {
		
		try {
			
			console.log('Show Interstitial Ad');			

			$cordovaAdMob.createInterstitialView({
				adId: adMobId.admob_interstitial_key,
				isTesting: true,
				autoShow: true
			});
			
		} catch (e) {
			alert(e);
		}		
	}	
  });	
});
