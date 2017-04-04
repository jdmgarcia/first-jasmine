describe("Testing controller", function () {
    beforeEach(module("app"));
 
    describe("helloCtrl", function() {
        let scope, ctrl;
 
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller("helloCtrl", { $scope: scope });
        }));
 
        it("Undefined variable hello", function () {
            expect(scope.hello).toBeDefined();
        });

        it("Value of variable hello must be hello world", function () {
            expect(scope.hello).toEqual("hello world");
        });
    });
});