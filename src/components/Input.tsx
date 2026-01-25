import './Input.css'
import { FaSearch } from "react-icons/fa";
import { useMediaQuery } from '@mantine/hooks';

const Input = () => {

  const mediaQuery = useMediaQuery('max-width: ')

  return (
    <main className='input-main'>
        <div className='search-logo'> 
            <FaSearch className='search'/>
        </div>
        <input type="text" className='text-input' />
    </main>
  )
}

export default Input 