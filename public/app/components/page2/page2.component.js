define( 'pageTwo',function () {

    function pageTwo() {
        pageTwoController.$inject = ['dataService', 'qlikService'];
        function pageTwoController(dataService,qlikService) {
            var vm = this;
            init();
            
            function init() {
                qlikService.getApp()
                .visualization.get(vm.qlikId).then(function(vis){
                    vis.show("obj1");
                });
                console.log('ok')
            }
        }
        return {
            bindings: {
                qlikId: '@',
            },
            controller: pageTwoController,
            controllerAs: 'cf',
            templateUrl: 'app/components/page2/page2.component.html'
        }
    }

    return pageTwo();
});