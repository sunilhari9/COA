app.controller('Preview', function ($scope, $rootScope, $http, $document, $q) {
    $scope.preview = function () {
        $scope.data = "";
        html2canvas(document.getElementById('exportthis'), {
            onrendered: function (canvas) {
                $scope.data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: $scope.data,
                        width: 500,
                    }]

                };
                var pdfDocGenerator = pdfMake.createPdf(docDefinition);
                pdfDocGenerator.getBase64(function (res) {
                    console.log("v::::::::::::::::" + res);
                    fetch(`data:application/pdf;base64,${res}`)
                        .then(response => response.blob())
                        .then(blob => {
                            document.querySelector("iframe").src = URL.createObjectURL(blob)
                        });

                });


            }
        });
    }

});
