export class userDisplay{


  displayNames(doctors, addressConstructor) {
    doctors.forEach(function(doctor){
      let firstName = doctor.profile.first_name;
      let lastName = doctor.profile.last_name;
      let newPatientStatus = "not accepting new patients";

      if (doctor.practices[0].accepts_new_patients) {
        newPatientStatus = "is accepting new patients";
      }

      $(".output").append("<p>" + firstName + " " + lastName + " " + newPatientStatus + " " + addressStr + "</p>");
    })
  }

  addressConstructor(doctor) {
    let addressStr = doctor.practices[0].visit_address.street + ", " + doctor.practices[0].visit_address.street2 + ", " + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state + ", " + doctor.practices[0].visit_address.zip;
    return addressStr;
  }
}
