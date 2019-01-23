import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(els, offset) {
    this.itemToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var me = this;
    this.itemToReveal.each(function() {
      var self = this;
      new Waypoint({
        element: self,
        handler: () => {
          $(self).addClass("reveal-item--is-visible");
        },
        offset: me.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
