function FormValidation(){
//First Name Validation 
    var fn=document.getElementById('name').value;
    if(fn == ""){
        alert('Please Enter First Name');
        document.getElementById('name').style.backgroundColor = "red";
        return false;
    }else{
        document.getElementById('name').style.backgroundColor = "green";
    }
    if (/^[0-9]+$/.test(document.getElementById("name").value)) {
        alert("First Name Contains Numbers!");
        document.getElementById('name').style.backgroundColor = "red";
        return false;
    }else{
        document.getElementById('name').style.backgroundColor = "green";
    }
    if(fn.length <=2){
        alert('Your Name is To Short');
        document.getElementById('name').style.backgroundColor = "red";
        return false;
    }else{
        document.getElementById('name').style.backgroundColor = "green";
    }

{  var fn=document.getElementById('age').value; 
	if(fn == ""){
        alert('Please Enter Age');
        document.getElementById('age').style.backgroundColor = "red";
        return false;
    }else{
        document.getElementById('age').style.backgroundColor = "green";
    }
    if (/^+$/.test(document.getElementById("age").value)) {
        alert("Must Contain Numbers!");
        document.getElementById('age').style.backgroundColor = "red";
        return false;
    }else{
        document.getElementById('age').style.backgroundColor = "green";
    }
    if(fn.length <=2){
        alert('Age too long!');
        document.getElementById('age').style.backgroundColor = "red";
        return false;
    }else{
        document.getElementById('age').style.backgroundColor = "green";
    }
}

}