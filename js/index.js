        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }



//contact form
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


/*validation
$(document).ready(function(){
  $("#submit-form").validate({
    rules:{
      name:{
        required:true,
      },
      email:{
        email:true
      },
      message:{
        required:true,
        minlength:10
      }
      
    }
  })
})
*/

/*form-submition
$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbymM0eObSYynWca7LC3jmVAm3gD-A2qOQXG4n8YsWaqY28gJVXb7E1zOPuwLDhuT_F6/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})
*/
$(document).ready(function(){
  $("#submit-form").validate({
    rules:{
      name:{
        required:true,
      },
      email:{
        email:true
      },
      message:{
        required:true,
        minlength:10
      }
    },

    submitHandler: function(form) {
      $.ajax({
        url:"https://script.google.com/macros/s/AKfycbymM0eObSYynWca7LC3jmVAm3gD-A2qOQXG4n8YsWaqY28gJVXb7E1zOPuwLDhuT_F6/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
      });
    }


  });
})





//animation
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();