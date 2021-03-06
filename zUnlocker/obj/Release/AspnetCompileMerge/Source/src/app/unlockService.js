/// <reference path="angular-1.3.13.js" />
/// <reference path="unlockerApp.js" />

unlockerApp.factory('unlockService', function() {

    var zteUnlockKey = "688950000000000";

    return {
        calculateUnlockCode: function(imei) {
           var self = this;
           if (!this.validateIMEI(imei)) {
               return null;
           };

            var imeiAsString = imei.toString();
            var firstMultiplier = self.calculateFirstMultiplier(imei);
            var secondMultiplier = self.calculateSecondMultiplier(imei);
            var unlockCode = [];
            for (var i = 0; i < imeiAsString.length; i++) {
                var currentDigit = parseInt(zteUnlockKey.charAt(i));
                unlockCode.push(parseInt(firstMultiplier[i]) +
                    parseInt(secondMultiplier[i]) +
                    parseInt(currentDigit));
            }
            return unlockCode.join("");
        },
        calculateIMEIPartialSum:function(imei) {
            var sum = 0;
            var imeiAsString = imei.toString();
            for (var i = 2; i < imeiAsString.length; i++) {
                sum += parseInt(imei.toString().charAt(i));
            }
            return sum;
        },
        validateIMEI: function (imei) {
            var imeiAsString = imei.toString();
            var imeiIsValid = imeiAsString.slice(0, 2) === '35' && imeiAsString.length===15;
            return imeiIsValid;
        },
        calculateFirstMultiplier:function(imei) {
            var partialSumOfDigits = this.calculateIMEIPartialSum(imei);
            var imeiAsString = imei.toString();
            var firstMuliplier = [];
            
            for (var i = 0; i < imeiAsString.length; i++) {
                var currentDigit = parseInt(imeiAsString.charAt(i));
                firstMuliplier.push((currentDigit * partialSumOfDigits) % 10);
            }
            return firstMuliplier;
        },
        calculateSecondMultiplier: function (imei) {
            
            var imeiAsString = imei.toString();
            var secondMuliplier = [];

            for (var i = 0; i < imeiAsString.length; i++) {
                var currentDigit = parseInt(imeiAsString.charAt(i));
                secondMuliplier.push((currentDigit * 8) % 10);
            }

            return secondMuliplier.reverse();
        }
    }
});
