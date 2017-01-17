App.factory('SearchBarService', ['Toast', function (Toast) {
  return {
    getTitle: function () {
      return 'Search Bars';
    },
    getItemTitle: function (item) {
      return item ? item.title : '';
    },
    getAllThemes: function () {
      return [
        {
          title: 'With filtering check boxesr',
          theme: 'layout1'
        },
        {
          title: 'With filtering check boxes 2',
          theme: 'layout2'
        },
        {
          title: 'Simple',
          theme: 'layout3'
        },
        {
          title: 'Field + header',
          theme: 'layout4'
        },
        {
          title: 'Field + header 2',
          theme: 'layout5'
        }
      ];
    },
    getDataForTheme: function (theme) {
      return this[
      'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
        ]();
    },
    getDataForLayout3: function () {
      return {
        containerBodyImage: "img/background/31.jpg",
        items: [
          {
            title: 'Friends',
            description: '254 people'
          },
          {
            title: 'Enemies',
            description: '254 people'
          },
          {
            title: 'Neutral',
            description: '254 people'
          },
          {
            title: 'Family',
            description: '254 people'
          },
          {
            title: 'Guests',
            description: '254 people'
          },
          {
            title: 'Students',
            description: '254 people'
          }
        ]
      };
    },
    getDataForLayout2: function () {
      return {
        containerBodyImage: "img/background/31.jpg",
        items: [
          {
            title: 'Shoes',
            icon: ''
          },
          {
            title: 'Clothes',
            icon: ''
          },
          {
            title: 'Mobile',
            icon: ''
          },
          {
            title: 'IT',
            icon: ''
          },
          {
            title: 'Food',
            icon: ''
          },
          {
            title: 'Fruits',
            icon: ''
          },
          {
            title: 'Vegetable',
            icon: ''
          },
          {
            title: 'Drinks',
            icon: ''
          },
          {
            title: 'Alcohol',
            icon: ''
          },
          {
            title: 'Books',
            icon: ''
          }
        ]
      };
    },
    getDataForLayout4: function () {
      return {
        title: 'Johnatan Douhou',
        description: 'from Oklahoma, USA',
        headerImage: 'img/background/30.jpg',
        avatar: 'img/avatar/0.jpg',
        containerBodyImage: "img/background/31.jpg",
        items: [
          {
            title: 'Friends',
            description: '254 people'
          },
          {
            title: 'Enemies',
            description: '254 people'
          },
          {
            title: 'Neutral',
            description: '254 people'
          },
          {
            title: 'Family',
            description: '254 people'
          },
          {
            title: 'Guests',
            description: '254 people'
          },
          {
            title: 'Students',
            description: '254 people'
          }
        ]
      };
    },
    getDataForLayout1: function () {
      return {
        containerBodyImage: 'img/background/31.jpg',
        items: [
          {
            title: 'Song',
            icon: 'icon-music-box'
          },
          {
            title: 'Album',
            icon: 'icon-headset'
          },
          {
            title: 'Artist',
            icon: 'icon-human-child'
          },
          {
            title: 'Genre',
            icon: 'icon-menu'
          }
        ]
      };
    },
    getDataForLayout5: function () {
      return {
          headerImage: 'img/background/9.jpg',
          containerBodyImage: "img/background/31.jpg",
          items: [{
            id: 1,
            title: 'Monument walk tour',
            description: '3:30min walking tour',
            price: '123$'
          },
          {
            id: 2,
            title: 'River walk tour',
            description: '3:30min walking tour',
            price: '123$'
          },
          {
            id: 3,
            title: 'City walk tour',
            description: '3:30min walking tour',
            price: '123$'
          },
          {
            id: 4,
            title: 'Park walk tour',
            description: '3:30min walking tour',
            price: '123$'
          },
          {
            id: 5,
            title: 'Vilage walk tour',
            description: '3:30min walking tour',
            price: '123$'
          },
          {
            id: 6,
            title: 'Lake walk tour',
            description: '3:30min walking tour',
            price: '123$'
          },
          {
            id: 7,
            title: 'Castle walk tour',
            description: '3:30min walking tour',
            price: '123$'
          },
          {
            id: 8,
            title: 'Beach walk tour',
            description: '3:30min walking tour',
            price: '123$'
          }
        ]
        };

    },
    getEvents: function () {
      return {
        onSearch: function (newValue, oldValue, data) {
          var results = [];
          if (newValue) {
            Toast.showToast("Search for " + newValue);
          }
          if (data) {
            results = data.filter(function(value){
                if (!newValue) {
                  return true;
                } else {
                  return value.title.toLowerCase().includes(newValue.toLowerCase());
                }
            });
          }
          return results;
        },
        onRecord: function () {
          Toast.showToast("Mic");
        }
      };
    },
    prepareParams: function (item) {
      return {
        searchBarsVisible: true,
        theme: item.theme,
        data: this.getDataForTheme(item.theme),
        events: this.getEvents()
      };
    }
  };
}]);
