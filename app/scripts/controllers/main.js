/**
 * @ngdoc function
 * @name coaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coaApp
 */

app.controller('MainCtrl', function ($scope, $rootScope, $http, $document, $q, $location) {
        $scope.checkBoxOptions = {
            "Item": "Item / Type",
            "UnitPricing": "Unit Pricing",
            "MFRName": "MFR NAME",
            "MFRPart": "MFR PART #",
            "ShippingPoint": "Shipping Point",
            "CustomerItem": "Customer Item Sort",
            "Tax": "Tax or no TAX",
            "ThumbnailImages": "Thumbnail images",
            "link": "Spec Sheet URL link",
            "Country": "Country of Origin",
            "LeadTime": "Lead Time",
            "LongDescription": "Long Description",
            "UNSPCS": "UNSPCS"
        };
        $rootScope.documentNumber = "88882322";
        $rootScope.customername = "Suneel Manyam";
        $rootScope.shipTo = "234815";
        $rootScope.userdetail = {
            'soldto': "Ken's Mutts and Cuts",
            'shipto': "Ken's Mutts and Cuts 2978 Shag ST LACKAWANNA NY 14218",
            'attn': "RWB",
            'phone': "716-446-2248",
            'email': "richard.trimmer@kmc.COM",
            'fax': "716-837-0413",
            'date': "05/31/2018"
        };
        $scope.save = function () {
            $scope.albumNameArray = $scope.albums.filter(function (album) {
                return album.selected;
            });
        };

        $scope.export = function () {
            $scope.data = "";
            html2canvas(document.getElementById('emailPDF'), {

                onrendered: function (canvas) {
                    $scope.data = canvas.toDataURL();
                    var docDefinition = {
                        
                        content: [{
                            image: $scope.data,
                            width: 500,
                            pageBreak: 'after'
                    }]

                    };
                    var pdfDocGenerator = pdfMake.createPdf(docDefinition);

                    pdfDocGenerator.getBase64(function (res) {
                        var url = "http://localhost:8080/sendmail";
                        var defer = $q.defer();
                       // alert("srated");
                        $http({
                            url: url,
                            method: 'POST',
                            data: res,
                            headers: {
                                'Content-Type': 'application/base64'
                            }
                        }).then(function (response) {
                            $scope.persons = response; // assign  $scope.persons here as promise is resolved here 
                            defer.resolve(response);

                            return defer.promise;
                        });

                    });


                }
            });
        };

        $scope.preview = function () {

            /*html2canvas(document.getElementById('exportthis'), {
                onrendered: function (canvas) {
                    $rootScopem.data = canvas.toDataURL();
                    var docDefinition = {
                        content: [{
                            image: $scope.data,
                            width: 500,
                        }]

                    };
                    //alert(docDefinition);
                    var pdfDocGenerator = pdfMake.createPdf(docDefinition);
                    //alert(pdfDocGenerator);
                    pdfDocGenerator.getBase64(function (res) {
                        alert(res);
                        console.log("v::::::::::::::::" + res);
                        fetch('data:application/pdf;base64,'+res)
                            .then(response => response.blob())
                            .then(blob => {
                                document.querySelector("iframe").src = URL.createObjectURL(blob)
                            });
                    });
                }
            });*/

            $location.path('/previewpdf');
        }


    }

);
