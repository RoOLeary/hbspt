// CTA Section

jQuery(document).ready(function(){
  jQuery( 'a#gotchuck' ).on( 'click', function ( e ) {
    e.preventDefault();
    jQuery.ajax( {
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
            jQuery('ul').append('<li><img src='+ data.poster + ' /><article><h5 class="title">' + data.title +'<span class="year">('+ data.year +')</span></h5><small>Genre: '+ data.genre +'</small></article></li>')
        }); 
    })
  }});
