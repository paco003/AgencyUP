App.factory('ListViewGoogleCardService', ['$timeout', '$rootScope', 'Toast', function($timeout, $rootScope, Toast) {
    return {
        getTitle: function() {
            return 'Google Cards';
        },
        getItemTitle: function(item) {
            return item ? item.title : '';
        },
        getAllThemes: function() {
            return [
                {
                    title: 'Styled cards',
                    theme: 'layout1'
                },
                {
                    title: 'Product',
                    theme: 'layout2'
                },
                {
                    title: 'Post cards',
                    theme: 'layout3'
                },
                {
                    title: 'Post cards 2',
                    theme: 'layout4'
                },
                {
                    title: 'Styled cards 2',
                    theme: 'layout5'
                },
                {
                    title: 'Full image cards',
                    theme: 'layout6'
                }
            ];
        },
        getDataForTheme: function(theme) {
            return this[
                'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getDataForLayout1: function(){
             return {
                title: 'PlaylistName',
                description: 'Author:Username',
                duration: '35:72',
                refreshMessage : 'Pull to refresh...',
                items: [
                    {
                        id: 1,
                        title: 'Atrist Name',
                        image: 'img/avatar-small/0.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 2,
                        title: 'Atrist Name',
                        image: 'img/avatar-small/1.jpg',
                        description: 'Birth year: 1980',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 3,
                        title: 'Atrist Name',
                        image: 'img/avatar-small/2.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 4,
                        title: 'Atrist Name',
                        image: 'img/avatar-small/3.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 5,
                        title: 'Atrist Name',
                        image: 'img/avatar-small/4.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 6,
                        title: 'Atrist Name',
                        image: 'img/avatar-small/5.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 7,
                        title: 'Atrist Name',
                        image: 'img/avatar-small/6.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    },
                    {
                        id: 8,
                        title: 'Atrist Name',
                        image: 'img/avatar-small/7.jpg',
                        description: 'Birth year: 1984',
                        shortDescription: 'Country: Germany',
                        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant'
                    }
                ]
            };
        },
        getDataForLayout2: function(){
            return {
              refreshMessage : 'Pull to refresh...',
              items: [
                  {
                      id: 1,
                      title: 'PROMO',
                      description: 'Special discount! Buy it now!',
                      shortDescription: 'Only this monday!',
                      longDescription: 'Lorem ipsum dolor sit amet, consectetur',
                      image: 'img/background/18.jpg',
                      price: '$19.18',
                      button: 'BUY'
                  },
                  {
                      id: 2,
                      title: 'PROMO',
                      description: 'Special discount! Buy it now!',
                      shortDescription: 'Only this monday!',
                      longDescription: 'Lorem ipsum dolor sit amet, consectetur',
                      image: 'img/background/19.jpg',
                      price: '$19.18',
                      button: 'BUY'
                  },
                  {
                      id: 3,
                      title: 'PROMO',
                      description: 'Special discount! Buy it now!',
                      shortDescription: 'Only this monday!',
                      longDescription: 'Lorem ipsum dolor sit amet, consectetur',
                      image: 'img/background/20.jpg',
                      price: '$19.18',
                      button: 'BUY'
                  },
                  {
                      id: 4,
                      title: 'PROMO',
                      description: 'Special discount! Buy it now!',
                      shortDescription: 'Only this monday!',
                      longDescription: 'Lorem ipsum dolor sit amet, consectetur',
                      image: 'img/background/19.jpg',
                      price: '$19.18',
                      button: 'BUY'
                  },
                  {
                      id: 5,
                      title: 'PROMO',
                      description: 'Special discount! Buy it now!',
                      shortDescription: 'Only this monday!',
                      longDescription: 'Lorem ipsum dolor sit amet, consectetur',
                      image: 'img/background/18.jpg',
                      price: '$19.18',
                      button: 'BUY'
                  }
              ]
            };
        },
        getDataForLayout3: function() {
            return {
                refreshMessage : 'Pull to refresh...',
                items: [
                    {
                        id: 1,
                        title: 'Marty McFly 1',
                        avatar: 'img/avatar/2.jpg',
                        image: 'img/background/1.jpg',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                        shortDescription: 'November 05, 1955',
                        firstButton: 'LIKE',
                        secondButton: 'FOLLOW'
                    },
                    {
                        id: 2,
                        title: 'Marty McFly 2',
                        avatar: 'img/avatar/0.jpg',
                        image: 'img/background/2.jpg',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                        shortDescription: 'November 05, 1955',
                        firstButton: 'LIKE',
                        secondButton: 'FOLLOW'
                    },
                    {
                        id: 3,
                        title: 'Marty McFly 3',
                        avatar: 'img/avatar/1.jpg',
                        image: 'img/background/3.jpg',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                        shortDescription: 'November 05, 1955',
                        firstButton: 'LIKE',
                        secondButton: 'FOLLOW'
                    },
                    {
                        id: 4,
                        title: 'Marty McFly 4',
                        avatar: 'img/avatar/4.jpg',
                        image: 'img/background/4.jpg',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                        shortDescription: 'November 05, 1955',
                        firstButton: 'LIKE',
                        secondButton: 'FOLLOW'
                    },
                    {
                        id: 5,
                        title: 'Marty McFly 5',
                        avatar: 'img/avatar/5.jpg',
                        image: 'img/background/5.jpg',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                        shortDescription: 'November 05, 1955',
                        firstButton: 'LIKE',
                        secondButton: 'FOLLOW'
                    },
                    {
                        id: 6,
                        title: 'Marty McFly 6',
                        avatar: 'img/avatar/6.jpg',
                        image: 'img/background/6.jpg',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                        shortDescription: 'November 05, 1955',
                        firstButton: 'LIKE',
                        secondButton: 'FOLLOW'
                    },
                    {
                        id: 7,
                        title: 'Marty McFly 7',
                        avatar: 'img/avatar/7.jpg',
                        image: 'img/background/7.jpg',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                        shortDescription: 'November 05, 1955',
                        firstButton: 'LIKE',
                        secondButton: 'FOLLOW'
                    }
                ]
            };
        },
        getDataForLayout4: function() {
            return {
              refreshMessage : 'Pull to refresh...',
              items: [
                  {
                      id: 1,
                      name: 'Jane Smith',
                      image: 'img/background/1.jpg',
                      avatar: 'img/avatar/2.jpg',
                      avatarAlt : 'Avatar',
                      duration: '1 hours ago',
                      like: 'LIKE',
                      buy: 'BUY',
                      share: 'SHARE'
                  },
                  {
                      id: 2,
                      name: 'Jane Smith',
                      image: 'img/background/8.jpg',
                      avatar: 'img/avatar/2.jpg',
                      avatarAlt : 'Avatar',
                      duration: '2 hours ago',
                      like: 'LIKE',
                      buy: 'BUY',
                      share: 'SHARE'
                  },
                  {
                      id: 3,
                      name: 'Jane Smith',
                      image: 'img/background/6.jpg',
                      avatar: 'img/avatar/2.jpg',
                      avatarAlt : 'Avatar',
                      duration: '3 hours ago',
                      like: 'LIKE',
                      buy: 'BUY',
                      share: 'SHARE'
                  },
                  {
                      id: 4,
                      name: 'Jane Smith',
                      image: 'img/background/5.jpg',
                      avatar: 'img/avatar/2.jpg',
                      avatarAlt : 'Avatar',
                      duration: '4 hours ago',
                      like: 'LIKE',
                      buy: 'BUY',
                      share: 'SHARE'
                  },
                  {
                      id: 5,
                      name: 'Jane Smith',
                      image: 'img/background/3.jpg',
                      avatar: 'img/avatar/2.jpg',
                      avatarAlt : 'Avatar',
                      duration: '5 hours ago',
                      like: 'LIKE',
                      buy: 'BUY',
                      share: 'SHARE'
                  },
                  {
                      id: 6,
                      name: 'Jane Smith',
                      image: 'img/background/2.jpg',
                      avatar: 'img/avatar/2.jpg',
                      avatarAlt : 'Avatar',
                      duration: '6 hours ago',
                      like: 'LIKE',
                      buy: 'BUY',
                      share: 'SHARE'
                  },
                  {
                      id: 7,
                      name: 'Jane Smith',
                      image: 'img/background/4.jpg',
                      avatar: 'img/avatar/2.jpg',
                      avatarAlt : 'Avatar',
                      duration: '7 hours ago',
                      like: 'LIKE',
                      buy: 'BUY',
                      share: 'SHARE'
                  }
              ]
            }
        },
        getDataForLayout5: function(){
            return {
              refreshMessage : 'Pull to refresh...',
              items: [
                  {
                      id: 1,
                      headerText : "Lorem Ipsum",
                      title: 'Card Title 1',
                      image: 'img/background/0.jpg',
                      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',firstButton: 'EXPLORE',
                      secondButton: 'SHARE'
                  },
                  {
                      id: 2,
                      headerText : "Lorem Ipsum",
                      title: 'Card Title 2',
                      image: 'img/background/9.jpg',
                      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                      firstButton: 'EXPLORE',
                      secondButton: 'SHARE'
                  },
                  {
                      id: 3,
                      title: 'Card Title 3',
                      image: 'img/background/10.jpg',
                      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                      firstButton: 'EXPLORE',
                      secondButton: 'SHARE'
                  },
                  {
                      id: 4,
                      title: 'Card Title 4',
                      headerText : "Lorem Ipsum",
                      image: 'img/background/13.jpg',
                      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                      firstButton: 'EXPLORE',
                      secondButton: 'SHARE'
                  },
                  {
                      id: 5,
                      title: 'Card Title 5',
                      headerText : "Lorem Ipsum",
                      image: 'img/background/11.jpg',
                      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                      firstButton: 'EXPLORE',
                      secondButton: 'SHARE'
                  },
                  {
                      id: 6,
                      title: 'Card Title 6',
                      headerText : "Lorem Ipsum",
                      image: 'img/background/12.jpg',
                      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                      firstButton: 'EXPLORE',
                      secondButton: 'SHARE'
                  }
              ]
            };
        },


        getDataForLayout6: function(){
            return {
              refreshMessage : 'Pull to refresh...',
              items: [
                  {
                      id: 1,
                      image: 'img/background/0.jpg',
                      imageAlt: 'Google cards',
                      title: 'Card Title',
                      subtitle: 'Card SubTitle'
                  },
                  {
                      id: 2,
                      image: 'img/background/9.jpg',
                      imageAlt: 'Google cards',
                      title: 'Card Title',
                      subtitle: 'Card SubTitle'
                  },
                  {
                      id: 3,
                      image: 'img/background/8.jpg',
                      imageAlt: 'Google cards',
                      title: 'Card Title',
                      subtitle: 'Card SubTitle'
                  },
                  {
                      id: 4,
                      image: 'img/background/10.jpg',
                      imageAlt: 'Google cards',
                      title: 'Card Title',
                      subtitle: 'Card SubTitle'
                  },
                  {
                      id: 5,
                      image: 'img/background/13.jpg',
                      imageAlt: 'Google cards',
                      title: 'Card Title',
                      subtitle: 'Card SubTitle'
                  },
                  {
                      id: 6,
                      image: 'img/background/11.jpg',
                      imageAlt: 'Google cards',
                      title: 'Card Title',
                      subtitle: 'Card SubTitle'
                  },
                  {
                      id: 7,
                      image: 'img/background/12.jpg',
                      imageAlt: 'Google cards',
                      title: 'Card Title',
                      subtitle: 'Card SubTitle'
                  },
                  {
                      id: 8,
                      image: 'img/background/0.jpg',
                      imageAlt: 'Google cards',
                      title: 'Card Title',
                      subtitle: 'Card SubTitle'
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
                onLike: function(item) {
                    Toast.showToast('Like ' + item.id);
                },
                onFavorite: function(item) {
                    Toast.showToast('Favorite ' + item.id);
                },
                onShare: function(item) {
                    Toast.showToast('Share ' + item.id);
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
                onBuy: function(item) {
                    Toast.showToast('Buy ' + item.id);
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
                onLike: function(item) {
                  Toast.showToast('Like ' + item.id);
                },
                onFollow: function(item) {
                  Toast.showToast('Follow ' + item.id);
                },
                doRefresh: function () {
                  $timeout(function () {
                    $rootScope.$broadcast('scroll.refreshComplete');
                  }, 2000);
                }
            };
        },
        getEventsForLayout4: function(item) {
            return {
                onLike: function(item) {
                    Toast.showToast('Like');
                },
                onShare: function(item) {
                    Toast.showToast('Share');
                },
                onBuy: function(item) {
                    Toast.showToast('Buy');
                }

            };
        },
        getEventsForLayout5: function() {
            return {
                onExplore: function(item) {
                  Toast.showToast('Explore ' + item.id);
                },
                onShare: function(item) {
                  Toast.showToast('Share ' + item.id);
                },
                doRefresh: function () {
                  $timeout(function () {
                    $rootScope.$broadcast('scroll.refreshComplete');
                  }, 2000);
                }
            };
        },
        getEventsForLayout6: function() {
          return {
            doRefresh: function () {
              $timeout(function () {
                $rootScope.$broadcast('scroll.refreshComplete');
              }, 2000);
            }
          };
        },
        prepareParams: function(item){
            return {
                listViewsVisible: true,
                googleCardsVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
