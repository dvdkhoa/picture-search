import { useState } from "react";
import "./App.css";
import FormSearch from "./components/FormSearch";
import ListItem from "./components/ListItem";
import axios from "axios";

function App() {

  const [list,setList] = useState([])
  const [query, setQuery] = useState('')

  const handlerOnChange = (e) => {
    let { value } = e.target
    // console.log(value)
    setQuery(value)
  }

  const handlerOnClickSearch = async () => {
    const res = await axios.get('https://api.unsplash.com/search/photos',{
      params: {query},
      headers: {
        Authorization: 'Client-ID vaeI2koqZwZR3L7IxQznd1jNinxTcn2YpPiUmiUWE4w'
      }
    })

    const newList = res.data.results.map( item => {
      return {
        id: item.id,
        alt_description: item.alt_description,
        url: item.urls.small
      }
    })
    
    setList(newList)
  }

  return (
    <div className="App">
      <h1 className="mt-5">Tìm kiếm ảnh</h1>
      <FormSearch handlerOnChange={handlerOnChange} handlerOnClickSearch={handlerOnClickSearch} />
      <hr/>
      <ListItem list={list} />
    </div>
  );
}

export default App;
