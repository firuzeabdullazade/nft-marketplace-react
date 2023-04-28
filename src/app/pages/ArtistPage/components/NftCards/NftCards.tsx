import "./NftCards.scss";
import avatar from '../../../../../assets/Avatar (1).svg';

interface NftCardsProps {
    imageSrc: string;
    name: string;
    mobile: boolean;
}

export const NftCards = (props: NftCardsProps) => {
  const { imageSrc, name, mobile } = props;
  const className = `NFT-card${mobile ? "-mobile" : ''}`
  return (
    <div className= {className}>
            <img src= {imageSrc} alt="image" />
            <div className="NFT-info">
              <div className="artist-info">
                <h5>{name}</h5>
                <div className="artist-avatar-name">
                  <img src= {avatar} alt="avatar" />
                  Animakid
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
  );
};
