Crafty.init(500,350, document.getElementById('game'));
var cellSize = 32;
Crafty.sprite("img/sprites.png", {
    guyNorth: [0, 0, 32, 32],
	guyEast: [32, 0, 32, 32],
	guySouth: [64, 0, 32, 32],
	guyWest: [96, 0, 32, 32],
	grass: [64, 32, 32, 32],
    tree: [96, 32, 32, 32]});
createPlayer(32, 32);
for (var y = 0; y < 10; y++) {
	tilemap[y] = [];
	for (var x = 0; x < 10; x++) {
		if (y == 0 || x == 0 || y == 9 || x == 9) {
			tilemap[y][x] = createTile(1, x, y);
			tilemap[y][x].tileType = "tree";
		} else {
			tilemap[y][x] = createTile(0, x, y);
			tilemap[y][x].tileType = "grass";
		}
		console.log(tilemap[y][x].gridX, tilemap[y][x].gridY);
	}
}