jQuery(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 58) {
            $('.header-container').addClass('fixed');
        } else {
            $('.header-container').removeClass('fixed');
        }
    });

    /*======================================
        Header Menu
    =======================================*/
    if (jQuery.fn.meanmenu) {
		jQuery('.main-menu nav').meanmenu({
            meanMenuContainer:'.main-menu',
			meanScreenWidth:'767',
			meanMenuCloseSize: "26px",
        });
        
      
	}
    
	  // imgLiquid
      if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image ").imgLiquid({
            fill: true
        });
    }
 /*===============================================
        debouncedresize
    ==================================================*/

    jQuery(window).bind("debouncedresize", function() {       
         // imgLiquid
         if (jQuery.fn.imgLiquid) {
            jQuery(".banner-image ").imgLiquid({
                fill: true
            });
        }

    });

    $('.search-toggle').addClass('closed');

    $('.search-toggle .search-icon').click(function(e) {
      if ($('.search-toggle').hasClass('closed')) {
        $('.search-toggle').removeClass('closed').addClass('opened');
        $('.search-toggle, .search-container').addClass('opened');
        $('#search-terms').focus();
      } else {
        $('.search-toggle').removeClass('opened').addClass('closed');
        $('.search-toggle, .search-container').removeClass('opened');
      }
    });

    //isotope
    var $grid = $('.product-list').isotope({
        // main isotope options
        itemSelector: '.product-list ul li',
        // set layoutMode
        layoutMode: 'packery',
        // options for cellsByRow layout mode
        
        // options for masonry layout mode
       
      });



      $(document).ready(function () {
        $(".open-call").on("click", function (e) {
          e.preventDefault();
          $("#wrap").animate({ width: "toggle" }, 700);
          $(".open-call").toggleClass("opened closed");
        });
        $(".close-call").click(function () {
          $("#wrap").hide({ width: "toggle" }, 700);
        });
      });
      

});

