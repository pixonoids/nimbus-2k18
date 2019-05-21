(function(){
	var fields = document.getElementsByTagName("input"), i;

	for(i = 0; i < fields.length; i++){
		if( fields[i].type.toLowerCase() === 'text'){
			fields[i].defaultVal = fields[i].value;
			fields[i].addEventListener("focus", function(){
				if(this.value == this.defaultVal){
					this.value = "";
				}
			});

			fields[i].addEventListener("blur", function(){
				if(this.value.trim() == "")
				    this.value = this.defaultVal;
			});
		}
	}
    function validate(form){
		var status = true;
		name = form.memo.value.trim(),
		addr= form.addr.value.trim(),
		team = form.team.value.trim(),
		purpose = form.purpose.value.trim(),
		amt = form.amt.value.trim(),
		billpic = form.billpic.value;
      	if(name === form.memo.defaultVal || memo.length < 3){
			document.getElementsByClassName("warningName")[0].className = "warningName visible";
			status = false;
		} else {
			document.getElementsByClassName("warningName")[0].className = "warningName";
		}

		if(addr === form.addr.defaultVal || addr.length < 2){
			document.getElementsByClassName("warningAddr")[0].className = "warningAddr visible";
			status = false;
		} else {
			document.getElementsByClassName("warningAddr")[0].className = "warningAddr";
		}

		if(team === form.team.defaultVal || team.length < 2){
			document.getElementsByClassName("warningTeam")[0].className = "warningTeam visible";
			status = false;
		} else {
			document.getElementsByClassName("warningTeam")[0].className = "warningTeam";
		}
		if(purpose === form.purpose.defaultVal || purpose.length < 2){
			document.getElementsByClassName("warningPurpose")[0].className = "warningPurpose visible";
			status = false;
		} else {
			document.getElementsByClassName("warningPurpose")[0].className = "warningPurpose";
		}
		if(amt === form.amt.defaultVal || typeof amt == 'number'){
			document.getElementsByClassName("warningAmt")[0].className = "warningAmt visible";
			status = false;
		} else {
			document.getElementsByClassName("warningAmt")[0].className = "warningAmt";
		}
        return status;
	}
	$(document).ready(function () {
    $("#submitButton").click(function (event) {
        event.preventDefault();
        var form = $('#billForm')[0];
        var res=validate(form);
        if(res){
        var data = new FormData(form);
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/billadd",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {
                console.log("SUCCESS : ", data);
                $("#memo").val(" ");
                $("#addr").val(" ");
                $("#team").val(" ");
                $("#purpose").val(" ");
                $("#amt").val(" ");
                $("#billpic").val("");
                console.log('hello')
                $("#BlockUIConfirm").show();

            },
            error: function (e) {
                console.log("ERROR : ", e);
            }
        });
       }
       else{
       	return false;
       }

    });

});

})();



	/*
	document.getElementsByTagName("form")[0].addEventListener("submit", function(e){
	   var res=validate(this);
	   e.preventDefault();
	   /* var objectToSend = {
				"memo": document.getElementById('memo').value,
		 		"addr": document.getElementById('addr').value,
		 		"team": document.getElementById('team').value,
		 		"purpose": document.getElementById('purpose').value,
	      		"amt": document.getElementById('amt').value,
		// 		"billpic": document.getElementById('billpic')
	   };
	   
       $(this).ajaxSubmit({
          data: objectToSend,
          contentType: 'application/json',
          success: function(response){
          	  console.log(response);
              console.log('image uploaded and form submitted');     
           }
          error: function(err) {
                  alert(err);
          }
        });
        if(res){
		    //var billpic=document.getElementById('billpic').value
		 	var objectToSend = {
		 		"memo": document.getElementById('memo').value,
		 		"addr": document.getElementById('addr').value,
         		"team": document.getElementById('team').value,
		 		"purpose": document.getElementById('purpose').value,
		 		"amt": document.getElementById('amt').value,
		 		//"billpic": document.getElementById('billpic')
		 	};
		 	var xmlhttp = new XMLHttpRequest();
		 	xmlhttp.open("POST","/billadd");
		 	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        	xmlhttp.send(JSON.stringify(objectToSend));
		 	xmlhttp.onreadystatechange = function(){
		 		if(xmlhttp.readyState == 4){
		 			var res = JSON.parse(xmlhttp.responseText);
		 			console.log('hello');
					console.log(res);
					console.log('yes Divyansh');
		 			//xmlhttp.open('GET','/billadd')
		 			//var res = JSON.parse(xmlhttp.responseText);
		 			console.log(xmlhttp.responseText);
		 			if(res==500){
		 				 console.log("not added bill");
		 			}
		 			else{
		 			     console.log("added");
		 		}
		 		}
		 	}
		
         }else{
			return false;
		}
	    e.preventDefault();
	});*/