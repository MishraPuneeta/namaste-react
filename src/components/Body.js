import { useState, useEffect } from "react";
import ResturantCard from "../components/ResturantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfResturants, setListofResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const resturantData = await data.json();

    //optional chaining

    const filterList = resturantData.data.cards.filter(
      (rest) => rest.card?.card?.id === "restaurant_grid_listing"
    );
    setListofResturants(
      filterList[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  return listOfResturants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterList = listOfResturants.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListofResturants(filterList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfResturants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListofResturants(filterList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((restCard) => {
          return (
            <Link
              key={restCard.info.id}
              to={"/restaurants/" + restCard.info.id}
            >
              <ResturantCard restData={restCard} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
