function createPlayer (x, y) {
	var playerSpeed = 64;
	var player = Crafty.e('2D, DOM, Color, guyNorth, Motion, Keyboard')
		.attr({x: x, y: y, w: 32, h: 32})
		.checkHits('tree');
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
	return player;
}