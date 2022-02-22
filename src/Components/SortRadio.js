function SortRadio({ setSortType }) {
  return (
    <div>
      <b>Sort By: </b>
      <input
        type="radio"
        name="sortButtons"
        value="none"
        onClick={(e) => setSortType(e.target.value)}
        defaultChecked
      ></input>
      <label htmlFor="none">None</label>
      <input
        type="radio"
        name="sortButtons"
        value="name"
        onClick={(e) => setSortType(e.target.value)}
      ></input>
      <label htmlFor="name">A-Z</label>
      <input
        type="radio"
        name="sortButtons"
        value="start_date"
        onClick={(e) => setSortType(e.target.value)}
      ></input>
      <label htmlFor="start_date">Start Date(New-Old)</label>
      <input
        type="radio"
        name="sortButtons"
        value="published_date"
        onClick={(e) => setSortType(e.target.value)}
      ></input>
      <label htmlFor="published_date">Published Date(New-Old)</label>
      <input
        type="radio"
        name="sortButtons"
        value="rules"
        onClick={(e) => setSortType(e.target.value)}
      ></input>
      <label htmlFor="rules">Number of Rules(High-Low)</label>
    </div>
  );
}

export default SortRadio;
