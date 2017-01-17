App.factory('ListViewStickyHeaderService', ['$timeout', '$rootScope', 'Toast', function($timeout, $rootScope, Toast) {
    return {
        getTitle: function() {
            return 'Sticky list headers';
        },
        getItemTitle: function(item) {
            return item ? item.title : '';
        },
        getAllThemes: function() {
            return [
                {
                    title: 'Small header + medium item',
                    theme: 'layout1'
                },
                {
                    title: 'Category header + product list',
                    theme: 'layout2'
                },
                {
                    title: 'Small header + large item',
                    theme: 'layout3'
                },
                {
                    title: 'Medium header + medium item',
                    theme: 'layout4'
                },
                {
                    title: 'Simple header with simple list',
                    theme: 'layout5'
                }
            ];
        },
        getDataForTheme: function(theme) {
            return this[
                'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        generateLayout1Items: function(count) {
            var items = [];

            var item = {
                title: '',
                items: [
                    {
                        id: 1,
                        title: 'ArtistName',
                        description: 'AlbumName (2006)',
                        shortDescription: '33:42',
                        image: 'img/avatar/0.jpg',
                        icon: 'icon-play'
                    },
                    {
                        id: 2,
                        title: 'ArtistName',
                        description: 'AlbumName (2006)',
                        shortDescription: '33:42',
                        image: 'img/avatar/1.jpg',
                        icon: 'icon-play'
                    },
                    {
                        id: 3,
                        title: 'ArtistName',
                        description: 'AlbumName (2006)',
                        shortDescription: '33:42',
                        image: 'img/avatar/2.jpg',
                        icon: 'icon-play'
                    },
                    {
                        id: 4,
                        title: 'ArtistName',
                        description: 'AlbumName (2006)',
                        shortDescription: '33:42',
                        image: 'img/avatar/3.jpg',
                        icon: 'icon-play'
                    },
                    {
                        title: 'ArtistName',
                        description: 'AlbumName (2006)',
                        shortDescription: '33:42',
                        image: 'img/avatar/4.jpg',
                        icon: 'icon-play'
                    }
                ]
            };

            for (var i = 0; i < count; i++) {
                var currentItem = angular.copy(item);
                currentItem.title = 'Jazzz ' + i;
                currentItem.icon = 'icon-heart-box-outline';
                items[i] = currentItem;
            }

            return items;
        },
        generateLayout2Items: function(count) {
            var items = [];

            var group = {
                title: '',
                items: []
            };

            var item = {
                id: '',
                image: '',
                image1: '',
                image2: '',
                image3: '',
                image4: '',
                title: 'Product name',
                description: 'Free shipping',
                oldPrice: "42.99$",
                newPrice: "35.99",
                button: "BUY"
            };

            for (var g = 0; g < count; g++) {
                var currentGroup = angular.copy(group);
                currentGroup.title = 'Wardrobe ' + (g + 1);
                for (var i = 0; i < 2; i++) {
                    var currentItem = angular.copy(item);
                    currentItem.id = i + 1;
                    currentItem.image = 'img/background/' + (22 + Math.floor(Math.random() * 6)) + '.jpg';
                    currentItem.image1 = 'img/avatar/' + (17 + Math.floor(Math.random() * 6)) + '.jpg';
                    currentItem.image2 = 'img/avatar/' + (17 + Math.floor(Math.random() * 6)) + '.jpg';
                    currentItem.image3 = 'img/avatar/' + (17 + Math.floor(Math.random() * 6)) + '.jpg';
                    currentItem.image4 = 'img/avatar/' + (17 + Math.floor(Math.random() * 6)) + '.jpg';
                    currentGroup.items[i] = currentItem;
                }
                items[g] = currentGroup;
            }

            return items;
        },
        generateLayout3Items: function(count) {
            var items = [];

            var item = {
                title: 'Yesterday',
                description: '14.06.2016',
                icon: 'icon-calendar-today',
                items: [
                    {
                        id: '',
                        title: 'John Smit ',
                        image: 'img/avatar/0.jpg',
                        iconLike: 'icon-thumb-up',
                        iconBookmark: 'icon-bookmark',
                        iconShare: 'icon-share-variant',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                    },
                    {
                        id: '',
                        title: 'John Smit ',
                        image: 'img/avatar/1.jpg',
                        iconLike: 'icon-thumb-up',
                        iconBookmark: 'icon-bookmark',
                        iconShare: 'icon-share-variant',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                    },
                    {
                        id: '',
                        title: 'John Smit ',
                        image: 'img/avatar/2.jpg',
                        iconLike: 'icon-thumb-up',
                        iconBookmark: 'icon-bookmark',
                        iconShare: 'icon-share-variant',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                    },
                    {
                        id: '',
                        title: 'John Smit ',
                        image: 'img/avatar/3.jpg',
                        iconLike: 'icon-thumb-up',
                        iconBookmark: 'icon-bookmark',
                        iconShare: 'icon-share-variant',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                    },
                    {
                        id: '',
                        title: 'John Smit ',
                        image: 'img/avatar/4.jpg',
                        iconLike: 'icon-thumb-up',
                        iconBookmark: 'icon-bookmark',
                        iconShare: 'icon-share-variant',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                    },
                    {
                        id: '',
                        title: 'John Smit ',
                        image: 'img/avatar/5.jpg',
                        iconLike: 'icon-thumb-up',
                        iconBookmark: 'icon-bookmark',
                        iconShare: 'icon-share-variant',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also'
                    }
                ]
            };

            var id = 0;

            for (var i = 0; i < count; i++) {
                var group = angular.copy(item);

                for (var j = 0; j < group.items.length; j++) {
                    group.items[j].id = id;
                    group.items[j].title = group.items[j].title + id;
                    id++;
                }

                items[i] = group;
            }

            return items;
        },
        generateLayout4Items: function(count) {
            var items = [];

            var group = {
                title: '',
                icon: 'icon-home-variant',
                items: []
            };

            var item = {
                title: '',
                description: '3:30min walking tour',
                price: '112$',
                iconWalk: 'icon-walk',
                iconHome: 'icon-home-variant'

            };

            for (var g = 0; g < count; g++) {
                var currentGroup = angular.copy(group);
                currentGroup.title = 'Hotels ' + (g + 1);
                for (var i = 0; i < count; i++) {
                    var currentItem = angular.copy(item);
                    currentItem.title = 'Hotel Palace ' + (g * count + i);
                    currentGroup.items[i] = currentItem;
                }
                items[g] = currentGroup;
            }

            return items;
        },
        generateLayout5Items: function(count) {
            var items = [];

            var group = {
                title: '',
                items: []
            };

            var item = {
                title: '',
                image: ''
            };

            for (var g = 0; g < count; g++) {
                var currentGroup = angular.copy(group);
                currentGroup.title = 'Header ' + g;
                for (var i = 0; i < count; i++) {
                    var currentItem = angular.copy(item);
                    currentItem.title = 'Row number ' + (g * count + i);
                    currentItem.image = 'img/avatar/' + i + '.jpg';
                    currentItem.favorite = (i % 2 == 0) ? true : false;
                    currentGroup.items[i] = currentItem;
                }
                items[g] = currentGroup;
            }

            return items;
        },

        getDataForLayout1: function() {
            return {
                containerBodyImage: 'img/background/31.jpg',
                refreshMessage : 'Pull to refresh...',
                items: this.generateLayout1Items(10)
            };
        },
        getDataForLayout2: function() {
            return {
                refreshMessage : 'Pull to refresh...',
                containerBodyImage: 'img/background/31.jpg',
                items: this.generateLayout2Items(10)
            };
        },
        getDataForLayout3: function() {
             return {
                refreshMessage : 'Pull to refresh...',
                containerBodyImage: 'img/background/31.jpg',
                items: this.generateLayout3Items(10)
            };
        },
        getDataForLayout4: function() {
            return {
                refreshMessage : 'Pull to refresh...',
                containerBodyImage: 'img/background/31.jpg',
                items: this.generateLayout4Items(10)
            };
        },
        getDataForLayout5: function() {
            return {
                refreshMessage : 'Pull to refresh...',
                containerBodyImage: 'img/background/31.jpg',
                items: this.generateLayout5Items(10)
            };
        },
        getEventsForTheme: function(theme) {
            return this[
                'getEventsFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getEventsForLayout1: function() {
            return {
                onGroup: function(item) {
                    Toast.showToast(item.title);
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
                onGroup: function(item) {
                    Toast.showToast(item.title);
                },
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
                onBookmark: function(item) {
                    Toast.showToast('Bookmark ' + item.id);
                },
                onShare: function(item) {
                    Toast.showToast('Share ' + item.id);
                },
                onImage: function(item) {
                    Toast.showToast('User image ' + item.id);
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
                stickyListHeadersVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
