import "./Highlight.scss";
import nft from '../../../../../assets/Group 2.png';
import shroomie from '../../../../../assets/Avatar Placeholder (3).png';
import eye from '../../../../../assets/Eye.svg';
import mobileNft from '../../../../../assets/Screen=Mobile.png';

export const Highlight = () => {
    return (
        <>
        <section className="NFT-highlight">
        <img
          className="image"
          src= {nft}
          alt="NFT highlight"
        />
        <div className="NFT-info">
          <div className="NFT-info-subhead">
            <div className="NFT-artist-name-button">
              <div className="subhead">
                <div className="artist">
                  <img
                    src= {shroomie}
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
                <img src= {eye} alt="eye" />
                See NFT
              </button>
            </div>
          </div>
          <img
            className="background"
            src= {mobileNft}
            alt="background image"
          />
        </div>
      </section>
        </>
    )
}