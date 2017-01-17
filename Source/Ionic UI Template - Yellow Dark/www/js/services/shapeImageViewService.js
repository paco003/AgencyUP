App.factory('ShapeImageViewService', function () {
    return {
        getTitle: function() {
            return 'Shape Image Views';
        },
        getItemTitle: function(item) {
          return item ? item.title : '';
        },
        getAllThemes: function () {
            return [
                {
                    title: 'All',
                    theme: 'all'
                }
            ];
        },
      getDataForTheme: function(theme) {
          return this[
          'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getDataForAll: function () {
          return [
            { image: 'img/avatar/16.jpg', shape : "hexagonal_1"},
            { image: 'img/avatar/16.jpg', shape : "hexagonal_2"},
            { image: 'img/avatar/16.jpg', shape : "square_rounded"},
            { image: 'img/avatar/16.jpg', shape : "square_rounded_2"},
            { image: 'img/avatar/16.jpg', shape : "round"},
            { image: 'img/avatar/16.jpg', shape : "square_rounded_diagonal"},
            { image: 'img/avatar/16.jpg', shape : "trapez_down"},
            { image: 'img/avatar/16.jpg', shape : "trapez_right"},
            { image: 'img/avatar/16.jpg', shape : "baloon"},
            { image: 'img/avatar/16.jpg', shape : "pig"},
            { image: 'img/avatar/16.jpg', shape : "play"},
            { image: 'img/avatar/16.jpg', shape : "rewind"},
            { image: 'img/avatar/16.jpg', shape : "soundcloud"},
            { image: 'img/avatar/16.jpg', shape : "speaker"},
            { image: 'img/avatar/16.jpg', shape : "bag"},
            { image: 'img/avatar/16.jpg', shape : "basket"},
            { image: 'img/avatar/16.jpg', shape : "cart"},
            { image: 'img/avatar/16.jpg', shape : "cupshop"},
            { image: 'img/avatar/16.jpg', shape : "dollar"},
            { image: 'img/avatar/16.jpg', shape : "heksagonal"},
            { image: 'img/avatar/16.jpg', shape : "camera"},
            { image: 'img/avatar/16.jpg', shape : "heart"},
            { image: 'img/avatar/16.jpg', shape : "like"},
            { image: 'img/avatar/16.jpg', shape : "shit"},
            { image: 'img/avatar/16.jpg', shape : "speach_cloud"},
            { image: 'img/avatar/16.jpg', shape : "star"},
            { image: 'img/avatar/16.jpg', shape : "cloud"},
            { image: 'img/avatar/16.jpg', shape : "cup"},
            { image: 'img/avatar/16.jpg', shape : "house"},
            { image: 'img/avatar/16.jpg', shape : "pin"},
            { image: 'img/avatar/16.jpg', shape : "suitcase"},
            { image: 'img/avatar/16.jpg', shape : "truck"}

          ];
        },
        prepareParams: function(item) {
            return {
                shapeImageViewVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme)
            };
        }
    };
});
