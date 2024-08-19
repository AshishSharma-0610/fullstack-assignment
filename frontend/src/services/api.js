import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Update with your API URL

export const getCards = async () => {
    try {
        const response = await axios.get(`${API_URL}/cards`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cards:', error);
        throw error; 
    }
};
