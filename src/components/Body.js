// import resList from "../utils/mockData";
import RestaurentCard from "./RestaurantCard";
import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body=()=>{

    // local state variable -super powerful variable
    const[listofRestaurants,setlistofRestaurants]=useState([]);
    
  const[filteredRestaurant,setfilteredRestaurant]=useState([]);

// search state variable
const[searchtext,setsearchtext]=useState();

// fetchapi
    useEffect(()=>{
        fetchData();
    },[]);
    

// shimmer or Conditional rendering
// if(listofRestaurants.lenght === 0)
// {
//     return <Shimmer/>
// }

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.67740&lng=83.20360&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json=await data.json();
        
        console.log(json);
        // optional chaining
        setlistofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    return(
    <div className="body">
      <div className="filter">
         <div className="search">
          <input type="text"
          className="search-box"
          value={searchtext}
          onChange={(e)=>{
            setsearchtext(e.target.value);
          }}
          />          
           <button
              onClick={()=>{
              console.log(searchtext);

              const filteredRestaurant=listofRestaurants.filter(
                (res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
                setfilteredRestaurant(filteredRestaurant)
                
            }}>
              Search
            </button> 
         </div>
        <button className="filter-btn" onClick={()=>{
             const filtered=listofRestaurants.filter((res)=>res.info.avgRating>4);
             setlistofRestaurants(filtered);
        }}>
            Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant)=>(
          <RestaurentCard key={restaurant.info.id} resData={restaurant}/>
        ))}
        
        </div>
      </div>
    );
};

export default Body;
