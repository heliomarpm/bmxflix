import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#202020" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.heroVideo.titulo}
        url={dadosIniciais.heroVideo.url}
        heroImg={dadosIniciais.heroVideo.bgImage}
        videoDescription={dadosIniciais.heroVideo.sinopse}
        alignVideo={dadosIniciais.heroVideo.alignVideo}
      />

      {dadosIniciais.categorias.map((item, index) => {
        return <Carousel category={dadosIniciais.categorias[index]} />
      })}
      
      <Footer />
    </div>
  );
}

export default Home;
