$(document).ready(function(){

	/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   UFAK CİHAZLAR İÇİN MENÜ AÇMA BUTONU    */
	$("#HeaderMenuAçmaButonuAlani").on("click", function(){
		$("#HeaderMenuAcmaButonuMenuSinirlamaAlani").slideToggle("slow");
	});
	/* UFAK CİHAZLAR İÇİN MENÜ AÇMA BUTONU <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */


	/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MAIN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI */
	var DokumanGenisligi = $(window).outerWidth(); //ekran genişliğini verir
	if (!$("#HeaderMesajAlani").length){
		if (DokumanGenisligi>=1200) { /* XL */
			var Ofset = 108;
		}else if ((DokumanGenisligi>=992) && (DokumanGenisligi<=1199) ) { /* L */
			var Ofset = 98;
		}else if ((DokumanGenisligi>=768) && (DokumanGenisligi<=991)) { /* M */
			var Ofset = 88;
		}else if ((DokumanGenisligi>=576) && (DokumanGenisligi<=767)) { /* S */
			var Ofset = 78;
		}else if (DokumanGenisligi<=575) { /* XS */
			var Ofset = 78;
		}
	}else {
		if (DokumanGenisligi>=1200) { /* XL */
			var Ofset = 148;
		}else if ((DokumanGenisligi>=992) && (DokumanGenisligi<=1199) ) { /* L */
			var Ofset = 138;
		}else if ((DokumanGenisligi>=768) && (DokumanGenisligi<=991)) { /* M */
			var Ofset = 118;
		}else if ((DokumanGenisligi>=576) && (DokumanGenisligi<=767)) { /* S */
			var Ofset = 108;
		}else if (DokumanGenisligi<=575) { /* XS */
			var Ofset = 103;
		}
	}
	$("main").css('top', Ofset);
	$("footer").css('top',Ofset);
	$(window).resize(function() {
		var DokumanGenisligi = $(window).outerWidth(); //ekran genişliğini verir
	if (!$("#HeaderMesajAlani").length){
		if (DokumanGenisligi>=1200) { /* XL */
			var Ofset = 108;
		}else if ((DokumanGenisligi>=992) && (DokumanGenisligi<=1199) ) { /* L */
			var Ofset = 98;
		}else if ((DokumanGenisligi>=768) && (DokumanGenisligi<=991)) { /* M */
			var Ofset = 88;
		}else if ((DokumanGenisligi>=576) && (DokumanGenisligi<=767)) { /* S */
			var Ofset = 78;
		}else if (DokumanGenisligi<=575) { /* XS */
			var Ofset = 78;
		}
	}else {
		if (DokumanGenisligi>=1200) { /* XL */
			var Ofset = 148;
		}else if ((DokumanGenisligi>=992) && (DokumanGenisligi<=1199) ) { /* L */
			var Ofset = 138;
		}else if ((DokumanGenisligi>=768) && (DokumanGenisligi<=991)) { /* M */
			var Ofset = 118;
		}else if ((DokumanGenisligi>=576) && (DokumanGenisligi<=767)) { /* S */
			var Ofset = 108;
		}else if (DokumanGenisligi<=575) { /* XS */
			var Ofset = 103;
		}
	}
	$("main").css('top', Ofset);
	$("footer").css('top',Ofset);
	});
	/* MAIN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

	
});