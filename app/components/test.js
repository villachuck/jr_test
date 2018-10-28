(function(){
    'use strict';

    var kuboTest = {
        templateUrl: '/app/components/test.html',
        controller: kuboTestCtrl
    }

    angular
        .module('examApp')
        .component('kuboTest', kuboTest);
        kuboTestCtrl.$inject = ["$scope"];
        function kuboTestCtrl($scope){


        $scope.rotate = function(){
            var firstBox = document.getElementById('number').value;
            var secondBox = document.getElementById('numberPerComa').value;

            if(firstBox < 0){
                $('#lessThan').modal({
                    show: true
                });
            }
            else{
                var xTimes = parseFloat(firstBox);
                $scope.result = JSON.parse('[' + secondBox + ']');

                Array(xTimes).fill().map(()=>{
                    var testA = $scope.result.pop();
                    var testB = $scope.result.splice(-1, 0);
                    $scope.result = [testA, ...$scope.result];
                });
            }
        }


        $scope.validate = function(){
            var word = document.getElementById('firstWord').value;
            var sndWord = document.getElementById('secondWord').value;

            var totalCharOne = word.length;
            var totalCharTwo = sndWord.length;

            var testC = [...word];
            var testD = [...sndWord];


            $scope.algo = testC.filter(function(t){
                return testD.indexOf(t) != -1;
            });
            //console.log($scope.algo);

            $scope.algo2 = testD.filter(function(t){
                return testC.indexOf(t) != -1;
            });
            //console.log($scope.algo2);

            for(var j = 0; j< testD.length; j++){
                for(var k = 0; k< $scope.algo.length; k++){
                    if(testD[j] === $scope.algo[k]){
                        var testF = testD.splice($scope.algo[k], j);
                        console.log(testF);
                    }
                }
            }


            for(var i = 0; i< testC.length; i++){
                for(var j = 0; j< testD.length; j++){
                    if(testC[i] === testD[j]){
                        var testE = testC.splice(testD[j], i);
                        console.log(testE);
                    }
                }
            }

            var testG = testE.concat(testF);
            $scope.characterNumber = testG.length;

            $scope.um = $scope.algo.toString().split(',').reverse().join('');
            $scope.dois = $scope.algo2.toString().split(',').reverse().join('');

            if($scope.um.length < 2){
                $('#noAnagram').modal({
                    show: true
                });
            }
            else if($scope.dois.length < 2){
                $('#noAnagram').modal({
                    show: true
                });
            }
            else if(totalCharOne === totalCharTwo){
                $('#isAnagram').modal({
                    show: true
                });
            }
            else{
                $('#toBeAnagram').modal({
                    show: true
                });
            }

        }



    }

})();