App.factory('CheckBoxService', ['Toast', function (Toast) {
    return {
        getTitle: function() {
            return 'Check Boxes';
        },
        getItemTitle: function(item) {
            return item ? item.title : '';
        },
        getAllThemes: function() {
            return [
                {
                    title: 'Simple',
                    theme: 'layout1'
                },
                {
                    title: 'Two columns',
                    theme: 'layout2'
                },
                {
                    title: 'With avatar',
                    theme: 'layout3'
                },
                {
                    title: 'Simple 2',
                    theme: 'layout4'
                },
                {
                    title: 'With 2 funcional icon',
                    theme: 'layout5'
                }
            ];
        },
        getDataForTheme: function(theme) {
            return this[
                'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getDataForLayout5: function() {
            return [
                {
                    id: 1,
                    title: 'Mail notification',
                    favorite: true
                },
                {
                    id: 2,
                    title: 'SMS notification',
                    favorite: true
                },
                {
                    id: 3,
                    title: 'Hangout notification',
                    favorite: false
                },
                {
                    id: 4,
                    title: 'Viber notification',
                    favorite: true
                },
                {
                    id: 5,
                    title: 'Gmail notification',
                    favorite: true
                },
                {
                    id: 6,
                    title: 'Facebook notification',
                    favorite: false
                }
            ];
        },
        getDataForLayout1: function() {
            return [
                {
                    id: 1,
                    title: 'Song',
                    icon: 'icon-music-box'
                },
                {
                    id: 2,
                    title: 'Album',
                    icon: 'icon-music-box'
                },
                {
                    id: 3,
                    title: 'Artist',
                    icon: 'icon-music-box'
                },
                {
                    id: 4,
                    title: 'Song',
                    icon: 'icon-music-box'
                },
                {
                    id: 5,
                    title: 'Album',
                    icon: 'icon-music-box'
                },
                {
                    id: 6,
                    title: 'Artist',
                    icon: 'icon-music-box'
                }
            ];
        },
        getDataForLayout2: function() {
            return [
                {
                    id: 1,
                    title: 'Shoes'
                },
                {
                    id: 2,
                    title: 'Clothes'
                },
                {
                    id: 3,
                    title: 'Mobile'
                },
                {
                    id: 4,
                    title: 'IT'
                },
                {
                    id: 5,
                    title: 'Food'
                },
                {
                    id: 6,
                    title: 'Fruits'
                }
            ];
        },
        getDataForLayout3: function() {
            return [
                {
                    id: 1,
                    title: 'Name Surname',
                    image: 'img/avatar/1.jpg'
                },
                {
                    id: 2,
                    title: 'Name Surname',
                    image: 'img/avatar/2.jpg'
                },
                {
                    id: 3,
                    title: 'Name Surname',
                    image: 'img/avatar/3.jpg'
                },
                {
                    id: 4,
                    title: 'Name Surname',
                    image: 'img/avatar/1.jpg'
                },
                {
                    id: 5,
                    title: 'Name Surname',
                    image: 'img/avatar/2.jpg'
                },
                {
                    id: 6,
                    title: 'Name Surname',
                    image: 'img/avatar/3.jpg'
                }
            ];
        },
        getDataForLayout4: function() {
            return [
                {
                    id: 1,
                    title: 'Add extra bed'
                },
                {
                    id: 2,
                    title: 'Transport to hotel'
                },
                {
                    id: 3,
                    title: 'Extra heavy language'
                },
                {
                    id: 4,
                    title: 'Add extra bed'
                },
                {
                    id: 5,
                    title: 'Transport to hotel'
                },
                {
                    id: 6,
                    title: 'Extra heavy language'
                }
            ];
        },
        getEvents: function() {
            return {
                onChange: function(item) {
                    Toast.showToast(item.title);
                },
                onButton: function (item) {
                  Toast.showToast(item.title);
                }
            };
        },
        prepareParams: function(item) {
            return {
                checkBoxesVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEvents()
            };
        }
    };
}]);
