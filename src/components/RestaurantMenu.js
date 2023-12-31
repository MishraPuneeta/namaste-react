import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fecthMenu();
  }, []);

  const fecthMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.702558896758752&lng=76.70304402709007&restaurantId=50790"
    );
    const json = await data.json();
  };

  return (
    <div className="menu">
      <h1>Nmae of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
