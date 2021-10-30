import { useState } from 'react'
import { Button } from 'primereact/button'

const LugarForm = (props) => {
    return (
        <form>
            <div className="formgrid grid">
                <div className="field col-12 lg:col-6">
                    <label htmlFor="titulo">Título</label>
                    <input type="text" id="titulo" className="inputfield w-full p-2" />
                </div>
                <div className="field col-12 lg:col-6">
                    <label htmlFor="foto">URL da foto</label>
                    <input type="text" id="foto" className="inputfield w-full p-2" />
                </div>
                <div className="field col-12">
                    <label htmlFor="endereco">Endereço</label>
                    <input type="text" id="endereco" className="inputfield w-full p-2" />
                </div>
                <div className="field col-12">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" className="inputfield w-full p-3"></textarea>
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