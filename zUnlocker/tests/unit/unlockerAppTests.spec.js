/// <reference path="C:\MyProjects\zUnlocker\zUnlocker\vendor/angularjs/angular-1.3.13.js" />
/// <reference path="C:\MyProjects\zUnlocker\zUnlocker\vendor/angularjs/angular-mocks.js" />
/// <reference path="C:\MyProjects\zUnlocker\zUnlocker\vendor/jasmine/jasmine.js" />
/// <reference path="C:\MyProjects\zUnlocker\zUnlocker\src/app/unlockerApp.js" />
/// <reference path="C:\MyProjects\zUnlocker\zUnlocker\src/app/unlockService.js" />
/// <reference path="C:\MyProjects\zUnlocker\zUnlocker\src/app/zteConstant.js" />



describe('zUnlocker Service Tests',function() {

    var $controller, scope, $unlockService;

    beforeEach(module('unlockerApp'));

    beforeEach(inject(function(_$controller_, _$rootScope_,_unlockService_) {
        $controller = _$controller_;
        scope = _$rootScope_.$new();
        $unlockService = _unlockService_;
    }));

    //describe('A controller test',function() {
    //    it('random test', function () {
            
    //        $controller('mainController', { $scope: scope });
    //        expect(scope.test).toBe("hello");
    //    });
    //});

    describe('Given an IMEI number', function() {
     
        it('can sum IMEI digits 3 to 15 correctly', function () {

            var result = $unlockService.calculateIMEIPartialSum(359999999999999);
            expect(result).toBe(117);

            result = $unlockService.calculateIMEIPartialSum(355784987348394);
            expect(result).toBe(79);

            result = $unlockService.calculateIMEIPartialSum(358729875629873);
            expect(result).toBe(81);

            result = $unlockService.calculateIMEIPartialSum(351973891728498);
            expect(result).toBe(76);

        });


        it('can verify if IMEI is valid', function() {

            var result = $unlockService.validateIMEI(353456789012345);
            expect(result).toBe(true);

            result = $unlockService.validateIMEI(359847638479872);
            expect(result).toBe(true);

            result = $unlockService.validateIMEI(359817632849482);
            expect(result).toBe(true);

            result = $unlockService.validateIMEI(354439837890202);
            expect(result).toBe(true);

        });

        it('can detect if IMEI is invalid', function () {

            var result = $unlockService.validateIMEI(1);
            expect(result).toBe(false);

            result = $unlockService.validateIMEI(323432423423);
            expect(result).toBe(false);

            result = $unlockService.validateIMEI(623456789012345);
            expect(result).toBe(false);

            result = $unlockService.validateIMEI(349847638479872);
            expect(result).toBe(false);

            result = $unlockService.validateIMEI(349847638479872);
            expect(result).toBe(false);

            result = $unlockService.validateIMEI(35144398378902024);
            expect(result).toBe(false);

            result = $unlockService.validateIMEI(-3514439837890222);
            expect(result).toBe(false);

            result = $unlockService.validateIMEI(-35129027494);
            expect(result).toBe(false);

            result = $unlockService.validateIMEI(2.34534534);
            expect(result).toBe(false);

            result = $unlockService.validateIMEI(-533.34534534);
            expect(result).toBe(false);

        });

        it('can calculate first multiplier', function () {

            var result = $unlockService.calculateFirstMultiplier(353456789012345);
            expect(result).toEqual([1, 5, 1, 8, 5, 2, 9, 6, 3, 0, 7, 4, 1, 8, 5]);

            result = $unlockService.calculateFirstMultiplier(359847638479872);
            expect(result).toEqual([6, 0, 8, 6, 8, 4, 2, 6, 6, 8, 4, 8, 6, 4, 4]);

            result = $unlockService.calculateFirstMultiplier(359817632849482);
            expect(result).toEqual([3, 5, 9, 8, 1, 7, 6, 3, 2, 8, 4, 9, 4, 8, 2]);

            result = $unlockService.calculateFirstMultiplier(354439837890202);
            expect(result).toEqual([7, 5, 6, 6, 7, 1, 2, 7, 3, 2, 1, 0, 8, 0, 8]);

        });

        it('can calculate second multiplier', function () {

            var result = $unlockService.calculateSecondMultiplier(353456789012345);
            expect(result).toEqual([0, 2, 4, 6, 8, 0, 2, 4, 6, 8, 0, 2, 4, 0, 4]);

            result = $unlockService.calculateSecondMultiplier(359847638479872);
            expect(result).toEqual([6, 6, 4, 2, 6, 2, 4, 4, 8, 6, 2, 4, 2, 0, 4]);

            result = $unlockService.calculateSecondMultiplier(359817632849482);
            expect(result).toEqual([6, 4, 2, 2, 2, 4, 6, 4, 8, 6, 8, 4, 2, 0, 4]);

            result = $unlockService.calculateSecondMultiplier(354439837890202);
            expect(result).toEqual([6, 0, 6, 0, 2, 4, 6, 4, 4, 2, 4, 2, 2, 0, 4]);

        });
    });
})
