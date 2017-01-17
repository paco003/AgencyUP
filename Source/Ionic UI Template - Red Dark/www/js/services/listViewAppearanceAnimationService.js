App.factory('ListViewAppearanceAnimationService', ['$rootScope', '$timeout', 'Toast', function($rootScope, $timeout, Toast) {
    return {
      // '$scope',
        getTitle: function() {
            return 'Appearance animations';
        },
        getItemTitle: function(item) {
            return item ? item.title : '';
        },
        getAllThemes: function() {
            return [
                {
                    title: 'Alpha',
                    theme: 'layout1'
                },
                {
                    title: 'Random',
                    theme: 'layout2'
                }
            ];
        },
        getDataForTheme: function(theme) {
            return this[
                'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getDataForLayout1: function() {
            return {
              refreshMessage : 'Pull to refresh...',
              containerBodyImage: 'img/background/31.jpg',
              items: [
                {
                    id: 1,
                    title: 'Isaac Raid',
                    image: 'img/avatar/0.jpg',
                    favorite: true
                },
                {
                    id: 2,
                    title: 'Jason Graham',
                    image: 'img/avatar/1.jpg',
                    favorite: false
                },
                {
                    id: 3,
                    title: 'Abigail Ross',
                    image: 'img/avatar/2.jpg',
                    favorite: true
                },
                {
                    id: 4,
                    title: 'Justin Rutherford',
                    image: 'img/avatar/3.jpg',
                    favorite: false
                },
                {
                    id: 5,
                    title: 'Nicholas Henderson',
                    image: 'img/avatar/4.jpg',
                    favorite: false
                },
                {
                    id: 6,
                    title: 'Elizabeth Mackenzie',
                    image: 'img/avatar/5.jpg',
                    favorite: true
                },
                {
                    id: 7,
                    title: 'Melanie Ferguson',
                    image: 'img/avatar/6.jpg',
                    favorite: false
                },
                {
                    id: 8,
                    title: 'Fiona Kelly',
                    image: 'img/avatar/7.jpg',
                    favorite: true
                },
                {
                    id: 9,
                    title: 'Nicholas King',
                    image: 'img/avatar/8.jpg',
                    favorite: true
                },
                {
                    id: 10,
                    title: 'Victoria Mitchell',
                    image: 'img/avatar/9.jpg',
                    favorite: true
                },
                {
                    id: 11,
                    title: 'Sophie Lyman',
                    image: 'img/avatar/10.jpg',
                    favorite: false
                },
                {
                    id: 12,
                    title: 'Carl Ince',
                    image: 'img/avatar/11.jpg',
                    favorite: false
                },
                {
                    id: 13,
                    title: 'Michelle Slater',
                    image: 'img/avatar/12.jpg',
                    favorite: false
                },
                {
                    id: 14,
                    title: 'Ryan Mathis',
                    image: 'img/avatar/13.jpg',
                    favorite: false
                },
                {
                    id: 15,
                    title: 'Julia Grant',
                    image: 'img/avatar/14.jpg',
                    favorite: false
                },
                {
                    id: 16,
                    title: 'Hannah Martin',
                    image: 'img/avatar/15.jpg',
                    favorite: false
                }
            ]};
        },
        getDataForLayout2: function() {
            return {
              refreshMessage : 'Pull to refresh...',
              containerBodyImage: 'img/background/31.jpg',
              items:[
                {
                    id: 1,
                    title: 'Isaac Raid',
                    image: 'img/avatar/0.jpg',
                    favorite: false
                },
                {
                    id: 2,
                    title: 'Jason Graham',
                    image: 'img/avatar/1.jpg',
                    favorite: true
                },
                {
                    id: 3,
                    title: 'Abigail Ross',
                    image: 'img/avatar/2.jpg',
                    favorite: true
                },
                {
                    id: 4,
                    title: 'Justin Rutherford',
                    image: 'img/avatar/3.jpg',
                    favorite: true
                },
                {
                    id: 5,
                    title: 'Nicholas Henderson',
                    image: 'img/avatar/4.jpg',
                    favorite: false
                },
                {
                    id: 6,
                    title: 'Elizabeth Mackenzie',
                    image: 'img/avatar/5.jpg',
                    favorite: true
                },
                {
                    id: 7,
                    title: 'Melanie Ferguson',
                    image: 'img/avatar/6.jpg',
                    favorite: true
                },
                {
                    id: 8,
                    title: 'Fiona Kelly',
                    image: 'img/avatar/7.jpg',
                    favorite: true
                },
                {
                    id: 9,
                    title: 'Nicholas King',
                    image: 'img/avatar/8.jpg',
                    favorite: true
                },
                {
                    id: 10,
                    title: 'Victoria Mitchell',
                    image: 'img/avatar/9.jpg',
                    favorite: true
                },
                {
                    id: 11,
                    title: 'Sophie Lyman',
                    image: 'img/avatar/10.jpg',
                    favorite: true
                },
                {
                    id: 12,
                    title: 'Carl Ince',
                    image: 'img/avatar/11.jpg',
                    favorite: true
                },
                {
                    id: 13,
                    title: 'Michelle Slater',
                    image: 'img/avatar/12.jpg',
                    favorite: true
                },
                {
                    id: 14,
                    title: 'Ryan Mathis',
                    image: 'img/avatar/13.jpg',
                    favorite: true
                },
                {
                    id: 15,
                    title: 'Julia Grant',
                    image: 'img/avatar/14.jpg',
                    favorite: true
                },
                {
                    id: 16,
                    title: 'Hannah Martin',
                    image: 'img/avatar/15.jpg',
                    favorite: true
                }
            ]};
        },
        getEvents: function() {
            return {
                onItemClick: function(item) {
                  Toast.showToast(item.title);
                },
                doRefresh: function () {
                    $timeout(function () {
                      $rootScope.$broadcast('scroll.refreshComplete');
                    }, 2000);
                }
            };
        },
        prepareParams: function(item) {
            return {
                listViewsVisible: true,
                appearanceAnimationVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEvents()
            };
        }
    };
}]);
