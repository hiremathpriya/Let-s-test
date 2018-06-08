import request from 'superagent'



const registerURL = '/api/v1/registrations'




export function registerUser (user, callback) {
  request
    .post(registerURL)
    .withCredentials(true)
    .send(user)
    .end((err, res) => {
      //console.log("received response ", res);
      callback(err, res)
    })
}