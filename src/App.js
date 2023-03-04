/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import axios from "axios";
import "./App.css"

function App() {
  const [photo,setPhoto] = useState("");

  const [result,setResult] = useState([])

  const changePhoto = () =>{
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=SDrgNx37634AQae-W7TtgNXIr0Hpj94Di3CkS4ywxdc`).then((response)=>{
      setResult(response.data.results);
      console.log(response.data)
    })
  }
  return (
    <>
    <div className='App'> 
    <h3>Random Photo Generator in React</h3>
    <hr />
    
    </div>
   
    <div className='container text-center my-4'>
    
    <input type="text" className='form-control' value={photo} onChange={(e)=>{
      setPhoto(e.target.value);
    }}/>
    <button type='submit' className='btn btn-primary my-4' onClick={changePhoto}>Get Photos</button>
    </div>

    <div className="container">
      <div className="row text-center text-lg-start">
       {result.map((value)=>{
        return(
          <div className="col-lg-3 col-md-4 col-6">
        <a href="#" className="d-block mb-4 h-100">
          <img className="img-fluid img-thumbnail" src={value.urls.small}/>
        </a>
        </div>
        )
       })}
      </div>
    </div>
    </>
  )
}

export default App