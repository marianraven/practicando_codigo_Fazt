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
      return "hirviendo!";
    } else if (distance < 40) {
      return "Realmente caliente";
    } else if (distance < 60) {
      return "Caliente";
    } else if (distance < 100) {
      return "Calentando";
    } else if (distance < 180) {
      return "Frio";
    } else if (distance < 360) {
      return "Realmente frio";
    } else {
      return "Congelado!";
    }
  }