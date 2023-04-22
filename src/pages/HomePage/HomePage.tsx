import "./HomePage.scss";
import { HeroPart } from "./components/HeroPart/HeroPart";

export const HomePage = () => {
  return (
    <>
      <HeroPart />
      <section className="trending-collection">
        <div className="section-headline-1">
          <h3>Trending Collection</h3>
          <p>Checkout Our Weekly Updated Trending Collection.</p>
        </div>
        <div className="collection-card-row">
          <div className="collection-card-mobile">
            <div className="photos">
              <div className="primary-photo">
                <img
                  src="./assests/Primary Photo Placeholder.png"
                  alt="First primary photo"
                />
              </div>
              <div className="frame-first">
                <img
                  src="./assests/Secondary Photo Placeholder.png"
                  alt="First secondary photo for first frame"
                />
                <img
                  src="./assests/Secondary Photo Placeholder (1).png"
                  alt="Second secondary photo for first frame"
                />
                <button>
                  <h5>1025+</h5>
                </button>
              </div>
            </div>
            <div className="collection-info">
              <h5>DSGN Animals</h5>
              <div className="frame-bottom">
                <img src="./assests/Avatar Placeholder.png" alt="Avatar" />
                <div className="artist-name">MrFox</div>
              </div>
            </div>
          </div>
          <div className="collection-card">
            <div className="photos">
              <div className="primary-photo">
                <img
                  src="./assests/Primary Photo Placeholder (1).png"
                  alt="Second primary photo"
                />
              </div>
              <div className="frame-first">
                <img
                  src="./assests/Secondary Photo Placeholder (2).png"
                  alt="First secondary photo for second frame"
                />
                <img
                  src="./assests/Secondary Photo Placeholder (3).png"
                  alt="Second secondary photo for second frame"
                />
                <button>
                  <h5>1025+</h5>
                </button>
              </div>
            </div>
            <div className="collection-info">
              <h5>Magic Mushrooms</h5>
              <div className="frame-bottom">
                <img src="./assests/Avatar Placeholder (3).png" alt="Avatar" />
                <div className="artist-name">Shroomie</div>
              </div>
            </div>
          </div>
          <div className="collection-card">
            <div className="photos">
              <div className="primary-photo">
                <img
                  src="./assests/Primary Photo Placeholder (2).png"
                  alt="Third primary photo"
                />
              </div>
              <div className="frame-first">
                <img
                  src="./assests/Secondary Photo Placeholder (4).png"
                  alt="First secondary photo for third frame"
                />
                <img
                  src="./assests/Secondary Photo Placeholder (5).png"
                  alt="Second secondary photo for third frame"
                />
                <button>
                  <h5>1025+</h5>
                </button>
              </div>
            </div>
            <div className="collection-info">
              <h5>Disco Machines</h5>
              <div className="frame-bottom">
                <img src="./assests/Avatar Placeholder (4).png" alt="Avatar" />
                <div className="artist-name">BeKind2Robots</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="top-rated-artists">
        <div className="section-headline-2">
          <div className="subheadline">
            <h3>Top Creators</h3>
            <div className="subhead">
              Checkout Top Rated Creators on the NFT Marketplace
            </div>
          </div>
          <button>
            <img src="./assests/RocketLaunch (1).svg" alt="Rocket Launch" />
            View Rankings
          </button>
        </div>
        <div className="artist-cards-grid">
          <div className="artist-cards-row-mobile">
            <div className="artist-card-mobile">
              <div className="ranking-number">1</div>
              <div className="artist-avatar">
                <img src="./assests/Avatar Placeholder (1).png" alt="Avatar" />
              </div>
              <div className="artist-info">
                <h5>Keepitreal</h5>
                <div className="additional-info">
                  <div className="total-sale">Total Sale</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
            <div className="artist-card-mobile">
              <div className="ranking-number">2</div>
              <div className="artist-avatar">
                <img src="./assests/Avatar Placeholder (5).png" alt="Avatar" />
              </div>
              <div className="artist-info">
                <h5>DigiLab</h5>
                <div className="additional-info">
                  <div className="total-sale">Total Sale</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
            <div className="artist-card-mobile">
              <div className="ranking-number">3</div>
              <div className="artist-avatar">
                <img src="./assests/Avatar Placeholder (6).png" alt="Avatar" />
              </div>
              <div className="artist-info">
                <h5>GravityOne</h5>
                <div className="additional-info">
                  <div className="total-sale">Total Sale</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
            <div className="artist-card-mobile">
              <div className="ranking-number">4</div>
              <div className="artist-avatar">
                <img src="./assests/Avatar Placeholder (7).png" alt="Avatar" />
              </div>
              <div className="artist-info">
                <h5>Juanie</h5>
                <div className="additional-info">
                  <div className="total-sale">Total Sale</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
          </div>
          <div className="artist-cards-row-mobile">
            <div className="artist-card-mobile">
              <div className="ranking-number">5</div>
              <div className="artist-avatar">
                <img src="./assests/Avatar Placeholder (8).png" alt="Avatar" />
              </div>
              <div className="artist-info">
                <h5>BlueWhale</h5>
                <div className="additional-info">
                  <div className="total-sale">Total Sale</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <div className="ranking-number">6</div>
              <div className="artist-avatar">
                <img src="./assests/Avatar Placeholder (9).png" alt="Avatar" />
              </div>
              <div className="artist-info">
                <h5>Mr Fox</h5>
                <div className="additional-info">
                  <div className="total-sale">Total Sale</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <div className="ranking-number">7</div>
              <div className="artist-avatar">
                <img src="./assests/Avatar Placeholder (10).png" alt="Avatar" />
              </div>
              <div className="artist-info">
                <h5>Shroomie</h5>
                <div className="additional-info">
                  <div className="total-sale">Total Sale</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <div className="ranking-number">8</div>
              <div className="artist-avatar">
                <img src="./assests/Avatar Placeholder (11).png" alt="Avatar" />
              </div>
              <div className="artist-info">
                <h5>Robotica</h5>
                <div className="additional-info">
                  <div className="total-sale">Total Sale</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
          </div>
          <div className="artist-cards-row">
            <div className="artist-card">
              <div className="ranking-number">9</div>
              <div className="artist-avatar">
                <img src="./assests/Avatar Placeholder (12).png" alt="Avatar" />
              </div>
              <div className="artist-info">
                <h5>RustyRobot</h5>
                <div className="additional-info">
                  <div className="total-sale">Total Sale</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <div className="ranking-number">10</div>
              <div className="artist-avatar">
                <img src="./assests/Avatar Placeholder (13).png" alt="Avatar" />
              </div>
              <div className="artist-info">
                <h5>Animakid</h5>
                <div className="additional-info">
                  <div className="total-sale">Total Sale</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <div className="ranking-number">11</div>
              <div className="artist-avatar">
                <img src="./assests/Avatar Placeholder (14).png" alt="Avatar" />
              </div>
              <div className="artist-info">
                <h5>Dotgu</h5>
                <div className="additional-info">
                  <div className="total-sale">Total Sale</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
            <div className="artist-card">
              <div className="ranking-number">12</div>
              <div className="artist-avatar">
                <img src="./assests/Avatar Placeholder (15).png" alt="Avatar" />
              </div>
              <div className="artist-info">
                <h5>Ghiblier</h5>
                <div className="additional-info">
                  <div className="total-sale">Total Sale</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile">
          <button>
            <img src="./assests/RocketLaunch (1).svg" alt="Rocket Launch" />
            View Rankings
          </button>
        </div>
      </section>
      <section className="browse-categories">
        <div className="section-headline">
          <h3>Browse Categories</h3>
        </div>
        <div className="category-cards-grid">
          <div className="category-cards-row">
            <div className="category-card">
              <div className="photo-icon">
                <img src="./assests/Category Icon.png" alt="art" />
              </div>
              <div className="collection-name">
                <h5>Art</h5>
              </div>
            </div>
            <div className="category-card">
              <div className="photo-icon">
                <img src="./assests/Photo & Icon.png" alt="collectibles" />
              </div>
              <div className="collection-name">
                <h5>Collectibles</h5>
              </div>
            </div>
            <div className="category-card">
              <div className="photo-icon">
                <img src="./assests/Photo & Icon (1).png" alt="music" />
              </div>
              <div className="collection-name">
                <h5>Music</h5>
              </div>
            </div>
            <div className="category-card">
              <div className="photo-icon">
                <img src="./assests/Photo & Icon (2).png" alt="photography" />
              </div>
              <div className="collection-name">
                <h5>Photography</h5>
              </div>
            </div>
          </div>
          <div className="category-cards-row">
            <div className="category-card-bottom">
              <div className="photo-icon">
                <img src="./assests/Category Icon (1).png" alt="video" />
              </div>
              <div className="collection-name">
                <h5>Video</h5>
              </div>
            </div>
            <div className="category-card-bottom">
              <div className="photo-icon">
                <img src="./assests/Category Icon (2).png" alt="utility" />
              </div>
              <div className="collection-name">
                <h5>Utility</h5>
              </div>
            </div>
            <div className="category-card-bottom">
              <div className="photo-icon">
                <img src="./assests/Category Icon (3).png" alt="sport" />
              </div>
              <div className="collection-name">
                <h5>Sport</h5>
              </div>
            </div>
            <div className="category-card-bottom">
              <div className="photo-icon">
                <img
                  src="./assests/Category Icon (4).png"
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
      <section className="discover-more-NFTs">
        <div className="section-headline-button">
          <div className="section-headline">
            <h3>Discover More NFTs</h3>
            <div className="subhead">Explore new trending NFTs</div>
          </div>
          <div className="button">
            <button>
              <img src="./assests/Eye.svg" alt="eye" />
              See All
            </button>
          </div>
        </div>
        <div className="NFT-cards-row">
          <div className="NFT-card">
            <img src="./assests/Image Placeholder (1).png" alt="NFT" />
            <div className="NFT-info">
              <div className="artist-info">
                <h5>Distant Galaxy</h5>
                <div className="artist-avatar-name">
                  <img src="./assests/Avatar.svg" alt="avatar" />
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
            <img src="./assests/Image Placeholder (2).png" alt="NFT" />
            <div className="NFT-info">
              <div className="artist-info">
                <h5>Life On Edena</h5>
                <div className="artist-avatar-name">
                  <img
                    src="./assests/Avatar Placeholder (3).svg"
                    alt="avatar"
                  />
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
            <img src="./assests/Image Placeholder (3).png" alt="NFT" />
            <div className="NFT-info">
              <div className="artist-info">
                <h5>AstroFiction</h5>
                <div className="artist-avatar-name">
                  <img
                    src="./assests/Avatar Placeholder (4).svg"
                    alt="avatar"
                  />
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
            <img src="./assests/Eye.svg" alt="eye" />
            See All
          </button>
        </div>
      </section>
      <section className="NFT-highlight">
        <img
          className="image"
          src="./assests/Group 2.png"
          alt="NFT highlight"
        />
        <div className="NFT-info">
          <div className="NFT-info-subhead">
            <div className="NFT-artist-name-button">
              <div className="subhead">
                <div className="artist">
                  <img
                    src="./assests/Avatar Placeholder (3).png"
                    alt="avatar"
                  />
                  Shroomie
                </div>
                <div className="name">
                  <h3>Magic Mashrooms</h3>
                </div>
              </div>
              <div className="right">
                <div className="auction-time">
                  <div className="head">Auction ends in:</div>
                  <div className="timer">
                    <div className="hours">
                      <h3>59</h3>
                      <div className="subline">Hours</div>
                    </div>
                    :
                    <div className="minutes">
                      <h3>59</h3>
                      <div className="subline">Minutes</div>
                    </div>
                    :
                    <div className="seconds">
                      <h3>59</h3>
                      <div className="subline">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>
              <button>
                <img src="./assests/Eye.svg" alt="eye" />
                See NFT
              </button>
            </div>
          </div>
          <img
            className="background"
            src="./assests/Screen=Mobile.png"
            alt="background image"
          />
        </div>
      </section>
      <section className="how-it-works">
        <div className="section-headline">
          <h3>How It Works</h3>
          <div className="subhead">Find out how to get started</div>
        </div>
        <div className="card-row">
          <div className="info-card">
            <div className="icon">
              <img src="./assests/Icon.svg" alt="icon" />
            </div>
            <div className="card-details">
              <h5>Setup Your Wallet</h5>
              <div className="subdetail">
                Set up your wallet of choice. Connect it to the Animarket by
                clicking the wallet icon in the top right corner.
              </div>
            </div>
          </div>
          <div className="info-card">
            <div className="icon">
              <img src="./assests/Icon (1).svg" alt="icon" />
            </div>
            <div className="card-details">
              <h5>Create Collection</h5>
              <div className="subdetail">
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </div>
            </div>
          </div>
          <div className="info-card">
            <div className="icon">
              <img src="./assests/Icon (2).svg" alt="icon" />
            </div>
            <div className="card-details">
              <h5>Start Earning</h5>
              <div className="subdetail">
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe-widget">
        <div className="image">
          <img src="./assests/Photo.png" alt="photo" />
        </div>
        <div className="frame">
          <div className="headline-subhead">
            <h3>Join Our Weekly Digest</h3>
            <div className="subhead">
              Get Exclusive Promotions & Updates Straight To Your Inbox.
            </div>
          </div>
          <div className="subscribe-form">
            <div className="email">
              <input type="email" placeholder="Enter your email here" />
            </div>
            <button>
              <img src="./assests/EnvelopeSimple.svg" alt="envolope" />
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
