import '../Footer/Footer.scss';
import logo from '../../../assets/logo.svg'
import discordLogo from '../../../assets/DiscordLogo.svg';
import youtubeLogo from '../../../assets/YoutubeLogo.svg';
import twitterLogo from '../../../assets/TwitterLogo.svg';
import instagramLogo from '../../../assets/InstagramLogo.svg';

export const Footer = () => {
   return (
    <footer>
        <div className="footer-info">
            <div className="NFT-marketplace-info">
                <img src= {logo} alt="logo" />
                <div className="additional-info">
                    <div className="subinfo">
                        NFT marketplace UI created with Anima for Figma.
                    </div>
                    <div className="community-info">
                        Join our community
                        <div className="icons">
                            <button>
                                <img src= {discordLogo} alt="Discord logo" />
                            </button>
                            <button>
                                <img src= {youtubeLogo} alt="Youtube logo" />
                            </button>
                            <button>
                                <img src= {twitterLogo} alt="Twitter logo" />
                            </button>
                            <button>
                                <img src= {instagramLogo} alt="Instagram logo" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore">
                <h5>
                    Explore
                </h5>
                <div className="pages">
                    <a href="marketplace.html" className="nav-link">Marketplace</a>
                    <a href="#" className="nav-link">Rankings</a>
                    <a href="#" className="nav-link">Connect a wallet</a>
                </div>
            </div>
            <div className="subscribe">
                <h5>
                    Join Our Weekly Digest
                </h5>
                <div className="subscribe-form-info">
                    <div className="info">
                        Get exclusive promotions & updates straight to your inbox.
                    </div>
                    <div className="subscribe-form">
                        <div className="email">
                            <input type="email" placeholder="Enter your email here" />
                        </div>
                        <button>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="frame">
            <div className="divider"></div>
            <div className="end">
                Ⓒ NFT Market. Use this template freely.
            </div>
        </div>
    </footer>
   ) 
}