$(function() {
    

        
    var northeast = function(){ 
                        $("#richard_scatoni").fadeToggle();
                        $("#kim_fearNE").fadeToggle();
                        $("#greg_byrnesNE").fadeToggle();
                        $("#james_gillNE").fadeToggle();
                        }
    
    
        $('#richard_scatoni').on('click',function(){
            $('#f0_card').toggleClass('flip');
        })
        
        $('#kim_fearNE').on('click',function(){
            $('#f1_card').toggleClass('flip');
        })
        
        $('#greg_byrnesNE').on('click',function(){
            $('#f2_card').toggleClass('flip');
        })
        
        $('#james_gillNE').on('click',function(){
            $('#f3_card').toggleClass('flip');
        })

    
    document.querySelector( '.north_east' ).addEventListener('click',function(event){
        event.preventDefault();
        zoom.to({ element: event.target, padding:100, callback: northeast()                                          
                });
            
        });
    
    
    document.querySelector( '.west_region' ).addEventListener('click',function(event){
        event.preventDefault();
        zoom.to({ element: event.target, padding:100, callback:function(){ 
//                        $("#richard_scatoni").fadeToggle();
//                        $("#kim_fearNE").fadeToggle();
//                        $("#greg_byrnesNE").fadeToggle();
//                        $("#james_gillNE").fadeToggle();
                        }                                           
                });
            
        });
    

    // Amount of empty space around zoomed element
    //padding: 20,
    

    // Function to call once zooming completes
    //callback: function() { /* ... */ }
        
        
    
//        
//    
//    document.querySelector( '.north_east' ).addEventListener( 'mousedown', function( event ) {
//            event.preventDefault();
//                //$(".region_titles");
//                $("#richard_scatoni").fadeToggle();
//                $("#kim_fearNE").fadeToggle();
//                $("#greg_byrnesNE").fadeToggle();
//                $("#james_gillNE").fadeToggle());
//            zoom.to({ element: event.target }); 
//        } );
//    
    
//        
////         document.querySelector( '.zoom_samples' ).addEventListener( 'mousedown', function( event ) {
////            event.preventDefault();
////            $('.usa_map').toggleClass('animated fadeOut');
////            zoom.to({ element: event.target });
////        } );
//
//    document.querySelector( '.west_region' ).addEventListener( 'mousedown', function( event ) {
//            event.preventDefault();
//            //$('.usa_map').toggleClass('animated fadeOut');
//            zoom.to({ element: event.target });
//        } );
//    
//    
//    document.querySelector( '.south_region' ).addEventListener( 'mousedown', function( event ) {
//            event.preventDefault();
//            //$('.usa_map').toggleClass('animated fadeOut');
//            zoom.to({ element: event.target });
//        } );
    
    document.querySelector( '#ne' ).addEventListener( 'mousedown', function( event ) {
            event.preventDefault();            
            zoom.out();
        }); 
    
    $( "#richard_scatoni" ).draggable();
    
    //$( "#kim_fearNE" ).draggable();
    
});
    
    