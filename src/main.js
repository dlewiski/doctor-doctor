import { Doctor } from './doctor.js';
import { userDisplay } from './ui.js';

let display = new userDisplay;

$(document).ready(function(){
  $('#submit-symptom').submit(function(event){
    event.preventDefault();
    let newDoctors = new Doctor();
    let doctorPromise = newDoctors.doctorCallSymptom($('#symptom').val())
    doctorPromise.then(function(response){
      let doctors = newDoctors.doctorInfo(response)
      display.displayNames(doctors);
      });
    });
  $('#submit-name').submit(function(event){
    event.preventDefault();
    let newDoctors = new Doctor();
    let doctorPromise = newDoctors.doctorCallName($('#name').val())
    doctorPromise.then(function(response){
      let doctors = newDoctors.doctorInfo(response)
      display.displayNames(doctors);
    });
  });
});
