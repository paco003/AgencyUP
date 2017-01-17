App.factory('ListViewExpandableService', ['$rootScope', '$timeout', 'Toast', function($rootScope, $timeout, Toast) {
    return {
        getTitle: function() {
            return 'Expandable';
        },
        getItemTitle: function(item) {
            return item ? item.title : '';
        },
        getAllThemes: function() {
            return [
                {
                    title: 'List big image',
                    theme: 'layout1'
                },
                {
                    title: 'Full image with CTA',
                    theme: 'layout2'
                },
                {
                    title: 'Small items + profile header',
                    theme: 'layout3'
                },
                {
                    title: 'Centered with header',
                    theme: 'layout4'
                },
                {
                    title: 'Simple small item',
                    theme: 'layout5'
                }
            ];
        },
        generateLayout5Items: function(count) {
            var items = [];

            for (var i = 0; i < count; i++) {
                items[i] = {
                    id: i,
                    title: 'Expanded ' + i,
                    icon: 'icon-heart'
                };
            }

            return items;
        },
        getDataForTheme: function(theme) {
            return this[
                'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getDataForLayout1: function() {
            return {
                containerBodyImage: 'img/background/31.jpg',
                refreshMessage : 'Pull to refresh...',
                items: [
                    {
                        id: 1,
                        title: 'Artist1',
                        description: 'SINGER',
                        image: 'img/avatar/15.jpg',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant',
                        items: [
                            {
                                id: 1,
                                title: 'AlbumName',
                                description: 'Universal, 2016',
                                image: 'img/avatar/10.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 2,
                                title: 'AlbumName',
                                description: 'Universal, 2016',
                                image: 'img/avatar/11.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 3,
                                title: 'AlbumName',
                                description: 'Universal, 2016',
                                image: 'img/avatar/12.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 4,
                                title: 'AlbumName',
                                description: 'Universal, 2016',
                                image: 'img/avatar/13.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: 'Artist2',
                        description: 'BASSO',
                        image: 'img/avatar/2.jpg',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant',
                        items: [
                            {
                                id: 1,
                                title: 'AlbumName1',
                                description: 'Universal, 2016',
                                image: 'img/avatar/14.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 2,
                                title: 'AlbumName2',
                                description: 'Universal, 2016',
                                image: 'img/avatar/15.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 3,
                                title: 'AlbumName3',
                                description: 'Universal, 2016',
                                image: 'img/avatar/14.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 4,
                                title: 'AlbumName4',
                                description: 'Universal, 2016',
                                image: 'img/avatar/13.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 5,
                                title: 'AlbumName5',
                                description: 'Universal, 2016',
                                image: 'img/avatar/12.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 6,
                                title: 'AlbumName6',
                                description: 'Universal, 2016',
                                image: 'img/avatar/11.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            }
                        ]
                    },
                    {
                        id: 3,
                        title: 'Artist3',
                        description: 'GUITARIST',
                        image: 'img/avatar/3.jpg',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant',
                        items: [
                            {
                                id: 1,
                                title: 'AlbumName1',
                                description: 'Universal, 2016',
                                image: 'img/avatar/11.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 2,
                                title: 'AlbumName2',
                                description: 'Universal, 2016',
                                image: 'img/avatar/12.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 3,
                                title: 'AlbumName3',
                                description: 'Universal, 2016',
                                image: 'img/avatar/13.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 4,
                                title: 'AlbumName4',
                                description: 'Universal, 2016',
                                image: 'img/avatar/14.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 5,
                                title: 'AlbumName5',
                                description: 'Universal, 2016',
                                image: 'img/avatar/15.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            }
                        ]
                    },
                    {
                        id: 4,
                        title: 'Artist4',
                        description: 'SINGER',
                        image: 'img/avatar/4.jpg',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant',
                        items: [
                            {
                                id: 1,
                                title: 'AlbumName1',
                                description: 'Universal, 2016',
                                image: 'img/avatar/0.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 2,
                                title: 'AlbumName2',
                                description: 'Universal, 2016',
                                image: 'img/avatar/1.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 3,
                                title: 'AlbumName3',
                                description: 'Universal, 2016',
                                image: 'img/avatar/2.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 4,
                                title: 'AlbumName4',
                                description: 'Universal, 2016',
                                image: 'img/avatar/3.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            }
                        ]
                    },
                    {
                        id: 5,
                        title: 'Artist5',
                        description: 'DRUMMER',
                        image: 'img/avatar/5.jpg',
                        iconLike: 'icon-thumb-up',
                        iconFavorite: 'icon-heart',
                        iconShare: 'icon-share-variant',
                        items: [
                            {
                                id: 1,
                                title: 'AlbumName1',
                                description: 'Universal, 2016',
                                image: 'img/avatar/14.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 2,
                                title: 'AlbumName2',
                                description: 'Universal, 2016',
                                image: 'img/avatar/15.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 3,
                                title: 'AlbumName3',
                                description: 'Universal, 2016',
                                image: 'img/avatar/6.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            },
                            {
                                id: 4,
                                title: 'AlbumName4',
                                description: 'Universal, 2016',
                                image: 'img/avatar/7.jpg',
                                iconPlay: 'icon-play-circle-outline'
                            }
                        ]
                    }
                ]
            };

        },
        getDataForLayout2: function() {
            return {
              refreshMessage : 'Pull to refresh...',
              containerBodyImage: 'img/background/31.jpg',
              items:[
                {
                    id: 1,
                    title: 'Product 1',
                    image: 'img/background-small/1.jpg',
                    button: 'BUY',
                    items: [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    id: 2,
                    title: 'Product 2',
                    image: 'img/background-small/2.jpg',
                    button: 'BUY',
                    items: [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                    id: 3,
                    title: 'Product 3',
                    image: 'img/background-small/3.jpg',
                    button: 'BUY',
                    items: [
                        'PAY WITH PAYPAL',
                        'PAY WITH VISA CARD',
                        'PAY WITH MAESTRO CARD'
                    ]
                },
                {
                  id: 4,
                  title: 'Product 4',
                  image: 'img/background-small/4.jpg',
                  button: 'BUY',
                  items: [
                    'PAY WITH PAYPAL',
                    'PAY WITH VISA CARD',
                    'PAY WITH MAESTRO CARD'
                  ]
                },
                {
                  id: 5,
                  title: 'Product 5',
                  image: 'img/background-small/5.jpg',
                  button: 'BUY',
                  items: [
                    'PAY WITH PAYPAL',
                    'PAY WITH VISA CARD',
                    'PAY WITH MAESTRO CARD'
                  ]
                }
            ]};
        },
        getDataForLayout3: function() {
            return {
                title: 'Johnatan Douhou',
                description: 'from Oklahoma, USA',
                refreshMessage : 'Pull to refresh...',
                headerImage: 'img/background-small/6.jpg',
                containerBodyImage: 'img/background/31.jpg',
                avatar: 'img/avatar/0.jpg',
                avatarAlt: 'avatar',
                items: [
                    {
                        title: 'Friends',
                        description: '254 people',
                        icon: 'icon-account-check',
                        items: [
                            {
                                id: 1,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 2,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 3,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 4,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            }
                        ]
                    },
                    {
                        title: 'Enemies',
                        description: '254 people',
                        icon: 'icon-account-check',
                        items: [
                            {
                                id: 1,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 2,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 3,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 4,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 5,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 6,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            }
                        ]
                    },
                    {
                        title: 'Neutral',
                        description: '254 people',
                        icon: 'icon-account-check',
                        items: [
                            {
                                id: 1,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 2,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 3,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 4,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            }
                        ]
                    },
                    {
                        title: 'Family',
                        description: '254 people',
                        icon: 'icon-account-check',
                        items: [
                            {
                                id: 1,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 2,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 3,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 4,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            }
                        ]
                    },
                    {
                        title: 'Guests',
                        description: '254 people',
                        icon: 'icon-account-check',
                        items: [
                            {
                                id: 1,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 2,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 3,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 4,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            }
                        ]
                    },
                    {
                        title: 'Students',
                        description: '254 people',
                        icon: 'icon-account-check',
                        items: [
                            {
                                id: 1,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 2,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 3,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            },
                            {
                                id: 4,
                                image: 'img/avatar/0.jpg',
                                title: 'John Doe',
                                rightIcon: 'icon-plus-box'
                            }
                        ]
                    }
                ]
            };
        },
        getDataForLayout4: function() {
            return {
                title: 'New York',
                refreshMessage : 'Pull to refresh...',
                headerImage: 'img/background-small/7.jpg',
                containerBodyImage: 'img/background/31.jpg',
                items: [
                    {
                        title: 'Where to go',
                        icon: 'icon-map-marker-radius',
                        items: [
                            'Monuments',
                            'Sightseeing',
                            'Historical',
                            'Sport'
                        ]
                    },
                    {
                        title: 'Where to sleep',
                        icon: 'icon-hotel',
                        items: [
                            'Hotels',
                            'Hostels',
                            'Motels',
                            'Rooms'
                        ]
                    },
                    {
                        title: 'Where to eat',
                        icon: 'icon-silverware-variant',
                        items: [
                            'Fast Food',
                            'Restorants',
                            'Pubs',
                            'Hotels'
                        ]
                    },
                    {
                        title: 'Where to drink',
                        icon: 'icon-martini',
                        items: [
                            'Caffes',
                            'Bars',
                            'Pubs',
                            'Clubs'
                        ]
                    },
                    {
                        title: 'Where to go',
                        icon: 'icon-map-marker-radius',
                        items: [
                            'Monuments',
                            'Sightseeing',
                            'Historical',
                            'Sport'
                        ]
                    }
                ]
            };
        },
        getDataForLayout5: function() {
            return {
              refreshMessage : 'Pull to refresh...',
              containerBodyImage: 'img/background/31.jpg',
              items:[
                {
                    title: 'Expand this item 1',
                    icon: 'icon-heart-outline',
                    items: this.generateLayout5Items(1)
                },
                {
                    title: 'Expand this item 2',
                    icon: 'icon-heart-outline',
                    items: this.generateLayout5Items(2)
                },
                {
                    title: 'Expand this item 3',
                    icon: 'icon-heart-outline',
                    items: this.generateLayout5Items(3)
                },
                {
                    title: 'Expand this item 4',
                    icon: 'icon-heart-outline',
                    items: this.generateLayout5Items(4)
                },
                {
                    title: 'Expand this item 5',
                    icon: 'icon-heart-outline',
                    items: this.generateLayout5Items(5)
                },
                {
                    title: 'Expand this item 6',
                    icon: 'icon-heart-outline',
                    items: this.generateLayout5Items(6)
                },
                {
                    title: 'Expand this item 7',
                    icon: 'icon-heart-outline',
                    items: this.generateLayout5Items(7)
                },
                {
                    title: 'Expand this item 8',
                    icon: 'icon-heart-outline',
                    items: this.generateLayout5Items(8)
                },
                {
                    title: 'Expand this item 9',
                    icon: 'icon-heart-outline',
                    items: this.generateLayout5Items(9)
                },
                {
                    title: 'Expand this item 10',
                    icon: 'icon-heart-outline',
                    items: this.generateLayout5Items(10)
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
                    Toast.showToast('Like ' + item.id);
                },
                onFavorite: function(item) {
                    Toast.showToast('Favorite ' + item.id);
                },
                onShare: function(item) {
                    Toast.showToast('Share ' + item.id);
                },
                onPlay: function(item) {
                    Toast.showToast('Play ' + item.id);
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
                onPay: function(item) {
                  Toast.showToast(item);
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
                  Toast.showToast(item);
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
                expandableVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
