import axios from 'axios';

const getDiscord = async (userID) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/user/${userID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default getDiscord;
