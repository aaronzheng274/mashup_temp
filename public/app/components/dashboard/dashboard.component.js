define( 'dashboard',function () {
    
    function dashboard() {
        dashboardController.$inject = [];
        function dashboardController() {
            var vm = this;
            // vm.message = message;
            init();
            // vm.text = "binding"
            // vm.show = false 
            
            // function message(){
            //     console.log('hello')
            // }
            
            function init() {
            //    let app = qlikService.getApp();

            //    app.visualization.get('XTrp').then(function(vis){
            //         vis.show("obj1");
            qlikApp.getObject('CurrentSelections', 'CurrentSelections');
            qlikApp.getObject('icuPivot', 'fPVPPa');
            qlikApp2.getObject('resPivot', 'zFyzLx');
            };
                // app.visualization.get('xePs').then(function(vis){
                //     vis.show("obj2");
                // });
            

        }
        return {
            bindings: {},
            controller: dashboardController,
            controllerAs: 'cf',
            templateUrl: 'app/components/dashboard/dashboard.component.html'
        }
    }

    return dashboard();
});