import "./ArtistPage.scss";
import { ArtistInfo } from "./components/ArtistInfo/ArtistInfo";
import { Head } from "./components/Head/Head";
import { Line } from "./components/Line/Line";
import { ProfileImage } from "./components/ProfileImage/ProfileImage";
import { NftCards } from "./components/NftCards/NftCards";

import image1 from "../../../assets/Image.png";
import image2 from "../../../assets/Image Placeholder (6).png";
import image3 from "../../../assets/Image Placeholder (7).png";
import image4 from "../../../assets/Image Placeholder (8).png";
import image5 from "../../../assets/Image Placeholder (9).png";
import image6 from "../../../assets/Image Placeholder (10).png";
import image7 from "../../../assets/Image Placeholder (11).png";
import image8 from "../../../assets/Image Placeholder (12).png";
import image9 from "../../../assets/Image Placeholder (13).png";

export const ArtistPage = () => {
  const cards = [
    {
      imageSrc: image1,
      name: "Distant Galaxy",
      mobile: true,
    },

    {
      imageSrc: image2,
      name: "life On Edena",
      mobile: true,
    },

    {
      imageSrc: image3,
      name: "AstroFiction",
      mobile: true,
    },

    {
      imageSrc: image4,
      name: "CryptoCity",
      mobile: false,
    },

    {
      imageSrc: image5,
      name: "ColorfulDog 0524",
      mobile: false,
    },

    {
      imageSrc: image6,
      name: "Space Tales",
      mobile: false,
    },

    {
      imageSrc: image7,
      name: "Cherry Blossom Girl 037",
      mobile: false,
    },

    {
      imageSrc: image8,
      name: "Dancing Robots 0987",
      mobile: false,
    },

    {
      imageSrc: image9,
      name: "IceCream Ape",
      mobile: false,
    },
  ];

  return (
    <>
      <ProfileImage />
      <ArtistInfo />
      <Line />
      <Head />
      <section className="NFT-cards-section">
        <div className="NFT-cards-rows">
          {cards.map((card) => (
            <NftCards
              imageSrc={card.imageSrc}
              name={card.name}
              mobile={card.mobile}
            />
          ))}
        </div>
      </section>
    </>
  );
};
