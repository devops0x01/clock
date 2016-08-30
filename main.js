window.onload = function() {
  update_clock();
};

//start main loop
setInterval(function(){
  update_clock();
},5000);


update_clock = function(){
  var d = new Date();
  
  var minutes = d.getMinutes().toString();
  
  if(minutes.length < 2){
    minutes = "0" + minutes;
  }
  
  var hours = d.getHours().toString();
  
  if(hours.length < 2){
    hours = "0" + hours;
    
  }
  
  document.querySelector('#clockface').innerText = hours + ":" + minutes;
};

