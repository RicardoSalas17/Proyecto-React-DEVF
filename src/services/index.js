import axios from 'axios';

const baseURL = 'http://ecomerce-master.herokuapp.com/api/v1/'

const service = axios.create({
  baseURL,
})

const MY_SERVICE = {
  getAllItems: async () => {
    return await service.get('item');
  },
  getItem: async (id) => {
    return await service.get(`item/${id}`);
  },
  signup: async (user) => {
    return await service.post('signup', user);
  },
  login: async (user) => {
    return await service.post('login', user);
  },

   getUser: (idUser,config) => {
     return service.get(`user/${idUser}`, config)
   },
}

export default MY_SERVICE;