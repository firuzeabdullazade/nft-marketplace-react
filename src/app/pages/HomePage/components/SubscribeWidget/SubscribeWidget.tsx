import "./SubscribeWidget.scss";
import astronaut from "../../../../../assets/Photo.png";
import envolope from "../../../../../assets/EnvelopeSimple.svg";

export const SubscribeWidget = () => {
  return (
    <>
      <section className="subscribe-widget">
        <div className="image">
          <img src={astronaut} alt="photo" />
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
              <img src={envolope} alt="envolope" />
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
