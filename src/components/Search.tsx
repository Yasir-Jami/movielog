import "/src/styles/Form.css"


function form () {
  const placeholderText = "Search for movies...";

  return (
    <div className="search">
        <input type="text" placeholder={placeholderText} />
    </div>
  )

}

export default form