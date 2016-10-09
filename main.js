angular.module('mlbApp', []);
// controller
angular.module('mlbApp').controller('MainController', function($scope){
    $scope.montlyPayment = "";
    $scope.montlyIntrestRate = "";
    $scope.months ="";
    
    $scope.total = 0;
    $scope.intrestsTotal = 0;
    
    
    $scope.calculateSavings = function(amount, intrestRate, months){
        if(isNaN(amount) || isNaN(intrestRate) || isNaN(months)){
            alert('Obvezno vpiši število!  Obvezno izpolni vsa polja');
        }else{
            amount = parseFloat(amount);
        intrestRate = parseFloat(intrestRate);
        months = parseInt(months);
        var total = 0;
        var intrests = 0;
        for(var i = 1; i <= months; i++){
            total = total + amount;
            
        }
        intrests = (amount * intrestRate * months)/100;
        $scope.total = total + intrests;
        $scope.intrestsTotal = intrests;
        }
        
    }
});