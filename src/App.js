import "./App.css";
import Array from "./component/Array";
import Home from "./component/Home ";

function App() {
  const heading = "My First React Application";
  // eslint-disable-next-line no-unused-vars
  const fruits = ["Apple", "Banana", "Orange", "Mango"];
  const allow = true;
  const myfunc = () => {
    console.log("Form Submitted");
  };

  // if (allow) {
  //   return (
  //     <div className="Sam">
  //       <Home title={heading} />
  //       <h1>My Fruits</h1>
  //       <Array fruits={fruits} />

  //       {/*<ul>
  //         {    //java script canbe written in HTml with curly brackets

  //         fruits.map((fruits,index)=> (
  //         <li key= {index}>{fruits}</li>
  //          ))
  //          }
  //         </ul>*/}

  //     </div>
  //   );

  // }
  //     else{
  //       return (
  //         <div className="App">
  //           <h1>
  //             YoU aRe NoT aLlOwEd To ViEw ThIs PaGe BuDdY!!!
  //           </h1>
  //         </div>
  //       )
  //     }

  return (
    <div className="App">
      {allow ? (
        <>
          <Home title={heading} />
          <h1>My Fruits</h1>
          {/* <Array fruits={fruits} />

          <button onClick={myfunc}>click me </button> */}
          <form onSubmit={myfunc}>
            <input type="text" name="Username" placeholder="Username" />
            <input type="password" name="Password" placeholder="Password" />
            <input type="Submit" value="Submit" />
          </form>
        </>
      ) : (
        <>
          <div>
            <h1>YoU aRe NoT aLlOwEd To ViEw ThIs PaGe BuDdY!!!</h1>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
