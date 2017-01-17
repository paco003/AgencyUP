App.factory(
    'ListViewService',
    [
        'ListViewExpandableService',
        'ListViewDragAndDropService',
        'ListViewSwipeToDismissService',
        'ListViewAppearanceAnimationService',
        'ListViewStickyHeaderService',
        'ListViewGoogleCardService',
        function (
            ListViewExpandableService,
            ListViewDragAndDropService,
            ListViewSwipeToDismissService,
            ListViewAppearanceAnimationService,
            ListViewStickyHeaderService,
            ListViewGoogleCardService
        ) {
            var services = {
                expandable: ListViewExpandableService,
                dragAndDrop: ListViewDragAndDropService,
                swipeToDismiss: ListViewSwipeToDismissService,
                appearanceAnimations: ListViewAppearanceAnimationService,
                stickyListHeaders: ListViewStickyHeaderService,
                googleCards: ListViewGoogleCardService
            };
            
            return {
                getTitle: function(item) {
                    return (item && services[item]) ? services[item].getTitle() : 'List Views';
                },
                getItemTitle: function(item, service) {
                    var callService = services[service];
                    
                    return (callService && callService.getItemTitle) ? callService.getItemTitle(item) : '';
                },
                getAllThemes: function(item) {
                    if (item && services[item]) {
                        return services[item].getAllThemes();
                    }

                    return [
                        {
                            title: 'Expandable',
                            theme: 'expandable',
                            url: 'listViews/expandable'
                        },
                        {
                            title: 'Drag&Drop',
                            theme: 'dragAndDrop',
                            url: 'listViews/dragAndDrop'
                        },
                        {
                            title: 'Swipe-to-dismiss',
                            theme: 'swipeToDismiss',
                            url: 'listViews/swipeToDismiss'
                        },
                        {
                            title: 'Appearance animations',
                            theme: 'appearanceAnimation',
                            url: 'listViews/appearanceAnimations'
                        },
                        {
                            title: 'Sticky list headers',
                            theme: 'stickyListHeaders',
                            url: 'listViews/stickyListHeaders'
                        },
                        {
                            title: 'Google Cards',
                            theme: 'googleCards',
                            url: 'listViews/googleCards'
                        }
                    ];
                },
                prepareParams: function (item, subitem) {
                    return services[subitem] ? services[subitem].prepareParams(item) : {};
                }
            };
        }
    ]
);