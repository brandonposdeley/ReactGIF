import axios from 'axios';

export async function GetGift(category : string,offset : number) {
        const response = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=2af3a26rA3jHJmPosw47tZf6vf3dWE6c&q=' + category + '&limit=20' + '&offset=' + offset);
        return response;
}
