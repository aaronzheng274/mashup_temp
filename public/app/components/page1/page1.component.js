define( 'pageOne',function () {
    
        function pageOne() {
            pageOneController.$inject = ['dataService','qlikService'];
            function pageOneController(dataService,qlikService) {
                var vm = this;
                vm.message = message;
                init();
                vm.text = "binding"
                vm.show = false 
                
                function message(){
                    console.log('hello')
                }
                
                function init() {
                    let app = qlikService.getApp();

                   app.visualization.get('XTrp').then(function(vis){
                        vis.show("obj1");
                    });
                    // app.visualization.get('xePs').then(function(vis){
                    //     vis.show("obj2");
                    // });
                }

            }
            return {
                bindings: {},
                controller: pageOneController,
                controllerAs: 'cf',
                templateUrl: 'app/components/page1/page1.component.html'
            }
        }
    
        return pageOne();
    });