/// <reference path="C:\MyProjects\zUnlocker\zUnlocker\vendor/angularjs/angular-1.3.13.js" />
/// <reference path="C:\MyProjects\zUnlocker\zUnlocker\vendor/angularjs/angular-mocks.js" />
/// <reference path="C:\MyProjects\zUnlocker\zUnlocker\vendor/jasmine/jasmine.js" />
/// <reference path="C:\MyProjects\zUnlocker\zUnlocker\src/app/unlockerApp.js" />
/// <reference path="C:\MyProjects\zUnlocker\zUnlocker\src/app/unlockService.js" />
/// <reference path="C:\MyProjects\zUnlocker\zUnlocker\src/app/zteConstant.js" />


describe('zUnlocker Service Tests', function() {

    var $controller, scope, $unlockService;

    beforeEach(module('unlockerApp'));

    beforeEach(inject(function(_$controller_, _$rootScope_, _unlockService_) {
        $controller = _$controller_;
        scope = _$rootScope_.$new();
        $unlockService = _unlockService_;
    }));

    describe('Given an IMEI number it', function() {
        it('can calculate unlock code', function() {
            var result = $unlockService.calculateUnlockCode(355784987348394);
            expect(result).toBe('1515171691076591087110');

            result = $unlockService.calculateUnlockCode(358729875629873);
            expect(result).toBe('131920181317813988151277');

            result = $unlockService.calculateUnlockCode(351973891728498);
            expect(result).toBe('18101617131416610681012412');

            result = $unlockService.calculateUnlockCode(359999999999999);
            expect(result).toBe('9151314105555555537');

        });

        it('returns a null code when given an invalid imei', function() {
            result = $unlockService.calculateUnlockCode(23);
            expect(result).toBeNull();

            result = $unlockService.calculateUnlockCode(35234234234);
            expect(result).toBeNull();

            result = $unlockService.calculateUnlockCode(35939384738393847);
            expect(result).toBeNull();
        });
       
    });
});

