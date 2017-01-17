App.factory('ListViewDragAndDropService', ['$rootScope', '$timeout', 'Toast', function($rootScope, $timeout, Toast) {
    return {
        getTitle: function() {
            return 'Drag and Drop';
        },
        getItemTitle: function(item) {
            return item ? item.title : '';
        },
        getAllThemes: function() {
            return [
                {
                    title: 'Small item + header',
                    theme: 'layout1'
                },
                {
                    title: 'Products + CTA header',
                    theme: 'layout2'
                },
                {
                    title: 'Medium item with avatar',
                    theme: 'layout3'
                },
                {
                    title: 'Medium item with image',
                    theme: 'layout4'
                },
                {
                    title: 'Simple small item',
                    theme: 'layout5'
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
                title: 'PlaylistName',
                refreshMessage : 'Pull to refresh...',
                description: 'Author: Username',
                duration: '35:72',
                icon: 'icon-check',
                items: [
                    {
                        id: 1,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/0.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 2,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/1.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 3,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/2.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 4,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/3.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 5,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/4.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 6,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/5.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 7,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/6.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 8,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/0.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 9,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/1.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 10,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/2.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 11,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/3.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 12,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/4.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 13,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/5.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 14,
                        title: 'SongName',
                        author: 'Author: UserName',
                        image: 'img/avatar/6.jpg',
                        leftIcon: 'icon-play-circle',
                        rightIcon: 'icon-unfold-more'
                    }
                ]
            };
        },
        getDataForLayout2: function() {
            return {
              title: 'Order No. 1',
              description : 'Will be shipped: 15.5.2016.',
              buttonText: 'PROCEED',
              headerImage: 'img/background-small/8.jpg',
              price: '$42.99',
              items : [
                {
                    id: 1,
                    title: 'Black Shirt',
                    seller: 'Seller Name',
                    image: 'img/avatar/17.jpg',
                    oldPrice: '$42.99',
                    newPrice: '$35.99',
                    rightIcon: 'icon-unfold-more'
                },
                {
                  id: 2,
                  title: 'Black Sweater',
                  seller: 'Seller Name',
                  image: 'img/avatar/18.jpg',
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  rightIcon: 'icon-unfold-more'
                },
                {
                  id: 3,
                  title: 'Shirt',
                  seller: 'Seller Name',
                  image: 'img/avatar/19.jpg',
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  rightIcon: 'icon-unfold-more'
                },
                {
                  id: 4,
                  title: 'White Shirt',
                  seller: 'Seller Name',
                  image: 'img/avatar/20.jpg',
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  rightIcon: 'icon-unfold-more'
                },
                {
                  id: 5,
                  title: 'White T shirt',
                  seller: 'Seller Name',
                  image: 'img/avatar/21.jpg',
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  rightIcon: 'icon-unfold-more'
                },
                {
                  id: 6,
                  title: 'T shirt',
                  seller: 'Seller Name',
                  image: 'img/avatar/22.jpg',
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  rightIcon: 'icon-unfold-more'
                },
                {
                  id: 7,
                  title: 'Hoodies',
                  seller: 'Seller Name',
                  image: 'img/avatar/23.jpg',
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  rightIcon: 'icon-unfold-more'
                }
              ]
            };
        },
        getDataForLayout3: function() {
            return {
                refreshMessage : 'Pull to refresh...',
                backgroundImage: 'img/background/loginmedia.jpg',
                items: [
                    {
                        id: 1,
                        title: 'Isaac Reid',
                        description: 'from Las Vegas',
                        image: 'img/avatar/0.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 2,
                        title: 'Jason Graham',
                        description: 'from Las Vegas',
                        image: 'img/avatar/1.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 3,
                        title: 'Abigail Ross',
                        description: 'from Las Vegas',
                        image: 'img/avatar/2.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 4,
                        title: 'Justin Rutherford',
                        description: 'from Las Vegas',
                        image: 'img/avatar/3.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 5,
                        title: 'Nicholas Henderson',
                        description: 'from Las Vegas',
                        image: 'img/avatar/4.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 6,
                        title: 'Elizabeth Mackenzie',
                        description: 'from Las Vegas',
                        image: 'img/avatar/5.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 7,
                        title: 'Melanie Ferguson',
                        description: 'from Las Vegas',
                        image: 'img/avatar/6.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 8,
                        title: 'Fiona Kelly',
                        description: 'from Las Vegas',
                        image: 'img/avatar/7.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 9,
                        title: 'Nicholas King',
                        description: 'from Las Vegas',
                        image: 'img/avatar/8.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 10,
                        title: 'Victoria Mitchell',
                        description: 'from Las Vegas',
                        image: 'img/avatar/9.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 11,
                        title: 'Sophie Lyman',
                        description: 'from Las Vegas',
                        image: 'img/avatar/10.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 12,
                        title: 'Carl Ince',
                        description: 'from Las Vegas',
                        image: 'img/avatar/11.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 13,
                        title: 'Michelle Slater',
                        description: 'from Las Vegas',
                        image: 'img/avatar/12.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 14,
                        title: 'Ryan Mathis',
                        description: 'from Las Vegas',
                        image: 'img/avatar/13.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 15,
                        title: 'Julia Grant',
                        description: 'from Las Vegas',
                        image: 'img/avatar/14.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 16,
                        title: 'Hannah Martin',
                        description: 'from Las Vegas',
                        image: 'img/avatar/15.jpg',
                        rightIcon: 'icon-unfold-more'
                    }
                ]
            };
        },
        getDataForLayout4: function() {
            return {
              refreshMessage : 'Pull to refresh...',
              items:[
                {
                    id: 1,
                    title: 'Monument walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'img/avatar-small/8.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 2,
                    title: 'Park walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'img/avatar-small/9.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 3,
                    title: 'River walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'img/avatar-small/10.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 4,
                    title: 'City walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'img/avatar-small/11.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 5,
                    title: 'Lake walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'img/avatar-small/12.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 6,
                    title: 'Vilage walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'img/avatar-small/13.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 7,
                    title: 'Castle walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'img/avatar-small/14.jpg',
                    rightIcon: 'icon-unfold-more'
                },
                {
                    id: 8,
                    title: 'Beach walk tour',
                    description: '23min walk from center',
                    icon: 'icon icon-star',
                    mark: '4.1',
                    image: 'img/avatar-small/13.jpg',
                    rightIcon: 'icon-unfold-more'
                }
            ]};
        },
        getDataForLayout5: function() {
            return {
                refreshMessage : 'Pull to refresh...',
                items: [
                    {
                        id: 1,
                        title: 'Isaac Reid',
                        image: 'img/avatar/0.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 2,
                        title: 'Jason Graham',
                        image: 'img/avatar/1.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 3,
                        title: 'Abigail Ross',
                        image: 'img/avatar/2.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 4,
                        title: 'Justin Rutherford',
                        image: 'img/avatar/3.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 5,
                        title: 'Nicholas Henderson',
                        image: 'img/avatar/4.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 6,
                        title: 'Elizabeth Mackenzie',
                        image: 'img/avatar/5.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 7,
                        title: 'Melanie Ferguson',
                        image: 'img/avatar/6.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 8,
                        title: 'Fiona Kelly',
                        image: 'img/avatar/7.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 9,
                        title: 'Nicholas King',
                        image: 'img/avatar/8.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 10,
                        title: 'Victoria Mitchell',
                        image: 'img/avatar/9.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 11,
                        title: 'Sophie Lyman',
                        image: 'img/avatar/10.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 12,
                        title: 'Carl Ince',
                        image: 'img/avatar/11.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 13,
                        title: 'Michelle Slater',
                        image: 'img/avatar/12.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 14,
                        title: 'Ryan Mathis',
                        image: 'img/avatar/13.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 15,
                        title: 'Julia Grant',
                        image: 'img/avatar/14.jpg',
                        rightIcon: 'icon-unfold-more'
                    },
                    {
                        id: 16,
                        title: 'Hannah Martin',
                        image: 'img/avatar/15.jpg',
                        rightIcon: 'icon-unfold-more'
                    }
                ]
            };
        },
        getEventsForTheme: function(theme) {
            return this[
                'getEventsFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getEventsForLayout1: function() {
            return {
                onPlay: function(item) {
                    Toast.showToast('Play ' + item.id);
                },
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
        getEventsForLayout2: function() {
            return {
                onProceed: function() {
                    Toast.showToast('Proceed...');
                },
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
        getEventsForLayout3: function() {
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
        getEventsForLayout4: function() {
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
        getEventsForLayout5: function() {
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
                dragAndDropVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
