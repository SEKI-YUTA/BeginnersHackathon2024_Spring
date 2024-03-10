import DEMO_TRACK_DATA from "../../DemoData";
import { FaGear } from "react-icons/fa6";
import SmallTrackItem from "../../components/SmallTrackItem";
import AppHeader from "../../components/AppHeader";
import SpotifyImg from "../../images/Spotify_Icon.png"
import shareImg from "../../images/share.svg"
import { useEffect, useState } from "react";
import getRecommendations from "../../util/apiClient";
import spotifySampleRes from "../../util/spotifySampleRes";

function Mainscreen() {
    const [recommendData, setRecommendData] = useState({});
    const [track, setTrack] = useState({});
    // useEffect(() => {
    //     setTrack(recommendData.tracks[0]);
    // }, [recommendData]);
    useEffect(async() => {
        // const res = await getRecommendations();
        const res = spotifySampleRes;
        setRecommendData(res);
        console.log("res");
        console.log(res);
    }, []);
    return (
        <div>
            <AppHeader tailIcon={<FaGear size={26} />} />
            <div className="w-full space-between">
                <div className="flex size-full">
                    <div className="flex-1 flex flex-col grow ml-10 mr-10">
                        <div>
                            <img
                                className="size-full aspect-square rounded-lg"
                                src={
                                    recommendData &&
                                    recommendData.tracks &&
                                    recommendData.tracks[0].album &&
                                    recommendData.tracks[0].album.images[0].url
                                        ? recommendData.tracks[0].album
                                              .images[0].url
                                        : ""
                                }
                            />
                        </div>
                        <div className="rounded-md text-start mb-4">
                            <h1 className="font-sans text-4xl mt-4 ml-2">
                                {recommendData &&
                                    recommendData.tracks &&
                                    recommendData.tracks.length > 0 &&
                                    recommendData.tracks[0].name}
                            </h1>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col grow space-between mr-10">
                        <div className="flex border-b">
                            <p className="ml-3 text-left text-2xl flex-1 justify-center">
                                {
                                    recommendData &&
                                recommendData.tracks &&
                                    recommendData.tracks[0].album &&
                                    recommendData.tracks[0].artists &&
                                    recommendData.tracks[0].artists.length >
                                        0 &&
                                    recommendData.tracks[0].artists
                                        .map((artist) => artist.name)
                                        .join(", ")}
                            </p>
                            <div className="flex mb-2">
                                <button
                                    onClick={() => {
                                        console.log("clicked");
                                    }}
                                    className="w-8 h-8 rounded-full ml-1"
                                >
                                    <img src={SpotifyImg} alt="" />
                                </button>
                                <button
                                    onClick={() => {
                                        console.log("clicked");
                                    }}
                                    className="w-8 h-8 rounded-full ml-1 mr-4"
                                >
                                    <img src={shareImg} alt="" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 border-2 rounded-md text-start p-2 flex-1">
                            <p className="h-40 overflow-auto">
                                {DEMO_TRACK_DATA.description}
                            </p>
                        </div>
                        {/* おすすめの曲リスト */}
                        <div className="flex w-full">
                            {recommendData.tracks &&
                                recommendData.tracks
                                    .slice(1)
                                    .map((track, index) => {
                                        return (
                                            <SmallTrackItem
                                                key={index}
                                                track={track}
                                            />
                                        );
                                    })}
                            {/* <SmallTrackItem />
                            <SmallTrackItem />
                            <SmallTrackItem />
                            <SmallTrackItem /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainscreen;
