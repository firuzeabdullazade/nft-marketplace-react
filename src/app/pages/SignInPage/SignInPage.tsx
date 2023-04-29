import './SignInPage.scss';

import mobileImage from '../../../assets/image-sign-in-create-account.png';
import image from '../../../assets/Image Placeholder (4).png';
import user from '../../../assets/User.svg';
import envelope from '../../../assets/EnvelopeSimple.svg';
import lockKey from '../../../assets/LockKey.svg';
import { Link } from 'react-router-dom';

export const SignInPage = () => {
    return (
        <>
        <section className="sign-in-section">
            <picture>
                <source srcSet= {mobileImage} media="(max-width: 375px)" />
                <img src= {image} alt="image" />
            </picture>
            <div className="sign-in-form">
                <div className="headline-subhead">
                    <h2>
                        Sign In
                    </h2>
                    <div className="subhead">
                        Welcome back! Enter your details and continue creating, collecting and selling NFTs.
                    </div>
                </div>
                <div className="form">
                    <div className="typeforms">
                        <div className="username">
                            <img src= {user} alt="user" />
                            <input id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="email">
                            <img src= {envelope} alt="envelope" />
                            <input id="email" type="text" placeholder="Email Address" />
                        </div>
                        <div className="password">
                            <img src= {lockKey} alt="lock key" />
                            <input id="password" type="password" placeholder="Password" />
                        </div>
                    </div>
                    <button id="submit" type="submit">
                        Sign In
                    </button>
                </div>
                <div className="sign-up">
                    Don't have an ccount?
                    <Link to="/create-account" className="sign-up-link">Sign Up</Link>
                </div>
            </div>
        </section>
        </>
    )
}