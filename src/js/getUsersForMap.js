import axios from 'axios';

export default async function getUsersForMap(key) {
  let data = [];
  const response = await axios.get('https://venify.herokuapp.com/user/list', {
    headers: {
      authorization: `${key}`,
    },
  });
  data = await response.data;
  return data;
}
