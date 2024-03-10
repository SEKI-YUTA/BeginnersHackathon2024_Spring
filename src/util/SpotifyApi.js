import axios from "axios"

// const client_id =
// const seacret_id =
// const redirect_uri = "http://localhost:3000"
const getRecommendations = async () => {
    let result = null
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
        // setTrack(response.data.tracks[0]);
        result = response.data
    } catch (error) {
        console.error(error);
    }
    return result
};
export default getRecommendations