App.factory('WizardService', ['Toast', function(Toast) {
    return {
        getTitle: function() {
            return 'Wizard';
        },
        getItemTitle: function(item) {
            return item ? item.title : '';
        },
        getAllThemes: function() {
            return [
                {
                    title: 'Simple + icons',
                    theme: 'layout1'
                },
                {
                    title: 'Big image',
                    theme: 'layout2'
                },
                {
                    title: 'Big image + text',
                    theme: 'layout3'
                },
                {
                    title: 'With header',
                    theme: 'layout4'
                },
                {
                    title: 'Simple + big icons',
                    theme: 'layout5'
                }
            ];
        },
        getDataForTheme: function(theme) {
            return this[
                'getDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getDataForLayout1: function() {
            return {
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
            };
        },
        getDataForLayout2: function() {
            return {
              'btnNext': 'Next',
              'btnFinish': 'Finish',
              'items': [
                {
                  image: 'img/avatar-large/1.jpg',
                  title: 'Fragment Example 1',
                  button: 'Next'
                },
                {
                  image: 'img/avatar-large/2.jpg',
                  title: 'Fragment Example 2',
                  button: 'Next'
                },
                {
                  image: 'img/avatar-large/3.jpg',
                  title: 'Fragment Example 3',
                  button: 'Finish'
                }
              ]
            };
        },
        getDataForLayout3: function() {
            return {
              'btnNext': 'Next',
              'btnFinish': 'Finish',
              'items': [
                {
                  backgroundImage: 'img/avatar-large/5.jpg',
                  title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  button: 'Next',
                  skip : 'Skip'
                },
                {
                  backgroundImage: 'img/avatar-large/6.jpg',
                  title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 2',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  button: 'Next',
                  skip : 'Skip'
                },
                {
                  backgroundImage: 'img/avatar-large/7.jpg',
                  title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 3',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  button: 'Finish',
                  skip : 'Skip'
                }
              ]
            };
        },
        getDataForLayout4: function() {
            return {
              'btnSignIn' : "Sign In",
              'items': [
                {
                  image: 'img/background/6.jpg',
                  title: 'Fragment Example 1',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  button: 'Sign in'
                },
                {
                  image: 'img/background/8.jpg',
                  title: 'Fragment Example 2',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  button: 'Sign in'
                },
                {
                  image: 'img/background/13.jpg',
                  title: 'Fragment Example 3',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  button: 'Sign in'
                }
              ]
            };
        },
        getDataForLayout5: function() {
            return {
              'btnSkip': 'Skip',
              'items': [
                {
                  logo: '',
                  backgroundColor: '#455a64',
                  icon: 'icon-cloud-outline',
                  title: 'Fragment Example 1',
                  description: 'Text for Fragment Example 1 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                  button: 'Skip'
                },
                {
                  logo: '',
                  backgroundColor: '#37474f',
                  icon: 'icon-weather-rainy',
                  title: 'Fragment Example 2',
                  description: 'Text for Fragment Example 2 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                  button: 'Skip'
                },
                {
                  logo: '',
                  backgroundColor: '#263238',
                  icon: 'icon-weather-hail',
                  title: 'Fragment Example 3',
                  description: 'Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                  button: 'Skip'
                }
              ]
            };
        },
        getEventsForTheme: function(theme) {
            return this[
                'getEventsFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getEventsForLayout1: function() {
            return {
                onFinish: function() {
                    Toast.showToast("Finish");
                }
            };
        },
        getEventsForLayout2: function() {
            return {
                onFinish: function() {
                    Toast.showToast("Finish");
                }
            };
        },
        getEventsForLayout3: function() {
            return {
                onFinish: function() {
                    Toast.showToast("Finish");
                },
                onSkip: function() {
                    Toast.showToast("Skip");
                }
            };
        },
        getEventsForLayout4: function() {
           return {
                onSignIn: function() {
                    Toast.showToast("Sign in");
                }
            };
        },
        getEventsForLayout5: function() {
            return {
                onFinish: function() {
                    Toast.showToast("Finish");
                },
                onSkip: function() {
                    Toast.showToast("Skip");
                }
            };
        },
        prepareParams: function(item) {
            return {
                theme: item.theme,
                wizardVisible : true,
                data: this.getDataForTheme(item.theme),
                events: this.getEventsForTheme(item.theme)
            };
        }
    };
}]);
