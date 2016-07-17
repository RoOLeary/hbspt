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
              jQuery('<li data-filter="'+ data.i + '"><img src='+ data.poster + ' />').append(
                jQuery('<article>').append(
                    jQuery('<h5 class="title">' + data.title +'<span class="year">('+ data.year +')</span></h5><small class="genre">Genre: '+ data.genre +'</small><small class="type">Genre: '+ data.type +'</small>').append()
        
            )));
        }); 
    })
  }});

jQuery(document).ready(function(){

  var options = {
  animationDuration: 0.5, //in seconds
    filter: 'all', //Initial filter
      callbacks: { 
        onFilteringStart: function() { },
        onFilteringEnd: function() { },
        onShufflingStart: function() { },
        onShufflingEnd: function() { },
        onSortingStart: function() { },
        onSortingEnd: function() { }
      },
      delay: 0, //Transition delay in ms
      delayMode: 'progressive', //'progressive' or 'alternate'
      easing: 'ease-out',
      filterOutCss: { //Filtering out animation
        opacity: 0,
        transform: 'scale(0.5)'
        },
      filterInCss: { //Filtering in animation
        opacity: 0,
        transform: 'scale(1)'
      },
      layout: 'sameSize', //See layouts
      selector: '.filtr-container',
      setupControls: true 
  } 
  //You can override any of these options and then call...
  var filterizd = jQuery('.filtr-container').filterizr(options);
  //If you have already instantiated your Filterizr then call...
  filterizd.filterizr('setOptions', options);
});

