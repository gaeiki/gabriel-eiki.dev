import { BsFillEnvelopeAtFill, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Contact() {
  return (
    <section id="contact" className="p-10 py-12">
        <div className="flex flex-col items-center">
        <h3 className="titulo-secao">Contato</h3>
      </div>
      <div className="flex flex-col items-center mt-2 text-lg text-gray-800 dark:text-gray-100">
        <p>Se tiver interesse em conversar, você pode me encontrar nos seguintes canais:</p>
        <ul className="mt-6 flex flex-col items-center gap-2">
            <li>
                <div className="flex gap-2 items-center cursor-text">
                    <BsFillEnvelopeAtFill />
                    <span>gabueiki96@gmail.com</span>
                </div>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/gabriel-eiki-oshiro-07b324b0/" target="_blank" className="flex gap-2 items-center">
                    <BsLinkedin />
                    <span>Linkedin: Gabriel Eiki Oshiro</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/gaeiki" target="_blank" className="flex gap-2 items-center">
                    <BsGithub />
                    <span>Github: gaeiki</span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/gaeiki/" target="_blank" className="flex gap-2 items-center">
                    <BsInstagram  className=""/>
                    <span>Instagram: @gaeiki</span>
                </a>
            </li>
        </ul>
      </div>
    </section>
  )
}
