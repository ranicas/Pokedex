json.array!(@pokemons) do |pokemon|
  json.partial!("pokemon", pokemon: pokemon)
end