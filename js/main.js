$(document).ready(function() {
	$('.dish-card__list').lightSlider({
	    item: 3,
	    loop: true,
	    slideMargin: 28,
	    auto:false,
	    pauseOnHover: true,
	    responsive : [
	        {
	                breakpoint:768,
	                settings: {
	                item:1,
	                auto: false
	                     }
	            }
	        ]
	});
	$('[data-opener]').click(function() {
		$this = $(this);
		if($this.is('.active')) {
			$this.removeClass('active');
			$('[data-target="'+$this.data('opener')+'"]').removeClass('active');
		}else{
			$this.addClass('active');
			$('[data-target="'+$this.data('opener')+'"]').addClass('active');
		}
	});
	$('.dish-card__link').on('click', function(e) {
				e.preventDefault();

				var item = $(this).closest('.dish-card__item'),
					contentWrapper = item.closest('.dish-card__wrapper'),
					contentItem = contentWrapper.find('.dish-card__content'),
					itemPosition = item.data('class');

				contentItem.filter('.dish-card__content_' + itemPosition)
				.add(item)
				.addClass('active')
				.siblings()
				.removeClass('active');
			}
		)
	if ( ! Modernizr.objectfit ) {
	  background($('.dish-card__link'));
	  background($('.dish-info__ingredients-img'));
	  background($('.dish-card__img'));
	}
	  function background(items) {
	  	items.each(function () {
		    var $container = $(this),
		        imgUrl = $container.find('img').prop('src');
		    if (imgUrl) {
		      $container
		        .css('backgroundImage', 'url(' + imgUrl + ')')
		        .addClass('compat-object-fit');
		    }  
		  });
	  }
	$('.stars').rating();
	$('.dish-card__wrapper .lSNext').click(function() {
		var container = $(this).closest('.dish-card__wrapper'),
			item = container.find('.dish-card__content'),
			itemActive = item.filter('.active'),
			itemNext = itemActive.next(),
			itemPrev = itemActive.prev(),
			itemFirst = item.first(),
			itemLast = item.last();
			container.find('.dish-card__content.active').removeClass('active').next().addClass('active');
			if ($('.dish-card__slider').hasClass('active')) {
			  $('.dish-card__slider').removeClass('active');
			  itemFirst.addClass('active');
			}  
	});
	$('.dish-card__wrapper .lSPrev').click(function() {
		var container = $(this).closest('.dish-card__wrapper'),
			item = container.find('.dish-card__content'),
			itemFirst = item.first(),
			itemActive = item.filter('.active'),
			itemNext = itemActive.next(),
			itemPrev = itemActive.prev(),
			itemLast = item.last();
			// console.log($('.dish-card__content').length);
			if (itemPrev.length) {
			  // itemFirst.removeClass('active');
			  container.find('.dish-card__content.active').removeClass('active').prev().addClass('active');
			}else {
				itemLast.addClass('active').siblings().removeClass('active');
			}
	});

});
