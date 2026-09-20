function Reviews() {
  return (
    <section id="reviews">
      <p>WHAT OUR CUSTOMERS SAY</p>

      <h2>Customer Reviews</h2>

      <div className="review-card">
        <div className="review-stars">★★★★★</div>

        <p>
          "Delicious food with authentic South Indian flavours.
          A great place for a family meal."
        </p>

        <strong>Arun Kumar</strong>
      </div>

      <div className="review-card">
        <div className="review-stars">★★★★★</div>

        <p>
          "The food was fresh and tasty. The service was also
          friendly and quick."
        </p>

        <strong>Priya S</strong>
      </div>

      <div className="review-card">
        <div className="review-stars">★★★★★</div>

        <p>
          "Loved the dosa and filter coffee. Definitely a place
          I would visit again."
        </p>

        <strong>Rahul M</strong>
      </div>
    </section>
  );
}

export default Reviews;