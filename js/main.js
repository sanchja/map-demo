$(function() {
    
    //$(".region1").on('click', function(){
        //alert("zoom in on Region");
        
//        $(".gregory_byrnes").fadeToggle();
//        $(".James_A_Gill").fadeToggle();
        
        
//       $("#card").flip({
//  trigger: 'manual'
//});

/******* Zoomerang Setup ************
        
        Zoomerang.listen('.region1')
        minWidth: 600
        
*************************************/  
        
/******* Zoom To ************
        
        zoom.to({
    $('this');
  });
        
/*************************************/        
    
        
//    $(".gregory_byrnes").click(function() {
//        $(this).animate({
//            rotateY: "+=" + (Math.PI) / 2
//        }, 500, function() {
//            $(this).toggleClass('flipped'); // toggle class while the flip is in the middle
//        }).animate({
//            rotateY: "+=" + (Math.PI) / 2
//        }, 500);
//    });
    
    document.querySelector( '.region1' ).addEventListener( 'click', function( event ) {
            event.preventDefault();
            $('.usa_map').toggleClass('animated fadeOut');
                $(".gregory_byrnes").fadeToggle();
                $(".James_A_Gill").fadeToggle();
            zoom.to({ element: event.target });
        } );
        
         document.querySelector( '.zoom_samples' ).addEventListener( 'click', function( event ) {
            event.preventDefault();
            $('.usa_map').toggleClass('animated fadeOut');
           // $(".gregory_byrnes").fadeToggle();
   // $(".James_A_Gill").fadeToggle();
            zoom.to({ element: event.target });
        } );
        
//        $('.gregory_byrnes').on('click',function(){
//            $(this).addClass('animated slideInRight');
//        })
//        
//        $('.James_A_Gill').on('click',function(){
//            $(this).addClass('animated slideInRight');
//        })
        
       
	
});
    
    