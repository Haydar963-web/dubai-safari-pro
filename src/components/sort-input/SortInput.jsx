import "./sort-input.css";

const SortInput = ({ toursLength, sortItem, setSortItem }) => {
  return (
    <div className="sort-input-container">
      <div className="available-tours">
        {toursLength} tours found <i className="bi bi-info-circle"></i>
      </div>
      <select onChange={(e)=> setSortItem(e.target.value)} value={sortItem}>
        <option value="recomended">Recomended</option>
        <option value="low">Price - Low To High</option>
        <option value="high">Price - High To Low</option>
      </select>
    </div>
  );
};

export default SortInput;
