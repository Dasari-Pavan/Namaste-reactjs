import {RES_URL} from "../utils/constants"

const RestaurantCard=(props)=>{
    const {resData} =props;
 
// var mystyle={className="y-3"};

    const {name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId}=resData?.info;
    return(
    <div className="ms-2">
    <div className="res-card">
      <img style={{height:"300px"}}
      className="res-logo"
      alt="res-logo"
      src={RES_URL+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}minutes</h4>
    </div>    
    </div>
    )
  }

  export default RestaurantCard;
  