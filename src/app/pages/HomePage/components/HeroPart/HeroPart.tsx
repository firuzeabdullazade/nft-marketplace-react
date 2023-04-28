import "./HeroPart.scss";
import imagePlaceholder from '../../../../../assets/Image Placeholder.png';
import avatar from '../../../../../assets/Avatar Placeholder (2).png';
import rocket from '../../../../../assets/RocketLaunch.svg';


export const HeroPart = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section-frame">
          <div className="hero-text">
            <div className="subhead">
              <h1>Discover Digital Art & Collect NFTs</h1>
              <p>
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
            </div>
            <div className="highlighted-nft-mobile">
              <img
                className="NFT-image"
                src={imagePlaceholder}
                alt="NFT"
              />
              <div className="frame">
                <h5>Space Walking</h5>
                <div className="frame-bottom">
                  <img
                    src={avatar}
                    alt="Avatar Placeholder"
                  />
                  <div className="animakid">Animakid</div>
                </div>
              </div>
            </div>
            <button>
              <img src={rocket} alt="Rocket Launch"/>
              Get Started
            </button>
            <div className="additional-info">
              <div className="total-sale">
                <h4>240k+</h4>
                <div className="info">Total Sale</div>
              </div>
              <div className="auctions">
                <h4>100k+</h4>
                <div className="info">Auctions</div>
              </div>
              <div className="artists">
                <h4>240k+</h4>
                <div className="info">Artist</div>
              </div>
            </div>
          </div>
          <div className="highlighted-nft">
            <img src= {imagePlaceholder} alt="NFT" />
            <div className="frame">
              <h5>Space Walking</h5>
              <div className="frame-bottom">
                <img
                  src= {avatar}
                  alt="Avatar Placeholder"
                />
                <div className="animakid">Animakid</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
