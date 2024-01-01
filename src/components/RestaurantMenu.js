import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fecthMenu();
  }, []);

  const fecthMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestInfo(json.data);
  };

  const restData = restInfo?.cards[2]?.card?.card?.info;

  const menuItems =
    restInfo?.cards
      ?.filter((menuCard) => {
        return Object.keys(menuCard).includes("groupedCard");
      })[0]
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menu) => {
        return Object.keys(menu?.card?.card).includes("itemCards");
      })[0]?.card?.card?.itemCards ||
    restInfo?.cards
      ?.filter((menuCard) => {
        return Object.keys(menuCard).includes("groupedCard");
      })[0]
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menu) => {
        return Object.keys(menu?.card?.card).includes("categories");
      })[0]?.card?.card?.categories[0].itemCards;

  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{restData.name}</h1>
      <p>
        {restData.cuisines.join(",")}-{restData.costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {menuItems?.map((menu) => {
          return (
            <li key={menu?.card?.info?.id}>
              {menu?.card?.info?.name} - RS.
              {menu?.card?.info?.price / 100 ||
                menu?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
