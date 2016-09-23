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

$(function () {
  
	attach_button_with_window("#cultural_icon", "#cultural");
	attach_button_with_window("#tech_icon", "#tech");
	attach_button_with_window("#sports_icon", "#sports");
	attach_button_with_window("#about_icon", "#about");
    
  
});



var w = $("#tech").innerWidth(),
		h = $("#tech").innerHeight();

var game = new Phaser.Game(w, h, Phaser.AUTO, 'game',
		{ preload: preload, create: create, update: update, render: render });

var slashes,
		points = [];	
 
function preload() {

	game.load.image("background", "static/images/fruit_demo.png");

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
