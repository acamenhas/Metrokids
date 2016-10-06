(function ()
{
    'use strict';

    angular
        .module('app.e-commerce')
        .controller('SectionsController', SectionsController);

    /** @ngInject */
    function SectionsController($state, Sections)
    {
        var vm = this;

        // Data
        vm.colors = Sections.records;

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
                    // Target the status column
                    targets   : 4,
                    filterable: false,
                    render    : function (data, type)
                    {
                        if ( type === 'display' )
                        {
                            if ( data == 1 )
                            {
                                return '<i class="icon-checkbox-marked-circle green-500-fg"></i>';
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
                    targets           : 5,
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
            responsive  : true
        };

        // Methods
        vm.gotoDetail = gotoDetail;

        //////////

        /**
         * Go to product detail
         *
         * @param id
         */
        function gotoDetail(id)
        {
            $state.go('app.e-commerce.sections.detail', {id: id});
        }
    }
})();