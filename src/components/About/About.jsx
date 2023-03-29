import profilePhoto from "../../assets/Profile.jpeg";
import { BsFillCloudArrowDownFill, BsFillEnvelopeAtFill } from "react-icons/bs";
import curriculo from "../../assets/Currículo Gabriel Eiki - Desenvolvedor.pdf";
import introduction from '../../json/introduction.json';

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center p-10 md:p-20 md:flex-row bg-light-200 dark:bg-dark-200 duration-300"
    >
      <div className="md:flex-1 md:flex md:justify-center">
        <img
          src={profilePhoto}
          alt="Foto de Gabriel sorrindo"
          className="h-80 shadow-lg shadow-slate-700 dark:shadow-slate-900"
        />
      </div>
      <div className="flex flex-col items-center mt-10 md:flex-1 md:items-start">
        <h3 className="titulo-secao">
          Sobre mim
        </h3>
        <p className="text-justify mt-3 text-lg indent-8 text-gray-800 dark:text-gray-100">
          {introduction.introducao}
        </p>
        <div className="flex gap-5 text-3xl mt-5">
          <a
            href={curriculo}
            download
            className="button-custom border-sky-700 hover:bg-gray-500/25 dark:hover:bg-gray-200/10"
          >
            <BsFillCloudArrowDownFill className="text-gray-100" />
            <span className="text-xl dark:text-gray-100">Currículo</span>
          </a>
          <a
            href="mailto:gabueiki96@gmail.com"
            className="button-custom border-[#DE4032]  hover:bg-gray-500/25 dark:hover:bg-gray-200/10"
          >
            <BsFillEnvelopeAtFill className="dark:text-gray-100" />
            <span className="text-xl dark:text-gray-100">E-mail</span>
          </a>
        </div>
      </div>
    </section>
  );
}
