import { useEffect, useState } from 'react';
import ImgCard from './components/ImgCard';
import './App.css';
import ImgSearch from './components/ImgSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then(response => response.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  },[term])

  return (
    <div className="container mx-auto">
      <ImgSearch searchText= {(text) => setTerm(text)}/>
      {!isLoading && images.length === 0 && 
        <h1 className="text-xl text-center mx-auto mt-32">
          No Images found</h1>
      }
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading ...</h1> : 
        <div className="grid grid-cols-3 gap-4">
        {images.map(image => {
           return <ImgCard key={image.id} image={image}/>
        })}
      </div>
      }
    </div>
  )
}

export default App
