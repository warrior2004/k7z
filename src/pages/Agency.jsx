import { useState, useEffect } from "react";
import "./Agency.css";

const images = [
  "Images/image1.jpg",
  "Images/image2.jpg",
  "Images/image3.jpg",
  "Images/image4.jpg",
  "Images/image5.jpg"
]

const Agency = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev+1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="agency-container">
      <div className="image">
        <img src={images[currentImage]} alt="" />
      </div>
      <div className="heading1">
        <h1> Soixan7e</h1>
        <h1>Douze</h1>
      </div>
      <div className="paragraph">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
          deserunt fugit doloremque architecto quam enim suscipit molestias
          repellendus hic voluptatem quaerat! Dolore, adipisci ratione iste
          totam placeat at eligendi ea quae natus ipsum fugit nemo labore maxime
          modi quia vel maiores voluptatum perspiciatis amet odit reprehenderit
          aliquid esse qui. Maxime!
        </p>
      </div>
    </div>
  );
};

export default Agency;
