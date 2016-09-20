/* Window Draggable */
$( ".window" ).draggable({ cancel: ".window-content,input,textarea" });
$( ".window" ).toggleClass('hidden');


function attach_button_with_window(button, container){

	var $button = $(button);
  var $container = $(container);

	var buttonHeight = $button.height();
  var buttonWidth = $button.width();
  
  $(container).find(".close").on('click', function(){
  	$(container).toggleClass('hidden');
  });

  $button.on('click', function () {
    
    var buttonOffset = $button.offset();
    var containerOffset = $container.offset();
    
    var diffX = containerOffset.left - buttonOffset.left - buttonWidth*0.5;
    var diffY = containerOffset.top - buttonOffset.top - buttonHeight*0.5;
    
    var origin = -diffX + 'px ' + -diffY + 'px';
    
    console.log(origin);
    
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