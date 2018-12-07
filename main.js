var toastGroupTemplate = document.querySelector('#toastGroup');
toastGroupTemplate.showToast = function() {
  document.querySelector('#toast').show();
}

var btn = document.getElementById("btn-test");
btn.addEventListener("click", function(){
  console.log('clicked');
});

var today = new Date() 
data = {
  'date' : today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate() ,
  "description" : "Test",
  "latitude" : 18.500,
  "longitude" : -68.500,
  "collection" : "reports"
};

