(function ()
{
    'use strict';

    angular
        .module('app.dashboards', [
            'app.dashboards.project',
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        msNavigationServiceProvider.saveItem('apps', {
            title : 'APPS',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('apps.dashboards', {
            title : 'Dashboards',
            icon  : 'icon-tile-four',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('apps.dashboards.project', {
            title: 'Project',
            state: 'app.dashboards_project'
        });
    }

})();