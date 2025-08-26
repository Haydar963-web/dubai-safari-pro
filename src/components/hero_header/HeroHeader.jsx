import "./hero-header.css";
const HeroHeader = ({ toggle }) => {
  return (
    <div className="hero-header">
      <div style={{ zIndex: toggle && "-1" }} className="search-box">
        <div className="input-wrapper">
          <i className="bi bi-search"></i>
          <input
            className="search-box-input"
            type="search"
            placeholder="What Are You Looking For"
          />
        </div>
        <button className="search-box-btn">Search</button>
      </div>
      <div className="hero-header-title">
        <h3>Dubai</h3>
        <h2>Desert Safaris</h2>
      </div>
    </div>
  );
};

export default HeroHeader;
