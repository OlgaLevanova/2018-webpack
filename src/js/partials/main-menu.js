import Helpers from '../modules/helpers';

const MainMenu = {
    mainMenu: null,
    vars: {
        bodyHiddenClass: 'overflowHidden',
        activeClass: 'active-js',
        openUlClass: 'open-js',
        openLiClass: 'open-li-js',
        activeMenuClass: 'menu-opened-js',
        navBarScrolledClass: 'scrolled',
        navMenuClass: 'sib-nav__level-1',
    },
    bindEvents: () => {

        // Set all variables
        MainMenu.setVars();

        // Init top menu
        if (MainMenu.MainMenuLevel1) {
            MainMenu.initMainMenuDesktop();
            MainMenu.initMainMenuMobile();
            MainMenu.hamburgerMenuSwitch();
            MainMenu.initSwitchHeader();
        }
    },
    setVars: () => {
        MainMenu.htmlEl = document.getElementsByTagName('html')[0];
        MainMenu.body = document.getElementsByTagName('body')[0];
        MainMenu.mainMenu = document.getElementsByClassName(MainMenu.vars.navMenuClass)[0];
    },
    initMainMenuDesktop: () => {
        // Init Desktop menu
    },
    initMainMenuMobile: () => {
        // Init Mobile menu
    },
    initSwitchHeader: () => {
        let screenOffset = 20;

        window.addEventListener('scroll', function(e) {
            let scrollY = window.pageYOffset;

            if (!MainMenu.sibNavBar.classList.contains(MainMenu.vars.navBarScrolledClass) && scrollY >= screenOffset) {
                MainMenu.sibNavBar.classList.add(MainMenu.vars.navBarScrolledClass);
            }
            if (MainMenu.sibNavBar.classList.contains(MainMenu.vars.navBarScrolledClass) && scrollY < screenOffset) {
                MainMenu.sibNavBar.classList.remove(MainMenu.vars.navBarScrolledClass);
            }
        });
    },
    hamburgerMenuSwitch: () => {
        // Init Mobile menu
    }
};

export default MainMenu;
