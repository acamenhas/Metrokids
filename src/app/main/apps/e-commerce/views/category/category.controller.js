(function ()
{
    'use strict';

    angular
        .module('app.e-commerce')
        .controller('CategoryController', CategoryController);

    /** @ngInject */
    function CategoryController($document, $state, Category, $http)
    {
        var vm = this;

        // Data
        vm.taToolbar = [
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount', 'charcount']
        ];

        vm.product = Category.record;
        vm.products = Category.aux;
        
        vm.categoriesSelectFilter = '';
        vm.ngFlowOptions = {
            // You can configure the ngFlow from here
            /*target                   : 'api/media/image',
             chunkSize                : 15 * 1024 * 1024,
             maxChunkRetries          : 1,
             simultaneousUploads      : 1,
             testChunks               : false,
             progressCallbacksInterval: 1000*/
        };
        vm.ngFlow = {
            // ng-flow will be injected into here through its directive
            flow: {}
        };
        vm.dropping = false;

        // Methods
        vm.gotoList = gotoList;
        vm.gotoProduct = gotoProduct;
        vm.gotoSave = gotoSave;
        vm.onCategoriesSelectorOpen = onCategoriesSelectorOpen;
        vm.onCategoriesSelectorClose = onCategoriesSelectorClose;
        vm.fileAdded = fileAdded;
        vm.upload = upload;
        vm.fileSuccess = fileSuccess;

        //////////

        init();

        /**
         * Initialize
         */
        function init()
        {
            // Select the correct product from the data.
            // This is an unnecessary step for a real world app
            // because normally, you would request the product
            // with its id and you would get only one product.
            // For demo purposes, we are grabbing the entire
            // json file which have more than one product details
            // and then hand picking the requested product from
            // it.
            var id = $state.params.id;

            for ( var i = 0; i < vm.product.length; i++ )
            {
                if ( vm.product[i].id === parseInt(id) )
                {
                    vm.product = vm.product[i];
                    break;
                }
            }   
            // END - Select the correct product from the data
        }

        /**
         * Go to products page
         */
        function gotoList()
        {
            $state.go('app.e-commerce.categorys');
        }
        

        function gotoSave()
        {
            var section_group_id = vm.product.section_group_id;
            var section_group_name_pt = vm.product.section_group_name_pt;
            var section_group_name_en = vm.product.section_group_name_en;
            var section_group_name_es = vm.product.section_group_name_es;
                        
            $http({
                url: 'https://www.metrokidscompany.com/kulisha/api/Objectos/update',
                method: "POST",
                data: { 'section_group_id': section_group_id, 'table': 'section_group', 'section_group_name_pt': section_group_name_pt, 'section_group_name_en': section_group_name_en, 'section_group_name_es': section_group_name_es },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            })
            .then(function(response) {
                    // success
                $state.go('app.e-commerce.categorys', {}, { reload: true });
            }, 
            function(response) { // optional
                    // failed
                console.log("failed");
            });
        }
        
        
        
        function gotoProduct($sku) {
            $state.go('app.e-commerce.products.detail', {id: $sku});
        }

        /**
         * On categories selector open
         */
        function onCategoriesSelectorOpen()
        {
            // The md-select directive eats keydown events for some quick select
            // logic. Since we have a search input here, we don't need that logic.
            $document.find('md-select-header input[type="search"]').on('keydown', function (e)
            {
                e.stopPropagation();
            });
        }

        /**
         * On categories selector close
         */
        function onCategoriesSelectorClose()
        {
            // Clear the filter
            vm.categoriesSelectFilter = '';

            // Unbind the input event
            $document.find('md-select-header input[type="search"]').unbind('keydown');
        }

        /**
         * File added callback
         * Triggers when files added to the uploader
         *
         * @param file
         */
        function fileAdded(file)
        {
            // Prepare the temp file data for media list
            var uploadingFile = {
                id  : file.uniqueIdentifier,
                file: file,
                type: 'uploading'
            };

            // Append it to the media list
            vm.product.images.unshift(uploadingFile);
        }

        /**
         * Upload
         * Automatically triggers when files added to the uploader
         */
        function upload()
        {
            // Set headers
            vm.ngFlow.flow.opts.headers = {
                'X-Requested-With': 'XMLHttpRequest',
                //'X-XSRF-TOKEN'    : $cookies.get('XSRF-TOKEN')
            };

            vm.ngFlow.flow.upload();
        }

        /**
         * File upload success callback
         * Triggers when single upload completed
         *
         * @param file
         * @param message
         */
        function fileSuccess(file, message)
        {
            // Iterate through the media list, find the one we
            // are added as a temp and replace its data
            // Normally you would parse the message and extract
            // the uploaded file data from it
            angular.forEach(vm.product.images, function (media, index)
            {
                if ( media.id === file.uniqueIdentifier )
                {
                    // Normally you would update the media item
                    // from database but we are cheating here!
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(media.file.file);
                    fileReader.onload = function (event)
                    {
                        media.url = event.target.result;
                    };

                    // Update the image type so the overlay can go away
                    media.type = 'image';
                }
            });
        }
    }
})();