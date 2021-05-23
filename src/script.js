function getColor(){
    var color = '#';
    var a = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  
    for(var i=0;i<6;i++){
      color+= a[Math.floor(Math.random()*16)];
    }
    return color;
  }