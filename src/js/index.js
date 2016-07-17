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


// Calling in the data from data.json, assigning to temporary objects

jQuery.ajax({
  type: 'GET', 
    url: "../src/js/data/data.json",
    dataType: "json",
    success: function (data) {
      //console.log(data);
      jQuery.each(data, function (key, data) {
        //console.log(key); 
        jQuery.each(data, function (index, data) {
            //console.log(data);
            jQuery('ul').append(
              jQuery('<li><img src='+ data.poster + ' />').append(
                jQuery('<article>').append(
                    jQuery('<h5 class="title">' + data.title +'<span class="year">('+ data.year +')</span></h5><small class="genre">Genre: '+ data.genre +'</small>').append()
        
            )));
        }); 
    })
  }});


