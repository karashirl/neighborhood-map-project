/*
 Project Name: Interactive Neighborhood Map - Udacity Front-End Developer Nanodegree
 Description:  Use Knockout JS, Google Maps and Foursquare APIs to display and filter popular attractions on a map of the Patterson Park Neighborhood in Baltimore, MD.
 Author:       Kara Anderson
 Author URI:   karashirl.github.io
 Date:         8/28/2016
*/

var map;

var locationData = [
    {
        name : 'BistroRx',
        lat : 39.292048,
        lng : -76.576056,
        address1 : '2901 E Baltimore St',
        address2 : 'Baltimore, MD 21224',
        type : 'Food'
    },
    {
        name : 'The Chasseur',
        lat : 39.284675,
        lng : -76.569033,
        address1 : '3328 Foster Ave',
        address2 : 'Baltimore, MD 21224',
        type : 'Food'
    },
    {
        name : 'Dangerously Delicious Pies',
        lat : 39.279881,
        lng : -76.575532,
        address1 : '2839 O\'Donnell St',
        address2 : 'Baltimore, MD 21224',
        type : 'Food'
    },
    {
        name : 'Gnocco',
        lat : 39.285848,
        lng : -76.56536,
        address1 : '3734 Fleet Street',
        address2 : 'Baltimore, MD 21224',
        type : 'Food'
    },
    {
        name : 'Little Morocco Cafe',
        lat : 39.286770,
        lng : -76.569423,
        address1 : '3314 Eastern Ave',
        address2 : 'Baltimore, MD 21224',
        type : 'Food'
    },
    {
        name : 'Matthew\'s Pizzeria',
        lat : 39.286252,
        lng : -76.571885,
        address1 : '3131 Eastern Ave',
        address2 : 'Baltimore, MD 21224',
        type : 'Food'
    },
    {
        name : 'Salt',
        lat : 39.289315,
        lng : -76.586233,
        address1 : '2127 E Pratt St',
        address2 : 'Baltimore, MD 21231',
        type : 'Food'
    },
    {
        name : 'Samos Greek Island Grill',
        lat : 39.276200,
        lng : -76.564520,
        address1 : '3745 Boston St',
        address2 : 'Baltimore, MD 21224',
        type : 'Food'
    },
    {
        name : 'Annabel Lee Tavern',
        lat : 39.285378,
        lng : -76.569711,
        address1 : '601 S Clinton St',
        address2 : 'Baltimore, MD 21224',
        type : 'Bars'
    },
    {
        name : 'Baltimore Taphouse',
        lat : 39.285211,
        lng : -76.574516,
        address1 : '600 S Potomac St',
        address2 : 'Baltimore, MD 21224',
        type : 'Bars'
    },
    {
        name : 'Hudson Street Stackhouse',
        lat : 39.282111,
        lng : -76.578870,
        address1 : '2626 Hudson St',
        address2 : 'Baltimore, MD 21224',
        type : 'Bars'
    },
    {
        name : 'Myth & Moonshine Tavern',
        lat : 39.283264,
        lng : -76.584346,
        address1 : '2300 Boston St',
        address2 : 'Baltimore, MD 21224',
        type : 'Bars'
    },
    {
        name : 'Of Love & Regret',
        lat : 39.280745,
        lng : -76.566988,
        address1 : '1028 S Conkling St',
        address2 : 'Baltimore, MD 21224',
        type : 'Bars'
    },
    {
        name : 'Smaltimore',
        lat : 39.283233,
        lng : -76.580447,
        address1 : '2522 Fait Ave',
        address2 : 'Baltimore, MD 21224',
        type : 'Bars'
    },
    {
        name : 'Snake Hill',
        lat : 39.287051,
        lng : -76.570225,
        address1 : '418 S Clinton St',
        address2 : 'Baltimore, MD 21224',
        type : 'Bars'
    },
    {
        name : 'Cafe Latte\' Da',
        lat : 39.283695,
        lng : -76.592827,
        address1 : '1704 Aliceanna St',
        address2 : 'Baltimore, MD 21231',
        type : 'Coffee & Juice Bars'
    },
    {
        name : 'Corner Juice Bar',
        lat : 39.285156,
        lng : -76.582701,
        address1 : '2400 Fleet St',
        address2 : 'Baltimore, MD 21224',
        type : 'Coffee & Juice Bars'
    },
    {
        name : 'Firehouse Coffee Company',
        lat : 39.280180,
        lng : -76.575723,
        address1 : '1030 S Linwood Ave',
        address2 : 'Baltimore, MD 21224',
        type : 'Coffee & Juice Bars'
    },
    {
        name : 'High Grounds Coffee Roasters',
        lat : 39.286246,
        lng : -76.571368,
        address1 : '3201 Eastern Ave',
        address2 : 'Baltimore, MD 21224',
        type : 'Coffee & Juice Bars'
    },
    {
        name : 'Patterson Perk',
        lat : 39.285901,
        lng : -76.581319,
        address1 : '2501 Eastern Ave',
        address2 : 'Baltimore, MD 21224',
        type : 'Coffee & Juice Bars'
    },
    {
        name : 'Starbucks',
        lat : 39.280804,
        lng : -76.580232,
        address1 : '2400 Boston St #120',
        address2 : 'Baltimore, MD 21224',
        type : 'Coffee & Juice Bars'
    },
    {
        name : 'Canton Crossing Wine & Spirits',
        lat : 39.276305,
        lng : -76.564171,
        address1 : '3831 Boston St',
        address2 : 'Baltimore, MD 21224',
        type : 'Shopping'
    },
    {
        name : 'Chesapeake Wine Co.',
        lat : 39.281150,
        lng : -76.580460,
        address1 : '2400 Boston St #112',
        address2 : 'Baltimore, MD 21224',
        type : 'Shopping'
    },
    {
        name : 'Cloud 9 Boutique',
        lat : 39.281230,
        lng : -76.580312,
        address1 : '2400 Boston St #122',
        address2 : 'Baltimore, MD 21224',
        type : 'Shopping'
    },
    {
        name : 'Dana\'s Boutique',
        lat : 39.2842225,
        lng : -76.5817693,
        address1 : '2400 Fleet St',
        address2 : 'Baltimore, MD 21224',
        type : 'Shopping'
    },
    {
        name : 'Dogma',
        lat : 39.2780312,
        lng : -76.568651,
        address1 : '3600 Boston St',
        address2 : 'Baltimore, MD 21224',
        type : 'Shopping'
    },
    {
        name : 'Old Navy',
        lat : 39.2755156,
        lng : -76.5661053,
        address1 : '3753 Boston St',
        address2 : 'Baltimore, MD 21224',
        type : 'Shopping'
    },
    {
        name : 'Target',
        lat : 39.2748148,
        lng : -76.5683416,
        address1 : '3559 Boston St',
        address2 : 'Baltimore, MD 21224',
        type : 'Shopping'
    },
    {
        name : 'Canton Waterfront Park',
        lat : 39.2772397,
        lng : -76.5756887,
        address1 : '3001 Boston St',
        address2 : 'Baltimore, MD 21224',
        type : 'Recreation'
    },
    {
        name : 'Creative Alliance',
        lat : 39.286736,
        lng : -76.571783,
        address1 : '3134 Eastern Ave',
        address2 : 'Baltimore, MD 21224',
        type : 'Recreation'
    },
    {
        name : 'Du Burns Arena',
        lat : 39.2777761,
        lng : -76.5738148,
        address1 : '3100 Boston St',
        address2 : 'Baltimore, MD 21224',
        type : 'Recreation'
    },
    {
        name : 'Patterson Park Dog Park',
        lat : 39.2883303,
        lng : -76.5762252,
        address1 : 'Patterson Park',
        address2 : 'Baltimore, MD 21224',
        type : 'Recreation'
    },
    {
        name : 'Patterson Park Ice Rink',
        lat : 39.288877,
        lng : -76.5793917,
        address1 : '200 S Linwood Ave',
        address2 : 'Baltimore, MD 21224',
        type : 'Recreation'
    },
    {
        name : 'Patterson Park Pagoda',
        lat : 39.290002,
        lng : -76.583599,
        address1 : 'Patterson Park',
        address2 : 'Baltimore, MD 21224',
        type : 'Recreation'
    },
    {
        name : 'Patterson Park Pool',
        lat : 39.2896978,
        lng : -76.5798344,
        address1 : '148 S Linwood Ave',
        address2 : 'Baltimore, MD 21224',
        type : 'Recreation'
     }
];

