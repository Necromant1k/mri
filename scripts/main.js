"use strict";function setEqualHeight(e){var t=0;t=$(".to-center").height(),$("#map").height(t)}function geocodeAddress(e,t,i){t.geocode({address:e},function(e,t){if(t===google.maps.GeocoderStatus.OK){i.setCenter(e[0].geometry.location);new google.maps.Marker({map:i,position:e[0].geometry.location,title:subdivisionTitle})}else alert("Адрес не распознан"+t)})}function initMap(){var e=new google.maps.Map(document.getElementById("map"),{center:{lat:-34.397,lng:150.644},scrollwheel:!0,zoom:12}),t=new google.maps.Geocoder;geocodeAddress(address,t,e)}function showThumbnail(e,t){largeImg.attr("src",e),largeImg.alt=t}$(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!0,navContainer:".nav-container",navText:["<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 370.8 370.8'><polygon points='292.9 24.8 268.8 0 77.9 185.4 268.8 370.8 292.9 346 127.6 185.4' fill='#bfbfbf'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 478.4 478.4' width='512' height='512'><polygon points='131.7 0 100.5 32 313.8 239.2 100.5 446.4 131.7 478.4 378 239.2 ' fill='#bfbfbf'/></svg>"],responsive:{0:{items:2},600:{items:3},1e3:{items:4}}}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},1e3),!1}})}),$(document).ready(function(){void 0!=$(".to-center")&&setEqualHeight()});var clinic_address=$(".clinic-on-map"),subdivisionTitle='Филиал "Владимир"',address=$(".address-container").find(".place").text()||$(".price-list-container.active").children().find(".clinic-address").find(".address-short").find(".place").text()||$(".address-short").find(".place").text();console.log(address),clinic_address.on("click",function(e){e.preventDefault(),clinic_address.removeClass("active"),$(this).addClass("active"),address=$(this).children().find(".clinic-address").find(".address-short").find(".place").text(),subdivisionTitle=$(this).find("h4").text(),initMap()});var largeImg=$("#largeImg"),secImg=$(".secondary-img"),srcImg="";secImg.on("click",function(e){srcImg=$(this).find("img").attr("src"),console.log(srcImg),showThumbnail(srcImg,"image")});