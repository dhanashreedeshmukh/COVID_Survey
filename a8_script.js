
            const vaccinename = document.getElementById('vaccinename');
            const form = document.getElementById('form')
            
            const errorElement = document.getElementById('error');
            function handleRadioClick(x) 
            {
                if (x==0)
                document.getElementById('vaccinename').style.display = 'block';
                else
                document.getElementById('vaccinename').style.display = 'none';
            }

            function validateEmail(){
                let emailMessage =[];
                var isValidEmail = true;
                var email=document.myForm.email.value
                var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if(!(email.match(validRegex))){
                    isValidEmail = false;
                    emailMessage.push("Enter valid email");
                  
               }
               if (emailMessage.length > 0) { 
                    errorElement.innerText = emailMessage.join('');
               }  
               emailMessage.length = 0;
               return isValidEmail;
                
             }
   
             function validatePhone(){
                 let mobileMessage = [];
                 var isValidMobile = true;
                 var phone =document.myForm.phone.value

                var validMobileRegex = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
                if(!(phone.match(validMobileRegex))){
                    isValidMobile = false;
                    mobileMessage.push("Enter valid Phone number");
                  
               }

                if (mobileMessage.length > 0) { 
                    errorElement.innerText = mobileMessage.join('');
               }  
               mobileMessage.length = 0;
               return isValidMobile;
   
            }
           
            let messages = []
            
            function isTextEmpty(){

 
                var isEmpty = false;
                
                //var warningMessage = "+ Please fill in your basic information:  \n    ";
       
                messages.push("Please fill in your basic information:  \n");

                var fName=document.myForm.fname.value;
                var lName=document.myForm.lname.value;
                var email=document.myForm.email.value
               
                
               
                //check if First name field is empty
                if (fName == "") {
                    
                    isEmpty = true;
                    messages.push("First Name, ");
                }
                // check if Last name field is empty
                if (lName == "") {
                    // if the firstName text blank is empty, set up the flag to be true, and 
                    // concate the name of this missing box (i.e. First Name) to the warning message.
                    isEmpty = true;
                    messages.push("Last Name, ");
                }
                //check if email is empty
                if (email == "") {
                    // if the firstName text blank is empty, set up the flag to be true, and 
                    // concate the name of this missing box (i.e. First Name) to the warning message.
                    isEmpty = true;
                    messages.push("Email");
               
                } 
                
       
                

                if (messages.length > 0) { 
                    errorElement.innerText = messages.join('');
                }
                messages.length = 0;
                return isEmpty;
            }
            // Function to check if user is vaccinated or not
            /*function isVaccinated(){
            
                            var vaccinated = document.myForm. vaccinated;
                               
                            for (var i = 0; i < vaccinated.length; i++) {
                                
                            currentOption = vaccinated[i]
                            if (currentOption.checked) {
                                    // if it is true, it means this radio button is selected
                                    isSelected = true; 
                                    // since radio button input elements can only allow one to be selected, so once checked one input element is selected, use break to end the loop immediately.
                                    break;
                            }
                            } 
                            if (!isSelected) {
                                                 
                                                if (isProductSelected()){
                                                    
                                                    warningMessage = "+ Please select whether you are vaccinated or not before selecting type of vaccine. \n";
                                                } else {
                                                    
                                                    warningMessage = "+ Please select if you are vaccinated or not. \n";
                                                }
                                                // actually print the warning message 
                                                alert(warningMessage);
                                            } 
                                            return isSelected;
                                              
           }*/
                            
            function isProductSelected(){
                            
                            let productMessage =[];
                            var isSelected = false;
                            
                            var vaccine = document.myForm.vaccine;
                             
                            for (var i = 0; i < vaccine.length; i++) {
                                currentOption = vaccine[i]
                                if (currentOption.checked) {
                                    isSelected = true; 
                                    break;
                                }
                            }
                            
                                                
                            if (!isSelected){
                                                    
                               productMessage.push( "Please select the name of vaccine you have received. \n");
                                                    
                           } 
                           if (productMessage.length > 0) { 
                                 errorElement.innerText = productMessage.join('');
                           }  
                           productMessage.length = 0;
                                                
                                            
                           return isSelected;  
                            
            } 

            function checkMedicalCondition(){
                            var isSelected = false;
                            
                            var sickness = document.myForm.sickness;
                            
                            for(var i =0; i < sickness.length; i++){
                                currentOption = sickness[i];
                                if(currentOption.checked){
                                    isSelected = true;
                                    break;
                                }
                            }
                            if(!isSelected){
                                warningMessage = "+ Please select your Medical Condition"
                                alert(warningMessage);
                            }
                            
                            return isSelected;
            }
          
 
            function checkCloseContactStatus(){
                            var isSelected = false;
                            
                            var contact = document.myForm.contact;
                            
                            for(var i =0; i < contact.length; i++){
                                currentOption = contact[i];
                                if(currentOption.checked){
                                    isSelected = true;
                                    break;
                                }
                            }
                            if(!isSelected){
                                warningMessage = "+ Please select whether you are in close contact of person diagnosed with COVID 19"
                                alert(warningMessage);
                            }
                            
                            return isSelected;
            }
            function validate(){

                
                
                if ( validateEmail() && validatePhone() && !isTextEmpty()  && isProductSelected() && checkMedicalCondition() && checkCloseContactStatus()){
                    var confirmation = "";
                    
                    confirmation += "<h1> Survey Completed </h1>";
                    confirmation += "<h2> Personal Information</h2>";
                
                    confirmation += getPersonalDetails().toUpperCase();

                    
                    document.write(confirmation);
                   
                    
            }
            
            }
            //Function to display Personal details of User
            function getPersonalDetails() {

                // get user's filled values
                var fName = document.myForm.fname.value;
                var lName = document.myForm.lname.value; 
                var email = document.myForm.email.value
                var confirmMsg = ""; 

                confirmMsg += "<p> Name: " + fName; 
                
                confirmMsg += " " + lName + " </p>"; 
                

                confirmMsg += "<p> Email: " + email + "</p>";
  
                return confirmMsg;
            }
            //Function to display Vaccination History of user.
            /*function getVaccineHistory(){
                var confirmMsg = "";
                var notConfirmMsg = "";
                if(!isVaccinated())
                {
                    notConfirmMsg += "<p> Has NOT received COVID 19 Vaccine before.</p>";
                    return notConfirmMsg;
                }
                else{
                    confirmMsg += "<p> Has  received COVID 19 Vaccine before.</p>";
                    return confirmMsg;
                }
                
            }*/
        
        
        