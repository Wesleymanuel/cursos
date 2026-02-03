import './Modal.css'
import { Button, ButtonGroupSection } from '@mantine/core'
import { MdOutlineCancel } from "react-icons/md";
import Inputt from './Inputt';

interface ModalProps{
    open: boolean
    onClose: () => void
}

const Modal = ({open, onClose} : ModalProps) => {
  return (
    <main className={`modal-main ${open ? 'modal-open' : ''}`}>
        <div style={{position: 'absolute', top: '10px', left: '10px', fontSize: '1em', color: 'var(--base-color)'}}>
            <MdOutlineCancel style={{color: 'white'}} onClick={onClose}/>
        </div>
        <form className={`form-modal`}>
            <Inputt placeholder='xxx.xxx.xxx-xx' label='CPF'/>
            <Inputt placeholder='xxxx xxxx xxxx xxxx' label='NUMBER'/>
            <Inputt placeholder='mm/yyyy' label='VALITY'/>
            <Inputt placeholder='xxx' label='CVC'/>
            <div  style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '3px'}}>
                <Button>
                    confirm
                </Button>
                <Button>
                    cancel
                </Button>
            </div>
        </form>
    </main>
  )
}

export default Modal