var filters = ['All', 'Food', 'Bars', 'Coffee & Juice Bars', 'Shopping', 'Recreation'];

// Render Google Map
function initMap() {
    'use strict';
    var mapContainer = document.getElementById('map');
    
    // Google Map styles from snazzymaps.com
    var styles = [
        {'featureType':'all','elementType':'labels.text.fill','stylers':[{'saturation':36},{'color':'#000000'},{'lightness':40}]},
        {'featureType':'all','elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#000000'},{'lightness':16}]},
        {'featureType':'all','elementType':'labels.icon','stylers':[{'visibility':'off'}]},
        {'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#000000'},{'lightness':5}]},
        {'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#000000'},{'lightness':7},{'weight':1.2}]},
        {'featureType':'administrative.country','elementType':'labels.text','stylers':[{'color':'#fffdfd'}]},
        {'featureType':'administrative.province','elementType':'labels.text','stylers':[{'color':'#ffffff'},{'weight':'.5'}]},
        {'featureType':'administrative.locality','elementType':'labels.text','stylers':[{'color':'#fcfcfc'},{'weight':'.5'}]},
        {'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#000000'},{'lightness':0}]},
        {'featureType':'landscape.natural.landcover','elementType':'geometry.fill','stylers':[{'color':'#F1C232'},{'saturation':'100'},{'lightness':'0'},{'gamma':'1'},{'weight':'1'}]},
        {'featureType':'landscape.natural.terrain','elementType':'geometry.fill','stylers':[{'color':'#4E3F11'},{'saturation':'0'}]},
        {'featureType':'poi','elementType':'geometry','stylers':[{'color':'#000000'},{'lightness':10}]},
        {'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#001900'},{'lightness':0}]},
        {'featureType':'road','elementType':'geometry.fill','stylers':[{'color':'#ffffff'},{'weight':'1.48'}]},
        {'featureType':'road','elementType':'labels.text.fill','stylers':[{'color':'#f8f8f8'}]},
        {'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#4E3F11'},{'lightness':10},{'saturation':'0'}]},
        {'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#000000'},{'lightness':18},{'weight':0.2}]},
        {'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#000000'},{'lightness':10}]},
        {'featureType':'road.arterial','elementType':'geometry.fill','stylers':[{'color':'#F1C232'}]},
        {'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#000000'},{'lightness':8}]},
        {'featureType':'transit','elementType':'geometry','stylers':[{'color':'#000000'},{'lightness':9}]},
        {'featureType':'water','elementType':'geometry','stylers':[{'color':'#0B5394'},{'lightness':10}]},
        {'featureType':'water','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#0B5394'},{'saturation':'0'}]}
    ];
    
    // Render Google Map
    map = new google.maps.Map(mapContainer, {
        center: {
            lat: 39.2904,
            lng: -76.6122
        },
        zoom: 13,
        styles: styles,
        mapTypeControl: false
    });
    ko.applyBindings(new AppViewModel());
}

