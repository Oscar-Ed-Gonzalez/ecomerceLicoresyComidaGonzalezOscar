/* import { useEffect, useState } from "react" */
import ItemCount from "./ItemCount"
import ItemList from "./ItemList/ItemList"
import Item  from "./Item/Item"

const ItemListContainer = ({greeting}) =>{ 
    
    const item1 = {id: 1,
        titulo: "Whisky1"    
    }
    const item2 = {id: 2,
        titulo: "Whisky2"    
    }
   
    function onAdd(numero){
        console.log("Se ejecuta la funcion onAdd", numero)
    }

    return(
        <>
            <div>{greeting}</div>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <ItemList items ={[<Item id="1" titulo="whisky1"/>, <Item id="2" titulo= "whisky2"/>]}/>

        </>
    )
}
export default ItemListContainer