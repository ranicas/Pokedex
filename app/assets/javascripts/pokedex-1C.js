Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var pokemon = new Pokedex.Models.Pokemon(attrs);

  pokemon.save({},{
    success: (function () {
      this.pokes.add(pokemon);
      this.addPokemonToList(pokemon);
      callback(pokemon);
    }).bind(this)
  })
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  // debugger;
  this.createPokemon($(event.currentTarget).serializeJSON().pokemon, this.renderPokemonDetail.bind(this));
};
