import  NovoLugarForm  from '../../components/lugar/LugarForm'

const NovoLugarPage = () => {

    const onAdicionarLugar = (lugar) => {
        console.log(lugar)
    }

    return (
            <NovoLugarForm 
                onAdicionarLugar={onAdicionarLugar}
            />
    )
}
export default NovoLugarPage;