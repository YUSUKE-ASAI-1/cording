"use strict"
const mySwiper = new Swiper('.swiper', {
    loop: true,

    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 2
        }
    },

    speed: 700,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

"use strict"
$(function () {
    $('#hamburger').on('click', function () {
        $('.icon').toggleClass('open');
        $('.sm').slideToggle();
    })
})

"use strict"
$(function () {
    $('.eisei').on('click', function () {
        $('.eisei-menu').toggleClass('open');
        $('.eisei-lis').slideToggle();
    })
})

"use strict"
$(function () {
    $('.kyo').on('click', function () {
        $('.kyo-menu').toggleClass('open');
        $('.kyo-lis').slideToggle();
    })
})

"use strict"
$(function () {
    $('.sa').on('click', function () {
        $('sa-menu').toggleClass('open');
        $('.sa-lis').slideToggle();
    })
})

"use strict"
$(function () {
    $(window).scroll(function () {
        $('.samon').css({
            'opacity': '0',
            'transform': 'translateY(30px)'
        });

        var scroll = $(window).scrollTop();

        var windowHeight = $(window).height();

        $('.samon').each(function () {
            var elemPos = $(this).offset().top;
            if (scroll > elemPos - windowHeight + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateX(0)'
                });
            }
        });
    });
});

"use strict"
$(function () {
    $(window).scroll(function () {
        $('.cofe').css({
            'opacity': '0',
            'transform': 'translateY(30px)'
        });

        var scroll = $(window).scrollTop();

        var windowHeight = $(window).height();

        $('.cofe').each(function () {
            var elemPos = $(this).offset().top;
            if (scroll > elemPos - windowHeight + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateX(0)'
                });
            }
        });
    });
});

"use strict"
$(function () {
    $(window).scroll(function () {
        $('.ofood').css({
            'opacity': '0',
            'transform': 'translateY(30px)'
        });

        var scroll = $(window).scrollTop();

        var windowHeight = $(window).height();

        $('.ofood').each(function () {
            var elemPos = $(this).offset().top;

            if (scroll > elemPos - windowHeight + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateX(0)'
                });
            }
        });
    });
});

"use strict"
$(function () {
    $(window).scroll(function () {
        $('.blackcoffee').css({
            'opacity': '0',
            'transform': 'translateY(30px)'
        });

        var scroll = $(window).scrollTop();

        var windowHeight = $(window).height();

        $('.blackcoffee').each(function () {
            var elemPos = $(this).offset().top;

            if (scroll > elemPos - windowHeight + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateX(0)'
                });
            }
        });
    });
});

"use strict"
$(function () {
    $(window).scroll(function () {
        $('.tenpo').css({
            'opacity': '0',
            'transform': 'translateY(30px)'
        });

        var scroll = $(window).scrollTop();

        var windowHeight = $(window).height();

        $('.tenpo').each(function () {
            var elemPos = $(this).offset().top;

            if (scroll > elemPos - windowHeight + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateX(0)'
                });
            }
        });
    });
});