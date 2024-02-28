var PUNITED;
PUNITED || (PUNITED = {}),
  PUNITED.top || (PUNITED.top = {}),
  (function () {
    var s = PUNITED.top;
    (s.visualCarousel = function () {
      $(".top_visual__body").slick({
        slidesToShow: 1,
        dots: !0,
        prevArrow:
          '<button class="slick-prev"><div class="animate_arrow -prev"><span></span><span></span></div></button>',
        nextArrow:
          '<button class="slick-next"><div class="animate_arrow"><span></span><span></span></div></button>',
      });
    }),
      (s.caseCarousel = function () {
        $(".top_case__body").slick({
          centerMode: !0,
          variableWidth: !0,
          dots: !0,
          prevArrow:
            '<button class="slick-prev"><div class="animate_arrow -prev -assort"><span></span><span></span></div></button>',
          nextArrow:
            '<button class="slick-next"><div class="animate_arrow -assort"><span></span><span></span></div></button>',
        });
      }),
     
      (s.intro = function () {
        Cookies.get("visited") ? $("body.top").addClass("introFinish"): (Cookies.set("visited", !0, { expires: 30, path: "" }),
        
            setTimeout(function () {
              $(".intro__bg__1").addClass("-fire"),
                setTimeout(function () {
                  $(".intro__bg__2").addClass("-fire"),
                    setTimeout(function () {
                      $(".intro__bg__3").addClass("-fire"),
                        setTimeout(function () {
                          $("body.top").addClass("introFinish");
                        }, 2e3);
                    }, 400);
                }, 400);
            }, 1500));
      });
  })(),
  $(function () {
     PUNITED.top.intro();
  });
