import logo from './logo.svg';
import './App.css';
import ImgGallery from './modalpop/ImgGallery';
// import GalleryApp from './component/gallery';
// import ImageComponent from './components/photogallery';
// import PhotoGallery from './components/PhotoG';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
     {/** <PhotoGallery />
      <GalleryApp />
      <ImageComponent />
*/}

<ImgGallery />
    </div>
  );
}

export default App;
