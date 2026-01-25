import './Header.css';
import { Button } from '@mantine/core';
import { FaMeteor } from "react-icons/fa";
import Input from './Input';
import SelectComponent from './SelectComponent';
import { useMediaQuery } from '@mantine/hooks';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

const Header = () => {

    const media = useMediaQuery('(max-width: 660px)')
    const [opened, { toggle }] = useDisclosure();

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
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className='sla1'>
                <div >
                    <Input/>
                </div>
                {media ? (
                    <Burger
                    opened={opened}
                    onClick={toggle}
                    aria-label="Toggle navigation"
                    color="#1c73be"
                    />
                ) : (
                    <Button variant="transparent" className='button-input'>
                    Sign in
                    </Button>
                )}
            </div>
        </nav>
    </header>
  )
}

export default Header