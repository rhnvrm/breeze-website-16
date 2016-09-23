/* Window Draggable */
$( ".window" ).draggable({ cancel: ".window-content,input,textarea", containment: "parent" });



function attach_button_with_window(button, container){

	var $button = $(button);
  var $container = $(container);

	var buttonHeight = $button.height();
  var buttonWidth = $button.width();
  
  $(container).find(".close").on('click', function(){
  	$(container).toggleClass('hidden');
  });

  $(container).find(".minify").on('click', function(){
  	$(container).toggleClass('hidden');
  });

  $button.on('click', function () {
    
    var buttonOffset = $button.offset();
    var containerOffset = $container.offset();
    
    var diffX = containerOffset.left - buttonOffset.left - buttonWidth*0.5;
    var diffY = containerOffset.top - buttonOffset.top - buttonHeight*0.5;
    
    var origin = -diffX + 'px ' + -diffY + 'px';
    
    $container
        .css({
          transformOrigin: origin  
        })
        .toggleClass('hidden');
        
  });

}

$('.menubar li').hover(

  function() {
    $('.sublist', this).css('visibility', 'visible');

  },

  function() {
    $('.sublist', this).css('visibility', 'hidden');
  }
);


function add_content_from_markdown(id, file){

  var getFileCallback = function(md) {
      // append html (or something like that)
      $(id).html(marked(md));
  };

  var getFile = function(url) {
     $.get(url, getFileCallback);
  };

  getFile('static/markdown/' + file);

}

$(function () {
  
		attach_button_with_window("#cultural_icon", "#cultural");
		attach_button_with_window("#tech_icon", "#tech");
		attach_button_with_window("#sports_icon", "#sports");
		attach_button_with_window("#about_icon", "#about");
    attach_button_with_window("#Music", "#musicevents");
    attach_button_with_window("#Dance", "#danceevents");
    attach_button_with_window("#Dramatics", "#dramaevents");
    attach_button_with_window("#Quizzing", "#quizevents");
    attach_button_with_window("#Literature", "#literaryevents");
    attach_button_with_window("#ArtandCreativity", "#artevents");
    attach_button_with_window("#Business", "#businessevents");
    attach_button_with_window("#MUN", "#munevents");


    add_content_from_markdown("#warfare", "cultural/warfare.md");
    add_content_from_markdown("#burnout", "cultural/burnout.md");

});



var w = $("#tech").innerWidth(),
		h = $("#tech").innerHeight();

var game = new Phaser.Game(w, h, Phaser.AUTO, 'game',
		{ preload: preload, create: create, update: update, render: render });

var slashes,
		points = [];	
 
function preload() {

	game.load.image("background", "static/images/fruitNinjaBG.png");

}


function create() {

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.tileSprite(0, 0, w, h, 'background');
	slashes = game.add.graphics(0, 0);
}

function update() {

	points.push({
			x: game.input.x,
			y: game.input.y
		});

	points = points.splice(points.length-10, points.length);


	slashes.clear();
	slashes.beginFill(0xFFFFFF);
	slashes.alpha = .5;
	slashes.moveTo(points[0].x, points[0].y);
	for (var i=1; i<points.length; i++) {
		slashes.lineTo(points[i].x, points[i].y);
	} 
	slashes.endFill();

}


function render() {
}

(function() {
  'use strict';

  var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    img = new Image(),
    currentFrame = 0,
    totalFrame = 10,
    offset = .01,
    width,
    height,
    imgData,
    data,
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  window.requestAnimationFrame = requestAnimationFrame;

  img.src = 'static/images/breeze-white-small.png';
  img.onload = function() {
    init();
    glitchAnimation();
  };

  var init = function() {
    canvas.width = width = img.width*1.5;
    offset = width * offset;
    canvas.height = height = ~~(img.height * (width - offset * 2) / img.width);
    document.querySelector('.glitch-image').style.width = width + 'px';
    document.querySelector('.glitch-image').style.height = height + 'px';
  }.bind(this);


  var glitchAnimation = function() {
    if (!(currentFrame % totalFrame) || currentFrame > totalFrame) {

      clearCanvas();

      ctx.drawImage(img,
        0,
        0,
        img.width,
        img.height,
        offset,
        0,
        width - offset * 2,
        height);
      imgData = ctx.getImageData(0, 0, width, height);

      imgData = pixelProcessor(imgData, 4, pixelCooler);

      ctx.putImageData(imgData, 0, 0);

      currentFrame = 0;
    }

    if (currentFrame === randInt(0, totalFrame)) {

      imgData = pixelProcessor(imgData, 1, pixelFlick);

      ctx.putImageData(imgData, 0, 0);

      drawGlitch(width, height, randInt(3, 10), glitchBlock);

      drawGlitch(width, height, randInt(3, 30), glitchLine);
    }

    currentFrame++;

    window.requestAnimationFrame(glitchAnimation);

  };

  var pixelFlick = function(i, d) {
    d[i] = d[i + 16];
  };

  var pixelCooler = function(i, d) {
    d[i] = 1;
    d[i + 1] += randInt(2, 5);
    d[i + 2] *= randInt(1, 3) + 8;
  };

  var glitchBlock = function(i, x, y) {
    if (i > 3) {
      var spliceHeight = 1 + randInt(0, 10);

      ctx.drawImage(canvas,
        x,
        y,
        x,
        spliceHeight,
        randInt(0, x),
        y,
        randInt(x, width),
        spliceHeight);
    }
  };

  var glitchLine = function(i, x, y) {
    var spliceHeight = 1 + randInt(1, 50);

    ctx.drawImage(canvas,
      offset,
      y,
      width - offset * 2,
      spliceHeight,
      1 + randInt(0, offset * 2),
      y + randInt(0, 10),
      width - offset,
      spliceHeight);
  };


  var pixelProcessor = function(imageData, step, callback) {
    var data = imageData.data || [],
      step = step * 4 || 4;

    if (data.length) {
      var rgb = [];

      for (var i = 0; i < data.length; i += step) {
        callback && callback(i, data);
      }

      return imageData;
    } else {
      return imageData;
    }
  };

  var drawGlitch = function(width, height, amount, callback) {
    for (var i = 0; i < (amount || 10); i++) {
      var x = Math.random() * width + 1,
        y = Math.random() * height + 1;

      callback(i, x, y);
    }
  };

  var randInt = function(a, b) {
    return ~~(Math.random() * (b - a) + a);
  };

  var clearCanvas = function() {
    ctx.clearRect(0, 0, width, height);
  };
})();
