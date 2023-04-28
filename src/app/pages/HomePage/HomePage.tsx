import "./HomePage.scss";
import { BrowseCategories } from "./components/BrowseCategories/BrowseCategories";
import { Discover } from "./components/Discover/Discover";
import { HeroPart } from "./components/HeroPart/HeroPart";
import { Highlight } from "./components/Highlight/Highlight";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { SubscribeWidget } from "./components/SubscribeWidget/SubscribeWidget";
import { TopRatedArtists } from "./components/TopRatedArtists/TopRatedArtists";
import { TrendingCollection } from "./components/TrendingCollection/TrendingCollection";

import rocket from "../../../assets/RocketLaunch (1).svg";
import keepitreal from "../../../assets/Avatar Placeholder (1).png";
import digiLab from "../../../assets/Avatar Placeholder (5).png";
import gravityOne from "../../../assets/Avatar Placeholder (6).png";
import juanie from "../../../assets/Avatar Placeholder (7).png";
import blueWhale from "../../../assets/Avatar Placeholder (8).png";
import mrFox from "../../../assets/Avatar Placeholder (9).png";
import shroomie from "../../../assets/Avatar Placeholder (10).png";
import robotica from "../../../assets/Avatar Placeholder (11).png";
import rustyRobot from "../../../assets/Avatar Placeholder (12).png";
import animakid from "../../../assets/Avatar Placeholder (13).png";
import dotgu from "../../../assets/Avatar Placeholder (14).png";
import ghiblier from "../../../assets/Avatar Placeholder (15).png";

import art from "../../../assets/Category Icon.png";
import collectibles from "../../../assets/Photo & Icon.png";
import music from "../../../assets/Photo & Icon (1).png";
import photography from "../../../assets/Photo & Icon (2).png";
import video from "../../../assets/Category Icon (1).png";
import utility from "../../../assets/Category Icon (2).png";
import sport from "../../../assets/Category Icon (3).png";
import virtualWorlds from "../../../assets/Category Icon (4).png";

export const HomePage = () => {
  const artists = [
    {
      rankingNumber: 1,
      imageSrc: keepitreal,
      name: "Keepitreal",
      mobile: true,
    },

    {
      rankingNumber: 2,
      imageSrc: digiLab,
      name: "DigiLab",
      mobile: true,
    },

    {
      rankingNumber: 3,
      imageSrc: gravityOne,
      name: "GravityOne",
      mobile: true,
    },

    {
      rankingNumber: 4,
      imageSrc: juanie,
      name: "Juanie",
      mobile: true,
    },

    {
      rankingNumber: 5,
      imageSrc: blueWhale,
      name: "BlueWhale",
      mobile: true,
    },

    {
      rankingNumber: 6,
      imageSrc: mrFox,
      name: "Mr Fox",
      mobile: false,
    },

    {
      rankingNumber: 7,
      imageSrc: shroomie,
      name: "Shroomie",
      mobile: false,
    },

    {
      rankingNumber: 8,
      imageSrc: robotica,
      name: "Robotica",
      mobile: false,
    },

    {
      rankingNumber: 9,
      imageSrc: rustyRobot,
      name: "RustyRobot",
      mobile: false,
    },

    {
      rankingNumber: 10,
      imageSrc: animakid,
      name: "Animakid",
      mobile: false,
    },

    {
      rankingNumber: 11,
      imageSrc: dotgu,
      name: "Dotgu",
      mobile: false,
    },

    {
      rankingNumber: 12,
      imageSrc: ghiblier,
      name: "Ghiblier",
      mobile: false,
    },
  ];

  const categories = [
    {
      imageSrc: art,
      name: "Art",
      bottom: false,
    },

    {
      imageSrc: collectibles,
      name: "Collectibles",
      bottom: false,
    },

    {
      imageSrc: music,
      name: "Music",
      bottom: false,
    },

    {
      imageSrc: photography,
      name: "Photography",
      bottom: false,
    },

    {
      imageSrc: video,
      name: "Video",
      bottom: true,
    },

    {
      imageSrc: utility,
      name: "Utility",
      bottom: true,
    },

    {
      imageSrc: sport,
      name: "Sport",
      bottom: true,
    },

    {
      imageSrc: virtualWorlds,
      name: "Virtual Worlds",
      bottom: true,
    },
  ];

  return (
    <>
      <HeroPart />
      <TrendingCollection />
      <section className="top-rated-artists">
        <div className="section-headline-2">
          <div className="subheadline">
            <h3>Top Creators</h3>
            <div className="subhead">
              Checkout Top Rated Creators on the NFT Marketplace
            </div>
          </div>
          <button>
            <img src={rocket} alt="Rocket Launch" />
            View Rankings
          </button>
        </div>
        <div className="artist-cards-grid">
          {artists.map((artist) => (
            <TopRatedArtists
              rankingNumber={artist.rankingNumber}
              imageSrc={artist.imageSrc}
              name={artist.name}
              mobile={artist.mobile}
            />
          ))}
        </div>
      </section>
      <section className="browse-categories">
        <div className="section-headline">
          <h3>Browse Categories</h3>
        </div>
        <div className="category-cards-grid">
          {categories.map((category) => (
            <BrowseCategories
              imageSrc={category.imageSrc}
              name={category.name}
              bottom={category.bottom}
            />
          ))}
        </div>
      </section>
      <Discover />
      <Highlight />
      <HowItWorks />
      <SubscribeWidget />
    </>
  );
};
