jQuery(document).ready(listo);

// listo() corre el programa cuando esté listo
function listo(){

	var alto = jQuery("#logo-inicio").height();
	alto = alto + 30; // Sumar 30px

	// acción del botón de barras
	jQuery(".bars-menu").click(function(e){
		// anula la función por defecto en html
		e.preventDefault();

		// menu con transición
		jQuery("header .container nav").toggleClass("open");
		// cambio de barra a X
		jQuery(".bars-menu i").toggleClass("fa-times");
	});

	jQuery("header .container nav a").click(function(){
		// cerrar el menu
		jQuery("header .container nav").removeClass("open");
		jQuery(".bars-menu i").removeClass("fa-times");

		var ir_a = jQuery(this).attr("href");

		jQuery("html, body").animate({
			// los -134.25 cambian por le logo
			"scrollTop": jQuery(ir_a).offset().top -alto
		});
	});

	jQuery(".boton.boton-rojo").click(function(){
		var ir_a = jQuery(this).attr("href");

		jQuery("html, body").animate({
			"scrollTop": jQuery(ir_a).offset().top -alto
		});
	});

	jQuery(".boton.boton-negro").click(function(){
		var ir_a = jQuery(this).attr("href");

		jQuery("html, body").animate({
			"scrollTop": jQuery(ir_a).offset().top -alto
		});
	});

	jQuery("#logo-inicio").click(function(){
		var ir_a = jQuery(this).attr("href");

		jQuery('html, body').animate({
			"scrollTop": jQuery(ir_a).offset().top -alto
		});
	});
}

let map;

async function initMap() {
	// The location of Uluru
	const position = { lat: -25.344, lng: 131.031 };
	// Request needed libraries.
	//@ts-ignore
	const { Map } = await google.maps.importLibrary("maps");
	const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
  
	// The map, centered at Uluru
	map = new Map(document.getElementById("map"), {
	  zoom: 4,
	  center: position,
	  mapId: "DEMO_MAP_ID",
	});
  
	// The marker, positioned at Uluru
	const marker = new AdvancedMarkerView({
	  map: map,
	  position: position,
	  title: "Uluru",
	});
  }
  
  initMap();