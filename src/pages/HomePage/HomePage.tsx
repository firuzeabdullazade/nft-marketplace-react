import "./HomePage.scss";
import { BrowseCategories } from "./components/BrowseCategories/BrowseCategories";
import { Discover } from "./components/Discover/Discover";
import { HeroPart } from "./components/HeroPart/HeroPart";
import { Highlight } from "./components/Highlight/Highlight";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { SubscribeWidget } from "./components/SubscribeWidget/SubscribeWidget";
import { TopRatedArtists } from "./components/TopRatedArtists/TopRatedArtists";
import { TrendingCollection } from "./components/TrendingCollection/TrendingCollection";
export const HomePage = () => {
  return (
    <>
      <HeroPart />
      <TrendingCollection />
      <TopRatedArtists />
      <BrowseCategories />
      <Discover />
      <Highlight />
      <HowItWorks />
      <SubscribeWidget />
    </>
  );
};
