// genera un numero al azar
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
  }
  
  // dame la distancia o 2 puntos
  let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }
  
  // devuelve un string dependiendo de la distancia
  let getDistanceHint = distance => {
    if (distance < 30) {
      return "Boiling hot!";
    } else if (distance < 40) {
      return "Really Hot";
    } else if (distance < 60) {
      return "Hot";
    } else if (distance < 100) {
      return "Warm";
    } else if (distance < 180) {
      return "Cold";
    } else if (distance < 360) {
      return "Really Cold";
    } else {
      return "Freezing!";
    }
  }