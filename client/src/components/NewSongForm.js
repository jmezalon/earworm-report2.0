function NewSongForm({
  handleAddGenre,
  handleAddSong,
  formData,
  setFormData,
  onHandleChange,
  genreClick,
  setGenreClick,
  genre_name,
  setGenre_name,
  genres,
  errors,
}) {
  return (
    <form className="new-song-form" action="Add-song" onSubmit={handleAddSong}>
      <label>
        <input
          aria-label="Title"
          placeholder="Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={onHandleChange}
        />
      </label>
      <label>
        <input
          aria-label="image"
          placeholder="Image Url"
          type="text"
          name="img_url"
          value={formData.img_url}
          onChange={onHandleChange}
        />
      </label>
      {/* <label>Genre:</label> */}
      <select
        name="genre_id"
        id="submit-song-genre-select"
        onChange={(e) =>
          setFormData({
            ...formData,
            [e.target.name]: parseInt(e.target.value),
          })
        }
      >
        <option>select</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.genre_name}
          </option>
        ))}
      </select>
      {!genreClick && (
        <button id="new-genre-button" onClick={() => setGenreClick(true)}>
          New Genre
        </button>
      )}
      {genreClick && (
        <>
          {/* <label>genre name: </label> */}
          <input
            id="genre-name-input"
            type="text"
            onChange={(e) => setGenre_name(e.target.value)}
            value={genre_name}
            placeholder="genre name"
          />
          <span id="add-genre-button" onClick={handleAddGenre}>
            Add
          </span>
          {"  |  "}
          <span
            onClick={() => {
              setGenreClick(false);
              setFormData({ ...formData, [formData.genre_id]: null });
            }}
            id="cancel-button"
          >
            cancel
          </span>
        </>
      )}
      <button>Submit</button>
      <>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </>
    </form>
  );
}

export default NewSongForm;
