App.factory('ParallaxService', ['Toast', function (Toast) {
    return {
        getTitle: function () {
            return 'Parallax';
        },
        getItemTitle: function(item) {
            return item ? item.title : '';
        },
        getAllThemes: function() {
            return [
                {
                    title: 'Player',
                    theme: 'layout1'
                },
                {
                    title: 'Product',
                    theme: 'layout2'
                },
                {
                    title: 'Profile',
                    theme: 'layout3'
                },
                {
                    title: 'Location Details',
                    theme: 'layout4'
                },
                {
                  title: 'Basic',
                  theme: 'layout5'
                },
                {
                  title: 'Swiper',
                  theme: 'layout6'
                }
            ];
        },
        getDataForTheme: function (theme) {
            var getData = this[
                    'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ];
            return getData ? getData() : [];
        },
        getDataForLayout5: function() {
            return {
                headerImage: 'img/background/2.jpg',
                avatar: 'img/avatar/0.jpg',
                avatarAlt: 'Avatar',
                title: 'Parallax Title',
                items: [
                    {
                        id: 1,
                        title: 'Isaac Raid',
                        icon: 'img/avatar/0.jpg',
                        favorite: false
                    },
                    {
                        id: 2,
                        title: 'Jason Graham',
                        icon: 'img/avatar/1.jpg',
                        favorite: false
                    },
                    {
                        id: 3,
                        title: 'Abigail Ross',
                        icon: 'img/avatar/2.jpg',
                        favorite: false
                    },
                    {
                        id: 4,
                        title: 'Justin Rutherford',
                        icon: 'img/avatar/3.jpg',
                        favorite: false
                    },
                    {
                        id: 5,
                        title: 'Nicholas Henderson',
                        icon: 'img/avatar/4.jpg',
                        favorite: false
                    },
                    {
                        id: 6,
                        title: 'Elizabeth Mackenzie',
                        icon: 'img/avatar/5.jpg',
                        favorite: false
                    },
                    {
                        id: 7,
                        title: 'Melanie Ferguson',
                        icon: 'img/avatar/6.jpg',
                        favorite: false
                    },
                    {
                        id: 8,
                        title: 'Fiona Kelly',
                        icon: 'img/avatar/7.jpg',
                        favorite: false
                    },
                    {
                        id: 9,
                        title: 'Nicholas King',
                        icon: 'img/avatar/8.jpg',
                        favorite: false
                    },
                    {
                        id: 10,
                        title: 'Victoria Mitchell',
                        icon: 'img/avatar/9.jpg',
                        favorite: false
                    },
                    {
                        id: 11,
                        title: 'Sophie Lyman',
                        icon: 'img/avatar/10.jpg',
                        favorite: false
                    },
                    {
                        id: 12,
                        title: 'Carl Ince',
                        icon: 'img/avatar/11.jpg',
                        favorite: false
                    },
                    {
                        id: 13,
                        title: 'Michelle Slater',
                        icon: 'img/avatar/12.jpg',
                        favorite: false
                    },
                    {
                        id: 14,
                        title: 'Ryan Mathis',
                        icon: 'img/avatar/13.jpg',
                        favorite: false
                    },
                    {
                        id: 15,
                        title: 'Julia Grant',
                        icon: 'img/avatar/14.jpg',
                        favorite: false
                    },
                    {
                        id: 16,
                        title: 'Hannah Martin',
                        icon: 'img/avatar/15.jpg',
                        favorite: false
                    }
                ]
            };
        },
        getDataForLayout1: function() {
          return {
                headerImage: 'img/background/14.jpg',
                title: 'ArtistName',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant',
                iconSkipPrevious: 'icon-skip-previous',
                iconPlay: 'icon-play',
                iconSkipNext: 'icon-skip-next',
                items: [
                    {
                        id: 1,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/0.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 2,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/1.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 3,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/2.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 4,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/3.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 5,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/4.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 6,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/5.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 7,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/6.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 8,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/7.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 9,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/1.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 10,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/2.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 11,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/0.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    },
                    {
                        id: 12,
                        title: 'SongName',
                        description: 'ArtistName',
                        image: 'img/avatar/3.jpg',
                        imageAlt: 'avatar',
                        icon: 'icon-heart-outline',
                        duration: '3:42'
                    }
                ]
          };
        },
         getDataForLayout2: function() {
          return {
                headerImage: 'img/background/7.jpg',
                title: 'Super discount',
                description: '50% OFF',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant',
                items: [
                    {
                        id: 1,
                        title: 'Black Shirt',
                        image: 'img/avatar/17.jpg',
                        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                        oldPrice: '$42.99',
                        newPrice: '$35.99'
                    },
                    {
                        id: 2,
                        title: 'Black Sweater',
                        image: 'img/avatar/18.jpg',
                        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                        oldPrice: '$42.99',
                        newPrice: '$35.99'
                    },
                    {
                        id: 3,
                        title: 'Shirt',
                        image: 'img/avatar/19.jpg',
                        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                        oldPrice: '$42.99',
                        newPrice: '$35.99'
                    },
                    {
                        id: 4,
                        title: 'White Shirt',
                        image: 'img/avatar/20.jpg',
                        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                        oldPrice: '$42.99',
                        newPrice: '$35.99'
                    },
                    {
                        id: 5,
                        title: 'White T Shirt',
                        image: 'img/avatar/21.jpg',
                        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                        oldPrice: '$42.99',
                        newPrice: '$35.99'
                    },
                    {
                        id: 6,
                        title: 'Hoodies',
                        image: 'img/avatar/22.jpg',
                        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                        oldPrice: '$42.99',
                        newPrice: '$35.99'
                    },
                    {
                      id: 7,
                      title: 'Black Shirt',
                      image: 'img/avatar/23.jpg',
                      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                      oldPrice: '$42.99',
                      newPrice: '$35.99'
                    },
                    {
                      id: 8,
                      title: 'Black Sweater',
                      image: 'img/avatar/17.jpg',
                      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                      oldPrice: '$42.99',
                      newPrice: '$35.99'
                    },
                    {
                      id: 9,
                      title: 'Shirt',
                      image: 'img/avatar/18.jpg',
                      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                      oldPrice: '$42.99',
                      newPrice: '$35.99'
                    },
                    {
                      id: 10,
                      title: 'White Shirt',
                      image: 'img/avatar/19.jpg',
                      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                      oldPrice: '$42.99',
                      newPrice: '$35.99'
                    },
                    {
                      id: 11,
                      title: 'White T Shirt',
                      image: 'img/avatar/20.jpg',
                      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                      oldPrice: '$42.99',
                      newPrice: '$35.99'
                    },
                    {
                      id: 12,
                      title: 'Hoodies',
                      image: 'img/avatar/21.jpg',
                      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
                      oldPrice: '$42.99',
                      newPrice: '$35.99'
                    }
                ]
          };
        },
        getDataForLayout3: function() {
          return {
                headerImage: 'img/background/4.jpg',
                containerBodyImage : 'img/background/bcg-pattern.jpg',
                title: 'Jone Smith',
                description: 'from New York, USA',
                duration : '22 min ago',
                friends : '152 friends',
                iconDuration: 'icon-alarm-check',
                iconFriends: 'icon-account-multiple',
                avatar: 'img/avatar/0.jpg',
                avatarAlt: 'avatar',
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
                        image: 'img/background/6.jpg',
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
                        image: 'img/background/5.jpg',
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
                        image: 'img/background/3.jpg',
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
                        image: 'img/background/2.jpg',
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
                        image: 'img/background/4.jpg',
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
                        image: 'img/background/3.jpg',
                        avatar: 'img/avatar/2.jpg',
                        avatarAlt : 'Avatar',
                        duration: '7 hours ago',
                        like: 'LIKE',
                        buy: 'BUY',
                        share: 'SHARE'
                    }
                ]
          };
        },
        getDataForLayout4: function() {
            return {
                headerImage: 'img/background/15.jpg',
                iconLike: 'icon-star-outline',
                iconFavorite: 'icon-comment',
                iconShare: 'icon-share-variant',
                reviews : '4.12 (78 reviews)',
                iconButton: 'icon-walk',
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ.',
                description2 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ.',
                iconsStar: [
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : false,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                ],
                items: [
                    {
                        name: 'ADDRESS:',
                        value: 'Boulevard of food, New York, USA'
                    },
                    {
                        name: 'PHONE:',
                        value: "+555 555 555"
                    },
                    {
                        name: 'WEB:',
                        value: 'www.joesrestaurant.com'
                    },
                    {
                        name: 'MAIL:',
                        value: 'jimmy@gmail.com'
                    },
                    {
                        name: 'WORKING HOURS:',
                        value: '7:00 to 23:00 every day'
                    }
                ],

            };
        },
        getDataForLayout6: function() {
            return {
                headerImages: [
                  'img/avatar-large/2.jpg',
                  'img/avatar-large/1.jpg',
                  'img/avatar-large/4.jpg',
                  'img/avatar-large/3.jpg'
                ],
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant',
                reviews : '4.12 (78 reviews)',
                iconButton: 'icon-basket-fill',
                buyButton: "Buy",
                title: "Product Name",
                price: '$55',
                featured: 'Featured',
                iconsStar: [
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : true,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                    {
                        isActive : false,
                        iconActive: 'icon-star',
                        iconInactive: 'icon-star-outline'
                    },
                ],
                items: [
                    {
                        name: 'About product:',
                        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ.'
                    },
                    {
                        name: 'Material:',
                        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                    },
                    {
                        name: 'Brand:',
                        value: 'Lorem ipsum'
                    },
                    {
                        name: 'Country:',
                        value: "USA"
                    }
                ],

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
                    Toast.showToast('Play');
                },
                onNext: function(item) {
                    Toast.showToast('Next');
                },
                onPrevious: function(item) {
                    Toast.showToast('Previous');
                },
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
                }
            };
        },
        getEventsForLayout2: function(item) {
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
                }
            };
        },
        getEventsForLayout3: function(item) {
            return {
                onLike: function(item) {
                    Toast.showToast('Like');
                },
                onBuy: function(item) {
                    Toast.showToast('Buy');
                },
                onShare: function(item) {
                    Toast.showToast('Share');
                }
            };
        },
        getEventsForLayout4: function(item) {
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
                  Toast.showToast("Run");
                },
                onRates: function (items, index) {
                  for (var i = 0; i < items.length; i++) {
                    if (i <= index) {
                      items[i].isActive = true;
                    } else {
                      items[i].isActive = false;
                    }
                  }
                }
            };
        },
        getEventsForLayout6: function(item) {
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
                  Toast.showToast("Buy");
                },
                onRates: function (items, index) {
                  for (var i = 0; i < items.length; i++) {
                    if (i <= index) {
                      items[i].isActive = true;
                    } else {
                      items[i].isActive = false;
                    }
                  }
                }
            };
        },
        getEventsForLayout5: function(item) {
            return {
                onItemClick: function(item) {
                  item.favorite = !item.favorite;
                  Toast.showToast(item.title);
                }
            };
        },
        prepareParams: function(item) {
            return {
                parallaxVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
