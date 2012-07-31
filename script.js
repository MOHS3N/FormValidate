
	var mail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
		var name_string = /^[A-Za-z0-9 ]{3,20}$/;
	
	function valid(form){

		var name = form.name.value;
		var lname = form.lname.value;
		var email = form.email.value;
		var err = [];

		if(!name_string.test(name)){
			err.push('Name ');
		}
		if(!name_string.test(lname)){
			err.push('Last Name ');
		}
		if(!mail.test(email)){
			err.push('Email ');
		}
		if(err.length > 0){
			reperr(err);
			return false;
		}
			return true;
	}

	function reperr(err){
		
		alert('plase Enter : ' + err.toString().replace(/\,/g,' and  ') +'.' );
	}


			
		


