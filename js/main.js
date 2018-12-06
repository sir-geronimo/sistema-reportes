$( document ).ready(function() {

    $("#btnLogin, #btnRegister").click(function(event) {

        let form;

        if ($(this).attr('id') === "btnLogin") {
            form = $("#formLogin");
        } else {
            form = $("#formRegister");
        }
    
        if (form[0].checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        
        form.addClass('was-validated');
    });



});