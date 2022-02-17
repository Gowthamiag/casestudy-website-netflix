
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import ReactPlayer from "react-player";
export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  console.log(content);
  return (
    
    <div className="app">
    <img src="http://soundtrackfest.com/wp-content/uploads/2019/12/LionKing2019-LiveToPicture-WorldPremiere-Banner.jpg" alt=""/>
     
     <ReactPlayer url="https://youtu.be/izJ8JHrhgpw"/>
     <h1>Comedy</h1>
     <ReactPlayer url="https://youtu.be/Yn_uHvb5vPQ"/>
     <h1>horror</h1>
     <ReactPlayer url="https://youtu.be/a9FIg6Zr0dg"/>
     <h1>series</h1>
     <ReactPlayer url="https://youtu.be/JipAeCFLgeg"/>
     <h1>children</h1>
     <ReactPlayer url="https://youtu.be/CaimKeDcudo"/>

     </div>
    
  );
}
