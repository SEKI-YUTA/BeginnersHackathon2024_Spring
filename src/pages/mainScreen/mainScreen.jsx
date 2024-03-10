import { useEffect,useState } from "react";
import DEMO_TRACK_DATA from "../../DemoData";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios"
import spotifySampleRes from "../../spotifySampleRes";
import getRecommendations from "../../util/SpotifyApi";

function Mainscreen() {
    const [track,setTrack] = useState([])
    
    useEffect(()=>{
        const recommendations = getRecommendations()
        console.log(recommendations)
        // setTrack(recommendations.tracks[0]);

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
                    {/* <h1 className="font-sans text-4xl mt-4 mb-4 ml-2">{spotifySampleRes ? spotifySampleRes.name: DEMO_TRACK_DATA.trackName}</h1> */}
                </div>
            </div>

            <div className="flex-initial grow">
                    <div className="m-11 border-2 rounded-md">
                        <p className="h-40">{track && track.artists ? track.artists[0].name : "Demo artist"}</p>
                        {/* <p className="h-40">{spotifySampleRes && spotifySampleRes.artists ? spotifySampleRes.artists[0].name : "Demo artist"}</p> */}
                    </div>
                    <div className="ml-11 mr-11">
                         <div className="md-4">
                            <div className ="h-20 mt-7 md-7 border-2 rounded-md">
                              <p className="ml-7 mr-7">Spotifyで今すぐ聞こう！</p>
                              <a target="_blank" className="underline text-cyan-400" href={track && track.external_urls ? track.external_urls.spotify : '#' }>{track && track.external_urls && track.external_urls.spotify ? track.external_urls.spotify : "demourl"}</a>
                              {/* <a target="_blank" className="underline text-cyan-400" href={spotifySampleRes && spotifySampleRes.external_urls ? spotifySampleRes.external_urls.spotify : '#' }>{spotifySampleRes && spotifySampleRes.external_urls && spotifySampleRes.external_urls.spotify ? spotifySampleRes.external_urls.spotify : "demourl"}</a> */}
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


