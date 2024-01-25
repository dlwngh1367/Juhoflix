import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data).catch(error => {
    throw new Error(`Error fetching data from ${url}: ${error.message}`);
  });
  

export default fetcher;