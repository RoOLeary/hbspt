// CTA Section

jQuery(document).ready(function(){
  jQuery( 'a#gotchuck' ).on( 'click', function ( e ) {
    e.preventDefault();
    jQuery.ajax( {
      // Grab a random joke from the Chuck Norris APO
      url: 'https://api.chucknorris.io/jokes/random',
	       success: function ( data ) {
          jQuery( '.cta-left' ).text( data.value );
      },
      cache: false
    } );
  } );
} );


