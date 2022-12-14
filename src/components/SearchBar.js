function SearchBar(props) {
  return (
    <div className="search">
      <input
        value={props.location}
        type="text"
        onChange={(event) => props.setLocation(event.target.value)}
        onKeyPress={props.searchLocation}
        placeholder="Enter city"
        autoFocus
      ></input>
    </div>
  );
}

export default SearchBar;
