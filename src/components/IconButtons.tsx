import { type ElementType } from 'react'
import { Button } from '@mantine/core';
import './IconButtons.css'

interface IconButtonsProps{
    icon: ElementType
    text: string
}

const IconButtons = ({text, icon : Icon} : IconButtonsProps) => {
  return (
    <div className='incon-but-container'>
        <Icon className='icons-properts'/>
        <Button className='button-side'>
            {text}
        </Button>
    </div>
  )
}

export default IconButtons