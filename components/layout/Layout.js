import Navegacao from "./Navegacao";
const Layout = ({children}) => {
    return (
        <div className="grid justify-content-center">
            <div className="col-12">
                <Navegacao />
            </div>
            <div className="col-12 md:col-10 lg:col-8 border border-round border-1 border-400">
                {children}
            </div>
        </div>
    )
}

export default Layout