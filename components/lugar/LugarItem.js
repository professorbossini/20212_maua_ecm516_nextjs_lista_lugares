import { Button } from 'primereact/button'
import { useRouter } from 'next/router'
const LugarItem = ({titulo, foto, endereco, id}) => {
    const router = useRouter()
    const exibirDetalhes = () => {
        //id=1 então localhost:3000/1
        //id=2 então localhost:3000/2
        router.push(`/${id}`)
    }
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
                onClick={exibirDetalhes}
            />
        </div>
    )
}

export default LugarItem