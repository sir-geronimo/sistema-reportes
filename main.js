var toastGroupTemplate = document.querySelector('#toastGroup');
toastGroupTemplate.showToast = function() {
  document.querySelector('#toast').show();
}

let btn = document.getElementById("btn");
var today = new Date() 
data = {
  'date' : today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate() ,
  "description" : "Test",
  "latitude" : 18.500,
  "longitude" : -68.500,
  "collection" : "reports"
};

btn.addEventListener("click", () => {
  console.log(save(data));
});
