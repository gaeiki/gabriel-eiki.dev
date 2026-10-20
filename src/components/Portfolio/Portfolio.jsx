import { useTranslation } from "react-i18next";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import PortfolioCardMobile from "../PortfolioCardMobile/PortfolioCardMobile";

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="p-10 py-12">
      <div className="flex flex-col items-center">
        <h3 className="titulo-secao">{t("portfolio.title")}</h3>
      </div>
      <PortfolioCard />
      <PortfolioCardMobile />
    </section>
  );
}
