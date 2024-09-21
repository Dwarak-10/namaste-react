import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([
    {
      data: {
        id: "334477",
        name: "KFC",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280ed",
        cuisines: ["Burgers", "Biriyani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "3.8",
      },
    },
    {
      data: {
        id: "334478",
        name: "Dominos",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280ed",
        cuisines: ["Burgers", "Biriyani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "4.5",
      },
    },
    {
      data: {
        id: "334479",
        name: "MCD",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280ed",
        cuisines: ["Burgers", "Biriyani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "4.1",
      },
    },
  ]);
  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
