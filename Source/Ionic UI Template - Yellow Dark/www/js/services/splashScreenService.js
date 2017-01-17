App.factory('SplashScreenService', [function (){
    return {
        getTitle: function(){
            return 'Splash Screens';
        },
        getItemTitle: function(item) {
          return item ? item.title : '';
        },
        getAllThemes: function (){
            return [
                {
                    title: 'Fade in + Ken Burns 1',
                    theme: 'layuot1'
                },
                {
                    title: 'Down + Ken Burns',
                    theme: 'layuot2'
                },
                {
                    title: 'Down + fade in + Ken Burns',
                    theme: 'layuot3'
                }
            ];
        },
        getDataForTheme: function(theme){
            var data = {
                redirectTo: '/app/splashScreens'
            };

          switch (theme) {
            case 'layuot1':
              data.duration = 10000;
              data.logo = 'img/logo/login-universal-light.png';
              break;

            case 'layuot2':
              data.duration = 10000;
              data.logo = 'img/logo/login-universal-light.png';
              break;

            case 'layuot3':
              data.duration = 10000;
              data.logo = 'img/logo/login-universal-light.png';
              data.title = 'Title';
              break;
          }

          return data;
        },
        getEventsForTheme: function(){
            return;
        },
        prepareParams: function(item){
            return {
                splashScreensVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
