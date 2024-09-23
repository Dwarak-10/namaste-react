import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [listOfAllRestaurant, setListOfAllRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.8161442&lng=78.69919759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      //Optional Chaining
      await json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (data) => data?.info
      );
    setListOfRestaurant(restaurants);
    setListOfAllRestaurant(restaurants);
  };
  // Conditional Rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-btn"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((data) =>
                data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfAllRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.avgRating > 4.5
            );
            setListOfAllRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfAllRestaurant(listOfRestaurant);
          }}
        >
          Show All Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfAllRestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant?.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};
export default Body;
