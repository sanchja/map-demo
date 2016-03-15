$(function() {
    

        
    var northeast = function(){ 
                        $("#richard_scatoni").fadeToggle();
                        $("#kim_fearNE").fadeToggle();
                        $("#greg_byrnesNE").fadeToggle();
                        $("#james_gillNE").fadeToggle();
                        $('#gary_hinds').fadeToggle();
                        $('#george_evancho').fadeToggle();
        
    }
    
    var checkflip = function(){
                 if ($('#f0_card.flip').length == 1){
        /* return true */$('#f0_card').toggleClass();
        }
    
    }
    var checkflip1 = function(){
                 if ($('#f1_card.flip').length == 1){
        /* return true */$('#f1_card').toggleClass();
        }
    
    }
    var checkflip2 = function(){
                 if ($('#f2_card.flip').length == 1){
        /* return true */$('#f2_card').toggleClass();
        }
    
    }
    var checkflip3 = function(){
                 if ($('#f3_card.flip').length == 1){
        /* return true */$('#f3_card').toggleClass();
        }
    
    }
    var checkflip4 = function(){
                 if ($('#f4_card.flip').length == 1){
        /* return true */$('#f4_card').toggleClass();
        }
    
    }
    var checkflip5 = function(){
                 if ($('#f5_card.flip').length == 1){
        /* return true */$('#f5_card').toggleClass();
        }
    
    }
        
    
        $('#richard_scatoni').on('mousedown',function(){
            $('#f0_card').toggleClass('flip');
                
        })
        
        $('#kim_fearNE').on('mousedown',function(){
            $('#f1_card').toggleClass('flip');
        })
        
        $('#greg_byrnesNE').on('mousedown',function(){
            $('#f2_card').toggleClass('flip');
        })
        
        $('#james_gillNE').on('mousedown',function(){
            $('#f3_card').toggleClass('flip');
            
        })
        
        $('#gary_hinds').on('mousedown',function(){
            $('#f4_card').toggleClass('flip');
            
        })
        $('#george_evancho').on('mousedown',function(){
            $('#f5_card').toggleClass('flip');
            
        })

    
    document.querySelector( '.north_east' ).addEventListener('mousedown',function(event){
        event.preventDefault();
        zoom.to({ element: event.target, padding:200, callback: northeast(), callback: checkflip(), callback:checkflip1(), callback:checkflip2(), callback:checkflip3(), callback:checkflip4(), callback:checkflip5()
            
        });
    
    
    document.querySelector( '.west_region' ).addEventListener('mousedown', function(event){
        event.preventDefault();
        zoom.to({ element: event.target, padding:100,                                           
                });
            
        });
    

//    
//    
    document.querySelector( '.south_region' ).addEventListener( 'mousedown', function( event ) {
            event.preventDefault();
            //$('.usa_map').toggleClass('animated fadeOut');
            zoom.to({ element: event.target });
        } );
    
    document.querySelector( '#ne' ).addEventListener( 'mousedown', function( event ) {
            event.preventDefault();            
            zoom.out();
        }); 
    
    $( "#richard_scatoni" ).draggable();
    
    //$( "#kim_fearNE" ).draggable();
    
   

    
})
   
})
    
    