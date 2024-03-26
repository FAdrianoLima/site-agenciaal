import Banner from "../components/banner";
import Menu from "../components/menu";
import Quemsomos from "../components/quemsomos.jsx";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeNewFly from "../components/rodape-newfly";
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
