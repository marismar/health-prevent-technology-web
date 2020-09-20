import axios from 'axios';

const api = axios.create({
    baseURL: 'https://health-prevent-technology.herokuapp.com/',
});

  /**
   * export async function sendSMSByDisease(data){
    await api.post('notification/sms/disease', data)
        .then(res => {
            console.log(res.data);
        })
        .catch((e) =>{
            console.log('Somethinf went worng !');
    });
}
   */

export default api;