import { useState } from 'react'
import { Button } from 'primereact/button'



const LugarForm = (props) => {

    const [titulo, setTitulo] = useState('')
    const [foto, setFoto] = useState('')
    const [endereco, setEndereco] = useState('')
    const [descricao, setDescricao] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        const lugar = {
            titulo, foto, endereco, descricao
        }
        props.onAdicionarLugar(lugar)

    }

    const limparCampos = (e) => {
        e.preventDefault()
        setTitulo('')
        setFoto('')
        setEndereco('')
        setDescricao('')  

    }

    const cancelar = (e) => {
        e.preventDefault()
    }

    return (
        <form>
            <div className="formgrid grid">
                <div className="field col-12 lg:col-6">
                    <label htmlFor="titulo">Título</label>
                    <input
                        onChange={(e) => setTitulo(e.target.value)}
                        value={titulo} 
                        type="text" 
                        id="titulo" 
                        className="inputfield w-full p-2" />
                </div>
                <div className="field col-12 lg:col-6">
                    <label htmlFor="foto">URL da foto</label>
                    <input
                        onChange={(e) => setFoto(e.target.value)}
                        value={foto}  
                        type="text" 
                        id="foto" 
                        className="inputfield w-full p-2" />
                </div>
                <div className="field col-12">
                    <label htmlFor="endereco">Endereço</label>
                    <input 
                        onChange={(e) => setEndereco(e.target.value)}
                        value={endereco} 
                        type="text" 
                        id="endereco" 
                        className="inputfield w-full p-2" />
                </div>
                <div className="field col-12">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        onChange={(e) => setDescricao(e.target.value)} 
                        value={descricao}
                        id="descricao" 
                        className="inputfield w-full p-3"></textarea>
                </div>
                <div className="col-12 flex justify-content-end">
                    <span className="p-buttonset">
                        <Button label="Salvar" icon="pi pi-check"/>
                        <Button label="Limpar" icon="pi pi-trash"/>
                        <Button label="Cancelar" icon="pi pi-times"/>
                    </span>
                </div>
            </div>
        </form>
    )
}

export default LugarForm