import { Doctor } from './doctor.js';

$(document).ready(function(){
  $('#submit-symptom').submit(function(event){
    event.preventDefault();
    let newDoctors = new Doctor();
    //console.log(newSearch.place);
    let doctorPromise = newDoctors.doctorCall($('#symptom').val())
    doctorPromise.then(function(response){
      let doctors = newDoctors.doctorInfo(response)
      $(".output").append("<p>" + doctors + "</p>");
      // promise.then(function(response){
      //   let stolenColors = newSearch.displayEachBikeColor(response, colorArr);
      //   display.displayColors(stolenColors);
      });
      //promise.error();
    });
  //  colorPromise.error();
  });
