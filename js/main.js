
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  console.log(saveReport(data, "NqHTqAkjWDeO2X6913mT"));
});

var today = new Date() 
data = {
  'date' : today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate() ,
  "description" : "Test222222",
  "latitude" : 18.550,
  "longitude" : -68.550,
  "collection" : "reports"
};

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
