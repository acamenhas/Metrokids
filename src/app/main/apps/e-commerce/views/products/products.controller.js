(function ()
{
    'use strict';

    angular
        .module('app.e-commerce')
        .controller('ProductsController', ProductsController);

    /** @ngInject */
    function ProductsController($state, Products)
    {
        var vm = this;

        // Data
        vm.products = Products.records;

        vm.dtInstance = {};
        
        vm.dtOptions = {
            dom         : 'rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            columnDefs  : [
                {
                    // Target the id column
                    targets: 0,
                    width  : '72px'
                },
                {
                    // Target the image column
                    targets   : 1,
                    filterable: false,
                    sortable  : false,
                    width     : '80px'
                },
                {
                    // Target the status column
                    targets   : 7,
                    filterable: false,
                    render    : function (data, type)
                    {
                        if ( type === 'display' )
                        {
                            if ( data == 1 )
                            {
                                return '<i class="icon-checkbox-marked-circle red-500-fg"></i>';
                            }

                            return '';
                        }

                        if ( type === 'filter' )
                        {
                            if ( data )
                            {
                                return '1';
                            }

                            return '0';
                        }

                        return data;
                    }
                },
                {
                    // Target the actions column
                    targets           : 8,
                    responsivePriority: 1,
                    filterable        : false,
                    sortable          : false
                }
            ],
            initComplete: function ()
            {
                var api = this.api(),
                    searchBox = angular.element('body').find('#e-commerce-products-search');

                // Bind an external input as a table wide search box
                if ( searchBox.length > 0 )
                {
                    searchBox.on('keyup', function (event)
                    {
                        api.search(event.target.value).draw();
                    });
                }
            },
            pagingType  : 'simple',
            lengthMenu  : [10, 20, 30, 50, 100],
            pageLength  : 20,
            scrollY     : 'auto',
            responsive  : true,
            order: [7, "desc"]
        };

        // Methods
        vm.gotoProductDetail = gotoProductDetail;

        //////////

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoProductDetail(id)
        {
            $state.go('app.e-commerce.products.detail', {id: id});
        }
    }
})();