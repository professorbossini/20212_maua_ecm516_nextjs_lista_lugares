import LugarLista from "../components/lugar/LugarLista";

const lugares = [
  {
    id: "1",
    titulo: "Trilhos",
    foto: "https://images.unsplash.com/photo-1556905200-279565513a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb1.2.1&auto=format&fit=crop&w=1470&q=80",
    endereco: "Vila J, Interior de SP",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat harum odio omnis est fugit, incidunt, magni corporis vero aperiam fuga facereab delectus natus placeat dolor nam quos sint impedit!",
  },
  {
    id: "2",
    titulo: "Praça H",
    foto: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb1.2.1&auto=format&fit=crop&w=1170&q=80",
    endereco: "Praça H, Austrália",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat harum odio omnis est fugit, incidunt, magni corporis vero aperiam fuga facere ab delectus natus placeat dolor nam quos sint impedit!",
  },
];

const HomePage = (props) => {
  return (
    <LugarLista lugares={props.lugares} />
  )
};

export async function getStaticProps (){
  //aqui você obter dados de uma base de dados, por exemplo
  //fazer requisições HTTP
  //etc
  return {
    props: {
      lugares: lugares
    }
  }
}

export default HomePage;
