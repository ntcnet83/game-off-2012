(function(window) {
	'use strict';

	var ec = window.ec;
	var cp = window.cp;
	var v = cp.v;

	var EmptyHand = ec.EmptyHand = function(radius, mass) {
		radius = radius || 24;
		mass = mass || 1;

		this.assignCircleShape(radius, mass);
		
		this.shape.setElasticity(0.5);
		this.shape.setFriction(1);

		this.shape.collision_type = ec.World.PLAYER_HAND;

		this.setPos(64, 64, 64);

		this.time = 0;
		this.phase = EmptyHand.PASSIVE;
	};

	EmptyHand.PASSIVE = 0;
	EmptyHand.PUSHING = 1;
	EmptyHand.GRABBING = 2;
	EmptyHand.PULLING = 3;

	var proto = EmptyHand.prototype;
	ec.extend(proto, ec.Entity.prototype);

	var pushDuration = 1000 * 5/60;
	var grabDuration = 1000 * 10/60;
	var punchDuration = pushDuration + grabDuration/2;

	proto.entityStep = function(time, world, entity) {
		if (this.phase) {
			var punchTime = time - this.time;

			if (this.phase === ec.EmptyHand.PUSHING) {
				if (punchTime < punchDuration) {
					//punching
					// TODO: check for early hit - GRAB/PUSH

				} else if (entity.passive()) {
					//done punching
					entity.attackEnd(time, world);
					//console.log('punch ended passively');

				} else if (punchTime > pushDuration) {
					this.phase = ec.EmptyHand.GRABBING;
					//console.log('grabbing');
				}

			} else if (this.phase === ec.EmptyHand.GRABBING) {
				//this.body.resetForces();
				this.body.vx *= 0.9;
				this.body.vy *= 0.9;
				if (entity.passive()) {
					//done punching
					entity.attackEnd(time, world);
					//console.log('grab ended passively');

				} else if (punchTime > pushDuration + grabDuration) {
					// TODO: did we grab anyone?
					var grabbedTarget = false;
					if (!grabbedTarget) {
						//done punching
						entity.attackEnd(time, world);
						//console.log('grab ended empty handed');
					} else {

						// TODO: this.phase = ec.EmptyHand.PULLING;

						// add constraints
						//world.space.addConstraint(new cp.GrooveJoint(entity.body, this.body, v(40, 0), v(80 , 0), v(0,0)));
					}
				}

			} else if (this.phase === ec.EmptyHand.PULLING) {
				// TODO: how long can we keep this up?

				if (entity.passive()) {
					//done punching
					entity.attackEnd(time, world);
					console.log('pull ended passively');
				}

			}
		}
	};

})(window);