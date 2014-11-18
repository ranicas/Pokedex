Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $divDetail = $("<div class='detail'></div>");
  $divDetail.append($("<img src='" + pokemon.attributes.image_url + "'>"));
 
  Object.keys(pokemon.attributes).forEach(function (attr) {
    if (attr !== "image_url") {
      $divDetail.append($("<p>" + attr + ": " + pokemon.attributes[attr] + "</p>"));
    }
  });
  
  var $ul = $("<ul>").addClass("toys");
  pokemon.fetch({
    success: (function () {
      pokemon.toys().models.forEach((function (model) {
          $ul.append(this.addToyToList(model));
        }).bind(this)
      ).bind(this);
    }).bind(this)
  });
  this.$toyDetail.append($ul);
  this.$pokeDetail.append($divDetail);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var id = $(event.currentTarget).data("id");
  this.renderPokemonDetail(this.pokes.get(id));
    // id: id,
  //   success: (function (resp) {
  //     this.renderPokemonDetail(resp)
  //   }).bind(this)
  // );
};
