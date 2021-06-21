import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID eIlbov4EECUmDk767yVG_Hoa5UqwMhd1QK6LSDJqgQw'
    }
});