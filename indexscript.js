$(document).ready(function(){    
clear();
    $('#dob').on('change', function() {
        var today = new Date();
        var birthDate = document.getElementById('dob').value;
        var newformatdate=new Date(birthDate);
        var age = today.getFullYear() - newformatdate.getFullYear();
        var m = today.getMonth() - newformatdate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < newformatdate.getDate())) {
            age--;
        }
        if(age>=18){
            $('#parentshow').hide();
        }
        else  {
            $('#parentshow').show();
        }            
    });    
      

    $('.numbersOnly').keyup(function () {
        if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
           this.value = this.value.replace(/[^0-9\.]/g, '');
        }
    });   

    $('#submit').click(function(){ 

        if ($('#firstname').val().trim() != null && $('#firstname').val().trim() != '') {  
            $('#errfirstname').hide(); 
            
            if ($('#lastname').val().trim() != null && $('#lastname').val().trim() != '') {  
                $('#errlastname').hide(); 

                if ($('#address').val().trim() != null && $('#address').val().trim() != '') {  
                    $('#erraddress').hide();

                    if($('#ddCity').val().trim()!=null && $('#ddCity').val().trim()!='1'){
                        $('#errcity').hide(); 

                        if($('#ddState').val().trim()!=null && $('#ddState').val().trim()!=''){
                            $('#errstate').hide(); 

                            if ($('#pincode').val().trim() != null && $('#pincode').val().trim() != '') {  
                                $('#errpincode').hide(); 

                                if ($('#phno').val().trim() != null && $('#phno').val().trim() != '') {  
                                    $('#errphoneno').hide(); 

                                    if ($('#dob').val().trim() != null && $('#dob').val().trim() != '') {  
                                        $('#errdob').hide(); 
                                
                                        if(($('#parentshow').is(":visible") && $('#pname').val().trim() != null && $('#pname').val().trim() != '') || $('#parentshow').is(":hidden")) {  
                                            $('#errparentname').hide();
                                            
                                            if(($('#parentshow').is(":visible") && $('#pphoneno').val().trim() != null && $('#pphoneno').val().trim() != '') || $('#parentshow').is(":hidden")) {  
                                                $('#errparentphno').hide();

                                                if($('input[type=radio][name=Sex]:checked').length != 0) {
                                                    $('#errsex').hide();

                                                    if($('input[type=radio][name=MaritalStatus]:checked').length != 0) {
                                                        $('#errmaritalstatus').hide();

                                                        if ($('#email').val().trim() != null && $('#email').val().trim() != '') {  
                                                            $('#erremail').hide(); 
                
                                                            if ($('#emcontno').val().trim() != null && $('#emcontno').val().trim() != '') {  
                                                                $('#erremcontno').hide(); 

                                                                if($('input[type=radio][name=insuranceavailable]:checked').length != 0) {
                                                                    $('#errinsurance').hide();

                                                                    if ($('#ipname').val().trim() != null && $('#ipname').val().trim() != '') {  
                                                                        $('#erripname').hide();
                                                                        
                                                                        if ($('#pid').val().trim() != null && $('#pid').val().trim() != '') {  
                                                                            $('#errpid').hide(); 
                                                                            var chkemail = document.getElementById('email');
                                                                            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

                                                                            if (!filter.test(chkemail.value)) {

                                                                            alert('Please provide a valid email address');
                                                                            $('#email').focus();
                                                                            }
                                                                            else{                                                                                                    
                                                                            alert("Hi i am kp! Patient Details Added Successfully")
                                                                            clear(); 
                                                                            }
                                                                        }else{
                                                                            $('#errpid').show();
                                                                        }
                                                                    }else{
                                                                        $('#erripname').show();
                                                                    } 

                                                                }else{
                                                                    $('#errinsurance').show();
                                                                }
                                                            }else{
                                                                $('#erremcontno').show();
                                                            }                                 
                                                        }else{
                                                            $('#erremail').show();
                                                        }
                                                    }else {
                                                        $('#errmaritalstatus').show();
                                                    }
                                                }else {
                                                    $('#errsex').show();
                                                }      
                                            }else{
                                                $('#errparentphno').show();
                                            }
                                        }else{
                                            $('#errparentname').show();
                                        }
                                    }else{
                                        $('#errdob').show();
                                    } 
                                } else {  
                                    $('#errphoneno').show();
                                }                                 
                            } else {  
                                $('#errpincode').show();
                            } 
                        }else {
                            $('#errstate').show(); 
                        }  
                    }else {
                        $('#errcity').show(); 
                    }      
                } else {  
                    $('#erraddress').show();
                }     
            } else {  
                $('#errlastname').show();
            }       
        } else{  
            $('#errfirstname').show();
        }  
         
        return false; 
    });
   
function clear()
{
    $('#address').val('');
    $('#parentshow').hide();
    $('#errfirstname').hide();
    $('#errlastname').hide();
    $('#erraddress').hide();
    $('#errcity').hide();
    $('#errstate').hide();
    $('#errpincode').hide();
    $('#errphoneno').hide();
    $('#errdob').hide();
    $('#errparentname').hide();
    $('#errparentphno').hide();
    $('#errsex').hide();
    $('#errmaritalstatus').hide();
    $('#erremail').hide();
    $('#erremcontno').hide();
    $('#errinsurance').hide();
    $('#erripname').hide();
    $('#errpid').hide();
}

function checkEmail(){
    var chkemail = document.getElementById('#email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(chkemail.value)) {

    alert('Please provide a valid email address');
    chkemail.focus;
    return false;
 }
}





});







