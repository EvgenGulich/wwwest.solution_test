import Swiper, { Pagination, Navigation } from 'swiper';
Swiper.use([Pagination, Navigation]);
import { Component } from '../libs/component';

export class Slider extends Component {
    static get selector() {
        return '[data-slider]';
    }
    constructor(element) {
        super(element);
    }


    slider() {
        const optionsDefault = {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        };
            const slider = new Swiper(this.element, optionsDefault);
    }

    initialize() {
        this.slider();
    }
}
