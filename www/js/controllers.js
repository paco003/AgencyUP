angular.module('controllers', [])
	   .controller('SplashScreenCtrl', ['$scope', function($scope) {
       $scope.params = {
    'data': {
       'duration' : 3000,
       'backgroundImage' : 'img/background/31.jpg',
       'logo' : 'img/logo/login-universal-light.png',
       'redirectTo' : '/wizard'
     },
    'theme' : "layout1"
  };
	}])

  .controller('WizardCtrl', ['$scope', '$location', function($scope, $location) {
$scope.params = {
   'data': {
     'containerBodyImage': 'img/background/31.jpg',
     'btnPrev': 'Previous',
     'btnNext': 'Next',
     'btnFinish': 'Finish',
     'items': [
	 {
	   logo: '',
	   iconSlider: 'icon-star-outline',
	   title: 'Fragment Example 1',
	   description: 'Text for Fragment Example 1 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	   buttonNext: 'Next'
	 },
	 {
	   logo: '',
	   iconSlider: 'icon-star-half',
	   title: 'Fragment Example 2',
	   description: 'Text for Fragment Example 2 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	   buttonNext: 'Next',
	   buttonPrevious: 'Previous'
	  },
	  {
	   logo: '',
	   iconSlider: 'icon-star',
	   title: 'Fragment Example 3',
	   description: 'Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	   buttonPrevious: 'Previous',
	   buttonFinish: 'Finish'

	   }
	    ]
	  },
     'events' : {
	 onFinish: function() {
	 $location.path("/leftMenu");
	}
      },
    'theme' : "layout1"
    }
}])

.controller('LeftMenuCtrl', ['$scope', function($scope) {
 	$scope.params = {
	    'items': {
	      title: 'UserName',
	      description: 'username@gmail.com',
	      image: 'img/avatar/0.jpg',
	      containerBodyImage:  "img/background/31.jpg",
	      items: [
	        {
	          icon: "icon-headphones",
	          pagePath : "templates/leftMenuPage1.html",
	          title: "Album"
	        },
	        {
	          icon: "icon-human-child",
	          pagePath : "templates/leftMenuPage2.html",
	          title: "Artist"
	        }
	      ]
	    },
	    'theme' : "layout1"
  	};
}])


.controller('ParallaxCtrl', ['$scope', function($scope) {
  $scope.params = {
    'data': {
          headerImage: 'img/background/14.jpg',
          containerBodyImage : 'img/background/31.jpg',
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
    },
    'events' : {
        onPlay: function(item) {
        },
        onNext: function(item) {
        },
        onPrevious: function(item) {
        },
        onLike: function(item) {
        },
        onFavorite: function(item) {
        },
        onShare: function(item) {
        },
        onItemClick: function(item) {
        }
    },
    'theme' : "layout1"
  };
}])


.controller('GoogleListCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.params = {
    'data': {
        title: 'PlaylistName',
        description: 'Author:Username',
        containerBodyImage: 'img/background/31.jpg',
        duration: '35:72',
        refreshMessage : 'Pull to refresh...',
        items: [
            {
                id: 1,
                title: 'Atrist Name',
                image: 'img/avatar-small/0.jpg',
                description: 'Birth year: 1984',
                shortDescription: 'Country: Germany',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant'
            },
            {
                id: 2,
                title: 'Atrist Name',
                image: 'img/avatar-small/1.jpg',
                description: 'Birth year: 1980',
                shortDescription: 'Country: Germany',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant'
            },
            {
                id: 3,
                title: 'Atrist Name',
                image: 'img/avatar-small/2.jpg',
                description: 'Birth year: 1984',
                shortDescription: 'Country: Germany',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant'
            },
            {
                id: 4,
                title: 'Atrist Name',
                image: 'img/avatar-small/3.jpg',
                description: 'Birth year: 1984',
                shortDescription: 'Country: Germany',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant'
            },
            {
                id: 5,
                title: 'Atrist Name',
                image: 'img/avatar-small/4.jpg',
                description: 'Birth year: 1984',
                shortDescription: 'Country: Germany',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant'
            },
            {
                id: 6,
                title: 'Atrist Name',
                image: 'img/avatar-small/5.jpg',
                description: 'Birth year: 1984',
                shortDescription: 'Country: Germany',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant'
            },
            {
                id: 7,
                title: 'Atrist Name',
                image: 'img/avatar-small/6.jpg',
                description: 'Birth year: 1984',
                shortDescription: 'Country: Germany',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant'
            },
            {
                id: 8,
                title: 'Atrist Name',
                image: 'img/avatar-small/7.jpg',
                description: 'Birth year: 1984',
                shortDescription: 'Country: Germany',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                iconLike: 'icon-thumb-up',
                iconFavorite: 'icon-heart',
                iconShare: 'icon-share-variant'
            }
        ]
    },
    'events' : {
        onLike: function(item) {
            Toast.showToast('Like ' + item.id);
        },
        onFavorite: function(item) {
            Toast.showToast('Favorite ' + item.id);
        },
        onShare: function(item) {
            Toast.showToast('Share ' + item.id);
        },
        doRefresh: function () {
          $timeout(function () {
            $rootScope.$broadcast('scroll.refreshComplete');
          }, 2000);
        }
    },
    'theme' : "layout1"
  }
}])
