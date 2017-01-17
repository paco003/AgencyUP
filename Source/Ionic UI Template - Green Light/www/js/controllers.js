App.controller(
    'AppCtrl',
    [
        '$scope',
        '$state',
        '$location',
        'MenuService',
        'ListViewService',
        'ParallaxService',
        'LeftMenuService',
        'LoginAndRegisterService',
        'ImageGalleryService',
        'CheckBoxService',
        'SearchBarService',
        'SplashScreenService',
        'ShapeImageViewService',
        'TextViewService',
        'WizardService',
        'SpinnerService',
        function (
            $scope,
            $state,
            $location,
            MenuService,
            ListViewService,
            ParallaxService,
            LeftMenuService,
            LoginAndRegisterService,
            ImageGalleryService,
            CheckBoxService,
            SearchBarService,
            SplashScreenService,
            ShapeImageViewService,
            TextViewService,
            WizardService,
            SpinnerService
        ) {
            $scope.menuTitle = '';
            $scope.menuItems = [];
            $scope.title = '';
            $scope.items = [];
            $scope.params = {};
            $scope.stateParam = null;

            $scope.servicesMap = {
                listViews: ListViewService,
                leftMenus: LeftMenuService,
                parallax: ParallaxService,
                loginPages: LoginAndRegisterService,
                imageGallery: ImageGalleryService,
                splashScreens: SplashScreenService,
                searchBars: SearchBarService,
                checkBoxes: CheckBoxService,
                shapeImageViews: ShapeImageViewService,
                textViews : TextViewService,
                wizard : WizardService,
                spinner : SpinnerService,
            };
            $scope.onSelectItem = function(item){
                var service  = $scope.servicesMap[$state.params['item']];

                if (service) {
                    $scope.title = service.getItemTitle ? service.getItemTitle(item, $state.params['subitem']) : '';
                    $scope.params = service.prepareParams ? service.prepareParams(item, $state.params['subitem']) : {};
                }

                if(analytics && typeof analytics !== undefined) {
                   analytics.trackView($scope.title);
                 }

                if ($state.params['item'] == "leftMenus") {
                  service.params = $scope.params;
                  $location.path('/leftMenu');
                } else {
                  $location.path('/app/content');
                }
            };

            $scope.initLeftMenu = function() {
              var service  = $scope.servicesMap['leftMenus'];
              $scope.params = service.params ? service.params : [];
            };

            $scope.initItemData = function(){
                $scope.stateParam = $state.params['item'];

                var service = $scope.servicesMap[$state.params['item']];
                var subitem = $state.params['subitem'];

                $scope.title = service ? service.getTitle(subitem) : 'IonicTemplate';
                $scope.items = service ? service.getAllThemes(subitem) : [];
            };

            $scope.initMenuData = function(){
                $scope.menuTitle = 'UIAppTemplate';
                $scope.menuItems = MenuService.getAllItems();
            };

            $scope.openLeftMenu = function () {
              $('body').addClass('menu-open');
              $('ion-side-menu-content').css({'transform' : 'translate3d(275px, 0px, 0px)'});
            };
        }
    ]
);
