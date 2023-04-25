import "./BrowseCategories.scss";

interface BrowseCategoriesProps {
  imageSrc: string;
  name: string;
  bottom: boolean;
}

export const BrowseCategories = (props: BrowseCategoriesProps) => {
  const { imageSrc, name, bottom } = props;
  const className = `category-card ${bottom && "-bottom"}`;

  return (
    <div className={className}>
      <div className="photo-icon">
        <img src={imageSrc} alt="art" />
      </div>
      <div className="collection-name">
        <h5>{name}</h5>
      </div>
    </div>
  );
};
