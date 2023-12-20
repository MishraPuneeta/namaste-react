import { useState, useEffect } from "react";
import ResturantCard from "../components/ResturantCard";
import Shimmer from "./Shimmer";
import { MOCK_DATA } from "../utils/constants";

const Body = () => {
  const [listOfResturants, setListofResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=30.702558896758752&lng=76.70304402709007&carousel=true&third_party_vendor=1"
    );
    const resturantData = await data.json();

    //optional chaining
    setListofResturants(
      resturantData.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //conditional rendering
  return listOfResturants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
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
          return <ResturantCard key={restCard.id} restData={restCard} />;
        })}
      </div>
    </div>
  );
};

export default Body;
