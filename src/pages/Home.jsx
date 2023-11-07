import CardC from "../components/CardC";
import CarouselC from "../components/CarouselC";


const Home = () => {
  return (
    <div>
      <CarouselC />
      <div style={{ padding: "80px" }}>
        <h2>Nossos produtos</h2>
        <div className="card-group" >
          <p>Nossos utensílios de cozinha são projetados para atender às necessidades dos chefs amadores e profissionais. Desde panelas e frigideiras de alta qualidade até facas afiadas e acessórios úteis, estamos comprometidos em fornecer os melhores produtos para facilitar a sua jornada na culinária.

As panelas e frigideiras em nosso catálogo são construídas com materiais duráveis, garantindo a distribuição uniforme de calor para um cozimento perfeito. Nossas facas são afiadas a laser, proporcionando cortes precisos e seguros em todos os tipos de alimentos. Além disso, oferecemos uma variedade de acessórios, como utensílios de silicone, tábuas de corte e muito mais, para facilitar as tarefas diárias na cozinha. </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
