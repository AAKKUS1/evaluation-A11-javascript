function getReduction(price, age) {
	
      
if (age <= 5){
    return price / 2
  }
  else if (age <=18){
    return price - (price * 0.5)
  }
  else if (age <= 25){
    return price * 0.7
  }
  else if (age > 25){
    return price
  }
  
  
  
}

console.log(getReduction(10, 5)); 
console.log(getReduction(150, 25)); 
