import axios from 'axios';

const getRecommendations = async () => {
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const seacret_id = process.env.REACT_APP_SPOTIFY_SEACRET_ID;
    const redirect_uri = 'http://localhost:3000';
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(client_id + ':' + seacret_id)}`,
        },
        body: 'grant_type=client_credentials',
    });
    const data = await response.json();
    try {
        const response = await axios.get(
            'https://api.spotify.com/v1/recommendations',
            {
                headers: {
                    Authorization: `Bearer ${data.access_token}`, // アクセストークンをここに入れます
                },
                params: {
                    limit: 5,
                    seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
                    seed_genres: 'classical,country',
                    seed_tracks: '0c6xIDDpzE81m2q797ordA',
                    market: 'ES',
                    //seedによって絞られていそう
                },
            }
        );
        // setTrack(response.data.tracks[0]);
        // result = response.data;
        // console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        return null
    }
    // return result;
};
export default getRecommendations;
