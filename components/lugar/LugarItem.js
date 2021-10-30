import { Button } from 'primereact/button'
const LugarItem = ({titulo, foto, endereco, id}) => {
    return (
        <div className="flex flex-column align-items-center m-3 border border-round border-1 border-400 p-2">
            <p className="text-center sm:text-base md:text-lg lg:text-3xl">
                {titulo}
            </p>
            <div>
                <img src={foto} alt={titulo} className="border border-round" width={400} />
            </div>
            <address className="text-center text-xs md:text-sm lg:text-base mb-2">{endereco}</address>
            <Button 
                label="Ver detalhes"
            />
        </div>
    )
}

export default LugarItem