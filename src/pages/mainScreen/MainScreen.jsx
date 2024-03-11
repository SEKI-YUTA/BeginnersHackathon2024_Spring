import { FaGear } from 'react-icons/fa6';
import SmallTrackItem from '../../components/SmallTrackItem';
import AppHeader from '../../components/AppHeader';
import SpotifyImg from '../../images/Spotify_Icon.png';
import shareImg from '../../images/share.svg';
import { useEffect, useState } from 'react';
import getRecommendations from '../../util/apiClient';
import LoadingIndicator from '../../components/LoadingIndicator';

function MainScreen() {
    const [recommendData, setRecommendData] = useState({});
    useEffect(() => {
        getRecmmendedData();
    }, []);
    const getRecmmendedData = async () => {
        getRecommendations().then((res) => {
            setRecommendData(res);
        });
    };
    if (recommendData != null && recommendData.tracks != undefined) {
        return (
            <div>
                <AppHeader tailIcon={<FaGear size={26} />} />
                <div className='w-full space-between mt-2'>
                    <div className='flex size-full'>
                        <div className='flex-1 flex flex-col grow ml-10 mr-10'>
                            <div>
                                {recommendData &&
                                recommendData.tracks &&
                                recommendData.tracks[0].album &&
                                recommendData.tracks[0].album.images[0].url ? (
                                    <img
                                        className='size-full aspect-square rounded-lg'
                                        src={
                                            recommendData.tracks[0].album
                                                .images[0].url
                                        }
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>

                        <div className='flex-1 flex flex-col grow space-between mr-10'>
                            <div className='rounded-md text-start mb-4'>
                                <h1 className='font-sans text-4xl mt-4 ml-2'>
                                    {recommendData &&
                                        recommendData.tracks &&
                                        recommendData.tracks.length > 0 &&
                                        recommendData.tracks[0].name}
                                </h1>
                            </div>
                            <div className='flex border-b-2'>
                                <p className='ml-3 text-left text-2xl flex-1 justify-center text-zinc-500'>
                                    {recommendData &&
                                        recommendData.tracks &&
                                        recommendData.tracks[0].album &&
                                        recommendData.tracks[0].artists &&
                                        recommendData.tracks[0].artists.length >
                                            0 &&
                                        recommendData.tracks[0].artists
                                            .map((artist) => artist.name)
                                            .join(', ')}
                                </p>
                                <div className='flex mb-2'>
                                    <button
                                        onClick={() => {
                                            console.log('clicked');
                                        }}
                                        className='w-8 h-8 rounded-full ml-1'
                                    >
                                        <a href={recommendData.tracks[0].external_urls.spotify}>
                                        <img src={SpotifyImg} alt='' />
                                        </a>
                                    </button>
                                    <button
                                        onClick={() => {
                                            console.log('clicked');
                                        }}
                                        className='w-8 h-8 rounded-full ml-1 mr-4'
                                    >
                                        <img src={shareImg} alt='' />
                                    </button>
                                </div>
                            </div>
                            <div className='flex-1 flex  space-betwee'>
                                <p className='text-2xl'>
                                    リリース日・・・・・・
                                </p>
                                <p className='ml-2 text-right text-2xl flex-1 text-zinc-500'>
                                    {recommendData &&
                                        recommendData.tracks &&
                                        recommendData.tracks[0].album &&
                                        recommendData.tracks[0].album
                                            .release_date &&
                                        recommendData.tracks[0].album
                                            .release_date}
                                </p>
                            </div>
                            <div className='border-b border-b-2'>
                                <p className='ml-2 text-4xl text-left pb-2'>
                                    あなたにおすすめ
                                </p>
                            </div>
                            {/* おすすめの曲リスト */}
                            <div className='flex w-full'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='size-full h-screen flex justify-center align-center'>
                <LoadingIndicator />
            </div>
        );
    }
}

export default MainScreen;
