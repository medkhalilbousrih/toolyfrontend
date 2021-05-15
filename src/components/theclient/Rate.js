import ReactStars from "react-rating-stars-component";
import axios from "axios";

const Rate = ({ rating, id }) => {
  const ratingChanged = (newRating) => {
    const connectedUser = window.localStorage.getItem("connectedUser");
    const user = JSON.parse(connectedUser);
    axios
      .put(
        `/api/tools/rate/${id}`,
        { rating: Number(newRating) },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => console.log("success"))
      .catch((err) => console.log(err.response));
  };
  return (
    <ReactStars
      count={5}
      value={rating.value ? rating.value / rating.total : 0}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
    />
  );
};

export default Rate;
