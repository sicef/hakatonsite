$(document).ready(function() {
	
		
	setTimeout (function() {$('#options').animate({left:'-180px'});}, 400);
	// switch
	$('span.dialog').click(function() {
		var optionsPos = $('#options').css("left");
		if(optionsPos == "0px") {
				$('#options').animate({ "left": "-180px" }, "fast" );
				$(this).find('h4').html('&raquo;').parent().css({'background':'#333'});
		} else {
				$('#options').animate({ "left": "0px" }, "fast" );
				$(this).find('h4').html('&laquo;').parent().css({'background':'#000'});
		}
	 });
	
	// Global Color
	$('head style').append('h1,h2,h3,h4,h5,h6, .navigation ul li a, blockquote,.btnMain,.btnColor2,.btnColor3,.btnLte {font-family:"'+Heading_Font+'"; } html, body, div, p, table, tr, td, th, tbody, tfoot, ul, li, ol, dl, dd, dt, fieldset, cite, input, select, textarea, button, a, section, article, aside, header, footer, nav {font-family:"'+Site_Font+'"; }  body {background-color:#'+page_background_color+';} .navbar-header, .btn, .schedule-box h6.section-head span, header.colored, .panel-heading a, .navigation nav ul li {background-color:#'+main_color+'; }  a, #home li a:hover, .styled div, h3 span, .speaker .col-md-2 i, #directionsPanel .adp-summary, #schedule .nav-tabs li.active h5  {color:#'+main_color+'} #schedule .nav-tabs li.active i, #schedule .nav-tabs li a:hover h5, .schedule-box li h6 strong {color:#'+main_color+';}    div.section, #home {border-top:5px solid #'+main_color+';  }  ::selection {background-color:#'+main_color+'; color:#fff;} ::-moz-selection {background-color:#'+main_color+'; color:#fff;} ');

	
	// Gallery Captions
	$(' #eg-thumbs > li ').each( function() { $(this).hoverdir(); } );
	
	// Image Lightbox
	 $("a[rel^='prettyPhoto']").prettyPhoto({overlay_gallery: true});
	 $('.gallery a').append('<span class="link"><i class="fa fa-search-plus"></i></span>');
	 
	// equal heights columns
	$('.container').each(function(){  
			var highestBox = 0;
			$('.column', this).each(function(){
				if($(this).height() > highestBox) 
				   highestBox = $(this).height(); 
			});  
			$('.column',this).height(highestBox);
	});   
	
	// Top Arrow
	$(window).scroll(function() {
			if ($(window).scrollTop() > 1000) { 
				$('a.top').fadeIn('slow'); 
			} else { 
				$('a.top').fadeOut('slow');
			}
	}); 
	
	// Tooltip
	$('a.tips').tooltip();
	
	// responsive Video Target your .container, .wrapper, .post, etc.
    //$(".container").fitVids();
	
	// Tabs Active
	$('#schedule .nav-tabs li').append('<span class="arrow"></span>');
	$('#schedule .nav-tabs li span.arrow').hide();
	
	// Counter
	var endDate = "November 05, 2016 11:59:59";
        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
			  var years = this.leadingZeros(data.years, 2);
			  if (years != '00') {
          		$(this.el).html("<div><span>" + this.leadingZeros(data.years, 2) + " </span><strong>godina</strong></div><div><span>" + this.leadingZeros(data.days, 3) + " </span><strong>dana</strong></div><div><span>" + this.leadingZeros(data.hours, 2) + "  </span><strong>sata</strong></div><div><span>" + this.leadingZeros(data.min, 2) + "</span><strong>minuta</strong></div><div><span>" + this.leadingZeros(data.sec, 2) + " </span><strong>sekundi</strong></div>");
			  } else {
			  	$(this.el).html("<div><span>" + this.leadingZeros(data.days, 3) + " </span><strong>dana</strong></div><div><span>" + this.leadingZeros(data.hours, 2) + "  </span><strong>sati</strong></div><div><span>" + this.leadingZeros(data.min, 2) + "</span><strong>minuta</strong></div><div><span>" + this.leadingZeros(data.sec, 2) + " </span><strong>&nbsp;&nbsp;sekundi&nbsp;&nbsp;</strong></div>");
			  }
          }
        });
	
	// Accordion Symbols
	$('.panel-heading a').click(function() {
			var thisParent = $(this).parent().next();
		if(thisParent.hasClass('in')) {
				$(this).parent().removeClass('active');
		} else {
				$('.panel-heading').removeClass('active');
				$(this).parent().addClass('active');
		}
	});
	
	//page Scroll
	$('nav a[href^=#], a.top[href^=#], .btnSignup').click(function(event) {
			event.preventDefault();
			$('html,body').animate({
            scrollTop: $(this.hash).offset().top - 80},
            1000);	
	});
});