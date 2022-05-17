function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400)
  return 'This one is on me!'
  else if (someValue > 400 && someValue < 2000)
  return 'That will be twenty bucks.'
  else if (someValue > 2000 && someValue <= 2499)
  return 'I will gladly take your thirty bucks.'
  else if (someValue > 2500)
  return 'No can do.'
}

function ternaryCheckCity(cityName){
  // Write your code here!
  return (cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.')

}

function switchOnCharmFromTip(generosity){
  // Write your code here!
    switch(generosity){
      case 'generous' : return 'Thank you so much.'
      case 'not as generous' : return 'Thank you.'
      default : return 'Bye.'
   }
}