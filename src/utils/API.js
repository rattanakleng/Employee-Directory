import axios from 'azios';

export default {
    getRandom: function() {
        return axios.get('https://randomuser.me/api/?results=50');
    },
    getGender: function(gender) {
        return axios.get(`https://randomuser.me/api/?gender= ${gender}`)
    }
};