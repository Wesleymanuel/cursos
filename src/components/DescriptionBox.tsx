import { useState } from 'react';
import './DescriptionBox.css'
import { IoIosArrowDown } from "react-icons/io";
import { RiPlayLargeFill } from "react-icons/ri";

const DescriptionBox = () => {

    const [show, setShow] = useState<boolean>(false);
    const [watchedVideo, setWatchedVideo] = useState<boolean>(false);

    const showDesripion = () => {
        setShow(prev => !prev)
    }
  
    const completedVideo = () => {
        setWatchedVideo(prev2 => !prev2)
    }

  return (
    <main className='descriptionBox-container'>
        <div onClick={showDesripion} className={`description-box ${show ? 'scalle' : ''}`}>
            <IoIosArrowDown className={`${show ? 'active' : ''}`}/>
            <p>discripion</p>
        </div>
        {show && <div className={`lorem ${show ? 'open' : 'close'}`}>
            <ul>
                <li style={{display: 'flex', alignItems: 'center', marginTop: '8px', marginBottom: '8px', fontSize: '1.1em'}}>
                    <RiPlayLargeFill onClick={completedVideo} color='blue' style={{color: `${watchedVideo ? 'var(--base-color)' : 'white'}`}}/>
                    <p style={{marginLeft: '8px'}}>title</p>
                </li>   
            </ul>
        </div>}
    </main>
  )
}

export default DescriptionBox