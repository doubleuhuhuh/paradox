// Boilerplate https://gist.github.com/simonsmith/4353587
!function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(root.jQuery);
  }
}(this, function($) {
  'use strict';
  // Default options
  var defaults = {
      tabNav: '[tabs-nav]',
      tabContent: '[tabs-content]',
      onChange: function(activeNav, tabContent){}
  };

  // Constructor, initialise everything you need here
  var Tabs = function(element, options) {
      var self = this;
    this.element = element;
    this.$el = $(element);
    this.opts = options;
    this.navItems = this.$el.find(this.opts.tabNav);

    function activateTab(tabContentID, isInit){
        var tabContent = $(tabContentID);
        var activeNavItem = self.navItems.find('[href="'+ tabContentID +'"]').parent();//TODO: fix up this selector
        //set active nav item class
        activeNavItem.siblings().removeClass('active');
        activeNavItem.addClass('active');
        //set active tab to visible
        tabContent.siblings().hide();
        tabContent.show();
        self.opts.onChange({
            tabID: tabContentID,
            activeNav: activeNavItem,
            tabContent: tabContent,
            init: isInit
        })
    }

    this.navItems.on('click', 'a', function(e){
        var tabContentID = $(this).attr('href');
        activateTab(tabContentID, false);
        e.preventDefault();
    });


    var fistTabID = this.navItems.find('a:first').attr('href');
    activateTab(fistTabID, true);
  };

  // Tabs methods and shared properties
  Tabs.prototype = {
    // Reset constructor - http://goo.gl/EcWdiy
    constructor: Tabs
  }

  // Create the jQuery tabs
  $.fn.tabs = function(options) {
    // Do a deep copy of the options - http://goo.gl/gOSSrg
    options = $.extend(true, {}, defaults, options);
    return this.each(function() {
      var $this = $(this);
      $this.data('tabs', new Tabs($this, options));
    });
  };

  // Expose defaults and Constructor (allowing overriding of prototype methods for example)
  $.fn.tabs.defaults = defaults;
  $.fn.tabs.Tabs = Tabs;
});
