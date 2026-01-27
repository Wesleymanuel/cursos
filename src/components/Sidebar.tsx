import './Sidebar.css'
import { IoPersonCircleSharp } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";
import { IoMdColorPalette } from "react-icons/io";
import IconButtons from './IconButtons';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineNotificationsActive } from "react-icons/md";

interface SidebarProps {
    open : boolean
    onClose : () => void
}

const Sidebar = ({open, onClose}: SidebarProps ) => {
return (
    <>
      <div
        className={`sidebar-overlay ${open ? "show" : ""}`}
        onClick={onClose}
      />
      <div className={`sidebar-container ${open ? "show" : ""}`}>
        <main className='options-container'>
            <IoPersonCircleSharp fontSize={'50px'} style={{marginTop: '8px'}}/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: '10px', width: '100%',marginTop: '8px'}}>
                <IconButtons icon={PiCertificate} text='my courses'/>
                <IconButtons icon={IoMdColorPalette} text='theme'/>
                <IconButtons icon={FaMoneyCheckDollar} text='promotions'/>
                <IconButtons icon={MdOutlineNotificationsActive} text='notifications'/>
                <IconButtons icon={PiCertificate} text='certifications'/>
            </div>
        </main>
      </div>
    </>
  );
}

export default Sidebar