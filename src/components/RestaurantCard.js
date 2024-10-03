import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 border bg-gray-200 rounded-lg hover:bg-gray-300 w-60"
    >
      <img
        className="h-40 w-60 rounded-lg"
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

// Higher order component ==>it basically a function and it takes the component as the input and returns a new component as the output with some modification of the input component

export const withVegRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div data-testid="resCardVeg">
        <label className="absolute m-2 p-2 bg-black text-white rounded-lg">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
