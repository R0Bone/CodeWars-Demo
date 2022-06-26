/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/

function bmi(weight, height) { // convert to Kilograms and Meters 
    let bodyMassIndex = weight / height **2
    if (bodyMassIndex <= 18.5){
      return "Underweight"
    }else if(bodyMassIndex <= 25.0){
      return 'Normal'
    }else if(bodyMassIndex <= 30.0){
      return "Overweight"
    }else{
      return 'Obese' // return a string ie."obese"
    }
  
  } 
  console.log(bmi(81.647, 1.803)) // 81.647 kilograms / (1.803meters squared = 3.250809) => 'Overweight'
  console.log(bmi(104.326, 1.803)) // 104.326 kilograms / (1.803meters squared = 3.250809) => "Obese"