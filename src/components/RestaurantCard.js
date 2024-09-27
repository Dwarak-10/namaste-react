import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData;
  return (
    <div className="m-4 p-4 border bg-gray-200 rounded-lg hover:bg-gray-300">
      <img
        className="h-40  rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4 className="whitespace-normal break-words">{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
