import "./HowItWorks.scss";
import iconFirst from './Icon.svg';
import iconSecond from './Icon (1).svg';
import iconThird from './Icon (2).svg';

export const HowItWorks = () => {
    return (
        <>
        <section className="how-it-works">
        <div className="section-headline">
          <h3>How It Works</h3>
          <div className="subhead">Find out how to get started</div>
        </div>
        <div className="card-row">
          <div className="info-card">
            <div className="icon">
              <img src= {iconFirst} alt="icon" />
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
              <img src= {iconSecond} alt="icon" />
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
              <img src= {iconThird} alt="icon" />
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
        </>
    )
}