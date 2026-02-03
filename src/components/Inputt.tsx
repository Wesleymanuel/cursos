import './Inputt.css'

interface FormInputProps{
    placeholder: string
    label : string
}

const Inputt = ({placeholder,label} : FormInputProps) => {


  return (
    <main className='input-form-container'>
        <label htmlFor="">{label}</label>
        <input type="text" placeholder={placeholder}/>
    </main>
  )
}

export default Inputt