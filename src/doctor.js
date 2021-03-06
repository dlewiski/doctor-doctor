export class Doctor {
  constructor(){
    this.location = "or-portland";
  }

  doctorCallSymptom(symptom){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url =`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&user_location=45.523%2C-122.6765&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }

  doctorCallName(name){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url =`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&user_location=45.523%2C-122.6765&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }

  doctorInfo(response){
    let body = JSON.parse(response);
    // console.log(body.data[0].uid);
    console.log(body.data);
    console.log(body.data[0].profile.image_url);
    // console.log(body.data[0].practices[0].visit_address.city);
    // console.log(body.data[0].practices[0].phones[0].number);
    console.log(body.data[0].practices[0].website);
    console.log(body.meta.total);
    let profiles = []
    body.data.forEach(function(practice) {
      profiles.push(practice);
      });
    return profiles;
  }
}
