import CartWidget from "./CartWidget"

const Header = ({nombre, edad}) =>{
    ///let {nombre, edad} = parametros
    //nombre = "Juan " muy mala practica muy mala
    return(
        <header>
            {/*Desde aqui hay que salir de JSX*/}
            <h1>E-COMMERCE de {nombre}</h1>
            <nav id="menu">
                <a href="#"> Iniciar Sesión</a>
                <a href="#"> Mis pedidos </a>
                <CartWidget />
            </nav>
        </header> 
    )
}
   

export default Header