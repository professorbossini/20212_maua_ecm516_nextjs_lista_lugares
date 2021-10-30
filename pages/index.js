import Layout from "../components/layout/Layout";
import LugarForm from "../components/lugar/LugarForm";
import LugarItem from "../components/lugar/LugarItem";
import LugarLista from "../components/lugar/LugarLista";

const HomePage = () => {
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
  return (
    <Layout>
      {/* <LugarLista lugares={lugares} /> */}
      <LugarForm />
    </Layout>
  )
  };
export default HomePage;
