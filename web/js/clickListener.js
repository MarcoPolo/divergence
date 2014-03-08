function clickCoords(event){
  var offsetX = 0, offsetY = 0;
  var cx = 0, cy = 0;

  do{
    offsetX += event.offsetLeft - event.scrollLeft;
    offsetY += event.offsetTop - event.scrollTop;
  }
  while(event == event.offsetParent);

  cx = event.pageX - offsetX;
  cy = event.pageY - offsetY;

  if(event.offsetX !== undefined && event.offsetY !== undefined){
    return {x:event.offsetX, y:event.offsetY};
  }//endif
}
