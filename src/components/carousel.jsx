import "../styles/Quemsomos.module.css";
import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "../components/card";

export default function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <Carousel>
        <Card imagem="/Quem-somos/carrossel-01.png" />
        <Card imagem="/Quem-somos/carrossel-02.png" />
        <Card imagem="/Quem-somos/carrossel-03.png" />
        <Card imagem="/Quem-somos/carrossel-04.png" />
        <Card imagem="/Quem-somos/carrossel-05.png" />
        <Card imagem="/Quem-somos/carrossel-06.png" />
        <Card imagem="/Quem-somos/carrossel-07.png" />

        {/* lista antiga

                <Card imagem="/Quem-somos/image-7.png" />
                <Card imagem="/Quem-somos/image-3.png" />
                <Card imagem="/Quem-somos/unnamed[1019].png" />
                <Card imagem="/Quem-somos/IMG-6602.png" />
                <Card imagem="/Quem-somos/Maia-Empresarial-Hall-1.png" />
                <Card imagem="/Quem-somos/Maia-Empresarial-Sala-de-Conferências-1.png" />

               <Card imagem="/Quem-somos/image-1.png" />
                <Card imagem="/Quem-somos/image-2.png"/>
                <Card imagem="/Quem-somos/image-3.png"/>
                <Card imagem="/Quem-somos/image-4.png"/>
                <Card imagem="/Quem-somos/image-7.png"/>
                <Card imagem="/Quem-somos/Maia-Empresarial-Hall-1.png" />
                <Card imagem="/Quem-somos/Maia-Empresarial-Sala-de-Conferências-1.png" />
               */}
      </Carousel>
    </div>
  );
}
