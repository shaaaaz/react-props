import './App.css';

function App(props) {
  // code here
  
  const images = props.Data;

  console.log(images);
  
  return(
    <div>
  
      <h1>Kalvium Gallery</h1>

      <div id='grid'> 
          {images.map((element) => (
          <img src={element.img} id={element.id}/>
        
          ))};
      </div>
   
    </div>
 )

}

export default App;