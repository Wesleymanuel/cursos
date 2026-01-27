import './CursesCards.css'

const imagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg8Sl78R9oIwILZiEkpzKYXHAI0Z60uoI4g&s"

const CursesCardRoot = () => {
  return (
    <main className='cards-main'>
        <div className='img-container' style={{ backgroundImage: `url(${imagem})`, height: '50%'}}>
        </div>
        <div className='titulo'>
            <p>titulo</p>
        </div>
        <div className='especificoes'>
            <div>
                <p>top vendas</p>
            </div>
            <div>
                <p>certificado</p>
            </div>
            <div>
                <p>espeficao</p>
            </div>
        </div>
        <div className='preco'>
            <p>preco</p>
        </div>
    </main>
  )
}

export default CursesCardRoot

{/*"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg8Sl78R9oIwILZiEkpzKYXHAI0Z60uoI4g&s" */}