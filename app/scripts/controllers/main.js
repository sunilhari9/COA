'use strict';

/**
 * @ngdoc function
 * @name coaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coaApp
 */
app.controller('MainCtrl', function ($scope,$rootScope,$http) {
    $scope.checkBoxOptions = 
     {
         "Item":"Item / Type",
         "UnitPricing":"Unit Pricing",
         "MFRName":"MFR NAME",
         "MFRPart":"MFR PART #",
         "ShippingPoint":"Shipping Point",
         "CustomerItem":"Customer Item Sort",
         "Tax":"Tax or no TAX",
        "ThumbnailImages":"Thumbnail images",
        "link":"Spec Sheet URL link",
        "Country":"Country of Origin",
        "LeadTime":"Lead Time",
        "LongDescription":"Long Description",
        "UNSPCS":"UNSPCS"
     };
    $rootScope.documentNumber="88882322";
    $rootScope.customername="Suneel Manyam";
    $rootScope.shipTo="234815";
  });














 
