var qlikApp;
var qlikApp2;
var gQlik;

require.config({
    baseUrl: "https://qlikdev.jefferson.edu/adfsd/resources",
    paths: {
        "angularRoute": "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.18/angular-ui-router.min"
    }
});

// loading qlikJS
require(["js/qlik"], function (qlik) {
    // creating the angular app and bootstrapping
    require(["angular", 'angularRoute', "routes", 'navBar','footer','dashboard'],
        function (angular, uiRoute, routes, navBar, footer, dashboard) {
            let config = {
                host: 'qlikdev.jefferson.edu',
                prefix: '/adfsd/',
                port: '443',
                isSecure: true
            };
            let app = angular.module('mashup-app', ['ui.router']);
            app.config(routes);
            app.component('navBar', navBar);
            app.component('dashboardComp', dashboard)
            app.component('footerComponent', footer);
            // app.service('dataService', dataService);
            // app.run(['qlikService', function (qlikService) {
            //     qlikService.openApp(qlik, 'b7fbad3d-b38d-4deb-8cb0-18c844930f45', config)
            // }])
            angular.bootstrap(document, ["qlik-angular", "mashup-app"]);
            gQlik = qlik;
            qlikApp = qlik.openApp('e8e61fbc-9049-4bde-bc0e-5daa1dc156d6', config)
            qlikApp2 = qlik.openApp('2f8bdd0e-f120-4025-88a4-b687e84fd3ca', config)
        }
    )
});