Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var $li = $("<li>");
  $li.addClass("poke-list-item");
  $li.attr("data-id", pokemon.attributes.id);
  $li.html(pokemon.attributes.name + " " + pokemon.attributes.poke_type);
  this.$pokeList.append($li);
};

Pokedex.RootView.prototype.refreshPokemon = function () {
 
  this.pokes.fetch({
    success: (function () {
      this.pokes.forEach(
        this.addPokemonToList.bind(this)
      );
    }).bind(this)
  });
  
};
