import "./TopRatedArtists.scss";
import rocket from './RocketLaunch (1).svg';
import keepitreal from './Avatar Placeholder (1).png';
import digiLab from './Avatar Placeholder (5).png';
import gravityOne from './Avatar Placeholder (6).png';
import juanie from './Avatar Placeholder (7).png';
import blueWhale from './Avatar Placeholder (8).png';
import mrFox from './Avatar Placeholder (9).png';
import shroomie from './Avatar Placeholder (10).png';
import robotica from './Avatar Placeholder (11).png';
import rustyRobot from './Avatar Placeholder (12).png';
import animakid from './Avatar Placeholder (13).png';
import dotgu from './Avatar Placeholder (14).png';
import ghiblier from './Avatar Placeholder (15).png';


export const TopRatedArtists = () => {
    return (
        <>
        <section className="top-rated-artists">
        <div className="section-headline-2">
          <div className="subheadline">
            <h3>Top Creators</h3>
            <div className="subhead">
              Checkout Top Rated Creators on the NFT Marketplace
            </div>
          </div>
          <button>
            <img src= {rocket} alt="Rocket Launch" />
            View Rankings
          </button>
        </div>
        <div className="artist-cards-grid">
          <div className="artist-cards-row-mobile">
            <div className="artist-card-mobile">
              <div className="ranking-number">1</div>
              <div className="artist-avatar">
                <img src= {keepitreal} alt="Avatar" />
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
                <img src= {digiLab} alt="Avatar" />
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
                <img src= {gravityOne} alt="Avatar" />
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
                <img src= {juanie} alt="Avatar" />
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
                <img src= {blueWhale} alt="Avatar" />
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
                <img src= {mrFox} alt="Avatar" />
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
                <img src= {shroomie} alt="Avatar" />
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
                <img src= {robotica} alt="Avatar" />
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
                <img src= {rustyRobot} alt="Avatar" />
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
                <img src= {animakid} alt="Avatar" />
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
                <img src= {dotgu} alt="Avatar" />
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
                <img src= {ghiblier} alt="Avatar" />
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
            <img src= {rocket} alt="Rocket Launch" />
            View Rankings
          </button>
        </div>
      </section>
        </>
    )
}