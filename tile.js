Crafty.c("Gridlock", {
	init: function() {
		this.addComponent("2D");
		this.gridX = 0;
		this.gridY = 0;
	},

	setGridPosition: function() {
		this.gridX = Math.floor((this.x + (cellSize / 2)) / cellSize);
		this.gridY = Math.floor((this.y + (cellSize / 2)) / cellSize);
	}
});
Crafty.c("Tile", {
	init: function() {
		this.tileType = "";
	}
});
function createTile (tileId, gridX, gridY) {
	var tileSprite;
	switch (tileId) {
		case 0:
			tileSprite = 'grass';
			break;
		case 1:
			tileSprite = 'tree';
			break;
	}
	var tile = Crafty.e('2D, DOM, Color, Motion, Keyboard, Gridlock, Tile, ' + tileSprite)
		.attr({x: gridX * tileSize, y: gridY * tileSize, w: tileSize, h: tileSize});
	tile.setGridPosition();
	tile.z = -1;
	return tile;
}