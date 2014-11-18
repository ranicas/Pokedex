Pokedex.RootView.prototype.addToyToList = function (model) {
  var $li = $("<li>").addClass("toyDetail");
  var toy = model.attributes;
  var $div =$("<div>").addClass("detail");
  $div.append($("<img src='" + toy["image_url"] + "'>"))
  Object.keys(toy).forEach( function (attr) {
    if (attr !== "image_url") {
      var $p = $("<p>").html(attr + ": " + toy[attr]);
      $div.append($p);
    }
  });
  $li.append($div)
  return $li;
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) { // III
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
};
