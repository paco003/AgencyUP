App.factory('TextViewService', function () {
  return {
    getTitle: function () {
      return 'Typo + small components';
    },
    getItemTitle: function (item) {
      return item ? item.title : '';
    },
    getAllThemes: function () {
      return [
        {
          title: 'All',
          theme: 'all'
        },
      ];
    },
    getEventsForTheme: function () {
    },
    getData: function () {
      return {
        header : "Typography",
        subheader: "Material design",
        title: "All set by Google instructions of Material design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      };
    },
    prepareParams: function (item) {
      return {
        textViewVisible: true,
        theme: item.theme,
        item: this.getData()
      };
    }
  };
});
