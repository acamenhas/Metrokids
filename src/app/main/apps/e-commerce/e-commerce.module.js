(function ()
{
    'use strict';

    angular
        .module('app.e-commerce',
            [
                'flow'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.e-commerce', {
                abstract: true,
                url     : '/e-commerce'
            })
            .state('app.e-commerce.dashboard', {
                url      : '/dashboard',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/dashboard/dashboard.html',
                        controller : 'DashboardEcommerceController as vm'
                    }
                },
                resolve  : {
                    Dashboard: function (msApi)
                    {
                        return msApi.resolve('e-commerce.dashboard@get');
                    }
                },
                bodyClass: 'ecommerce'
            })
        
        
        
        
        
        
        
//colors
            .state('app.e-commerce.colors', {
                url      : '/colors',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/colors/colors.html',
                        controller : 'ColorsController as vm'
                    }
                },
                resolve  : {
                    Colors: function (api)
                    {
                        return api.colors.list.get().$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
            .state('app.e-commerce.colors.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/color/color.html',
                        controller : 'ColorController as vm'
                    }
                },
                resolve  : {
                    Color: function (api, $stateParams)
                    {
                        return api.colors.getById.get({id: $stateParams.id}).$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
        

//compositions
            .state('app.e-commerce.compositions', {
                url      : '/compositions',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/compositions/compositions.html',
                        controller : 'CompositionsController as vm'
                    }
                },
                resolve  : {
                    Compositions: function (api)
                    {
                        return api.compositions.list.get().$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
            .state('app.e-commerce.compositions.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/composition/composition.html',
                        controller : 'CompositionController as vm'
                    }
                },
                resolve  : {
                    Composition: function (api, $stateParams)
                    {
                        return api.compositions.getById.get({id: $stateParams.id}).$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
        
        
//collections
            .state('app.e-commerce.collections', {
                url      : '/collections',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/collections/collections.html',
                        controller : 'CollectionsController as vm'
                    }
                },
                resolve  : {
                    Collections: function (api)
                    {
                        return api.collections.list.get().$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
            .state('app.e-commerce.collections.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/collection/collection.html',
                        controller : 'CollectionController as vm'
                    }
                },
                resolve  : {
                    Collection: function (api, $stateParams)
                    {
                        return api.collections.getById.get({id: $stateParams.id}).$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
        
        
//sections
            .state('app.e-commerce.sections', {
                url      : '/sections',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/sections/sections.html',
                        controller : 'SectionsController as vm'
                    }
                },
                resolve  : {
                    Sections: function (api)
                    {
                        return api.sections.list.get().$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
            .state('app.e-commerce.sections.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/section/section.html',
                        controller : 'SectionController as vm'
                    }
                },
                resolve  : {
                    Section: function (api, $stateParams)
                    {
                        return api.sections.getById.get({id: $stateParams.id}).$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
        
        
//familys
            .state('app.e-commerce.familys', {
                url      : '/familys',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/familys/familys.html',
                        controller : 'FamilysController as vm'
                    }
                },
                resolve  : {
                    Familys: function (api)
                    {
                        return api.familys.list.get().$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
            .state('app.e-commerce.familys.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/family/family.html',
                        controller : 'FamilyController as vm'
                    }
                },
                resolve  : {
                    Family: function (api, $stateParams)
                    {
                        return api.familys.getById.get({id: $stateParams.id}).$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })

        
//lines
            .state('app.e-commerce.lines', {
                url      : '/lines',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/lines/lines.html',
                        controller : 'LinesController as vm'
                    }
                },
                resolve  : {
                    Lines: function (api)
                    {
                        return api.lines.list.get().$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
            .state('app.e-commerce.lines.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/line/line.html',
                        controller : 'LineController as vm'
                    }
                },
                resolve  : {
                    Line: function (api, $stateParams)
                    {
                        return api.lines.getById.get({id: $stateParams.id}).$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
        

//models
            .state('app.e-commerce.models', {
                url      : '/models',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/models/models.html',
                        controller : 'ModelsController as vm'
                    }
                },
                resolve  : {
                    Models: function (api)
                    {
                        return api.models.list.get().$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
            .state('app.e-commerce.models.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/model/model.html',
                        controller : 'ModelController as vm'
                    }
                },
                resolve  : {
                    Model: function (api, $stateParams)
                    {
                        return api.models.getById.get({id: $stateParams.id}).$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
        
     
        
//receivers
            .state('app.e-commerce.receivers', {
                url      : '/receivers',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/receivers/receivers.html',
                        controller : 'ReceiversController as vm'
                    }
                },
                resolve  : {
                    Receivers: function (api)
                    {
                        return api.receivers.list.get().$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
            .state('app.e-commerce.receivers.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/receiver/receiver.html',
                        controller : 'ReceiverController as vm'
                    }
                },
                resolve  : {
                    Receiver: function (api, $stateParams)
                    {
                        return api.receivers.getById.get({id: $stateParams.id}).$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
        
        
//categorys
            .state('app.e-commerce.categorys', {
                url      : '/categorys',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/categorys/categorys.html',
                        controller : 'CategorysController as vm'
                    }
                },
                resolve  : {
                    Categorys: function (api)
                    {
                        return api.categorys.list.get().$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
            .state('app.e-commerce.categorys.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/category/category.html',
                        controller : 'CategoryController as vm'
                    }
                },
                resolve  : {
                    Category: function (api, $stateParams)
                    {
                        return api.categorys.getById.get({id: $stateParams.id}).$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
        
        
        
//Products
            .state('app.e-commerce.products', {
                url      : '/products',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/products/products.html',
                        controller : 'ProductsController as vm'
                    }
                },
                resolve  : {
                    Products: function (api)
                    {
                        return api.products.list.get().$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
            .state('app.e-commerce.products.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/product/product.html',
                        controller : 'ProductController as vm'
                    }
                },
                resolve  : {
                    Product: function (api, $stateParams)
                    {
                        return api.products.getById.get({id: $stateParams.id}).$promise;
                    }
                },
                bodyClass: 'e-commerce'
            })
        
        
        
        
        
        
        
        
        
        
        
            .state('app.e-commerce.orders', {
                url      : '/orders',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/orders/orders.html',
                        controller : 'OrdersController as vm'
                    }
                },
                resolve  : {
                    Orders  : function (msApi)
                    {
                        return msApi.resolve('e-commerce.orders@get');
                    },
                    Statuses: function (msApi)
                    {
                        return msApi.resolve('e-commerce.statuses@get');
                    }
                },
                bodyClass: 'e-commerce'
            })
            .state('app.e-commerce.orders.detail', {
                url      : '/:id',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/e-commerce/views/order/order.html',
                        controller : 'OrderController as vm'
                    }
                },
                resolve  : {
                    Order   : function (msApi)
                    {
                        return msApi.resolve('e-commerce.order@get');
                    },
                    Statuses: function (msApi)
                    {
                        return msApi.resolve('e-commerce.statuses@get');
                    }
                },
                bodyClass: 'e-commerce'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/e-commerce');

        // Api
        msApiProvider.register('e-commerce.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('e-commerce.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('e-commerce.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('e-commerce.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('e-commerce.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('e-commerce.order', ['app/data/e-commerce/order.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('apps.e-commerce', {
            title : 'E-Commerce',
            icon  : 'icon-cart',
            weight: 3
        });

        /*msNavigationServiceProvider.saveItem('apps.e-commerce.dashboard', {
            title: 'Dashboard',
            state: 'app.e-commerce.dashboard'
        });*/

        msNavigationServiceProvider.saveItem('apps.e-commerce.colors', {
            title: 'Colors',
            state: 'app.e-commerce.colors'
        });
        
        msNavigationServiceProvider.saveItem('apps.e-commerce.compositions', {
            title: 'Compositions',
            state: 'app.e-commerce.compositions'
        });

        msNavigationServiceProvider.saveItem('apps.e-commerce.collections', {
            title: 'Collections',
            state: 'app.e-commerce.collections'
        });
        
        msNavigationServiceProvider.saveItem('apps.e-commerce.familys', {
            title: 'Familys',
            state: 'app.e-commerce.familys'
        });
        
        msNavigationServiceProvider.saveItem('apps.e-commerce.lines', {
            title: 'Lines',
            state: 'app.e-commerce.lines'
        });
        
        msNavigationServiceProvider.saveItem('apps.e-commerce.models', {
            title: 'Models',
            state: 'app.e-commerce.models'
        });
        
        msNavigationServiceProvider.saveItem('apps.e-commerce.receivers', {
            title: 'Receivers',
            state: 'app.e-commerce.receivers'
        });
        
        msNavigationServiceProvider.saveItem('apps.e-commerce.sections', {
            title: 'Sections',
            state: 'app.e-commerce.sections'
        });
        
        msNavigationServiceProvider.saveItem('apps.e-commerce.categorys', {
            title: 'Categorys',
            state: 'app.e-commerce.categorys'
        });
        
        msNavigationServiceProvider.saveItem('apps.e-commerce.products', {
            title: 'Products',
            state: 'app.e-commerce.products'
        });

        /*msNavigationServiceProvider.saveItem('apps.e-commerce.orders', {
            title: 'Orders',
            state: 'app.e-commerce.orders'
        });*/
    }
})();