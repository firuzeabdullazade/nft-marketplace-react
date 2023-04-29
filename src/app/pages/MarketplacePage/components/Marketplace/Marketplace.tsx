import './Marketplace.scss';

interface MarketplaceProps {
    imageSrc: string,
    imageMobile: string,
    imageAvatar: string,
    name: string,
    avatarName: string,
    mobile: boolean
}

export const Marketplace = (props: MarketplaceProps) => {
    const { imageSrc, imageMobile, imageAvatar, name, avatarName, mobile } = props;
    const className = `NFT-card${mobile ? '-mobile' : ''}`;

    return (
        <>
        <div className= {className}>
            <picture>
                <source media="(max-width: 375px)" srcSet= {imageMobile} />
                <img src= {imageSrc} alt="image" />
            </picture>
            <div className="NFT-info">
                <div className="artist-info">
                    <h5>
                        {name}
                    </h5>
                    <div className="artist-avatar-name">
                        <img src= {imageAvatar} alt="avatar" />
                        {avatarName}
                    </div>
                </div>
                <div className="additional-info">
                    <div className="price">
                        <div className="top">
                            Price
                        </div>
                        <div className="bottom">
                            1.63 ETH
                        </div>
                    </div>
                    <div className="highest-bid">
                        <div className="top">
                            Highest Bid
                        </div>
                        <div className="bottom">
                            0.33 wETH
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </>
    )
}