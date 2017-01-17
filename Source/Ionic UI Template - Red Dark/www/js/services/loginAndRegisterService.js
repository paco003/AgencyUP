App.factory('LoginAndRegisterService', ['Toast', function(Toast){
    return {
        getTitle: function(){
            return 'Login Pages';
        },
        getItemTitle: function(item) {
            return item ? item.title : '';
        },
        getAllThemes: function(){
            return [
                {
                    title: 'Login + logo',
                    type: 'login',
                    theme: 'layout1'
                },
                {
                    title: 'Login + logo 2',
                    type: 'login',
                    theme: 'layout2'
                },
                {
                    title: 'Login + logo 3',
                    type: 'login',
                    theme: 'layout3'
                },
                {
                    title: 'Login + logo 4',
                    type: 'login',
                    theme: 'layout4'
                },
                {
                    title: 'Register + image',
                    type: 'register',
                    theme: 'layout1'
                },
                {
                    title: 'Register + logo',
                    type: 'register',
                    theme: 'layout2'
                }
            ];
        },
        getLoginDataForTheme: function(theme){
            return this[
                'getLoginDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getLoginDataForLayout1: function(){
            return {
                containerBodyImage: 'img/background/31.jpg',
                logo : "img/logo/login-media.png",
                username: 'Username',
                password: 'Password',
                register: 'Register',
                login: 'Login',
                iconAccount: 'icon-account',
                iconKey: 'icon-key',
                facebook: 'Facebook',
                twitter: 'Twitter',
                google: 'Google',
                pinterest: 'Pinterest',
                signInWith: 'Or sign in with:'
            };
        },
        getLoginDataForLayout2: function(){
            return {
                containerBodyImage: 'img/background/31.jpg',
                logo : "img/logo/login-media.png",
                username: 'Username',
                password: 'Password',
                skip: 'Skip',
                register: 'Register',
                login: 'Login',
                facebook: 'Facebook',
                twitter: 'Twitter',
                google: 'Google',
                pinterest: 'Pinterest',
                signInWith: 'Or sign in with:'
            };
        },
        getLoginDataForLayout3: function(){
            return {
                containerBodyImage: 'img/background/31.jpg',
                logo : "img/logo/login-social.png",
                username: 'Username',
                password: 'Password',
                skip: 'Skip',
                register: 'Register',
                login: 'Login',
                facebook: 'Facebook',
                twitter: 'Twitter',
                google: 'Google',
                pinterest: 'Pinterest',
                signInWith: 'Or sign in with:'
            };
        },
        getLoginDataForLayout4: function(){
            return {
                containerBodyImage: 'img/background/31.jpg',
                logo : "img/logo/login-travel.png",
                username: 'Username',
                password: 'Password',
                skip: 'Skip',
                register: 'Register',
                login: 'Login',
                iconAccount: 'icon-account',
                iconLock: 'icon-lock',
                facebook: 'Facebook',
                twitter: 'Twitter',
                google: 'Google',
                pinterest: 'Pinterest',
                signInWith: 'Or sign in with:'
            };
        },
        getRegisterDataForTheme: function(theme){
            return this[
                'getRegisterDataFor' + theme.charAt(0).toUpperCase() + theme.slice(1)
            ]();
        },
        getRegisterDataForLayout1: function(){
            return {
                containerBodyImage: 'img/background/31.jpg',
                logo : "img/logo/login-shop.png",
                iconAccount: 'icon-account',
                iconAccountMultiple: 'icon-account-multiple',
                iconHome: 'icon-home-variant',
                iconCity: 'icon-city',
                iconWeb: 'icon-web',
                button: 'submit',
                username: 'Username',
                password: 'Password',
                address: 'Address',
                city: 'City',
                state: 'State'

            };
        },
        getRegisterDataForLayout2: function(){
            return {
                containerBodyImage: 'img/background/31.jpg',
                logo: 'img/logo/login-register.png',
                title: 'Register',
                username: 'Username',
                password: 'Password',
                email: 'Email',
                country: 'Country',
                city: 'City',
                register: 'Register',
                skip: 'Skip',
                iconAccount: 'icon-account',
                iconLock: 'icon-lock',
                iconEmail: 'icon-email-outline',
                iconFlag: 'icon-flag-outline-variant',
                iconCity: 'icon-city'
            };
        },
        getLoginEvents: function(){
            return {
                onLogin: function(params){
                    Toast.showToast('LOGIN');
                },
                onRegister: function(params) {
                    Toast.showToast('REGISTER');
                },
                onSkip: function(params) {
                    Toast.showToast('SKIP');
                },
                onFacebook: function(params) {
                    Toast.showToast('Facebook');
                },
                onTwitter: function(params) {
                    Toast.showToast('Twitter');
                },
                onGoogle: function(params) {
                    Toast.showToast('Google');
                },
                onPinterest: function(params) {
                    Toast.showToast('Pinterest');
                }
            };
        },
        getRegisterEvents: function(){
            return {
                onRegister: function(params){
                    Toast.showToast('REGISTER');
                },
                onSkip: function(params){
                    Toast.showToast('SKIP');
                }
            };
        },
        prepareLoginParams: function(item){
            return {
                loginPagesVisible: true,
                theme: item.theme,
                data: this.getLoginDataForTheme(item.theme),
                events: this.getLoginEvents()
            };
        },
        prepareRegisterParams: function(item){
            return {
                registerPagesVisible: true,
                theme: item.theme,
                data: this.getRegisterDataForTheme(item.theme),
                events: this.getRegisterEvents()
            };
        },
        prepareParams: function(item){
            return this[
                'prepare' + item.type.charAt(0).toUpperCase() + item.type.slice(1) + 'Params'
            ](item);
        }
    };
}]);
