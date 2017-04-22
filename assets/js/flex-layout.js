
// IIFE - Immediately Invoked Function Expression
(function ($, window, document) {
    $(function () {
        // The DOM is ready!
        if ($(".flex-container").length > 0) {
            var $flexContainers = $(".flex-container");
            $flexContainers.each(setEliment);         
        }

    });

    // The rest of the code goes here!

    var setEliment = function(){
        var $flexContainer = $(this),
            _flexFromAttribute = $flexContainer.data('flex'),
            _layout = $flexContainer.data('layout'),
            _alignmentX = $flexContainer.data('data-align-x'),
            _alignmentY = $flexContainer.data('data-align-y');
            $chlidrens = $flexContainer.children();  


        $flexContainer.css({display: 'flex'});  
        
        $chlidrens.each(setFlexAttributes);
    };

    var setFlexAttributes = function(){
        var $element = $(this),
            _defaultFlex = 1;
            var _flexFromAttribute = $element.data('flex');
            
            if(_flexFromAttribute !== undefined){
                _defaultFlex = _flexFromAttribute * 100;
                $element.css({"flex" : _defaultFlex});
            }
    };

}(window.jQuery, window, document));
  // The global jQuery object is passed as a parameter