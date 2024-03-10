import { useEffect,useState } from "react";
import DEMO_TRACK_DATA from "../../DemoData";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios"

const client_id = "cb91a3c1f4904b3a93467e1b6b4b5d71"
const seacret_id = "d19a1a641ab2452bada0688a3923f36b"
const redirect_uri = "http://localhost:3000"
function Mainscreen() {
    const [track,setTrack] = useState([])
    
    useEffect(()=>{
        const getRecommendations = async () => {
            const response = await fetch('https://accounts.spotify.com/api/token', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${btoa(client_id + ':' + seacret_id)}`,
              },
              body: 'grant_type=client_credentials',
            });
            const data = await response.json();
            console.log(data); // アクセストークンがここに含まれます
            try {
                const response = await axios.get('https://api.spotify.com/v1/recommendations', {
                headers: {
                  Authorization: `Bearer ${data.access_token}` // アクセストークンをここに入れます
                },
                params: {
                  limit: 1,
                  seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
                  seed_genres: 'classical,country',
                  seed_tracks: '0c6xIDDpzE81m2q797ordA',
                  market: "ES"
                  //seedによって絞られていそう
                }
              });
              setTrack(response.data.tracks[0]);
              
            } catch (error) {
              console.error(error);
            }
          };
          getRecommendations()

    }, [])
    
    console.log(track)
  return (
    
    
    <div className="w-full space-between" >
        <div className="flex w-full">
            <div className="flex-none grow">
                <div className="m-11 ">
                    <img className="size-max" src={track && track.album && track.album.images.length > 0 ? track.album.images[0].url : DEMO_TRACK_DATA.jacket}/>
                </div>
                <div className="ml-11 border-2 rounded-md">
                    <h1 className="font-sans text-4xl mt-4 mb-4 ml-2">{track ? track.name: DEMO_TRACK_DATA.trackName}</h1>
                </div>
            </div>

            <div className="flex-initial grow">
                    <div className="m-11 border-2 rounded-md">
                        <p className="h-40">{track && track.artists ? track.artists[0].name : "Demo artist"}</p>
                    </div>
                    <div className="ml-11 mr-11">
                         <div className="md-4">
                            <div className ="h-20 mt-7 md-7 border-2 rounded-md">
                              <p className="ml-7 mr-7">Spotifyで今すぐ聞こう！</p>
                              <a target="_blank" className="underline text-cyan-400" href={track && track.external_urls ? track.external_urls.spotify : '#' }>{track && track.external_urls && track.external_urls.spotify ? track.external_urls.spotify : "demourl"}</a>
                            </div>             
                         </div>
                    </div>
            </div>

            
            <div className="flex-initial grow mt-11" >
                <Link to="/Setting"><FaGear /></Link>
            </div>


        </div>
    </div>
  );
}

export default Mainscreen;


