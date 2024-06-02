import { Provider } from "react-redux";
import { store } from "../state/redux/store";
import { useGetPokemonByNameQuery } from "../state/redux/services/pokemon";


export function ProductRTKQuery() {
    return <Provider store={store}>
    <GetProduct />
  </Provider>;
  }
  

  function GetProduct() {

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
      <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  )
}
  