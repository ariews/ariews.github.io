if(!!$.prototype.justifiedGallery){var options={rowHeight:140,margins:4,lastRow:"justify"};$(".article-gallery").justifiedGallery(options)}$(document).ready(function(){$("#header > #nav > ul > .icon").click(function(){$("#header > #nav > ul").toggleClass("responsive")});if($(".post").length){var i=$("#menu");var e=$("#menu-icon, #menu-icon-tablet");e.click(function(){if(i.css("visibility")==="hidden"){i.css("visibility","visible");e.addClass("active")}else{i.css("visibility","hidden");e.removeClass("active")}return false});if(i.length){$(window).on("scroll",function(){var e=$("#menu > #nav").offset().top;if(i.css("visibility")!=="hidden"&&e<50){$("#menu > #nav").show()}else if(i.css("visibility")!=="hidden"&&e>100){$("#menu > #nav").hide()}if(!$("#menu-icon").is(":visible")&&e<50){$("#menu-icon-tablet").show();$("#top-icon-tablet").hide()}else if(!$("#menu-icon").is(":visible")&&e>100){$("#menu-icon-tablet").hide();$("#top-icon-tablet").show()}})}if($("#footer-post").length){var o=0;$(window).on("scroll",function(){var i=$(window).scrollTop();if(i>o){$("#footer-post").hide()}else{$("#footer-post").show()}o=i;$("#nav-footer").hide();$("#toc-footer").hide();$("#share-footer").hide();if(i<50){$("#actions-footer > ul > #top").hide();$("#actions-footer > ul > #menu").show()}else if(i>100){$("#actions-footer > ul > #menu").hide();$("#actions-footer > ul > #top").show()}})}}});