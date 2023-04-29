import "./CreateAccountPage.scss";

import mobileImage from '../../../assets/image-sign-in-create-account.png';
import image from '../../../assets/Image Placeholder (4).png';
import user from '../../../assets/User.svg';
import envelope from '../../../assets/EnvelopeSimple.svg';
import lockKey from '../../../assets/LockKey.svg';

export const CreateAccountPage = () => {
  return (
    <>
      <section className="create-account-section">
        <picture>
          <source
            media="(max-width: 375px)"
            srcSet= {mobileImage}
          />
          <img src= {image} alt="image" />
        </picture>
        <div className="create-account-form">
          <div className="headline-subhead">
            <h2>Create Account</h2>
            <div className="subhead">
              Welcome! Enter your details and start creating, collecting and
              selling NFTs.
            </div>
          </div>
          <div className="form">
            <div className="typeforms">
              <div className="typeform">
                <img src= {user} alt="user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="typeform">
                <img src= {envelope} alt="envelope" />
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="typeform">
                <img src= {lockKey} alt="lock key" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="typeform">
                <img src= {lockKey} alt="lock key" />
                <input type="password" placeholder="Confirm Password" />
              </div>
            </div>
            <button>Create Account</button>
          </div>
        </div>
      </section>
    </>
  );
};
