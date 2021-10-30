import LugarItem from "./LugarItem"

const LugarLista = ({lugares}) => {
    return lugares.map(lugar => (
       <LugarItem 
           key={lugar.id}
           id={lugar.id}
           titulo={lugar.titulo}
           foto={lugar.foto}
           endereco={lugar.endereco}
       /> 
    ))
}

export default LugarLista