import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
    $('.glazing_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1201,
            settings: {
                slidesToShow: 4,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                slidesToScroll: 1
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                slidesToScroll: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                slidesToScroll: 2
            }
        }, {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                slidesToScroll: 1
            }
        }]
    });
    $('.decoration_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                slidesToScroll: 1
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                slidesToScroll: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                slidesToScroll: 1
            }
        }]
    });
});   