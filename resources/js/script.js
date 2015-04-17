$(document).ready(function(){
    
/***  Initiate scrolling feature for site  ***/
    $(".main").onepage_scroll({
        sectionContainer: "section",
        pagination: false,
        responsiveFallback: 600,
        loop: true
    });
    
/***  Code to handle icon mouse over events  ***/
    icons = $(".icon");
    iconTexts = ["HTML5", "CSS3", "JAVASCRIPT", "JQUERY", "BOOTSTRAP", "SASS", "PHP", "GITHUB"];
    
    //Assign each icon their text
    $(icons).each(function(index, element){
        element.text = iconTexts[index];
    });
    
    //Assign event handlers for each icon
    $(icons).each(function(index, element){
        
        $(this).on("mouseenter", function(){
            $("#iconText").css("visibility", "visible");
            $("#iconText").text(element.text);
        });
        
        $(this).on("mouseout", function(){
            $("#iconText").css("visibility", "hidden");
        });
        
    });
    
});
		
	
