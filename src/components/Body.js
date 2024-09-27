import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>It seems like you are offline</h1>;

  // Conditional Rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="search m-4 p-4">
          {" "}
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.avgRating > 4.5
              );
              setListOfAllRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 bg-blue-100 m-4 rounded-lg"
            onClick={() => {
              setListOfAllRestaurant(listOfRestaurant);
            }}
          >
            Show All Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfAllRestaurant.map((restaurant) => {
          return (
            <Link key={restaurant?.id} to={"/restaurants/" + restaurant?.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
