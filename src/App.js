import './App.css';
import myimage from "./imageInSrc.jpg";
function App() {
  return (
    <div className="App">
      <center>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className='title red'>Aisha Jebri</h1>
      <br/>
        <img src={myimage} alt="error"/>
        <br/>
        <h2 className="sub">Blue Nebula</h2>
        <br/>
        <img src={'/imageInPublic.jpg'} alt="error" />
        <br/>
        <h3 className="sub">Volcano </h3>
        <br/>
        <video width="320" height="240" controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
   </center>
    </div>
  );
}
export default App;