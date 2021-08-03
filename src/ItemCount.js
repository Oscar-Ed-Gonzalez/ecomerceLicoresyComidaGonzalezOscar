import { useState } from "react"


const ItemCount = ({stock, initial, onAdd}) => {
    const [contador,setContador] = useState(initial)
    
    const sumarContador = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const ejecutarOnAdd = () => {
        if(stock==0){
            console.log("No hay Stock")
        }else{
            onAdd(contador)
        }

    }

    return(
        <>
            <div id="contenedorItemCount">
                <p>Producto</p>
                <div id="contenedorItemCountBotones">
                    <button onClick={restarContador}> - </button>
                    {contador}
                    <button onClick={sumarContador}> + </button>
                </div>
                <button onClick={ejecutarOnAdd}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount