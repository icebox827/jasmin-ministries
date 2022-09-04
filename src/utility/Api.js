import axios from 'axios';

const Api = async (state) => {
  const options = {
    method: 'GET',
    url: 'https://bible-verse-of-the-day.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '413dcda1b3msh390a06fcb8b7519p1aa241jsn28de708ce169',
      'X-RapidAPI-Host': 'bible-verse-of-the-day.p.rapidapi.com',
    },
  };

  axios.request(options).then((response) => {
    state(response.data);
  }).catch((error) => {
    console.error(error);
  });
};

export default Api;
