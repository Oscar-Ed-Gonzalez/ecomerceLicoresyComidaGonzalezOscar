import Header from "./Header";
import ItemListContainer from "./ItemListContainer";

const App = () => {
    const nombre = "Oscar Eduardo";
    return(
      <>
        <Header nombre={nombre} edad={22}>
        </Header>
        <ItemListContainer greeting="Hello Oscar" />
      </>
    )
}

export default App