define( 'test',function () {
    
    function testComponent() {
        testController.$inject = ['dataService','qlikService'];
        function testController(dataService,qlikService) {
            var vm = this;
            vm.someMessage = "from controller"
            vm.buttonClicked = buttonClicked;

            
            init();

           function buttonClicked(){
               alert('you clikced')
           }
            function init() {
                alert('test loaded')
            }
        }
        return {
            bindings: {},
            controller: testController,
            controllerAs: 'ctrl',
            templateUrl: 'app/components/testcomponent/test.component.html'
        }
    }

    return testComponent();
});