$(document).ready(function() {

    // Responsivo button mobile
    $(".icon-menu").on("click",function(){
		event.preventDefault();
		$a = $(this);
        $("#main-menu").slideToggle(function(){
        	$(window).scrollTop($a.offset().top-4);
		});
    });

    //Shadown menu scroll
    var navbar = $('nav');
    $(window).scroll(function(){
        if($(window).scrollTop() <= 50){
       		navbar.css('box-shadow', 'none');
        } else {
          navbar.css('box-shadow', '0px 10px 20px rgba(0, 0, 0, 0.4)');
        }
    });

    // Scroll links
    $.scrollIt(); 

    // Form validation
    $('#bt_submit').on("click",function(){
		// Remove todas as classes .error
		$('input, textarea').removeClass('error');
		// Variáveis
		var frm_nome = $("#frm_nome").val();
		var frm_email = $("#frm_email").val();
		var frm_mensagem = $("#frm_mensagem").val();
		// Validação
		if(frm_nome==''){
			valAction("frm_nome");
		} else if(frm_email=='' || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(frm_email))){
			valAction("frm_email");
		} else if(frm_mensagem==''){
			valAction("frm_mensagem");
		} else {	
			alert("Success!");		
		}
		function valAction(y){
			$('#' + y).val('');	
			$('#' + y).focus().select();
			$('#' + y).addClass('error');
		}
		return false;
	});

});