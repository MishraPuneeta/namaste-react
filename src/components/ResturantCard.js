import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const RestCard = props.restData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + RestCard.cloudinaryImageId}
      />
      <h3>{RestCard.name}</h3>
      <h5 className="cuisine-card">{RestCard.cuisines.join(", ")}</h5>
      <h5>{RestCard.avgRatingString + " stars"}</h5>
      <h5>{RestCard.sla.deliveryTime + " mins."}</h5>
    </div>
  );
};

export default ResturantCard;
