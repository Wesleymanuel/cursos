import './LandingPage.css'
import Header from './Header'
import { FaMeteor } from "react-icons/fa";

const LangingPage = () => {
  return (
    <section className='first-main'>
        <Header/>
        <div className='section-logo'>
            <div className='text-content'>
                <h1>super</h1>
                <h1>fast</h1>
            </div>
            <FaMeteor className='logo2' />
            <div className='text-content'>
                <h1>code</h1>
                <h1>learning</h1>
            </div>
        </div>
    </section>
  )
}

export default LangingPage