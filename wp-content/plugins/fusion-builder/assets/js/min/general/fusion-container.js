function setCorrectResizeValuesForScrollSections(){var a=jQuery("#content").find(".fusion-scroll-section"),b=0,b=0,c=0,d=0;a.length&&(jQuery(".fusion-scroll-section.active").find(".fusion-scroll-section-element").css({left:jQuery("#content").offset().left}),jQuery(".fusion-scroll-section").find(".fusion-scroll-section-element").css({width:jQuery("#content").width()}),0==fusionContainerVars.container_hundred_percent_height_mobile&&(Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")?(jQuery(".fusion-scroll-section").removeClass("active").addClass("fusion-scroll-section-mobile-disabled"),jQuery(".fusion-scroll-section").attr("style",""),jQuery(".fusion-scroll-section").find(".fusion-scroll-section-element").attr("style",""),jQuery(".fusion-scroll-section").find(".hundred-percent-height-scrolling").css("height","auto"),jQuery(".fusion-scroll-section").find(".fusion-fullwidth-center-content").css("height","auto")):jQuery(".fusion-scroll-section").hasClass("fusion-scroll-section-mobile-disabled")&&(jQuery(".fusion-scroll-section").find(".fusion-fullwidth-center-content").css("height",""),Boolean(Number(fusionContainerVars.is_sticky_header_transparent))||"function"!=typeof getStickyHeaderHeight||(b=getStickyHeaderHeight(!0)),jQuery("#wpadminbar").length&&(d=parseInt(jQuery("#wpadminbar").height(),10)),c=b+d,a.each(function(){1<jQuery(this).children("div").length&&(jQuery(this).css("height",100*jQuery(this).children("div").size()+50+"vh"),jQuery(this).find(".hundred-percent-height-scrolling").css("height","calc(100vh - "+c+"px)"))}),scrollToCurrentScrollSection()))),jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").length&&(Boolean(Number(fusionContainerVars.is_sticky_header_transparent))||"function"!=typeof getStickyHeaderHeight||(b=getStickyHeaderHeight(!0)),jQuery("#wpadminbar").length&&(d=parseInt(jQuery("#wpadminbar").height(),10)),c=b+d,0==fusionContainerVars.container_hundred_percent_height_mobile&&(Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")?(jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").css("height","auto"),jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").find(".fusion-fullwidth-center-content").css("height","auto")):(jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").css("height","calc(100vh - "+c+"px)"),jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").find(".fusion-fullwidth-center-content").css("height",""))))}function scrollToCurrentScrollSection(){var a=(jQuery(window).scrollTop(),Math.ceil(jQuery(window).scrollTop())),b=jQuery(window).height(),c=Math.floor(a+b),d=Boolean(Number(fusionContainerVars.is_sticky_header_transparent))||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0),e=jQuery("#wpadminbar").length?parseInt(jQuery("#wpadminbar").height(),10):0;a+=d+e,jQuery(".fusion-page-load-link").hasClass("fusion-page.load-scroll-section-link")||jQuery(".fusion-scroll-section").each(function(){var b=jQuery(this),d=Math.ceil(b.offset().top),e=Math.ceil(b.outerHeight()),f=Math.floor(d+e);d<=a&&f>=c&&(b.addClass("active"),jQuery("html, body").animate({scrollTop:d-50},{duration:50,easing:"easeInExpo",complete:function(){jQuery("html, body").animate({scrollTop:d},{duration:50,easing:"easeOutExpo",complete:function(){Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")||jQuery(".fusion-scroll-section").removeClass("fusion-scroll-section-mobile-disabled")}})}}))})}jQuery(window).load(function(){jQuery(".fullwidth-faded").fusionScroller({type:"fading_blur"})}),jQuery(document).ready(function(){Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")&&jQuery(".fullwidth-faded").each(function(){var a=jQuery(this).css("background-image");jQuery(this).parent().css("background-image",a),jQuery(this).remove()})}),jQuery(window).load(function(){jQuery("#content").find(".fusion-scroll-section").length&&void 0===jQuery(".fusion-page-load-link").attr("href")&&setTimeout(function(){scrollToCurrentScrollSection()},400)}),jQuery(document).ready(function(){var a,b,c,d=jQuery("#content").find(".fusion-scroll-section"),e=Boolean(Number(fusionContainerVars.is_sticky_header_transparent))||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0),f=jQuery("#wpadminbar").length?parseInt(jQuery("#wpadminbar").height(),10):0,g=e+f;d.length&&(jQuery("#content").find(".non-hundred-percent-height-scrolling").length||1!==d.length||jQuery.trim(jQuery("#sliders-container").html())||(d.addClass("active"),d.find(".fusion-scroll-section-nav li:first a").addClass("active"),b=!0),d.each(function(){1<jQuery(this).children("div").length&&(c=g?"calc("+(100*jQuery(this).children("div").size()+50)+"vh - "+g+"px)":100*jQuery(this).children("div").size()+50+"vh",jQuery(this).css("height",c),g&&(jQuery(this).find(".hundred-percent-height-scrolling").css("height","calc(100vh - "+g+"px)"),jQuery(this).find(".fusion-scroll-section-nav").css("top","calc(50% + "+g/2+"px)")))}),a=jQuery(window).scrollTop(),jQuery(window).scroll(function(){var c=jQuery(window).scrollTop();jQuery(".fusion-scroll-section").each(function(){1<jQuery(this).children("div").length&&!jQuery(this).hasClass("fusion-scroll-section-mobile-disabled")&&jQuery(this).fusionPositionScrollSectionElements(a,c,b)}),a=c}),jQuery(".fusion-scroll-section-link").on("click",function(a){var b=jQuery(this).parents(".fusion-scroll-section"),c=parseInt(jQuery(this).parents(".fusion-scroll-section-nav").find(".fusion-scroll-section-link.active").data("element"),10),d=parseInt(jQuery(this).data("element"),10),e=Math.abs(d-c),f=(350+30*(e-1))*e;a.preventDefault(),0!==e&&(20<e&&(f=950*e),jQuery(this).parents(".fusion-scroll-section").find(".fusion-scroll-section-element").removeClass("active"),jQuery("html, body").animate({scrollTop:Math.ceil(b.offset().top)+jQuery(window).height()*(jQuery(this).data("element")-1)},f,"linear"))})),jQuery(".hundred-percent-height").length&&(setCorrectResizeValuesForScrollSections(),jQuery(window).on("resize",function(){setCorrectResizeValuesForScrollSections()}))}),function(a){"use strict";a.fn.fusionPositionScrollSectionElements=function(b,c,d){var e,f,g,h,i,j=a(this),k=Math.ceil(j.offset().top),l=Math.ceil(j.outerHeight()),m=Math.floor(k+l),n=Math.ceil(a(window).scrollTop()),o=a(window).height(),p=Math.floor(n+o),q=j.find(".fusion-scroll-section-element").length,r=0;if(d=d||!1,f=a("#wpadminbar").length?parseInt(a("#wpadminbar").height(),10):0,f+=Boolean(Number(fusionContainerVars.is_sticky_header_transparent))||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0),n+=f,e=a("#content").width(),g=a("#content").offset().left,h="0",d||(k<=n&&m>=p?j.addClass("active"):j.removeClass("active")),b<c){for(i=1;i<q;i++)n>=k+o*i&&n<k+o*(i+1)&&(r=i+1);k<=n&&k+o>n?(j.find(".fusion-scroll-section-element").removeClass("active"),j.children(":nth-child(1)").addClass("active"),j.find(".fusion-scroll-section-nav a").removeClass("active"),j.find('.fusion-scroll-section-nav a[data-element="'+j.children(":nth-child(1)").data("element")+'"] ').addClass("active"),j.find(".fusion-scroll-section-element").css({position:"fixed",top:f,left:g,padding:"0 "+h,width:e}),j.children(":nth-child(1)").css("display","block")):m<=p&&"absolute"!==j.find(".fusion-scroll-section-element").last().css("position")?(j.find(".fusion-scroll-section-element").removeClass("active"),j.find(".fusion-scroll-section-element").last().addClass("active"),j.find(".fusion-scroll-section-element").css("position","absolute"),j.find(".fusion-scroll-section-element").last().css({top:"auto",left:"0",bottom:"0",padding:""})):0<r&&!j.children(":nth-child("+r+")").hasClass("active")&&(j.find(".fusion-scroll-section-element").removeClass("active"),j.children(":nth-child("+r+")").addClass("active"),j.find(".fusion-scroll-section-nav a").removeClass("active"),j.find('.fusion-scroll-section-nav a[data-element="'+j.children(":nth-child("+r+")").data("element")+'"] ').addClass("active"))}else if(b>c){for(i=1;i<q;i++)k+o*i>n&&k+o*(i-1)<n&&(r=i);m>=p&&k+o*(q-1)<n&&"fixed"!==j.find(".fusion-scroll-section-element").last().css("position")?(j.find(".fusion-scroll-section-element").removeClass("active"),j.find(".fusion-scroll-section-element").last().addClass("active"),j.find(".fusion-scroll-section-nav a").removeClass("active"),j.find('.fusion-scroll-section-nav a[data-element="'+j.find(".fusion-scroll-section-element").last().data("element")+'"] ').addClass("active"),j.find(".fusion-scroll-section-element").css({position:"fixed",top:f,left:g,padding:"0 "+h,width:e}),j.find(".fusion-scroll-section-element").last().css("display","block")):(k>=n||0===a(window).scrollTop()&&j.find(".fusion-scroll-section-element").first().hasClass("active"))&&""!==j.find(".fusion-scroll-section-element").first().css("position")?(j.find(".fusion-scroll-section-element").removeClass("active"),j.find(".fusion-scroll-section-element").first().addClass("active"),j.find(".fusion-scroll-section-element").css("position",""),j.find(".fusion-scroll-section-element").first().css("padding","")):0<r&&!j.children(":nth-child("+r+")").hasClass("active")&&(j.find(".fusion-scroll-section-element").removeClass("active"),j.children(":nth-child("+r+")").addClass("active"),j.find(".fusion-scroll-section-nav a").removeClass("active"),j.find('.fusion-scroll-section-nav a[data-element="'+j.children(":nth-child("+r+")").data("element")+'"] ').addClass("active"))}}}(jQuery);