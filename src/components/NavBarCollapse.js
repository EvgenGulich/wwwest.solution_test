import { Component } from '../libs/component';

export class NavBarCollapse extends Component {
    static get selector() {
        return '#nav-bar';
    }
    constructor(element) {
        super(element);
        this.$buttonOpen = this.element.querySelector('[data-nav-button]');
        this.$navOverlay = this.element.querySelector('[data-nav-overlay]');
        this.$navMenu = this.element.querySelector('[data-nav-menu]');
        this.$html = document.querySelector('html');
    }

    show() {
        this.$navOverlay.classList.remove('hide');
        this.$navMenu.classList.remove('hide');
        this.$navOverlay.classList.add('show');
        this.$navMenu.classList.add('show');
        this.$html.classList.add('overlay');
    }

    hide() {
        this.$navOverlay.classList.remove('show');
        this.$navMenu.classList.remove('show');
        this.$navMenu.classList.add('hide');
        this.$html.classList.remove('overlay');
        setTimeout(() => {
            this.$navOverlay.classList.add('hide');
        }, 1000)
    }

    navBarCollapse() {
        this.element.addEventListener('click', (event) => {
            console.log(this.$buttonOpen);
            console.log(event.target);
            const targetOpen = event.target.closest('.nav__button');
            const targetOverlay = event.target.closest('.nav__overlay');
            const targetClose = event.target.closest('.nav__close');
            if (targetOpen) {
                this.show();
            }
            else if (targetClose || targetOverlay) {
                this.hide();
            }
        });
    }

    initialize() {
        this.navBarCollapse();
    }
}
