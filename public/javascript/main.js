    function onSignIn(googleUser){
        var profile = googleUser.getBasicProfile();
        $(".g-signin2").css("display", "none");
        $(".data").css("display","block");
        $("#email").text(profile.getEmail);

        window.location.href = "/main2" ;

    }
    function signOut(googleUser){
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function(){
            alert("successfully logged out");
            $(".data").css("display","none");
            $(".g-signin2").css("display", "block");
        });

    }

var profile ,fname,lname,email ; 

        gapi.load('auth2',function(){
console.log(fname+"HEREEEEE?");

var GoogleUser = GoogleAuth.currentUser.get();
// if(GoogleUser.isSignedIn())
// {
profile = GoogleUser.getBasicProfile();
  
   fname =   profile.getGivenName();

   lname =   profile.getFamilyName();

  email =   profile.getEmail();

  const body2 = {
    fname: fname,
    lname: lname,
    email: email
  };
  export {body2}

console.log(fname+"HEREEEEE?");

    

        });
    