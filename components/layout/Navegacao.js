import { Toolbar } from 'primereact/toolbar'
import { Button } from 'primereact/button'
const Navegacao = () => {
    const botoes = (
        <>
            <Button 
                label="Lista de lugares"
                icon="pi pi-list"
                color="warn"
                className="mr-2 p-button-secondary"
            />
            <Button 
                label="Novo Lugar"
                icon="pi pi-plus"
            />
        </>
    )
    return (
        <Toolbar right={botoes}/>
    )
}
export default Navegacao