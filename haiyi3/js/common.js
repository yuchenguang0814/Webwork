$(function () {
    tel_no();
    set_nav();
    fadeIn_animation();
});

function tel_no() {
    let ua = navigator.userAgent.toLowerCase();
    let isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);
    if (!isMobile) {
        $('a[href^="tel:"]').on('click', function (e) {
            e.preventDefault();
        });
        $('a[href^="tel:"]').css('pointer-events', 'none');
        $('a[href^="tel:"]').css('cursor', 'default');
    }
}

let scroll = new SmoothScroll('a[href*="#"]', {
    header: '#cmnhd',
    speed: 400,
});

function set_nav() {
    $('#cmnhd_menu, .cmnnav a[href*="#"]').on('click', function () {
        $(this).toggleClass('-open');
        $('#cmnnav').fadeToggle(200);
        $('body, .cmnhd_logo, .cmnhd_nav, .cmnhd_contact').toggleClass('-open');
        $('.cmnhd_menu_btn, .cmnhd_menu_btn .-menu, .cmnhd_menu_btn .-close').toggleClass('-open');
    });

    var header = $('.cmnhd_nav');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 100) {
            header.removeClass('-hide');
        } else {
            header.addClass('-hide');
        }
        pos = $(this).scrollTop();
    });
};



$(window).on('load', function () {
    $('body').addClass('-load');
    sidemenu_height();
});

function sidemenu_height() {
    var mainH = $(".main_body").height();
    $(".main_side").css('height', mainH - '450' + 'px');
    // console.log(mainH);
};

function archive_change(op) {
    let i = op.selectedIndex,
        link = op.options[i].value;
    location.href = link;
};

function fadeIn_animation() {
    gsap.utils.toArray(".-fadeIn").forEach((target) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: target,
                start: "center bottom-=100px",
                end: "center top",
                toggleClass: { targets: target, className: "-active" },
                // toggleActions: "play none none reverse",
                once: true,
                // markers: true,
            }
        })
    });
    gsap.utils.toArray(".-fadeInImg").forEach((target) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: target,
                start: "center bottom-=100px",
                end: "center top",
                toggleClass: { targets: target, className: "-active" },
                once: true,
                // markers: true,
            }
        })
    });
};