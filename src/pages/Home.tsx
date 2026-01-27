import { GrCertificate } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import LangingPage from '../components/LangingPage'
import CursesCardRoot from '../components/card/CursesCardRoot';
import Box  from '../components/Box'
import './Home.css'
import { CommentHtml } from "../components/Comments";
import { useFetchCourses } from "../hooks/useFetchCourses";

const Home = () => {

  const { data, isError, isLoading } = useFetchCourses();

  return (
    <>
      <LangingPage/>
      <section className='boxs-root'>
        <Box icon={FaStar} text='best reviews'/>
        <Box icon={GrCertificate} text='international certifications'/>
        <Box icon={FaRobot} text='innovations with AI'/>
      </section>
      {/* 
      <section className='cards-root'>
        <CursesCardRoot name={data.title} description={data.description} price={data.price} img={data.img}/>
        <CursesCardRoot name={data.title} description={data.description} price={data.price} img={data.img}/>
        <CursesCardRoot name={data.title} description={data.description} price={data.price} img={data.img}/>
        <CursesCardRoot name={data.title} description={data.description} price={data.price} img={data.img}/>
        <CursesCardRoot name={data.title} description={data.description} price={data.price} img={data.img}/>
        <CursesCardRoot name={data.title} description={data.description} price={data.price} img={data.img}/>
        <CursesCardRoot name={data.title} description={data.description} price={data.price} img={data.img}/>
      </section>
      */}
      <section className='cards-root'>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
        <CursesCardRoot/>
      </section>
      <section className="comments-root">
        <CommentHtml name="wesley" text='I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.'/>
        <CommentHtml name="emanuel" text='I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.'/>
        <CommentHtml name="sabrina" text='I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.'/>
        <CommentHtml name="laisa" text='I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.'/>
        <CommentHtml name="emanuela" text='I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.'/>
        <CommentHtml name="eduarda" text='I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.'/>
        <CommentHtml name="larissa" text='I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.'/>
        <CommentHtml name="ster" text='I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.'/>
        <CommentHtml name="fernando" text='I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.'/>
      </section>
    </>
  )
}

export default Home