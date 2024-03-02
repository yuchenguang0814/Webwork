// const lenis = new Lenis();

// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

const heroOptions = {
    type: 'fade',
    rewind: true,
    autoplay: true,
    arrows: false,
    pagination: false,
    speed: 2500,
    interval: 3500,
    pauseOnHover: false,
    pauseOnFocus: false,
}

const heroSplide = new Splide('.hero_slide', heroOptions);
heroSplide.mount();

const powerOptions = {
    type: 'fade',
    rewind: true,
    autoplay: true,
    arrows: false,
    speed: 2500,
    interval: 3500,
    pauseOnHover: false,
    pauseOnFocus: false,
}

const powerSplide = new Splide('.power_slide', powerOptions);
powerSplide.mount();


$(function () {
    $(".biz_cnt.-service").hover(
        function () {
            $(".biz_bg").addClass("-service");
        },
        function () {
            $(".biz_bg").removeClass("-service");
        }
    );
    $(".biz_cnt.-work").hover(
        function () {
            $(".biz_bg").addClass("-work");
        },
        function () {
            $(".biz_bg").removeClass("-work");
        }
    );
});

$(function () {
    $(".recruit_btn_wrap.-message").hover(
        function () {
            $(".recruit_img_wrap").addClass("-message");
        },
        function () {
            $(".recruit_img_wrap").removeClass("-message");
        }
    );
    $(".recruit_btn_wrap.-recruitment").hover(
        function () {
            $(".recruit_img_wrap").addClass("-recruitment");
        },
        function () {
            $(".recruit_img_wrap").removeClass("-recruitment");
        }
    );
});


