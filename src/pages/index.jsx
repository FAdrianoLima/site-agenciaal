import Banner from "../components/banner";
import Menu from "../components/menu";
import Quemsomos from "../components/quemsomos.jsx";
import Contato from "../components/contato.jsx";
import Areaatuacao from "../components/areaatuacao.jsx";
import Frame06 from "../components/frame06.jsx";
import GoogleMap from "../components/map";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeNewFly from "../components/rodape-newfly";
import Parceiros from "../components/parceiros";
import Galeria from "../components/galeria";
import Blog from "../components/blog";
import Parceiros2 from "../components/parceiros2";
import Blogs from "./blog";
import Casas from "../components/casas";
import Referencia from "../components/referencia";

export default function Home() {
  return (
    <>
      <Menu />
      <a id="banner"></a>
      <Banner />
      <Quemsomos />
      <Referencia />
      <Rodape />
      <Whats />
      <RodapeNewFly />
    </>
  );
}
