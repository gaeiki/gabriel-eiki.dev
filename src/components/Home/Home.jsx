import Programmer from '../../assets/7118756_3426525.svg';
import Typewriter from 'typewriter-effect';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Home() {

  return (
    <section id='home' className='mt-20 min-h-screen mx-10 flex py-20 md:flex-row flex-col items-center'>
        <div className='flex-1 pt-20 md:pt-0 md:pl-[10%] md:m-4 flex flex-col items-center md:items-start'>
            <span className='text-3xl text-gray-700 dark:text-gray-100 selection:bg-[#00d2df]'>Olá! Eu sou</span>
            <h1 className='text-5xl font-semibold text-[#00d2df] my-2 selection:bg-[#9346bc]'>
                <Typewriter onInit={(typewriter) => {
                    typewriter.typeString("Gabriel Eiki").start();
                }} />
            </h1>
            <h4 className='text-3xl text-gray-700 dark:text-gray-100 selection:bg-[#00d2df]'>Desenvolvedor Front-end</h4>

            <div className="my-4">
                <ul className="flex flex-col gap-y-1 text-gray-800 dark:text-gray-100 duration-300">
                    <li>
                        <span>☕ Movido a café</span>
                    </li>
                    <li>
                        <span>🎓 Engenheiro Mecatrônico</span>
                    </li>
                    <li>
                        <span>🌎 Residente em Floripa (BR)</span>
                    </li>
                    <li>
                        <span>🚴‍♂️ Pedalando por aí...</span>
                    </li>
                </ul>
            </div>
            
            <div className='flex gap-5 flex-wrap justify-center text-3xl mt-3'>
            {/* button-custom é um estilo personalizado dentro de index.css */}
                <a href="https://www.linkedin.com/in/gabriel-eiki-oshiro-07b324b0/" target="_blank" className='button-custom border-[#0A66C2] hover:bg-gray-500/25 dark:hover:bg-gray-200/10'>
                    <BsLinkedin className='text-[#0A66C2]'/>
                    <span className='text-xl dark:text-gray-100'>Linkedin</span>
                </a>
                <a href="https://github.com/gaeiki" target="_blank" className='button-custom border-black dark:border-gray-100 hover:bg-gray-500/25 dark:hover:bg-gray-200/10'>
                    <BsGithub className='dark:text-gray-100'/>
                    <span className='text-xl dark:text-gray-100'>Github</span>
                </a>
            </div>
        </div>
        <div className='hidden md:flex-1 md:flex md:flex-col md:items-center md:justify-center md:h-full'>
            <img src={Programmer} alt="Pessoa sentada programando" />
            <a href="https://www.freepik.com/free-vector/programming-concept-illustration_7118756.htm#query=programing&position=4&from_view=search&track=sph" className='text-[8px] text-gray-800 dark:text-gray-100 duration-300' target="_blank">Image by storyset</a>
        </div>
    </section>
  )
}
