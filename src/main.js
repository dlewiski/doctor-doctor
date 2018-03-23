import { Doctor } from './doctor.js';

$(document).ready(function(){
  $('#submit-symptom').submit(function(event){
    event.preventDefault();
    let newDoctors = new Doctor();
    let doctorPromise = newDoctors.doctorCallSymptom($('#symptom').val())
    doctorPromise.then(function(response){
      let doctors = newDoctors.doctorInfo(response)
      $(".output").append("<p>" + doctors + "</p>");
      });
    });
  $('#submit-name').submit(function(event){
    event.preventDefault();
    let newDoctors = new Doctor();
    let doctorPromise = newDoctors.doctorCallName($('#name').val())
    doctorPromise.then(function(response){
      let doctors = newDoctors.doctorInfo(response)
      $(".output").append("<p>" + doctors + "</p>");
      });
    });
  });
