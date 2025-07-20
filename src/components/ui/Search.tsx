import "/src/styles/Form.css"


function Search() {
  const placeholderText = "Search for movies...";
  
  return (
    <div className="search-container">
        <input type="text" placeholder={placeholderText} />
    </div>
  )

}

export default Search