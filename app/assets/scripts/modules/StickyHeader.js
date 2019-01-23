import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";
class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var Me = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: direction => {
        if (direction === "down") Me.siteHeader.addClass("site-header--dark");
        else Me.siteHeader.removeClass("site-header--dark");
      }
    });
  }

  createPageSectionWaypoints() {
    var me = this;
    this.pageSections.each(function() {
      var self = this;
      new Waypoint({
        element: self,
        handler: function(direction) {
          if (direction === "down") {
            var matchingHeaderLink = self.getAttribute("data-matching-link");
            me.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });
      new Waypoint({
        element: self,
        handler: function(direction) {
          if (direction === "up") {
            var matchingHeaderLink = self.getAttribute("data-matching-link");
            me.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
