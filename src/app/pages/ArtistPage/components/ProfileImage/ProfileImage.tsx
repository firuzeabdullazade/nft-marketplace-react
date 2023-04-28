import './ProfileImage.scss';
import imageMobile from '../../../../../assets/image-artist-page.png';
import image from '../../../../../assets/Image PlaceHolder (5).png';
import avatar from '../../../../../assets/Avatar Placeholder (5).svg';

export const ProfileImage = () => {
    return (
        <>
        <section className="cover-profile-image">
        <picture>
            <source media="(max-width: 375px)" srcSet= {imageMobile} />
            <img src= {image} alt="Cover" />
        </picture>
        <img className="avatar" src= {avatar} alt="Avatar image" />
    </section>
        </>
    )
}