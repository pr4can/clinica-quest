$(document).ready(function() {
	let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $('header').outerHeight();    

    $(window).scroll(function(event) {
        didScroll = true;   
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if (st > lastScrollTop && st > navbarHeight) {
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }

	new WOW({
        offset: 200
    }).init();

	$('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        arrows: false,
        autoplay: true,
		autoplaySpeed: 5000,
        customPaging : function() {
        	return '';
    	}
    }); 

    $(".header__burger").on("click", function() {
    	$(this).toggleClass("active");
    	$(".header__mobile").toggleClass("active");
    	$("html, body").toggleClass("is-open");
    });

    $(".menu-mobile__item.dropdown").on("click", function() {
    	$(this).toggleClass("active");
    	$(this).find(".submenu-mobile").slideToggle("fast");
    });

	$('.reviews__container').slick({
		infinite: true,
		slidesToShow: 2, 
		slidesToScroll: 1,
		dots: false, 
		arrows: false, 
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 7000
				}
			}
		]
	});

	$(".reviews__arrow.-prev").on("click", function() {
		$('.reviews__container').slick('slickPrev');
	});

	$(".reviews__arrow.-next").on("click", function() {
		$('.reviews__container').slick('slickNext');
	});

    $(function() {  
		$('.list__item')
		.on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('.animate').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('.animate').css({top:relY, left:relX})
		})
		.on('click', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('.animate').css({top:relY, left:relX})
		});
	});

    if(window.innerWidth < 768) {
    	mobileOnlySlider();
    }

    $(window).resize(function(e){
    	if(window.innerWidth < 768) {
    		if(!$('.features__container').hasClass('slick-initialized')) {
    			mobileOnlySlider();
    		}

    	}
    	else {
    		if($('.features__container').hasClass('slick-initialized')) {
    			$('.features__container').slick('unslick');
    		}
    	}
    });
});

function mobileOnlySlider() {
	$('.features__container').slick({
		infinite: true,
		slidesToShow: 1, 
		slidesToScroll: 1,
		dots: false, 
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});
}
