import "./BrowseCategories.scss";
import art from "./Category Icon.png";
import collectibles from "./Photo & Icon.png";
import music from "./Photo & Icon (1).png";
import photography from "./Photo & Icon (2).png";
import video from "./Category Icon (1).png";
import utility from "./Category Icon (2).png";
import sport from "./Category Icon (3).png";
import virtualWorlds from './Category Icon (4).png';

export const BrowseCategories = () => {
  return (
    <>
      <section className="browse-categories">
        <div className="section-headline">
          <h3>Browse Categories</h3>
        </div>
        <div className="category-cards-grid">
          <div className="category-cards-row">
            <div className="category-card">
              <div className="photo-icon">
                <img src={art} alt="art" />
              </div>
              <div className="collection-name">
                <h5>Art</h5>
              </div>
            </div>
            <div className="category-card">
              <div className="photo-icon">
                <img src={collectibles} alt="collectibles" />
              </div>
              <div className="collection-name">
                <h5>Collectibles</h5>
              </div>
            </div>
            <div className="category-card">
              <div className="photo-icon">
                <img src={music} alt="music" />
              </div>
              <div className="collection-name">
                <h5>Music</h5>
              </div>
            </div>
            <div className="category-card">
              <div className="photo-icon">
                <img src={photography} alt="photography" />
              </div>
              <div className="collection-name">
                <h5>Photography</h5>
              </div>
            </div>
          </div>
          <div className="category-cards-row">
            <div className="category-card-bottom">
              <div className="photo-icon">
                <img src={video} alt="video" />
              </div>
              <div className="collection-name">
                <h5>Video</h5>
              </div>
            </div>
            <div className="category-card-bottom">
              <div className="photo-icon">
                <img src={utility} alt="utility" />
              </div>
              <div className="collection-name">
                <h5>Utility</h5>
              </div>
            </div>
            <div className="category-card-bottom">
              <div className="photo-icon">
                <img src={sport} alt="sport" />
              </div>
              <div className="collection-name">
                <h5>Sport</h5>
              </div>
            </div>
            <div className="category-card-bottom">
              <div className="photo-icon">
                <img
                  src= {virtualWorlds}
                  alt="virtual worlds"
                />
              </div>
              <div className="collection-name">
                <h5>Virtual Worlds</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
