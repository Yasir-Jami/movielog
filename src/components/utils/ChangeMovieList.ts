// Use list name to retrieve all movies then tell MovieList to change what it displays

async function fetchListContents(listName: string) {
  const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_BASE_URL}`

  const listData = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify( { listName: listName } ),
  })
  .then(res => res.json())
  .then(data => {
    console.log("Retrieved data:", data);
  })
  .catch(err => logger.error("Error:", err));

  return listData;
}

async function ChangeMovieList(listName: string) {
  const listData = await fetchListContents(listName);

  // Pass list data to MovieList and change what's shown

}

export default ChangeMovieList;