const BookNow = ({ priceFrom }) => {
  return (
    <div className="book-now">
      <div className="bool-now-header">Save Up To 35%</div>
      <div className="book-now-body">
        <div className="book-now-booked">Booked 42 times yesterday</div>
        <div className="book-now-price-wrapper">
          <div className="book-now-price">
            <b>${priceFrom}</b>
            <p>per person</p>
          </div>
          <button className="book-now-btn">Book Now</button>
        </div>
        <p className="book-now-more-info">
          <i className="bi bi-calendar-check"></i>
          <span>Reverse now and pay latter</span>
          to book your post and pay nothing today
        </p>
      </div>
    </div>
  );
};

export default BookNow;