ScrollTrigger.matchMedia({
    "(min-width: 1241px)": function () {
        const container = document.getElementById("main_wrap_yoko");
        const panels = document.querySelectorAll('.panel')
        const scrollTween = gsap.to(container, {
            x: -(container.scrollWidth - container.clientWidth),
            ease: "none", // <-- IMPORTANT!
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: `+=${container.scrollWidth}`,
                pin: true,
                scrub: 0,
                // snap: {
                //     snapTo: 1 / (panels.length - 1), // スナップで移動させる位置
                //     duration: { min: 0.4, max: 0.6 }, // スナップで移動する際の遅延時間
                //     ease: "none"
                // },
                // markers: true,
            }
        });

        gsap.to(".body.-home", {
            backgroundColor: "#474645",
            duration: 0.3,
            scrollTrigger: {
                trigger: ".-sec03",
                start: "left+=30% right",
                end: "right+=10% right",
                containerAnimation: scrollTween,
                toggleActions: "play reset play reset",
                // markers: true,
            }
        });

        gsap.to(".body.-home", {
            backgroundColor: "#ffffff",
            duration: 0.3,
            scrollTrigger: {
                trigger: ".-sec04",
                start: "left+=30% right",
                end: "right+=10% right",
                containerAnimation: scrollTween,
                toggleActions: "play reset play reset",
                // markers: true,
            }
        });

        gsap.to(".main_bgcolor_object", {
            scale: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".biz",
                start: "top+=32% bottom",
                end: "bottom+=250% bottom",
                toggleActions: "play none none reverse",
                // markers: true,
            }
        });

        gsap.to(".biz_cnt", {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".biz",
                start: "top+=34% bottom",
                end: "top+=40% bottom",
                toggleActions: "play none none reset",

                // markers: true,
            }
        });

        ScrollTrigger.create({
            trigger: ".biz",
            pin: ".biz",
            start: "top-=10% top",
            end: "bottom+=30% top",
            anticipatePin: 1,
            pinSpacing: false,
            // markers: true,
        });


        document.querySelectorAll(".fadeUpTrigger").forEach((el, index) => {
            ScrollTrigger.create({
                trigger: el,
                id: index + 1,
                start: 'top bottom-=40%',
                toggleClass: { targets: el, className: "-active" },
                // markers: true,
            });
        });

        document.querySelectorAll(".fadeUpTriggerYoko").forEach((el, index) => {
            ScrollTrigger.create({
                trigger: el,
                id: index + 1,
                start: "left+=20% center",
                toggleClass: { targets: el, className: "-active" },
                containerAnimation: scrollTween,
                // markers: true,
            });
        });

        window.addEventListener('load', () => {
            LottieAnimation0101();
            LottieAnimation0102();
            LottieAnimation0201();
            LottieAnimation0202();
            LottieAnimation0301();
            LottieAnimation0302();
        });

        function LottieAnimation0101() {
            const ani = lottie.loadAnimation({
                container: document.getElementById('lottie_object1-1'), // アニメーションを追加する要素
                renderer: 'svg', // レンダリングのタイプ
                loop: true, // アニメーションをループさせるかどうか
                autoplay: true, // アニメーションを自動再生するかどうか
                path: '/img/home/data1-1.json', // アニメーションのjsonファイルのパス
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: '.-sec01',
                    start: "0 right",
                    end: "right+=20% right",
                    containerAnimation: scrollTween,
                    onEnter: function () {
                        ani.play();
                    },
                    onEnterBack: function () {
                        ani.play();
                    },
                    onLeave: function () {
                        ani.stop();
                    },
                    onLeaveBack: function () {
                        ani.stop();
                    },
                    // markers: true,
                },
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: '.-sec01',
                    start: "right+=20% right",
                    end: "right+=1000% right",
                    toggleClass: { targets: ".lottie_object.-part1-1", className: "-passive" },
                    containerAnimation: scrollTween,
                    // markers: true,
                },
            });
        };

        function LottieAnimation0102() {
            let scrollProgress = 0;
            let scrollFlag = true;
            let ani = lottie.loadAnimation({
                container: document.getElementById('lottie_object1-2'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: '/img/home/data1-2.json',
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: '.-sec02',
                    start: "left+=20% right",
                    end: "left+=80% right",
                    toggleClass: { targets: ".lottie_object.-part1-2", className: "-active" },
                    containerAnimation: scrollTween,
                    onUpdate: function (self) {
                        scrollProgress = self.progress;
                        // console.log(self.progress);
                    },
                    // markers: true,
                },
            });

            gsap.ticker.add(onRaf);
            function onRaf() {
                if (scrollFlag) {
                    let frame = scrollProgress * 90;
                    ani.goToAndStop(frame, true);
                }
            };
        };

        function LottieAnimation0201() {
            const ani = lottie.loadAnimation({
                container: document.getElementById('lottie_object2-1'),
                renderer: 'svg',
                loop: true,
                autoplay: false,
                path: '/img/home/data2-1.json'
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: '.-sec02',
                    start: "left+=80% right",
                    end: "right+=20% right",
                    toggleClass: { targets: ".lottie_object.-part2-1", className: "-active" },
                    containerAnimation: scrollTween,
                    onEnter: function () {
                        ani.play();
                    },
                    onEnterBack: function () {
                        ani.play();
                    },
                    onLeave: function () {
                        ani.stop();
                    },
                    onLeaveBack: function () {
                        ani.stop();
                    },
                    // markers: true,
                },
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: '.-sec02',
                    start: "right+=20% right",
                    end: "right+=1000% right",
                    toggleClass: { targets: ".lottie_object.-part2-1", className: "-passive" },
                    containerAnimation: scrollTween,
                    // markers: true,
                },
            });
        };

        function LottieAnimation0202() {
            let scrollProgress = 0;
            let scrollFlag = true;
            let ani = lottie.loadAnimation({
                container: document.getElementById('lottie_object2-2'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: '/img/home/data2-2.json',
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: ".-sec03",
                    start: "left+=20% right",
                    end: "left+=90% right",
                    toggleClass: { targets: ".lottie_object.-part2-2", className: "-active" },
                    containerAnimation: scrollTween,
                    onUpdate: function (self) {
                        scrollProgress = self.progress;
                    },
                    // markers: true,
                },
            });

            gsap.ticker.add(onRaf);
            function onRaf() {
                if (scrollFlag) {
                    let frame = scrollProgress * 180;
                    ani.goToAndStop(frame, true);
                }
            };
        };

        function LottieAnimation0301() {
            const ani = lottie.loadAnimation({
                container: document.getElementById('lottie_object3-1'),
                renderer: 'svg',
                loop: true,
                autoplay: false,
                path: '/img/home/data3-1.json'
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: '.-sec03',
                    start: "left+=90% right",
                    end: "right+=50% right",
                    toggleClass: { targets: ".lottie_object.-part3-1", className: "-active" },
                    containerAnimation: scrollTween,
                    onEnter: function () {
                        ani.play();
                    },
                    onEnterBack: function () {
                        ani.play();
                    },
                    onLeave: function () {
                        ani.stop();
                    },
                    onLeaveBack: function () {
                        ani.stop();
                    },
                    // markers: true,
                },
            });
        };


        function LottieAnimation0302() {
            let scrollProgress = 0;
            let scrollFlag = true;
            let ani = lottie.loadAnimation({
                container: document.getElementById('lottie_object3-2'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: '/img/home/data3-2.json',
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: ".-sec03",
                    start: "right+=50% right",
                    end: "right+=80% right",
                    toggleClass: { targets: ".lottie_object.-part3-2", className: "-active" },
                    containerAnimation: scrollTween,
                    onUpdate: function (self) {
                        scrollProgress = self.progress;
                    },
                    // markers: true,
                },
            });

            gsap.ticker.add(onRaf);
            function onRaf() {
                if (scrollFlag) {
                    let frame = scrollProgress * 6;
                    ani.goToAndStop(frame, true);
                }
            };
        };


    },

    "(max-width: 1240px)": function () {
        const container = document.getElementById("main_wrap_yoko");
        const panels = document.querySelectorAll('.panel')
        gsap.to(container, {
            y: -(container.scrollHeight - container.clientHeight),
            ease: "none", // <-- IMPORTANT!
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: `+=${container.scrollHeight}`,
                scrub: 0,
                // snap: {
                //     snapTo: 1 / (panels.length - 1), // スナップで移動させる位置
                //     duration: { min: 0.4, max: 0.6 }, // スナップで移動する際の遅延時間
                //     ease: "none"
                // },
                // markers: true,
            }
        });

        gsap.to(".body.-home", {
            backgroundColor: "#474645",
            duration: 0.3,
            scrollTrigger: {
                trigger: ".-sec03",
                start: "top+=30% bottom",
                end: "bottom+=30% bottom",
                toggleActions: "play reset play reset",
                // markers: true,
            }
        });

        gsap.to(".body.-home", {
            backgroundColor: "#ffffff",
            duration: 0.3,
            scrollTrigger: {
                trigger: ".-sec04",
                start: "top+=30% bottom",
                end: "bottom+=10% bottom",
                toggleActions: "play reset play reset",
                // markers: true,
            }
        });

        gsap.to(".main_bgcolor_object", {
            scale: 1,
            duration: 0.2,
            scrollTrigger: {
                trigger: ".biz",
                start: "top+=50% bottom",
                end: "bottom+=250% bottom",
                toggleActions: "play none none reverse",
                // markers: true,
            }
        });

        gsap.to(".biz_cnt", {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".biz",
                start: "top+=34% bottom",
                end: "top+=40% bottom",
                toggleActions: "play none none reset",
                // markers: true,
            }
        });

        ScrollTrigger.create({
            trigger: ".biz",
            pin: ".biz",
            start: "top+=40% top",
            end: "bottom+=30% top",
            anticipatePin: 1,
            pinSpacing: false,
            // markers: true,
        });

        window.addEventListener('load', () => {
            LottieAnimation0101();
            LottieAnimation0102();
            LottieAnimation0201();
            LottieAnimation0202();
            LottieAnimation0301();
            LottieAnimation0302();
        });


        function LottieAnimation0101() {
            const ani = lottie.loadAnimation({
                container: document.getElementById('lottie_object1-1'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/img/home/data1-1.json',
            });
            gsap.to(ani, {
                scrollTrigger: {
                    trigger: '.-sec01',
                    start: "0 bottom",
                    end: "bottom+=20% bottom",

                    onEnter: function () {
                        ani.play();
                    },
                    onEnterBack: function () {
                        ani.play();
                    },
                    onLeave: function () {
                        ani.stop();
                    },
                    onLeaveBack: function () {
                        ani.stop();
                    },
                    // markers: true,
                },
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: '.-sec01',
                    start: "right+=20% right",
                    end: "right+=1000% right",
                    toggleClass: { targets: ".lottie_object.-part1-1", className: "-passive" },
                    // markers: true,
                },
            });
        };

        function LottieAnimation0102() {
            let scrollProgress = 0;
            let scrollFlag = true;
            let ani = lottie.loadAnimation({
                container: document.getElementById('lottie_object1-2'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: '/img/home/data1-2.json',
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: '.-sec02',
                    start: "left+=20% right",
                    end: "left+=80% right",
                    toggleClass: { targets: ".lottie_object.-part1-2", className: "-active" },
                    onUpdate: function (self) {
                        scrollProgress = self.progress;
                        // console.log(self.progress);
                    },
                    // markers: true,
                },
            });

            gsap.ticker.add(onRaf);
            function onRaf() {
                if (scrollFlag) {
                    let frame = scrollProgress * 90;
                    ani.goToAndStop(frame, true);
                }
            };
        };

        function LottieAnimation0201() {
            const ani = lottie.loadAnimation({
                container: document.getElementById('lottie_object2-1'),
                renderer: 'svg',
                loop: true,
                autoplay: false,
                path: '/img/home/data2-1.json'
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: '.-sec02',
                    start: "left+=80% right",
                    end: "right+=20% right",
                    toggleClass: { targets: ".lottie_object.-part2-1", className: "-active" },
                    onEnter: function () {
                        ani.play();
                    },
                    onEnterBack: function () {
                        ani.play();
                    },
                    onLeave: function () {
                        ani.stop();
                    },
                    onLeaveBack: function () {
                        ani.stop();
                    },
                    // markers: true,
                },
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: '.-sec02',
                    start: "right+=20% right",
                    end: "right+=1000% right",
                    toggleClass: { targets: ".lottie_object.-part2-1", className: "-passive" },
                    // markers: true,
                },
            });

        };

        function LottieAnimation0202() {
            let scrollProgress = 0;
            let scrollFlag = true;
            let ani = lottie.loadAnimation({
                container: document.getElementById('lottie_object2-2'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: '/img/home/data2-2.json',
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: ".-sec03",
                    start: "left+=20% right",
                    end: "left+=90% right",
                    toggleClass: { targets: ".lottie_object.-part2-2", className: "-active" },
                    onUpdate: function (self) {
                        scrollProgress = self.progress;
                    },
                    // markers: true,
                },
            });

            gsap.ticker.add(onRaf);
            function onRaf() {
                if (scrollFlag) {
                    let frame = scrollProgress * 180;
                    ani.goToAndStop(frame, true);
                }
            };
        };

        function LottieAnimation0301() {
            const ani = lottie.loadAnimation({
                container: document.getElementById('lottie_object3-1'),
                renderer: 'svg',
                loop: true,
                autoplay: false,
                path: '/img/home/data3-1.json'
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: '.-sec03',
                    start: "top+=90% bottom",
                    end: "bottom+=30% bottom",
                    toggleClass: { targets: ".lottie_object.-part3-1", className: "-active" },
                    onEnter: function () {
                        ani.play();
                    },
                    onEnterBack: function () {
                        ani.play();
                    },
                    onLeave: function () {
                        ani.stop();
                    },
                    onLeaveBack: function () {
                        ani.stop();
                    },
                    // markers: true,
                },
            });
        };

        function LottieAnimation0302() {
            let scrollProgress = 0;
            let scrollFlag = true;
            let ani = lottie.loadAnimation({
                container: document.getElementById('lottie_object3-2'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: '/img/home/data3-2.json',
            });

            gsap.to(ani, {
                scrollTrigger: {
                    trigger: ".-sec03",
                    start: "bottom+=30% bottom",
                    end: "bottom+=50% bottom",
                    toggleClass: { targets: ".lottie_object.-part3-2", className: "-active" },
                    onUpdate: function (self) {
                        scrollProgress = self.progress;
                    },
                    // markers: true,
                },
            });

            gsap.ticker.add(onRaf);
            function onRaf() {
                if (scrollFlag) {
                    let frame = scrollProgress * 6;
                    ani.goToAndStop(frame, true);
                }
            };
        };


    },

});

$(function () {
    var timer = false;
    var prewidth = $(window).width();
    $(window).resize(function () {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            var nowWidth = $(window).width();
            if (prewidth !== nowWidth) {
                location.reload();
            }
            prewidth = nowWidth;
        }, 200);
    });
});