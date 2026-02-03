import { Button } from '@mantine/core';
import './IndividualProduct.css'
import DescriptionBox from '../components/DescriptionBox';
import { useState } from 'react';
import Modal from '../components/Modal';

const IndividualProduct = () => {

  const [open, setOpen] = useState<boolean>(false);

  const modalCall = () => {
    setOpen(prev3 => !prev3)
  }

  return (
    <main className='individual-container'>
      <Modal open={open} onClose={modalCall}/>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', order: '4'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg8Sl78R9oIwILZiEkpzKYXHAI0Z60uoI4g&s" alt="sla" width={'90%'} height={'100%'} />
      </div>
      <div className='individual-infos'>
        <p style={{width: '100%', height: '40px'}}>teste</p>
        <div>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </div>
      </div>
      <div style={{order: '2', display: 'flex', justifyContent: 'flex-start', gap: '10px'}}>
        <Button >
          add to card
        </Button>
        <Button onClick={modalCall}>
          buy
        </Button>
      </div>
      <div style={{order: "1"}}>
        <DescriptionBox/>
      </div>
      <div>
        <DescriptionBox/>
        <DescriptionBox/>
        <DescriptionBox/>
        <DescriptionBox/>
        <DescriptionBox/>
      </div>
    </main>
  )
}

export default IndividualProduct