import type { ElementType } from 'react'
import './Box.css'

interface BoxProps{
  text: string
  icon: ElementType
}

const Box = ({text,icon: Icon} : BoxProps) => {
  return (
    <section className='box-main'>
        <Icon className='icone-box'/>
        <p>{text}</p>
    </section>
  )
}

export default Box