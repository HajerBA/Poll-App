import axios from 'axios'

export default class Api {
    static getPollById(pollId) {
        return axios.get('http://localhost:3000/polls/').catch(function (error) {
            console.log(error);
          });
    }
    static setPoll(title, category, Date_Operation, money){
        return axios.post("http://localhost:3000/polls", {
            title: title,
            options:options
        
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    static vote(id){
      return axios.delete("http://localhost:3000/polls/"+id).catch(function (error) {
          console.log(error);
        });
      }
}