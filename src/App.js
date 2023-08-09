
import './App.css';
import Array from './component/Array';
import Home from './component/Home ';

function App() {
  const heading = "My First React Application"
  // eslint-disable-next-line no-unused-vars
  const fruits = ["Apple","Banana","Orange","Mango"]
  const allow = true

  

  return (
    <div className="Sam">
      <Home title={heading} />
      <h1>My Fruits</h1>
      <Array fruits={fruits} />

      
       


      {/*<ul>
        {    //java script canbe written in HTml with curly brackets 

        fruits.map((fruits,index)=> (
        <li key= {index}>{fruits}</li>
         ))
         }
        </ul>*/}


    </div>
  );
}

export default App;