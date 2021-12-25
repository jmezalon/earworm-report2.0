function ToggleButtons({ isActive, setIsActive }) {
  return (
    <div className="toggle-posted-favorite">
      <button
        onClick={() => setIsActive(true)}
        className={isActive ? "selected" : ""}
      >
        Posted
      </button>
      <button
        onClick={() => setIsActive(false)}
        className={isActive ? "" : "selected"}
      >
        Favorites
      </button>
    </div>
  );
}

export default ToggleButtons;
