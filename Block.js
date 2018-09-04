class Block {
	constructor(id, x, y) {
		this.id = id
		this.x = x;
		this.y = y;
		this.traits = [];
		this.image = Game.getImageBlock(id);
	}

	onEnter(player) {
		this.traits.forEach(trait => trait.onEnter(player));
	}

	isSolid() {
		for (let i = 0; i < this.traits.length; i++) {
			let solid = this.traits[i].isSolid();
			if(solid === undefined) continue;
			return solid;
		}
		return false;
	}

	addTrait(trait){
		this.traits.push(trait);
		this[trait.NAME] = trait;
   	}

   	update(){
		this.traits.forEach(trait => trait.update()); //update Traits
   	}

   	draw(context) {
   		context.drawImage(this.image, x * 24, y * 24);
   	}
}