import "./TrendingCollection.scss";
import dog from '../../../../../assets/Primary Photo Placeholder.png';
import cat from '../../../../../assets/Secondary Photo Placeholder.png';
import bear from '../../../../../assets/Secondary Photo Placeholder (1).png';
import foxAvatar from '../../../../../assets/Avatar Placeholder.png';
import mushroomFirst from '../../../../../assets/Primary Photo Placeholder (1).png';
import mushroomSecond from '../../../../../assets/Secondary Photo Placeholder (2).png';
import mushroomThird from  '../../../../../assets/Secondary Photo Placeholder (3).png';
import shroomie from '../../../../../assets/Avatar Placeholder (3).png';
import robotFirst from '../../../../../assets/Primary Photo Placeholder (2).png';
import robotSecond from '../../../../../assets/Secondary Photo Placeholder (4).png';
import robotThird from '../../../../../assets/Secondary Photo Placeholder (5).png';
import beKind2Robots from '../../../../../assets/Avatar Placeholder (4).png';

export const TrendingCollection = () => {
    return (
        <>
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
                  src={dog}
                  alt="First primary photo"
                />
              </div>
              <div className="frame-first">
                <img
                  src= {cat}
                  alt="First secondary photo for first frame"
                />
                <img
                  src= {bear}
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
                <img src= {foxAvatar} alt="Avatar" />
                <div className="artist-name">MrFox</div>
              </div>
            </div>
          </div>
          <div className="collection-card">
            <div className="photos">
              <div className="primary-photo">
                <img
                  src= {mushroomFirst}
                  alt="Second primary photo"
                />
              </div>
              <div className="frame-first">
                <img
                  src= {mushroomSecond}
                  alt="First secondary photo for second frame"
                />
                <img
                  src= {mushroomThird}
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
                <img src= {shroomie} alt="Avatar" />
                <div className="artist-name">Shroomie</div>
              </div>
            </div>
          </div>
          <div className="collection-card">
            <div className="photos">
              <div className="primary-photo">
                <img
                  src= {robotFirst}
                  alt="Third primary photo"
                />
              </div>
              <div className="frame-first">
                <img
                  src= {robotSecond}
                  alt="First secondary photo for third frame"
                />
                <img
                  src= {robotThird}
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
                <img src= {beKind2Robots} alt="Avatar" />
                <div className="artist-name">BeKind2Robots</div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}