(function () {
    "use strict";
    var Core = {
        initialized: false,
        initialize: function () {

            if (this.initialized)
                return;
            this.initialized = true;
            this.build();
        },
        build: function () {
            // Wow init
            this.wowInit();

        },
        wowInit: function () {
            new WOW().init();
        }
    };
    Core.initialize();
})();