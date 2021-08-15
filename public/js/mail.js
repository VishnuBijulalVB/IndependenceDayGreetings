function validate() {
  // validate input
  let user = $('.user').val();
  let email = $('.emailid').val();
  valid = false;
  if (user == '') {
    failure(" Username is blank", ".username");
  }

  if (user.length >= 2) {
    failure(" Username is valid", ".username");

    if (isEmail(email)) {

      failure(" Email is valid", ".emailtext");
      $('.load-3').css("display", "block");

      setTimeout(
        function () {
          $('.loginform').trigger('submit');
        }, 2000);

      console.log(`Logging in as ${user}`);
    }
    else {
      failure(" Email is invalid", ".emailtext");
    }
  }
  else {
    failure("Minimum length: 2", ".username");
  }
  if (email == '') {
    failure(" Email is blank", ".emailtext");
  }
  return false;
}

failure = (message, cls) => {
  $(cls).text(message);
}

$('.user').click(function() {
 $('.username').text('');
});

$('.email').click(function() {
 $('.emailtext').text('');
});


function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}


// Email 
// function sendMail() {
//   const email = $('.emailid').val();
//   const name = $('.user').val();
//   console.log(`Name is ${name}`);
//   console.log(`Email is ${email}`);
//   console.log(`The given email validity check result is ${isEmail(email)}`);
//   // if ((email != '') && isEmail(email)) {
//   //   $.get( `/sendemail`, function( data ) {
//   //     console.log( "GET to sendemail" );
//   //   })
//   // }
//   console.log($('form').serializeArray());
// };