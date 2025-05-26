import "/src/styles/Form.css"


function search () {
  const placeholderText = "Search for movies...";

  return (
    <div className="search">
        <input type="text" placeholder={placeholderText} />
    </div>
  )

}

export default search