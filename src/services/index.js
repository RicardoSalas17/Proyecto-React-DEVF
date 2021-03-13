import axios from 'axios';

const baseURL = 'http://ecomerce-master.herokuapp.com'

const service = axios.create({
  baseURL,
})

const MY_SERVICE = {
  getAllItems: async () => {
    return await service.get('/api/v1/item');
  },
  signup: async (user) => {
    return await service.post('/api/v1/signup', user);
  },
  login: async (user) => {
    return await service.post('/api/v1/login', user);
  },

//   getUser: () => {
//     return service.get('/api/v1/user')
//   },
}

export default MY_SERVICE;