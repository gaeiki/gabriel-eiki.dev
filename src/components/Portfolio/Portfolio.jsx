import PortfolioCard from "../PortfolioCard/PortfolioCard";
import PortfolioCardMobile from "../PortfolioCardMobile/PortfolioCardMobile";

export default function Portfolio() {
  
  return (
    <section id="portfolio" className="p-10 py-12">
      <div className="flex flex-col items-center">
        <h3 className="titulo-secao">Projetos</h3>
      </div>
      <PortfolioCard />
      <PortfolioCardMobile />
    </section>
  );
}
