	jQuery(function(jQuery) {
  var slide = false;
  var height = jQuery('#footer_content').height();
     jQuery('#footer_button').click(function() {
      var docHeight = jQuery(document).height();
      var windowHeight = jQuery(window).height();
      var scrollPos = docHeight - windowHeight + height;
      jQuery('#footer_content').animate({ height: "toggle"}, 1000);
        if(slide == false) {
          if(jQuery.browser.opera) { //Fix opera double scroll bug by targeting only HTML.
            jQuery('html').animate({scrollTop: scrollPos+'px'}, 1000);
            } else {
            jQuery('html, body').animate({scrollTop: scrollPos+'px'}, 1000);
            }
    slide = true;
      } else {
      slide = false;
    }
  });
 });
