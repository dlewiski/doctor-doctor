export class userDisplay{


  displayNames(doctors) {
    doctors.forEach(function(doctor){
      let firstName = doctor.profile.first_name;
      let lastName = doctor.profile.last_name;
      let phoneNum = doctor.practices[0].phones[0].number
      let addressStr = doctor.practices[0].visit_address.street + ", " + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state + ", " + doctor.practices[0].visit_address.zip;

      if (doctor.practices[0].visit_address.street2) {
        addressStr = doctor.practices[0].visit_address.street + ", " + doctor.practices[0].visit_address.street2 + ", " + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state + ", " + doctor.practices[0].visit_address.zip;
      }

      let newPatientStatus = "not accepting new patients";
      if (doctor.practices[0].accepts_new_patients) {
        newPatientStatus = "is accepting new patients";
      }

      $(".output").append("<p>" + firstName + " " + lastName + " " + newPatientStatus + " at " + addressStr + ", Phone number: " + phoneNum + "</p>");
    })
  }
  noResults(response) {
    let body = JSON.parse(response);
    console.log("here");
    if (body.meta.total === 0) {
      $(".output").append("<p>There are no doctors in the portland area that met the search criteria. Please alter your search and try again</p>");
    }
  }
}
