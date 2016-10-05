/* Window Draggable */
$( ".window" ).draggable({ cancel: ".window-content,input,textarea", containment: "parent" });
//var openWin = 0;


function attach_button_with_window(button, container){

	var $button = $(button);
  var $container = $(container);

	var buttonHeight = $button.height();
  var buttonWidth = $button.width();
  
  
  $(container).find(".close").on('click', function(){
  	//openWin=0;
  	$(container).toggleClass('hidden');
  	
  });

  $(container).find(".minify").on('click', function(){
  	//openWin=0;
  	$(container).toggleClass('hidden');
  	
  });
  

  $button.on('click', function () {
    //openWin=1;
    var buttonOffset = $button.offset();
    var containerOffset = $container.offset();
    
    var diffX = containerOffset.left - buttonOffset.left - buttonWidth*0.5;
    var diffY = containerOffset.top - buttonOffset.top - buttonHeight*0.5;
    
    var origin = -diffX + 'px ' + -diffY + 'px';
    //if(openWin===1){

    $('.window').addClass('hidden');

    $container
        .css({
          transformOrigin: origin  
        })
        .toggleClass('hidden');
        //}
  	//openWin=0;
  });

}

function attach_menubutton_with_window(button, container){

	var $button = $(button);
  var $container = $(container);

	var buttonHeight = $button.height();
  var buttonWidth = $button.width();
  
  $button.on('click', function () {
    
    var buttonOffset = $button.offset();
    var containerOffset = $container.offset();
    
    var diffX = containerOffset.left - buttonOffset.left - buttonWidth*0.5;
    var diffY = containerOffset.top - buttonOffset.top - buttonHeight*0.5;
    
    var origin = -diffX + 'px ' + -diffY + 'px';
    // var x = document.getElementsByClassName("window");
    // x.zIndex-=1;
    $container.zIndex+=1;
    
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

$('.fillercard').on('mouseover', function () {
  $('.fillercard').toggleClass('flipped');
});


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
    attach_menubutton_with_window("#menuitem_cultural", "#cultural");
	attach_button_with_window("#tech_icon", "#tech");
    attach_menubutton_with_window("#menuitem_technical", "#tech");
    attach_button_with_window("#sports_icon", "#sports");
    attach_menubutton_with_window("#menuitem_sports", "#sports");
	attach_button_with_window("#about_icon", "#about"); 
    attach_menubutton_with_window("#menuitem_about", "#about");
    attach_button_with_window("#campus_icon", "#campus_amb");
    attach_menubutton_with_window("#menuitem_campamba", "#campus_amb");
    attach_button_with_window("#transport_icon", "#transport");
    attach_menubutton_with_window("#menuitem_transport", "#transport");
    attach_button_with_window("#accomodation_icon", "#accomodation");
    attach_menubutton_with_window("#menuitem_accomodaton", "#accomodation");
    attach_button_with_window("#Music", "#culturalevents");
    attach_menubutton_with_window("#menuitem_music", "#musicevents");
    attach_button_with_window("#Dance", "#danceevents");
    attach_menubutton_with_window("#menuitem_dance", "#danceevents");
    attach_button_with_window("#Dramatics", "#dramaevents");
    attach_menubutton_with_window("#menuitem_drama", "#dramaevents");
    attach_button_with_window("#Quizzing", "#quizevents");
    attach_menubutton_with_window("#menuitem_quiz", "#quizevents");
    attach_button_with_window("#Literature", "#literaryevents");
    attach_menubutton_with_window("#menuitem_literary", "#literaryevents");
    attach_button_with_window("#ArtandCreativity", "#artevents");
    attach_menubutton_with_window("#menuitem_art", "#artevents");
    attach_button_with_window("#Business", "#businessevents");
    attach_menubutton_with_window("#menuitem_business", "#businessevents");
    attach_button_with_window("#MUN", "#munevents");
    attach_menubutton_with_window("#menuitem_mun", "#munevents");
  
    attach_button_with_window("#menuitem_hackathon", "#hackathon");
    attach_button_with_window("#menuitem_mathsoc", "#mathsoc");
    attach_button_with_window("#menuitem_civilevents", "#civilevents");
    attach_button_with_window("#menuitem_roboticevents", "#roboticevents");
    attach_button_with_window("#menuitem_saeevents", "#saeevents");
    attach_button_with_window("#menuitem_mechanicalevents", "#mechanicalevents");
    attach_button_with_window("#menuitem_asme", "#asme");
  
    add_content_from_markdown("#warfare", "cultural/warfare.md");
    add_content_from_markdown("#burnout", "cultural/burnout.md");
    add_content_from_markdown("#aagaz", "cultural/aagaaz.md");
    add_content_from_markdown("#pacman", "cultural/pac_man.md");
    add_content_from_markdown("#acoustyx", "cultural/acoustyx.md");
    add_content_from_markdown("#ME", "cultural/Crescendo.md");
    add_content_from_markdown("#nostringsattached", "cultural/nsa.md");
    add_content_from_markdown("#fps", "cultural/fps.md");
    add_content_from_markdown("#madhat", "cultural/mad_hat.md");
    add_content_from_markdown("#reporto", "cultural/report_repertoire.md");
    add_content_from_markdown("#snipthrusnaps", "cultural/snip-thru-snaps.md");
    add_content_from_markdown("#tbd", "cultural/tbd_collab.md");
    add_content_from_markdown("#fashionfiesta", "cultural/cosplay.md");
    add_content_from_markdown("#logokiwar", "cultural/logo_ki_war.md");
    add_content_from_markdown("#alliedcabinet", "cultural/callingforduty.md");
    add_content_from_markdown("#hack", "tech/Hackathon.md");
    add_content_from_markdown("#puzzlemaster", "tech/puzzlemaster.md");
    add_content_from_markdown("#spbridge", "tech/spbridge.md");
    add_content_from_markdown("#autocad", "tech/autocad.md");
    add_content_from_markdown("#linefollow", "tech/linefollow.md");
    add_content_from_markdown("#deathrace", "tech/deathrace.md");
    add_content_from_markdown("#mindyourownbusiness", "tech/mindyourownbusiness.md");
    add_content_from_markdown("#demolitionman", "tech/DemolitionMan.md");
    add_content_from_markdown("#designsmackdown", "tech/DesignSmackdown.md");
    add_content_from_markdown("#diyhard", "tech/diyhard.md");
    });



var w = $("#tech").innerWidth(),
		h = $("#tech").innerHeight();

var game = new Phaser.Game(w, h, Phaser.AUTO, 'game',
		{ preload: preload, create: create, update: update, render: render });

var slashes,
		points = [];	
 
function preload() {

	game.load.image("background", "static/images/fruitNinjaBG2.png");
	
	game.load.image("pineapple","static/images/fruit/pineapple.png");
	game.load.image("apple","static/images/fruit/apple.png");
	game.load.image("peach","static/images/fruit/peach.png");
	game.load.image("kiwi","static/images/fruit/kiwi.png");
	game.load.image("pear","static/images/fruit/pear.png");
	game.load.image("lemon","static/images/fruit/lemon.png");
	game.load.image("orange","static/images/fruit/orange.png");
	
	game.load.image("pineappleslice","static/images/fruit/pineappleslice.png");
	game.load.image("appleslice","static/images/fruit/appleslice.png");
	game.load.image("peachslice","static/images/fruit/peachslice.png");
	game.load.image("kiwislice","static/images/fruit/kiwislice.png");
	game.load.image("pearslice","static/images/fruit/pearslice.png");
	game.load.image("lemonslice","static/images/fruit/lemonslice.png");
	game.load.image("orangeslice","static/images/fruit/orangeslice.png");
	
	game.load.image("splash","static/images/fruit/splash.png");
	

}


function create() {

	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	
	game.add.tileSprite(0, 0, w, h, 'background');
	
	var fruit = new Array();
	var slices ={"pineapple": 0, "apple": 1, "peach": 2, "kiwi": 3, "pear": 4, "lemon": 5, "orange": 6, 0: "pineappleslice", 1: "appleslice", 2: "peachslice", 3: "kiwislice", 4: "pearslice", 5: "lemonslice", 6: "orangeslice"};
	
	fruit[0] = game.add.tileSprite(50, 105, 65, 74, "pineapple");
	fruit[1] = game.add.tileSprite(208, 40, 63, 84, "apple");
	fruit[2] = game.add.tileSprite(398, 56, 65, 57, "peach");
	fruit[3] = game.add.tileSprite(548, 115, 65, 63, "kiwi");
	fruit[4] = game.add.tileSprite(114, 268, 59, 87, "pear");
	fruit[5] = game.add.tileSprite(302, 250, 65, 65, "lemon");
	fruit[6] = game.add.tileSprite(482, 275, 65, 65, "orange");
	slashes = game.add.graphics(0, 0);
	
	var hackathonDiv = new Array();
	hackathonDiv[0] = document.getElementById("hackathon");
	hackathonDiv[1] = document.getElementById("mathsoc");
	hackathonDiv[2] = document.getElementById("civilevents");
	hackathonDiv[3] = document.getElementById("roboticevents");
	hackathonDiv[4] = document.getElementById("saeevents");
	hackathonDiv[5] = document.getElementById("mechanicalevents");
	hackathonDiv[6] = document.getElementById("asme");
	
	var emitter = new Array();
	for(var j = 0; j<7;j++){
		emitter[j] = game.add.emitter(0, 0, 100);
		emitter[j].makeParticles(slices[j]);
		emitter[j].gravity = 300;
		emitter[j].setYSpeed(-400,400);
	}
	
	for(var i = 0; i < 7; i++){
	fruit[i].inputEnabled = true;
	fruit[i].events.onInputOver.add(over, this);
	}
		
	function over(item) {
		emitter[slices[item.key]].x = item.x;
		emitter[slices[item.key]].y = item.y;
		emitter[slices[item.key]].start(true, 2000, null, 2);
		//render markdown here
//		if($(hackathonDiv[slices[item.key]]) != null){
//			
//				$(hackathonDiv[slices[item.key]]).find(".close").on('click', function(){
//				$(hackathonDiv[slices[item.key]]).toggleClass('hidden');
//		});
//		}
		setTimeout(function(){
		$(hackathonDiv[slices[item.key]]).toggleClass('hidden');
	},1000);

   	}
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

  img.src = 'static/images/breeze-white-small-shadow.png';
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

      //imgData = pixelProcessor(imgData, 2, pixelCooler);

      ctx.putImageData(imgData, 0, 0);

      currentFrame = 0;
    }

    if (currentFrame === randInt(0, totalFrame)) {

      //imgData = pixelProcessor(imgData, 1, pixelFlick);

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
