//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
Contact.prototype.fullName= function() {
  return this.firstName + " " + this.lastName;
}
//user interface logic
$(document).ready(function(){
  $("form#new-Contact").submit(function(event){
    event.preventDefault();

  var inputtedfirstName =$("input#new-first-name").val();

  var inputtedlastName = $("input#new-last-name").val();

  var newContact = new Contact( inputtedfirstName, inputtedlastName);

     $("ul#Contacts").append("<li><span class='Contacts'>" + newContact.fullName() + "</span></li>");
      $(".Contact").last().click(function() {
        $("#show-Contact").show();
        $("#show-Contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
      });

      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      
   });
});
