import Carousel from 'react-bootstrap/Carousel';
import './CarouselC.css'

function CarouselC() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img src='/img1.webp' alt="" />
        <Carousel.Caption>
          <h3>Rola de massa</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/faca.jpeg' alt="" />
        <Carousel.Caption>
          <h3>Talheres</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/colher.webp' alt="" />
        <Carousel.Caption>
          <h3>E muito mais</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;