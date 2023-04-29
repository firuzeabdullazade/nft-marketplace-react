import { HeaderPart } from "./components/HeaderPart/HeaderPart";
import { Marketplace } from "./components/Marketplace/Marketplace";

import mobile1 from "../../../assets/image-mobile-1.png";
import image1 from "../../../assets/Image Placeholder (14).png";
import Shroomie from "../../../assets/Avatar Placeholder (6).svg";
import mobile2 from "../../../assets/image-mobile-2.png";
import image2 from "../../../assets/Image Placeholder (15).png";
import BeKind2Robots from "../../../assets/Avatar Placeholder (7).svg";
import mobile3 from "../../../assets/image-mobile-3.png";
import image3 from "../../../assets/Image Placeholder (16).png";
import mobile4 from "../../../assets/image-mobile-4.png";
import image4 from "../../../assets/Image Placeholder (17).png";
import MrFox from "../../../assets/Avatar Placeholder (8).svg";
import mobile5 from "../../../assets/image-mobile-5.png";
import image5 from "../../../assets/Image Placeholder (18).png";
import Keepitreal from "../../../assets/Avatar Placeholder (9).svg";
import image6 from "../../../assets/Image Placeholder (19).png";
import Robotica from "../../../assets/Avatar Placeholder (10).svg";
import image7 from "../../../assets/Image Placeholder (20).png";
import MoonDancer from "../../../assets/Avatar Placeholder (11).svg";
import image8 from "../../../assets/Image Placeholder (21).png";
import NebulaKid from "../../../assets/Avatar Placeholder (12).svg";
import image9 from "../../../assets/Image Placeholder (22).png";
import AnimaKid from "../../../assets/Avatar Placeholder (13).svg";
import image10 from "../../../assets/Image Placeholder (23).png";
import Catch22 from "../../../assets/Avatar Placeholder (14).svg";
import image11 from "../../../assets/Image Placeholder (24).png"; //
import IceApeClub from "../../../assets/Avatar Placeholder (15).svg";
import image12 from "../../../assets/Image Placeholder (25).png";
import PuppyPower from "../../../assets/Avatar Placeholder (16).svg";

export const MarketPlace = () => {
  const cards = [
    {
      imageSrc: image1,
      imageMobile: mobile1,
      imageAvatar: Shroomie,
      name: "Magic Mushroom 0325",
      avatarName: "Shroomie",
      mobile: true,
    },

    {
      imageSrc: image2,
      imageMobile: mobile3,
      imageAvatar: BeKind2Robots,
      name: "Happy Robot 032",
      avatarName: "BeKind2Robots",
      mobile: true,
    },

    {
      imageSrc: image3,
      imageMobile: mobile2,
      imageAvatar: BeKind2Robots,
      name: "Happy Robot 024",
      avatarName: "BeKind2Robots",
      mobile: true,
    },

    {
      imageSrc: image4,
      imageMobile: mobile4,
      imageAvatar: MrFox,
      name: "Designer Bear",
      avatarName: "Mr Fox",
      mobile: true,
    },

    {
      imageSrc: image5,
      imageMobile: mobile5,
      imageAvatar: Keepitreal,
      name: "Colorful Dog 0356",
      avatarName: "Keepitreal",
      mobile: true,
    },

    {
      imageSrc: image6,
      imageMobile: image6,
      imageAvatar: Robotica,
      name: "Dancing Robot 0312",
      avatarName: "Robotica",
      mobile: false,
    },

    {
      imageSrc: image7,
      imageMobile: image7,
      imageAvatar: MoonDancer,
      name: "Cherry Blossom Girl 035",
      avatarName: "MoonDancer",
      mobile: false,
    },

    {
      imageSrc: image8,
      imageMobile: image8,
      imageAvatar: NebulaKid,
      name: "Space Travel",
      avatarName: "NebulaKid",
      mobile: false,
    },

    {
      imageSrc: image9,
      imageMobile: image9,
      imageAvatar: AnimaKid,
      name: "Sunset Dimension",
      avatarName: "Animakid",
      mobile: false,
    },

    {
      imageSrc: image10,
      imageMobile: image10,
      imageAvatar: Catch22,
      name: "Desert Walk",
      avatarName: "Catch 22",
      mobile: false,
    },

    {
      imageSrc: image11,
      imageMobile: image11,
      imageAvatar: IceApeClub,
      name: "IceCream Ape 0324",
      avatarName: "Ice Ape Club",
      mobile: false,
    },

    {
      imageSrc: image12,
      imageMobile: image12,
      imageAvatar: PuppyPower,
      name: "Colorful Dog 0344",
      avatarName: "PuppyPower",
      mobile: false,
    },
  ];

  return (
    <>
      <HeaderPart />
      <section className="marketplace-section">
        <div className="head">
          <div className="tabs">
            <div className="tab-1">
              <button>
                <h5>NFTs</h5>
              </button>
              <div className="number-1">302</div>
            </div>
            <div className="tab-2">
              <button>
                <h5 className="first">Collections</h5>
              </button>
              <div className="number-2">67</div>
            </div>
          </div>
        </div>
        <div className="NFT-cards-section">
          {cards.map((card) => (
            <Marketplace
              imageSrc={card.imageSrc}
              imageMobile={card.imageMobile}
              imageAvatar={card.imageAvatar}
              name={card.name}
              avatarName={card.avatarName}
              mobile={card.mobile}
            />
          ))}
        </div>
      </section>
    </>
  );
};
