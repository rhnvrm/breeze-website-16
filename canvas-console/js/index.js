//Type Function **************************************
function typeIt(ctx, x, y, ch, paragraph, sentance){
  var total = paragraph.length;
  var messageString = paragraph[sentance];
  var messageArray = messageString.split('');
  var messageLength = messageArray.length;
  var pointer = 0;
  var typeTick = 0;
  var typeTickMax = 5;
  var typeResetTick = 0;
  var typeResetMax = 1;
  var updateTypeTick = function(){
    if(pointer < messageLength){
      if(typeTick < typeTickMax){
        typeTick++;
      } else {
        typeTick = 0;
        pointer++;
      }
    } else {
      if(typeResetTick < typeResetMax){
        typeResetTick++;
      } else {
        typeResetTick = 0;
        typeTick = 0;
        pointer = 0;
      }
    }
  }
  
  var renderMessage = function(){
    var text = messageArray.slice(0, pointer);
    ctx.shadowBlur = 4;
    ctx.fillText(text.join(''), x, y+2);
    ctx.shadowBlur = 0;
   }

  var renderLines = function(){
    ctx.beginPath();
    for(var i = 0; i < 18; i += 1){    
      ctx.moveTo(0, (i*2 + .5)+y);
      ctx.lineTo(800, (i*2 + .5)+y);    
    }
    ctx.stroke();
  }
  var blink = function(){
    ctx.clearRect(0, y, 800, 35);
    ctx.fillText("", x-5, y);
    renderLines();
    setTimeout(cursor, 550);
  }
  var cursor = function(){
    ctx.clearRect(0, y, 800, 35);
    ctx.fillText("|", x-5, y);
    renderLines();
    setTimeout(blink, 550);
  }
  var print = function(){
    if(typeResetTick < typeResetMax){
      ctx.clearRect(0, y, 800, 35);
      updateTypeTick();
      renderMessage();
      renderLines();
      //Speed
      setTimeout(print, 0);
    }else{
      sentance++;
      if(sentance < total){
        y = y+30;
        typeIt(ctx, x, y, ch, paragraph, sentance);
      }else{
        //alert("Done");
        y = y+30;
        cursor(y);
      } 
    }
  }  
  print();
}

//Wrap function ***************************************
function wrapText(ctx, text, cw, maxWidth) {
  var words = text.split(" ");
  var line = "";
  var lines = new Array();
  var next = 0;
  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + " ";
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;
    if(testWidth > maxWidth) {
      lines[next] = line;
      line = words[n] + " ";
      next++;
    }
    else {
      line = testLine;
    }
  }
  //The last line
  lines[next] = line;
  return lines;
}

//Load function ***********************************
window.onload = function() {
  var c = document.createElement('canvas');
  var ctrx = c.getContext('2d');
  var cw = c.width = 775;
  var maxWidth = 725;
  
  rn = Math.floor(Math.random()*4);
  
  //Randomly selected text
  var text = "It’s here. It’s time to unleash your inner prowess, gather gasps, dazzle the crowds and walk away with the fame.  There is no talent unworthy of recognition and at Breeze ’16 you can click, write, debate, design, sing, dance, construct or program yourself to glory. The curtain will rise and the music will play, the spotlight will shine and the haze will fade. This is your moment to unleash your inner Cobain, Picasso, Jackson or Rowling. At Shiv Nadar University’s annual Inter-College-Sports-Techno-Cultural fest, we give you the chance to do it all.  Shiv Nadar University is an international, multidisciplinary research university. The University’s mission is to develop and educate the leaders of tomorrow; to support research, scholarly and creative endeavors that contribute to the creation of new knowledge. Located on a 286 acre campus in India’s National Capital Region, the University offers undergraduate, post-graduate and doctoral programs in a range of disciplines. The University is a private philanthropic institution established by the Shiv Nadar Foundation in 2011. SNU has been setup with the vision of becoming one of the best universities in the world-India’s very own Ivy League  At Breeze ’16 we take you into virtual reality, letting you delve deep into the action-packed world of video gaming. Shining computer screens and gaming consoles are the rulers of today. This year, we show you how to bring those moments in front of your screens to life. Rescue the princess with Mario, and save the world with COD, race against speed itself with NFS. Brain and brawn combine to put you on the throne of this virtual reality. Challenge yourself. See you at Breeze'16 4th-6th November!";
  ctrx.font = 'normal 20px monospace';
  ctrx.textAlign = 'left';
  ctrx.textBaseline = 'top';
  ctrx.fillStyle = '#3f3';
  ctrx.strokeStyle = 'rgba(0, 0, 0, .3)';
  ctrx.shadowColor = '#3f3';
  var paragraph = new Array();
  paragraph = wrapText(ctrx, text, cw, maxWidth);
  var total = paragraph.length;
  
  //Dynamic height
  var ch = c.height = 42+(30 * (total+1));
  var x = (cw - maxWidth) / 2;
  var y = 20;
  var ctx = c.getContext('2d');
  ctx.font = 'normal 20px monospace';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#3f3';
  ctx.strokeStyle = 'rgba(0, 0, 0, .3)';
  ctx.shadowColor = '#3f3';
  document.getElementById("div").appendChild(c);
  typeIt(ctx, x, y, ch, paragraph, 0);
};