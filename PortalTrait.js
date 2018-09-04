class PortalTrait extends Trait {
	constructor(block, x, y) {
		super('portal', block);
		this.loc = new Point(x, y);
		this.animation = Game.createAnimation(Game.getImageBlock('portal'));
	}

	onEnter(player) {
		player.setPosition(this.loc);
	}

	isSolid() {
		return false;
	}

	update() {
		this.block.image = this.animation.frames[Game.framesTotal % this.animation.length];
	}
}