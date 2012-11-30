(function(window) {
	'use strict';

	var ec = window.ec;
	var cp = window.cp;
	var v = cp.v;

	var RADIUS = 32;

	var ShadowClone = ec.ShadowClone = function() {
		this.assignCircleShape(RADIUS, 1);
		
		this.shape.setElasticity(0);
		this.shape.setFriction(0);

		this.setPos(64, 64, 32);

		// this.input = function(){};
		// this.speed = 8;
	};

	var proto = ShadowClone.prototype;
	ec.extend(proto, ec.Entity.prototype);


})(window);