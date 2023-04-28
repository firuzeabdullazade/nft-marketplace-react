import './ArtistInfo.scss';
import  copyLogo from '../../../../../assets/Copy.svg';
import plusLogo from '../../../../../assets/Plus.svg';
import globeLogo from '../../../../../assets/Globe.svg';
import discordLogo from '../../../../../assets/DiscordLogo.svg';
import youTubeLogo from '../../../../../assets/YoutubeLogo.svg';
import twitterLogo from '../../../../../assets/TwitterLogo.svg';
import instagramLogo from '../../../../../assets/InstagramLogo.svg';


export const ArtistInfo = () => {
    return (
        <>
        <section className="Artist-Info">
        <div className="artist-info-section">
            <div className="artist-info">
                <h2>
                    Animakid
                </h2>
                <div className="CTAs-mobile">
                    <button className="first-button">
                        <img src= {copyLogo} alt="copy Logo" />
                        0xc0E3...B79C
                    </button>
                    <button className="second-button">
                        <img src= {plusLogo} alt="Plus Logo" />
                        Follow
                    </button>
                </div>
                <div className="stats">
                    <div className="total-sale">
                        <h4>
                            250k+
                        </h4>
                        <div className="subhead">
                            Volume
                        </div>
                    </div>
                    <div className="auctions">
                        <h4>
                            50+
                        </h4>
                        <div className="subhead">
                            NFTs Sold
                        </div>
                    </div>
                    <div className="artists">
                        <h4>
                            3000+
                        </h4>
                        <div className="subhead">
                            Followers
                        </div>
                    </div>
                </div>
                <div className="bio">
                    <h5>
                        Bio
                    </h5>
                    <div className="subhead">
                        The internet's friendliest designer kid.
                    </div>
                </div>
                <div className="web-links">
                    <h5>
                        Links
                    </h5>
                    <div className="icons">
                        <button>
                            <img src= {globeLogo} alt="Globe" />
                        </button>
                        <button>
                            <img src= {discordLogo} alt="Discord Logo" />
                        </button>
                        <button>
                            <img src= {youTubeLogo} alt="Youtube Logo" />
                        </button>
                        <button>
                            <img src= {twitterLogo} alt="Twitter Logo" />
                        </button>
                        <button>
                            <img src= {instagramLogo} alt="Instagram Logo" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="CTAs">
                <button className="first-button">
                    <img src= {copyLogo} alt="copy Logo" />
                    0xc0E3...B79C
                </button>
                <button className="second-button">
                    <img src= {plusLogo} alt="Plus Logo" />
                    Follow
                </button>
            </div>
        </div>
    </section>
        </>
    )
}