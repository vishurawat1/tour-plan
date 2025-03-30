import "./App.css";
import Tours from "./component/Tours";
import data from "./data";
import { useState } from "react"; 


const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    console.log(id);
    
    const newTours = tours.filter(tour=>tour.id!==id);
    setTours(newTours);
}

if(tours.length === 0){
  return(
    <div className="refresh">
      <h2>No tours left</h2>
      <button className="btn-white" onClick={()=>setTours(data)}>Refresh</button>
    </div>
  );
}

  return (
    <div className="App"> 
      <Tours tours = {tours} removeTour = {removeTour}/>
    </div>
  );
}

export default App;