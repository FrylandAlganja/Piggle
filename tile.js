function createTile (tileId, gridX, gridY) {
	var tileSize = 32;
	var tileSprite;
	switch (tileId) {
		case 0:
			tileSprite = 'grass';
			break;
		case 1:
			tileSprite = 'tree';
			break;
	}
	var tile = Crafty.e('2D, DOM, Color, Motion, Keyboard, ' + tileSprite)
		.attr({x: gridX * tileSize, y: gridY * tileSize, w: tileSize, h: tileSize});
	tile.z = -1;
	return tile;
}