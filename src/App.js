import React, { useState, useEffect }  from 'react';
import './App.css';
import axios from "axios"

const App = () => {

  const [gridArr, setGridArr] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios
      .get("https://api.unsplash.com/photos/?client_id=NqnV0VzStxxn1EOyvsMOn7HKN_J7r4gYZk1kgvlL164")
      .then(response => {
        //console.log(response)
        setGridArr(response.data)
      })
      .catch(err => console.log(err))
    }
    fetchData()
  }, [])

  // console.log(gridArr)

  const images = gridArr.map(({id, urls, description}) => {
    return <img key={id} src={urls.small} alt={description} />
  })


  return (
    <div className="App">
        {images}
    </div>
  );
}

export default App;
