$(function() {
    
     document.querySelector( '.page-body' ).addEventListener( 'mousedown', function( event ) {
            event.preventDefault();
            zoom.to({ element: event.target });
        } );
        
        document.querySelector( '.usa_map' ).addEventListener( 'mousedown', function( event ) {
            event.preventDefault();
            zoom.to({ element: event.target });
        } );
        
    
    document.querySelector( '.north_east' ).addEventListener( 'mousedown', function( event ) {
            event.preventDefault();
                //$(".region_titles");
                $("#richard_scatoni").fadeToggle();
                $("#kim_fearNE").fadeToggle();
                $("#greg_byrnesNE").fadeToggle();
                $("#james_gillNE").fadeToggle();
            zoom.to({ element: event.target });
        } );
        
//         document.querySelector( '.zoom_samples' ).addEventListener( 'mousedown', function( event ) {
//            event.preventDefault();
//            $('.usa_map').toggleClass('animated fadeOut');
//            zoom.to({ element: event.target });
//        } );

    document.querySelector( '.west_region' ).addEventListener( 'mousedown', function( event ) {
            event.preventDefault();
            //$('.usa_map').toggleClass('animated fadeOut');
            zoom.to({ element: event.target });
        } );
    
    
    document.querySelector( '.south_region' ).addEventListener( 'mousedown', function( event ) {
            event.preventDefault();
            //$('.usa_map').toggleClass('animated fadeOut');
            zoom.to({ element: event.target });
        } );
    
});
    
    