/* import { useEffect, useState } from "react" */
import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) =>{ 
    /* let contador = 0 */
    /* const [contador, setContador] = useState(0) */
    /* const sumarContador = () => {
        setContador(contador + 1) //Si se cambia el estado del componente el componente se reejecuta y ahi empiza el ciclo de vida
    } */
    function onAdd(numero){
        console.log("Se ejecuta la funcion onAdd", numero)
    }
    return(
        <>
            <div>{greeting}</div>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}
export default ItemListContainer