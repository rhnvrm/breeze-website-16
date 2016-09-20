/* Window Draggable */
$( ".window" ).draggable({ cancel: ".window-content,input,textarea" });

$(function () {
  
  var $button = $('#finder');
  var $container = $('.window');
  
  var buttonHeight = $button.height();
  var buttonWidth = $button.width();
  
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
});