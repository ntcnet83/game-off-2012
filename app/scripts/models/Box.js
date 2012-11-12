var ec = ec || {};
var cp = cp;
(function() {
	'use strict';

	var v = cp.v;

	var BOX_WIDTH = 200;
	var BOX_HEIGHT = 200;

	ec.Box = function() {
		var mass = 1;
		var moment = cp.momentForBox(mass, BOX_WIDTH, BOX_HEIGHT);
		
		var body =
		this.body = new cp.Body(mass, moment);
		
		var shape =
		this.shape = new cp.BoxShape(body, BOX_WIDTH, BOX_HEIGHT);

		shape.setElasticity(0);
		shape.setFriction(0.6);
		
		this.setView(function(){});
		this.setPos(0, 500);
	};

	ec.Box.prototype.setView = function(view) {
		this.view = this.body.view = view;
		return this;
	};

	ec.Box.prototype.setPos = function(x, y) {
		this.body.setPos(v(x, y));
		return this;
	};

})();