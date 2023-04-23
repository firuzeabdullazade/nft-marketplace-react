import "./Discover.scss";
import eye from "./Eye.svg";
import nftFirst from './Image Placeholder (1).png';
import moonDancer from './Avatar.svg';
import nftSecond from './Image Placeholder (2).png';
import nebulaKid from './Avatar Placeholder (3).svg';
import nftThird from './Image Placeholder (3).png';
import spaceone from './Avatar Placeholder (4).svg';

export const Discover = () => {
  return (
    <section className="discover-more-NFTs">
      <div className="section-headline-button">
        <div className="section-headline">
          <h3>Discover More NFTs</h3>
          <div className="subhead">Explore new trending NFTs</div>
        </div>
        <div className="button">
          <button>
            <img src= {eye} alt="eye" />
            See All
          </button>
        </div>
      </div>
      <div className="NFT-cards-row">
        <div className="NFT-card">
          <img src= {nftFirst} alt="NFT" />
          <div className="NFT-info">
            <div className="artist-info">
              <h5>Distant Galaxy</h5>
              <div className="artist-avatar-name">
                <img src= {moonDancer} alt="avatar" />
                MoonDancer
              </div>
            </div>
            <div className="additional-info">
              <div className="price">
                <div className="top">Price</div>
                <div className="bottom">1.63 ETH</div>
              </div>
              <div className="highest-bid">
                <div className="top">Highest Bid</div>
                <div className="bottom">0.33 wETH</div>
              </div>
            </div>
          </div>
        </div>
        <div className="NFT-card">
          <img src= {nftSecond} alt="NFT" />
          <div className="NFT-info">
            <div className="artist-info">
              <h5>Life On Edena</h5>
              <div className="artist-avatar-name">
                <img src= {nebulaKid} alt="avatar" />
                NebulaKid
              </div>
            </div>
            <div className="additional-info">
              <div className="price">
                <div className="top">Price</div>
                <div className="bottom">1.63 ETH</div>
              </div>
              <div className="highest-bid">
                <div className="top">Highest Bid</div>
                <div className="bottom">0.33 wETH</div>
              </div>
            </div>
          </div>
        </div>
        <div className="NFT-card">
          <img src= {nftThird} alt="NFT" />
          <div className="NFT-info">
            <div className="artist-info">
              <h5>AstroFiction</h5>
              <div className="artist-avatar-name">
                <img src= {spaceone} alt="avatar" />
                Spaceone
              </div>
            </div>
            <div className="additional-info">
              <div className="price">
                <div className="top">Price</div>
                <div className="bottom">1.63 ETH</div>
              </div>
              <div className="highest-bid">
                <div className="top">Highest Bid</div>
                <div className="bottom">0.33 wETH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-mobile">
        <button>
          <img src= {eye} alt="eye" />
          See All
        </button>
      </div>
    </section>
  );
};
