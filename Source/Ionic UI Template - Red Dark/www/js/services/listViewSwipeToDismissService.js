App.factory('ListViewSwipeToDismissService', ['Toast', '$rootScope', '$timeout', function(Toast, $rootScope, $timeout) {
    return {
        getTitle: function() {
            return 'Swipe-to-dismiss';
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
                    title: 'Products + CTA footer',
                    theme: 'layout2'
                },
                {
                    title: 'Large item with text',
                    theme: 'layout3'
                },
                {
                    title: 'Full width image',
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
                title: 'HeaderTitle',
                description: 'HeaderSubtitle',
                shortDescription: '35:72',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant',
                iconPlay: 'icon-play-circle-outline',
                containerBodyImage: 'img/background/31.jpg',
                refreshMessage : 'Pull to refresh...',
                items: [
                    {
                        id: 1,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        shortDescription: '3:42',
                        message: 'SwipedItemTitle',
                        image: 'img/avatar/0.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 2,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        shortDescription: '3:42',
                        message: 'SwipedItemTitle',
                        image: 'img/avatar/1.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 3,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        shortDescription: '3:42',
                        message: 'SwipedItemTitle',
                        image: 'img/avatar/2.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 4,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        shortDescription: '3:42',
                        message: 'SwipedItemTitle',
                        image: 'img/avatar/3.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 5,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        shortDescription: '3:42',
                        message: 'SwipedItemTitle',
                        image: 'img/avatar/4.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 6,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        shortDescription: '3:42',
                        message: 'SwipedItemTitle',
                        image: 'img/avatar/5.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 7,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        shortDescription: '3:42',
                        message: 'SwipedItemTitle',
                        image: 'img/avatar/6.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'

                    },
                    {
                        id: 8,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        shortDescription: '3:42',
                        message: 'SwipedItemTitle',
                        image: 'img/avatar/7.jpg',
                        iconPlay: 'icon-play',
                        iconUndo: 'icon-undo-variant'
                    }
                ]
            };
        },
        getDataForLayout2: function() {
          return {
            containerBodyImage: 'img/background/31.jpg',
            totalPriceText : 'Total:',
            totalPrice: '$56.37',
            buttonText: 'PROCEED',
            cardName: 'REVIEW YOUR CART',
            headerTitle: 'Order No.1',
            title : 'Free shipping',
            refreshMessage : 'Pull to refresh...',
            items : [
              {
                  id: 1,
                  title: 'ProductName',
                  description: 'Lorem ipsum dolor sit amet, consectetur',
                  image: 'img/avatar/17.jpg',
                  message : "Successfully removed from list!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              },
              {
                  id: 2,
                  title: 'ProductName',
                  description: 'Lorem ipsum dolor sit amet, consectetur',
                  image: 'img/avatar/18.jpg',
                  message : "Successfully removed from list!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              },
              {
                  id: 3,
                  title: 'ProductName',
                  description: 'Lorem ipsum dolor sit amet, consectetur',
                  image: 'img/avatar/19.jpg',
                  message : "Successfully removed from list!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              },
              {
                  id: 4,
                  title: 'ProductName',
                  description: 'Lorem ipsum dolor sit amet, consectetur',
                  image: 'img/avatar/20.jpg',
                  message : "Successfully removed from list!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              },
              {
                  id: 5,
                  title: 'ProductName',
                  description: 'Lorem ipsum dolor sit amet, consectetur',
                  image: 'img/avatar/21.jpg',
                  message : "Successfully removed from list!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              },
              {
                  id: 6,
                  title: 'ProductName',
                  description: 'Lorem ipsum dolor sit amet, consectetur',
                  image: 'img/avatar/22.jpg',
                  message : "Successfully removed from list!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              },
              {
                  id: 7,
                  title: 'ProductName',
                  description: 'Lorem ipsum dolor sit amet, consectetur',
                  image: 'img/avatar/23.jpg',
                  message : "Successfully removed from list!",
                  oldPrice: '$42.99',
                  newPrice: '$35.99',
                  iconUndo: 'icon-undo-variant'
              }
            ]
          };
        },
        getDataForLayout3: function() {
            return {
                containerBodyImage: 'img/background/31.jpg',
                refreshMessage : 'Pull to refresh...',
                items : [
                    {
                        id: 1,
                        title: 'ItemTitle',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'SwipedItemTitle!',
                        undo: 'Swiped Subtitle',
                        image: 'img/avatar/3.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 2,
                        title: 'ItemTitle',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'SwipedItemTitle!',
                        undo: 'Swiped Subtitle',
                        image: 'img/avatar/4.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 3,
                        title: 'ItemTitle',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'SwipedItemTitle!',
                        undo: 'Swiped Subtitle',
                        image: 'img/avatar/5.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 4,
                        title: 'ItemTitle',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'SwipedItemTitle!',
                        undo: 'Swiped Subtitle',
                        image: 'img/avatar/6.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 5,
                        title: 'ItemTitle',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'SwipedItemTitle!',
                        undo: 'Swiped Subtitle',
                        image: 'img/avatar/7.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 6,
                        title: 'ItemTitle',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'SwipedItemTitle!',
                        undo: 'Swiped Subtitle',
                        image: 'img/avatar/8.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 7,
                        title: 'ItemTitle',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message : 'SwipedItemTitle!',
                        undo: 'Swiped Subtitle',
                        image: 'img/avatar/9.jpg',
                        iconUndo: 'icon-undo-variant'
                    },
                    {
                        id: 8,
                        title: 'ItemTitle',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        message: 'SwipedItemTitle!',
                        undo: 'Swiped Subtitle',
                        image: 'img/avatar/10.jpg',
                        iconUndo: 'icon-undo-variant'
                    }
                ]
            };
        },
        getDataForLayout4: function() {
            return {
                containerBodyImage: 'img/background/31.jpg',
                refreshMessage : 'Pull to refresh...',
                items : [{
                        id: 1,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        undo: 'Press to undo',
                        message: 'Swiped ItemTitle',
                        swipe: 'Swipe to dismiss',
                        image: 'img/background-small/7.jpg'
                    },
                    {
                        id: 2,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        undo : 'Press to undo',
                        message: 'Swiped ItemTitle',
                        swipe: 'Swipe to dismiss',
                        image: 'img/background-small/9.jpg'
                    },
                    {
                        id: 3,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        undo: 'Press to undo',
                        message: 'Swiped ItemTitle',
                        swipe: 'Swipe to dismiss',
                        image: 'img/background-small/10.jpg'
                    },
                    {
                        id: 4,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        undo: 'Press to undo',
                        message: 'Swiped ItemTitle',
                        swipe: 'Swipe to dismiss',
                        image: 'img/background-small/11.jpg'
                    },
                    {
                        id: 5,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        undo: 'Press to undo',
                        message: 'Swiped ItemTitle',
                        swipe: 'Swipe to dismiss',
                        image: 'img/background-small/12.jpg'
                    },
                    {
                        id: 6,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        undo: 'Press to undo',
                        message: 'Swiped ItemTitle',
                        swipe : 'Swipe to dismiss',
                        image: 'img/background-small/13.jpg'
                    },
                    {
                        id: 7,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        undo: 'Press to undo',
                        message: 'Swiped ItemTitle',
                        swipe: 'Swipe to dismiss',
                        image: 'img/background-small/14.jpg'
                    },
                    {
                        id: 8,
                        title: 'ItemTitle',
                        description: 'ItemSubtitle',
                        undo: 'Press to undo',
                        message: 'Swiped ItemTitle',
                        swipe: 'Swipe to dismiss',
                        image: 'img/background-small/15.jpg'
                    }]
          };
        },
        getDataForLayout5: function() {
            return {
              containerBodyImage: 'img/background/31.jpg',
              refreshMessage : 'Pull to refresh...',
              items: [
                {
                  id: 1,
                  title: 'Isaac Reid',
                  image: 'img/avatar/0.jpg',
                  delete: 'DELETE',
                  undo: 'UNDO',
                  favorite: true
                },
                {
                    id: 2,
                    title: 'Jason Graham',
                    image: 'img/avatar/1.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: true
                },
                {
                    id: 3,
                    title: 'Abigail Ross',
                    image: 'img/avatar/2.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: true
                },
                {
                    id: 4,
                    title: 'Justin Rutherford',
                    image: 'img/avatar/3.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: true
                },
                {
                    id: 5,
                    title: 'Nicholas Henderson',
                    image: 'img/avatar/4.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 6,
                    title: 'Elizabeth Mackenzie',
                    image: 'img/avatar/5.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 7,
                    title: 'Melanie Ferguson',
                    image: 'img/avatar/6.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 8,
                    title: 'Fiona Kelly',
                    image: 'img/avatar/7.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: true
                },
                {
                    id: 9,
                    title: 'Nicholas King',
                    image: 'img/avatar/8.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: true
                },
                {
                    id: 10,
                    title: 'Victoria Mitchell',
                    image: 'img/avatar/9.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 11,
                    title: 'Sophie Lyman',
                    image: 'img/avatar/10.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 12,
                    title: 'Carl Ince',
                    image: 'img/avatar/11.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 13,
                    title: 'Michelle Slater',
                    image: 'img/avatar/12.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 14,
                    title: 'Ryan Mathis',
                    image: 'img/avatar/13.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 15,
                    title: 'Julia Grant',
                    image: 'img/avatar/14.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                },
                {
                    id: 16,
                    title: 'Hannah Martin',
                    image: 'img/avatar/15.jpg',
                    delete: 'DELETE',
                    undo: 'UNDO',
                    favorite: false
                }
            ]};
        },
        getEventsForTheme: function(theme) {
            return this[
                'getEventsFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getEventsForLayout1: function() {
            return {
                onLike: function(item) {
                    Toast.showToast('Like');
                },
                onFavorite: function(item) {
                    Toast.showToast('Favorite');
                },
                onShare: function(item) {
                    Toast.showToast('Share');
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
                }            };
        },
        getEventsForLayout5: function() {
            return {
                onItemClick: function(item) {
                  Toast.showToast(item.title);
                },
                onFavorite: function(item) {
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
                swipeToDismissVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
