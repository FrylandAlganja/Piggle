Crafty.init(500,350, document.getElementById('game'));
Crafty.sprite("img/sprites.png", {
    guyNorth: [0, 0, 32, 32],
	guyEast: [32, 0, 32, 32],
	guySouth: [64, 0, 32, 32],
	guyWest: [96, 0, 32, 32],
	grass: [64, 32, 32, 32],
    tree: [96, 32, 32, 32]});
createPlayer(32, 32);
for (var i = 0; i < 10; i++) {
	for (var x = 0; x < 10; x++) {
		if (i == 0 || x == 0 || i == 9 || x == 9) {
			createTile(1, i, x);
		} else {
			createTile(0, i, x);
		}
	}
}