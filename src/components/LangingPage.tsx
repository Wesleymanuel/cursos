import './LandingPage.css'
import Header from './Header'
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay'

const LangingPage = () => {

  return (
    <section className='first-main'>
        <Header/>
        {/*<div className='section-logo'>
            <div className='text-content'>
                <h1>super</h1>
                <h1>fast</h1>
            </div>
            <FaMeteor className='logo2' />
            <div className='text-content'>
                <h1>code</h1>
                <h1>learning</h1>
            </div>
        </div>*/}
        <Carousel
            height="100%"
            withIndicators
            style={{height : '100dvh', width: '100%', zIndex:'-2'}}
            plugins={[Autoplay({ delay: 3000 })]}
        >
            <Carousel.Slide>
                <img src="https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg" alt="imagem 1" width={'100%'} height={'100%'}/>
            </Carousel.Slide>
            <Carousel.Slide>
                <img src="https://esr.rnp.br/wp-content/uploads/2023/08/programming-background-with-person-working-with-codes-computer-scaled-1.jpg" alt="imagem 2" width={'100%'} height={'100%'}/>
            </Carousel.Slide>
        </Carousel>
    </section>
  )
}

export default LangingPage