App.factory('Toast', function () {
    return {
        showToast: function (message, duration) {
            Materialize.toast(
                message,
                duration || 1000,
                'rounded custom-toast'
            );
        }
    };
});