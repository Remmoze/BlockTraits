class KeyDoorTrait extends Trait {
	constructor(block, color) {
		super("keydoor", block);
		this.color = color;
		this.closedImage = Game.getImageBlock(this.color + '-door-closed');
		this.openImage = Game.getImageBlock(this.color + '-door-open');
	}

	isSolid() {
		return world.keys[this.color].closed;
	}
	
	update() {
		this.block.image = world.keys[this.color].closed ? this.closedImage : this.openImage;
	}
}