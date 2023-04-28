import "./TopRatedArtists.scss";

interface TopRatedArtistsProps {
  rankingNumber: number;
  imageSrc: string;
  name: string;
  mobile: boolean;
}

export const TopRatedArtists = (props: TopRatedArtistsProps) => {
  const { rankingNumber, imageSrc, name, mobile } = props;
  const className = `artist-card ${mobile && '-mobile'}`;

  return (
    <div className={className}>
      <div className="ranking-number">{rankingNumber}</div>
      <div className="artist-avatar">
        <img src={imageSrc} alt="Avatar" />
      </div>
      <div className="artist-info">
        <h5>{name}</h5>
        <div className="additional-info">
          <div className="total-sale">Total Sale</div>
          <div className="eth">34.53 ETH</div>
        </div>
      </div>
    </div>
  );
};
