const LugarDetalhes = ({foto, titulo, descricao}) => {
    return (
        <div
            className="flex flex-column align-items-center m-3 border border-round border-1 border-400">

            <div>
                <img className="border border-round" src={foto} alt={titulo}/>
            </div>
            <p
                className="text-center sm:text-base md:text-lg lg:text-3xl">
                {descricao}
            </p>

        </div>
    )
}

export default LugarDetalhes