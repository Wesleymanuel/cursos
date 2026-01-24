import Box  from './components/Box'
import './App.css'
import { GrCertificate } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import LangingPage from './components/LangingPage'
import CursesCardRoot from './components/card/CursesCardRoot';

function App() {

  return (
    <>
      <LangingPage/>
      <div className='boxs-root'>
        <Box icon={FaStar} text='best reviews'/>
        <Box icon={GrCertificate} text='international certifications'/>
        <Box icon={FaRobot} text='innovations with AI'/>
      </div>
      <div className='cards-root'>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
      </div>
      <div className='cards-root'>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
      </div>
    </>
  )
}

export default App
