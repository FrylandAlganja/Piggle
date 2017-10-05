function createPlayer (x, y) {
	var playerSpeed = 32;
	var NORTH = 0;
	var EAST = 1;
	var SOUTH = 2;
	var WEST = 3;
	var moving = false;
	var direction;
	var player = Crafty.e('2D, DOM, Color, Gridlock, guyNorth, Motion, Keyboard, Collision')
		.attr({x: x, y: y, w: 32, h: 32})
		.checkHits('tree')
		.bind('EnterFrame', function (e) {
			if (this.vy < 0) {
				this.sprite('guyNorth');
			} else if (this.vx > 0) {
				this.sprite('guyEast');
			} else if (this.vy > 0) {
				this.sprite('guySouth');
			} else if (this.vx < 0) {
				this.sprite('guyWest');
			}
			this.setGridPosition();
			if (moving == true) {
				switch (direction) {
					case NORTH:
					    this.vy = -playerSpeed;
					    break;
					case EAST:
					    this.vx = playerSpeed;
					  	break;
					case SOUTH:
					    this.vy = playerSpeed;
					    break;
					case WEST:
					    this.vx = -playerSpeed;
					    break;
				}
				if (((Math.floor(this._x) / tileSize) % 1 == 0) && (direction == EAST || direction == WEST)) {					moving = false;
					this.vx = 0;
					moving = false;
					return 0;
				}
				if (((Math.floor(this._y) / tileSize) % 1 == 0) && (direction == NORTH || direction == SOUTH)) {					moving = false
					this.vy = 0;
					moving = false;
					return 0;
				}
			} else {
				if (this.isDown(Crafty.keys.UP_ARROW) ||
					this.isDown(Crafty.keys.RIGHT_ARROW) ||
					this.isDown(Crafty.keys.DOWN_ARROW) ||
					this.isDown(Crafty.keys.LEFT_ARROW)) {
					moving = true;
					this.vx = this.vy = 0;
					if (this.isDown(Crafty.keys.UP_ARROW)) {
						direction = NORTH;
						this.vy = -playerSpeed;
					}
					if (this.isDown(Crafty.keys.RIGHT_ARROW)) {
						direction = EAST;
						this.vx = playerSpeed;
					}
					if (this.isDown(Crafty.keys.DOWN_ARROW)) {
						direction = SOUTH;
						this.vy = playerSpeed;
					}
					if (this.isDown(Crafty.keys.LEFT_ARROW)) {
						direction = WEST;
						this.vx = -playerSpeed;
					}
				}
			}
		});
	return player;
}