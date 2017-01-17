App.factory('SpinnerService', [function () {
    return {
        getTitle: function () {
            return 'Spinner';
        },
        getItemTitle: function(item) {
            return item ? item.title : '';
        },
        getAllThemes: function() {
            return [
                {
                    title: 'All',
                    theme: 'all'
                }
            ];
        },
        getDataForTheme: function (theme) {
            return this['getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)]();
        },
        getDataForAll: function() {
            return {
                items: [
                    {'icon' : 'tail-spin'},
                    {'icon' : 'oval'},
                    {'icon' : 'audio'},
                    {'icon' : 'bars'},
                    {'icon' : 'hearts'},
                    {'icon' : 'three-dots'},
                    {'icon' : 'puff'},
                    {'icon' : 'grid'},
                    {'icon' : 'ball-triangle'},
                    {'icon' : 'circles'}
                ]
            };
        },
        getEventsForTheme: function(theme) {
            return this['getEventsFor' + theme.charAt(0).toUpperCase() + theme.slice(1)]();
        },
        getEventsForAll: function() {
            return;
        },
        prepareParams: function(item) {
            return {
                spinnerVisible: true,
                theme: item.theme,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
