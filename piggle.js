Crafty.init(500,350, document.getElementById('game'));
Crafty.sprite("https://raw.githubusercontent.com/RylandAlmanza/piggle/master/img/sprites.png", {guyNorth: [0, 0, 32, 32], guyEast: [32, 0, 32, 32], guySouth: [64, 0, 32, 32], guyWest: [96, 0, 32, 32]});
var playerSpeed = 64;
Crafty.e('2D, DOM, Color, guyNorth, Motion, Keyboard')
    .attr({x: 0, y: 0, w: 32, h: 32})
    .bind('EnterFrame', function (e) {
	    this.vx = this.vy = 0;
	    if (this.isDown(Crafty.keys.UP_ARROW)) {
		    this.vy = -playerSpeed;
	    }
	    if (this.isDown(Crafty.keys.RIGHT_ARROW)) {
		    this.vx = playerSpeed;
	    }
	    if (this.isDown(Crafty.keys.DOWN_ARROW)) {
	  	    this.vy = playerSpeed;
	    }
	    if (this.isDown(Crafty.keys.LEFT_ARROW)) {
		    this.vx = -playerSpeed;
	    }
	    if (this.vy < 0) {
		    this.sprite('guyNorth');
	    } else if (this.vx > 0) {
		    this.sprite('guyEast');
	    } else if (this.vy > 0) {
		    this.sprite('guySouth');
	    } else if (this.vx < 0) {
		    this.sprite('guyWest');
	    }
	});