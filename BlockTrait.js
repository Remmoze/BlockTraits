class BlockTrait {
	constructor(name, block) {
		this.name = name;
		this.block = block;
	}

	isSolid() {
		return undefined; //default
	}

	onEnter() {}
	
	update() {
		console.warn("Unhandled update call at trait");
	}
}