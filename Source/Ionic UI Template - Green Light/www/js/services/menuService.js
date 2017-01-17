App.factory('MenuService', function () {
    return {
        getAllItems: function () {
            return [
                {
                    title: 'List Views',
                    url: 'listViews',
                    icon: 'icon-format-align-justify'
                },
                {
                    title: 'Parallax',
                    url: 'parallax',
                    icon: 'icon-format-line-spacing'
                },
                {
                    title: 'Left Menus',
                    url: 'leftMenus',
                    icon: 'icon-login'
                },
                {
                    title: 'Login Pages',
                    url: 'loginPages',
                    icon: 'icon-lock-open-outline'
                },
                {
                    title: 'Image Gallery',
                    url: 'imageGallery',
                    icon: 'icon-apps'
                },
                {
                    title: 'Shape Image Views',
                    url: 'shapeImageViews',
                    icon: 'icon-account-circle'
                },
                {
                    title: 'Check Boxes',
                    url: 'checkBoxes',
                    icon: 'icon-checkbox-marked'
                },
                {
                    title: 'Splash Screens',
                    url: 'splashScreens',
                    icon: 'icon-logout'
                },
                {
                    title: 'Search Bars',
                    url: 'searchBars',
                    icon: 'icon-magnify'
                },
                {
                    title: 'Typo + small components',
                    url: 'textViews',
                    icon: 'icon-tumblr'
                },
                {
                    title: 'Wizard',
                    url: 'wizard',
                    icon: 'icon-cellphone-settings'
                },
                {
                    title: 'Spinner',
                    url: 'spinner',
                    icon: 'icon-image-filter-tilt-shift'
                }
            ];
        }
    };
});
