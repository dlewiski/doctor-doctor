export class userDisplay{

  displayNames(doctors) {
    let index = 0;
    doctors.forEach(function(doctor){
      let newPatient = "not accepting new patients";
      if (doctor.practices[0].accepts_new_patients) {
        newPatient = "is accepting new patiens";
      }
      $(".output").append("<p>" + doctor.profile.first_name + " " + doctor.profile.last_name + " " + newPatient + "</p>");
      // $(".output").append("<p>" + doctor.practices[index].accepts_new_patients + "</p>");
      // index++;

      // doctor.practices.forEach(function(practice){
      //   $(".output").append("<p>" + practice.accepts_new_patients + "</p>");


    })
  }
}
