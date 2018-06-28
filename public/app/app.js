require.config({
    baseUrl: "https://qlikstage.jefferson.edu/adfss/resources",
    paths: {
        "angularRoute": "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.18/angular-ui-router.min"
    }
});

// loading qlikJS
require(["js/qlik"], function (qlik) {
    // creating the angular app and bootstrapping
    require(["angular", 'angularRoute', "routes", "pageOne", 'pageTwo', 'dataService', 'qlikService','navBar','footer','test'],
        function (angular, uiRoute, routes, pageOne, pageTwo, dataService, qlikService,navBar,footer,test) {
            let config = {
                host: 'qlikstage.jefferson.edu',
                prefix: '/adfss/',
                port: '443',
                isSecure: true
            };
            let app = angular.module('mashup-app', ['ui.router']);
            app.config(routes);
            app.component('pageOne', pageOne);
            app.component('pageTwo', pageTwo);
            app.component('navBar', navBar);
            app.component('testComp', test);
            app.component('footerComponent', footer);
            app.service('dataService', dataService);
            app.service('qlikService', qlikService);
            app.run(['qlikService', function (qlikService) {
                qlikService.openApp(qlik, 'b7fbad3d-b38d-4deb-8cb0-18c844930f45', config)
            }])
            angular.bootstrap(document, ["qlik-angular", "mashup-app"]);
        }
    )
});