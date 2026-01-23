import './Header.css';
import { Button } from '@mantine/core';
import { FaMeteor } from "react-icons/fa";
import Input from './Input';
import SelectComponent from './SelectComponent';

const Header = () => {
  return (
    <header className='header'>
        <nav className='header-nav'>
            <div className='logo-header'>
                <FaMeteor/>
            </div>
            <ul>
                <li><SelectComponent/></li>
                <li><SelectComponent/></li>
                <li><SelectComponent/></li>
            </ul>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Input/>
                <Button variant="transparent">
                    sing in
                </Button>
            </div>
        </nav>
    </header>
  )
}

export default Header