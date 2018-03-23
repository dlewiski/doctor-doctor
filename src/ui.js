export class userDisplay{

  displayNames(doctors) {
    doctors.forEach(function(doctor){
      $(".output").append("<p>" + doctor + "</p>");
    })
  }
}
