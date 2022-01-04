function ToggleButtons({ isActive, setIsActive }) {
  return (
    <div className="toggle-posted-favorite">
      <button
        onClick={() => setIsActive(true)}
        className={isActive ? "selected" : "unselected"}
      >
        Posted
      </button>
      <button
        onClick={() => setIsActive(false)}
        className={isActive ? "unselected" : "selected"}
      >
        Favorites
      </button>
    </div>
  );
}

export default ToggleButtons;
