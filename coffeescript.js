console.log("asd");

console.log(screen.width);
console.log(screen.height);

function register() {

	// simpen ke dalam variable isi dari form
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var email = document.getElementById('email').value;
	var address = document.getElementById('address').value;
	var phone = document.getElementById('phone').value;
	if (document.getElementById('gender').checked){
		var gender = document.getElementById('gender').value;
	} else if (document.getElementById('gender1').checked){
		var gender = document.getElementById('gender1').value;
	}

	// validasi username
	if(username.length < 5 ){
		document.getElementById('errorUsername').innerHTML = "username legth must be 5 minimal";
	} else {
		document.getElementById('errorUsername').innerHTML = "";
	}

	// validasi password
	var number = /^[0-9]+$/;
	var alphabet = /^[a-zA-Z]+$/;
	if(password.match(number)){
		document.getElementById('errorPassword').innerHTML = "password must contain alphanumerik";
	} else if (password.match(alphabet)){
		document.getElementById('errorPassword').innerHTML = "password must contain alphanumerik";
		
	} else if(password.length == 0) {
		document.getElementById('errorPassword').innerHTML = "please enter password";
	} else if(password.length < 5){
		document.getElementById('errorPassword').innerHTML = "password length must be 5 minimal";
	} else{
		document.getElementById('errorPassword').innerHTML = "";
	}

	// validasi email
	var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.match(emailFormat)){
		document.getElementById('errorEmail').innerHTML = "";
	} else {
		document.getElementById('errorEmail').innerHTML = "email format wrong";
	}

	// validasi address
	if (address.length == 0){
		document.getElementById('errorAddress').innerHTML = "please enter address";
	} else if(address.slice(0,5) != 'jalan'){
		document.getElementById('errorAddress').innerHTML = "first word must contain 'jalan'";
	} else{
		document.getElementById('errorAddress').innerHTML = "";
	}

	// validasi telepon
	var phoneFormat = /^[0-9]+$/;
	if(phone.length == 0){
		document.getElementById('errorPhone').innerHTML = "please enter phonenumber";
	} else if(phone.length < 10){
		document.getElementById('errorPhone').innerHTML = "phonenumber minimal 10 number";
	} else if(phone.match(phoneFormat)){
		document.getElementById('errorPhone').innerHTML = "";
	} else{
		document.getElementById('errorPhone').innerHTML = "please enter number";
	}

	// validasi gender
	if(gender == null){
		document.getElementById('errorGender').innerHTML = "please choose your gender";
	} else {
		document.getElementById('errorGender').innerHTML = "";
	}
}