// Handle Google Maps API errors
function mapsError() {
    'use strict';
    document.getElementById('map').innerHTML = '<h3 style="text-align:center;">Sorry, Google Maps is not available at the moment. Please try again later.</h3>';
}

// Create new location object
var Location = function(self) {
    'use strict';
    this.name = ko.observable(self.name), this.lat = ko.observable(self.lat),
        this.lng = ko.observable(self.lng), this.type = ko.observable(self.type),
        this.address1 = ko.observable(self.address1), this.address2 = ko.observable(self.address2),
        this.photoPrefix = ko.observable(''), this.photoSuffix = ko.observable('');
};

// Create view model object
var AppViewModel = function() {
    'use strict';
    var self = this;
    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow();

    // Create observable array and populate with all locations
    self.places = ko.observableArray([]);
    locationData.forEach(function(place) {
        self.places.push(new Location(place));
    });

    self.places().forEach(function(self) {

        // Render markers
        self.marker = new google.maps.Marker({
            position: new google.maps.LatLng(self.lat(), self.lng()),
            map: map,
            animation: google.maps.Animation.DROP
        });

        // Extend map bounds based on marker locations
        bounds.extend(self.marker.position);

        // Set custom colored marker icons based on place type
        switch (self.type()) {
            case 'Food':
                self.marker.setIcon('images/pin_orange.png');
                break;
            case 'Shopping':
                self.marker.setIcon('images/pin_green.png');
                break;
            case 'Coffee & Juice Bars':
                self.marker.setIcon('images/pin_purple.png');
                break;
            case 'Recreation':
                self.marker.setIcon('images/pin_teal.png');
                break;
            case 'Bars':
                self.marker.setIcon('images/pin_yellow.png');
                break;
            default:
                self.marker.setIcon('images/pin_orange.png');
        }

        // Set list font color based on place type
        self.setFontColor = ko.computed(function() {
            switch (self.type()) {
                case 'Food':
                    return 'orange';
                case 'Shopping':
                    return 'green';
                case 'Coffee & Juice Bars':
                    return 'purple';
                case 'Recreation':
                    return 'teal';
                case 'Bars':
                    return 'yellow';
                default:
                    return 'orange';
            }
        });

        // Add event listener to animate marker and set/open infowindow on click
        self.animatePlace = function(content) {
            google.maps.event.addListener(self.marker, 'click', function() {
                infowindow.open(map, this);
                self.marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function() {
                    self.marker.setAnimation(null);
                }, 1400);
                infowindow.setContent(content);
            });
        };

        // Get Foursquare place ID using lat long coordinates + query
        var errorContent = '<h5>Sorry, Foursquare photo is not available. Please try again later.</h5>';
        $.ajax({
            url: 'https://api.foursquare.com/v2/venues/search?client_id=Z0AZ4NPHQXMH023O2CVRMWL1NLKZLDCTWLT12VMZGSWGOPFS&client_secret=3SJ4FYIF2A0QR1ZA2KMXWSOYSDHPVPYQOE1NPV3P5UM33YMX&v=20130815&ll=' +
                self.lat() + ',' + self.lng() + '&query=' + self.name(),
            dataType: 'json',
            success: function(place) {
                var venueId = place.response.venues[0].id;
                var venueUrl = 'https://foursquare.com/v/' + venueId;

                // Get "best" Foursquare photo with place ID
                $.ajax({
                    url: 'https://api.foursquare.com/v2/venues/' + venueId +
                        '?client_id=Z0AZ4NPHQXMH023O2CVRMWL1NLKZLDCTWLT12VMZGSWGOPFS&client_secret=3SJ4FYIF2A0QR1ZA2KMXWSOYSDHPVPYQOE1NPV3P5UM33YMX&v=20130815',
                    dataType: 'json',
                    success: function(place) {
                        var foursquarePhoto = place.response.venue.bestPhoto;
                        self.photoPrefix(foursquarePhoto.prefix);
                        self.photoSuffix(foursquarePhoto.suffix);
                        var successContent = '<strong>' + self.name() + '</strong>' + '<br>' + self.address1() + '<br>' + self.address2() + '<br><br>' +
                            '<div id="pic"><img src="' + self.photoPrefix() + '120x120' + self.photoSuffix() + '" alt="Best photo from Foursquare"></div><p>Photo from ' +
                            '<a href="' + venueUrl + '" target="blank">Foursquare</a></p></div>';

                        // Animate marker on click and set infowindow content
                        self.animatePlace(successContent);
                    },
                    error: function() {
                        self.animatePlace(errorContent);
                    }
                });
            },
            error: function() {
                self.animatePlace(errorContent);
            }
        });

        // Define visibility property of markers
        self.isVisible = ko.observable(false);
        self.isVisible.subscribe(function(currentState) {
            if (currentState) {
                self.marker.setMap(map);
            } else {
                self.marker.setMap(null);
            }
        });
        self.isVisible(true);
    });

    // Fit entire map area to bounds
    map.fitBounds(bounds);

    // Trigger infowindow open when list item is clicked on
    self.animateList = function(place) {
        google.maps.event.trigger(place.marker, 'click');
        $('html, body').animate({
            scrollTop: 0
        }, 'fast');
        return false;
    };

    // Filter list and markers based on dropdown selection
    self.filters = ko.observableArray(filters);
    self.filter = ko.observable('');
    self.filteredItems = ko.computed(function() {
        var filter = self.filter();
        if (!filter || filter == 'All') {
            return ko.utils.arrayFilter(self.places(), function(item) {
                item.isVisible(item.type());
                return self.places();
            });
        } else {
            return ko.utils.arrayFilter(self.places(), function(item) {
                item.isVisible(item.type() == filter);
                return item.type() == filter;
            });
        }
    });
};