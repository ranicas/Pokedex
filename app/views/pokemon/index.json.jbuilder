json.array!(@pokemon) do |poke|
  json.partial!("pokemon", pokemon: poke, display_toys: false)
end