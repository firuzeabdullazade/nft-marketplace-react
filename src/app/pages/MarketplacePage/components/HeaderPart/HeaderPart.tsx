import './HeaderPart.scss';
import magnifyingGlas from '../../../../../assets/MagnifyingGlass.svg';

export const HeaderPart = () => {
    return(
        <>
        <section className="header">
        <div className="headline-subhead">
            <div className="headline">
                <h2>
                    Browse Marketplace
                </h2>
                <div className="subhead">
                    Browse through more than 50k NFTs on the NFT Marketplace.
                </div>
            </div>
            <div className="table-header">
                <div className="table-subheader">
                   <input type="text" placeholder="Search your favourite NFTs" />
                    <button>
                        <img src= {magnifyingGlas} alt="Magnifying Glass" />
                    </button>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}