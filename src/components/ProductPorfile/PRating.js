import ReactStars from "react-rating-stars-component";

const PRating = ({ rating }) => {
  console.log(rating);
  return (
    <ReactStars
      count={5}
      edit={false}
      value={rating.value ? Math.round(rating.value / rating.total) : 0}
      size={24}
      activeColor="#ffd700"
    />
  );
};

export default PRating;
