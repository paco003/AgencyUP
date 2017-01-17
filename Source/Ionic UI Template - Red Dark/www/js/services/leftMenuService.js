App.factory("LeftMenuService", function () {

    return {
        getTitle: function () {
            return "Left Menus";
        },
        getAllThemes: function () {
            return [
                {
                  title: "Account header",
                  theme: 'layout1'
                },
                {
                  title: "Narrow",
                  theme: 'layout2'
                },
                {
                  title: "Profile header",
                  theme: 'layout3'
                },
                {
                  title: "Full width",
                  theme: 'layout4'
                },
                {
                  title: "Simple",
                  theme: 'layout5'
                }
            ];
        },
        getDataForLayout1: function() {
          return {
            title: 'UserName',
            description: 'username@gmail.com',
            image: 'img/avatar/0.jpg',
            containerBodyImage:  "img/background/31.jpg",
            items: [
              {

                icon: "icon-headphones",
                pagePath : "templates/leftMenuContent1.html",
                title: "Album"
              },
              {
                icon: "icon-human-child",
                pagePath : "templates/leftMenuContent2.html",
                title: "Artist"
              },
              {
                icon: "icon-menu",
                pagePath : "templates/leftMenuContent1.html",
                title: "Playlist"
              },
              {
                icon: "icon-soundcloud",
                pagePath : "templates/leftMenuContent2.html",
                title: "Stream"
              },
              {
                icon: "icon-poll",
                pagePath : "templates/leftMenuContent1.html",
                title: "Settings"
              }
            ]
          };
        },
        getDataForLayout2: function() {
          return {
            containerBodyImage:  "img/background/31.jpg",
            items: [
              {
                icon: "icon-menu",
                pagePath : "templates/leftMenuContent1.html",
                title: "Categories"
              },
              {
                icon: "icon-coin",
                pagePath : "templates/leftMenuContent2.html",
                title: "Discounts"
              },
              {
                icon: "icon-cart-outline",
                pagePath : "templates/leftMenuContent1.html",
                title: "My cart"
              },
              {
                icon: "icon-star",
                pagePath : "templates/leftMenuContent2.html",
                title: "My wishlist"
              },
              {
                icon: "icon-account",
                pagePath : "templates/leftMenuContent1.html",
                title: "My Account"
              },
              {
                icon: "icon-settings",
                pagePath : "templates/leftMenuContent2.html",
                title: "Settings"
              }
            ]
          };
        },
        getDataForLayout4: function() {
          return {
            title : "New York",
            icon: "icon-bike",
            headerImage: "img/background/16.jpg",
            containerBodyImage:  "img/background/31.jpg",
            items: [
              {
                icon: "icon-map-marker-radius",
                title: "Where To Go",
                pagePath : "templates/leftMenuContent1.html"
              },
              {
                icon: "icon-hotel",
                title: "Where To Sleep",
                pagePath: "templates/leftMenuContent2.html"
              },
              {
                icon: "icon-silverware-variant",
                title: "Where to Eat",
                pagePath : "templates/leftMenuContent1.html"
              },
              {
                icon: "icon-martini",
                title: "Where To Drink",
                pagePath : "templates/leftMenuContent2.html"
              },
              {
                icon: "icon-silverware-variant",
                title: "Where To Party",
                pagePath : "templates/leftMenuContent1.html"
              },
              {
                icon: "icon-coffee",
                title: "Where To Play",
                pagePath : "templates/leftMenuContent2.html"
              },
              {
                icon: "icon-bowling",
                title: "Where To Shop",
                pagePath : "templates/leftMenuContent1.html"
              }
            ]
          };
        },
        getDataForLayout3: function() {
          return {
            image: 'img/avatar/0.jpg',
            title : "Joe Smith",
            description : "from New York, USA",
            friend: "152 friends",
            iconFriend : "icon-account-multiple",
            message: "15 messages",
            iconMessage : "icon-comment",
            photo: "22 photos",
            iconPhoto : "icon-panorama",
            video: "2 videos",
            videoPhoto: "icon-video",
            containerBodyImage:  "img/background/31.jpg",
            items: [
              {
                icon : "icon-account",
                title : "Friends",
                description : "254 people",
                counter : "8",
                pagePath : "templates/leftMenuContent1.html"
              },
              {
                icon : "icon-account",
                title : "Enemies",
                description : "254 people",
                counter : "8",
                pagePath : "templates/leftMenuContent2.html"
              },
              {
                icon : "icon-account",
                title : "Natural",
                description : "254 people",
                counter : "8",
                pagePath : "templates/leftMenuContent1.html"
              },
              {
                icon : "icon-account",
                title : "Family",
                description : "254 people",
                counter : "8",
                pagePath : "templates/leftMenuContent2.html"
              },
              {
                icon : "icon-account",
                title : "Fuests",
                description : "254 people",
                counter : "8",
                pagePath : "templates/leftMenuContent1.html"
              },
              {
                icon : "icon-account",
                title : "Students",
                description : "254 people",
                counter : "8",
                pagePath : "templates/leftMenuContent2.html"
              }
            ]
          };
        },
        getDataForLayout5: function() {
          return {
            image: 'img/avatar/0.jpg',
            headerImage : "img/background/17.jpg",
            description: "dev@csform.com",
            containerBodyImage:  "img/background/31.jpg",
            items: [
              {
                icon : "icon-linkedin",
                pagePath : "templates/leftMenuContent1.html",
                title : "LinkedIn"
              },
              {
                icon : "icon-blogger",
                pagePath : "templates/leftMenuContent2.html",
                title : "Blog"
              },
              {
                icon : "icon-github-box",
                pagePath : "templates/leftMenuContent1.html",
                title : "GitHub"
              },
              {
                icon : "icon-pinterest",
                pagePath : "templates/leftMenuContent2.html",
                title : "Instagram"
              }
            ]
          };
        },
        getDataForTheme: function(theme) {
            return this[
                'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        prepareParams: function (item) {
            return {
                leftMenusVisible: true,
                theme: item.theme,
                items: this.getDataForTheme(item.theme)
            };
        }
    };
});
