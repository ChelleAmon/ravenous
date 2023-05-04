const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };
  
  const SearchBar = () => {
    const renderSortByOptions = () => {
      return Object.keys(sortByOptions).map((sortByOption) => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li key={sortByOptionValue}>{sortByOption}</li>;
      });
    };
  
    return (
      <div className="Searchbar">
        <div className="SearchBarSortOptions">
          <ul>{renderSortByOptions()}</ul>
        </div>
        <div className="SearchBarFields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBarSubmit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  };

  export default SearchBar;