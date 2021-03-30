import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default apiClient;
