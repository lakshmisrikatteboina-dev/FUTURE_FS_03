import "../styles/reviews.css";

function Reviews() {

  const reviews = [
    {
      name: "Ananya",
      rating: 5,
      review: "Beautiful ambience and cozy seating. The coffee was amazing and the place is perfect for spending time with friends."
    },
    {
      name: "Rahul",
      rating: 4,
      review: "Loved the cafe vibes! The desserts were delicious and the staff was very friendly."
    },
    {
      name: "Sravya",
      rating: 5,
      review: "Aesthetic interiors with great food. One of the best places for pictures and peaceful evenings."
    },
    {
      name: "Kiran",
      rating: 4,
      review: "The pasta and coffee combination was perfect. Nice place for a casual meetup."
    }
  ];


  return (
   <section id="reviews" className="reviews">

      <h1>Customer Reviews</h1>

      <div className="reviews-container">

        {reviews.map((item,index)=>(

          <div className="review-card" key={index}>

            <div className="stars">
              {"★".repeat(item.rating)}
              {"☆".repeat(5-item.rating)}
            </div>

            <p>
              "{item.review}"
            </p>

            <h3>
              {item.name}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Reviews;