function Search({ searchInput, setSearchInput }) {
  return (
    <label>
      <b>Search Policy: </b>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </label>
  );
}

export default Search;
