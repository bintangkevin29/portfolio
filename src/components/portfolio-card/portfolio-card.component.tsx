import React, { useEffect, useState } from "react";
import { RiGithubLine, RiLinksLine, RiToolsLine } from "react-icons/ri";
import { Portfolio } from "../../global";
import { firebaseStorage } from "../../lib/firebase";

import "./portfolio-card.style.scss";

interface Props {
  portfolioData: Portfolio;
}

const PortfolioCard: React.FC<Props> = ({ portfolioData }) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (portfolioData.imageUrl) {
      firebaseStorage
        .ref(portfolioData.imageUrl)
        .getDownloadURL()
        .then((url) => setImageUrl(url));
    }
  }, [portfolioData]);

  return (
    <div className="portfolio-card">
      <div className="portfolio-card__image-container">
        {imageUrl ? (
          <img src={imageUrl} className="portfolio-card__image" alt="" />
        ) : (
          <div className="portfolio-card__image-loading" />
        )}
      </div>
      <div className="portfolio-card__content">
        <div className="portfolio-card__details">
          <div className="portfolio-card__title">{portfolioData.name}</div>
          <div className="portfolio-card__description">{portfolioData.description} </div>
          <div className="portfolio-card__tools">
            <RiToolsLine /> {portfolioData.libraryFramework}
          </div>
        </div>
        <div className="portfolio-card__navigation">
          {portfolioData.githubUrl !== "-" && (
            <a
              href={portfolioData.githubUrl}
              className="portfolio-card__navigation-items"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubLine />
            </a>
          )}
          {portfolioData.url !== "-" && (
            <a
              href={portfolioData.url}
              className="portfolio-card__navigation-items"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinksLine />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
