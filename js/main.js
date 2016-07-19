 
var Menu = {
  
  el: {
    ham: $('.menu-icon'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
  }
};

Menu.init();


//OTHER CODE

$( document ).ready(function() {
      $(".menu-icon").click(function () {
      $(".header-menu").toggle(500);
    })

  $(".menu-list__item").click(function () {
    $(this).find(".menu-sub-list").toggle(100);
  })

  $(document).ready(function() {
   
    $("#owl-example").owlCarousel({
   
        pagination: false,
        autoPlay : 5000,
        singleItem:true
   
    });
   
  });

  (function($) {
  $(function() {

    $('input, select').styler();

  });
  })(jQuery);



  $(".events-categories__select").change(function(){
      
      $('.events-list__item').hide();  

      if($(this).val() == "all") {
         
         $('.events-list__item').slideDown();

      } else if($(this).val() == "concerts") {
         
         $('.concert').slideDown();

      } else if($(this).val() == "theatre") {
         
         $('.theatre').slideDown();

      } else if($(this).val() == "nfl") {
         
         $('.nfl').slideDown();

      } else if($(this).val() == "mlb") {
         
         $('.mlb').slideDown();

      } else if($(this).val() == "nba") {
         
         $('.nba').slideDown();

      } else if($(this).val() == "nhl") {
         
         $('.nhl').slideDown();

      } else  if($(this).val() == "ncaa") {
         
         $('.ncaa').slideDown();

      }
  });

});




function initMap() {
        var mapDiv = document.getElementById('google-map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 40.71, lng: -74.05},
            zoom: 8,
            styles: [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    }
]
        });
      }