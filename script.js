
const getTextareaEmail = document.getElementById('textareaEmail')
const getDivLayout = document.getElementById('divLayout')
const getButtonSubmit = document.getElementById('buttonSubmit')
const getNewDiv = document.getElementById('divLayoutChanged')

getTextareaEmail.addEventListener('blur', switchLayout)
getButtonSubmit.addEventListener('click', checkIfValidEmails)
getNewDiv.addEventListener('click', returnToTheField)
document.addEventListener('keypress', adaptContent)
//getTextareaEmail.addEventListener('blur', returnToTheField)


//checking and saying how many valid emails you have using the same logic as above
function checkIfValidEmails(){

    let textareaValue = getTextareaEmail.value
    
    let validEmails = []
    let invalidEmails = []

    let arrayEmail = []

    //parameter to validate email
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    //if have a ',' and ' ' in the field (example@email, )
    if(textareaValue.indexOf(',') != -1 && textareaValue.indexOf(' ') != -1){
        
        textareaValue = textareaValue.replaceAll(' ', '')
        arrayEmail = textareaValue.split(',')
        
        for(let i = 0; i<arrayEmail.length; i++){
            
            if(arrayEmail[i].match(pattern)){
                    
                validEmails.push(arrayEmail[i])

            } else {

                invalidEmails.push(arrayEmail[i])

            }

        }

        alert(validEmails.length+' valid emails!')
        
    //separate emails by ',' (example@email, example2@email)    
    } else if(textareaValue.indexOf(',') != -1){
        
        arrayEmail = textareaValue.split(',')

        for(let i = 0; i<arrayEmail.length; i++){
            
            if(arrayEmail[i].match(pattern)){
                    
                validEmails.push(arrayEmail[i])

            } else {

                invalidEmails.push(arrayEmail[i])

            }

        }

        alert(validEmails.length+' valid emails!')
        
    //separate emails by ' ' (example@email example2@email)     
    } else if(textareaValue.indexOf(' ') != -1 ){
        
        arrayEmail = textareaValue.split(' ')
        for(let i = 0; i<arrayEmail.length; i++){
            
            if(arrayEmail[i].match(pattern)){
                    
                validEmails.push(arrayEmail[i])

            } else {

                invalidEmails.push(arrayEmail[i])

            }

        }
        
        alert(validEmails.length+' valid emails!')
    
    //check if there is only one element in the field(example@email)    
    } else if(textareaValue.indexOf(' ') == -1 && textareaValue.indexOf(',') == -1 && textareaValue.indexOf('@')-1 != -1 && textareaValue.indexOf('@') != -1 && textareaValue.indexOf('@')+1 != -1){

        //check if the email inside is valid
        if(textareaValue.match(pattern)){

            validEmails.push(textareaValue)
            alert('Valid email!')
            
        //if not, invalid
        } else {

            invalidEmails.push(textareaValue)
            alert('Invalid email!')

        }   
    
    //checking if the field is empty  
    } else if (textareaValue == ''){

        alert('Empty field!')

    //if not invalid email 
    } else {

        alert('Invalid email!')

    }

}

//make the text box adapt to the content
function adaptContent(){

    //set increase of to two line
    if(getTextareaEmail.value.length > 54){

        getTextareaEmail.setAttribute('rows', '2')

    }
    
    //set increase of to three line
    if(getTextareaEmail.value.length > 108){

        getTextareaEmail.setAttribute('rows', '3')

    }
    
    //set increase of to four line
    if(getTextareaEmail.value.length > 164){

        getTextareaEmail.setAttribute('rows', '4')

    }
    
    //set increase of to five line
    if(getTextareaEmail.value.length > 218){

        getTextareaEmail.setAttribute('rows', '5')

    } 
    
    //maximum value reached
    if(getTextareaEmail.value.length > 225){

        getTextareaEmail.setAttribute('maxlength', '225')

    }

    //return to original size when deleting content
    if (getTextareaEmail.value == ""){

        getTextareaEmail.setAttribute('rows', '1')

    }

}

//put layout for each verified email
function switchLayout(){
    let textareaValue = getTextareaEmail.value
    let spansValidHtml = ''
    let spansInvalidHtml = ''
    
    let arrayEmail = []
    let invalidEmails = []
    let validEmails = []
    
    //parameter to validate email
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    //if have a ',' and ' ' in the field (example@email, )
    if(textareaValue.indexOf(',') != -1 && textareaValue.indexOf(' ') != -1){
        
        textareaValue = textareaValue.replaceAll(' ', '')
        arrayEmail = textareaValue.split(',')

        for(let i = 0; i<arrayEmail.length; i++){
        
            if(arrayEmail[i].match(pattern)){
                    
                validEmails.push(arrayEmail[i])

            } else {

                invalidEmails.push(arrayEmail[i])

            }

        }
    
    //separate emails by ',' (example@email, example2@email)
    } else if(textareaValue.indexOf(',') != -1){
        
        arrayEmail = textareaValue.split(',')

        for(let i = 0; i<arrayEmail.length; i++){
        
            if(arrayEmail[i].match(pattern)){
                    
                validEmails.push(arrayEmail[i])

            } else {

                invalidEmails.push(arrayEmail[i])

            }

        }
        
    //separate emails by ' ' (example@email example2@email)    
    } else if(textareaValue.indexOf(' ') != -1 ){
        
        arrayEmail = textareaValue.split(' ')

        for(let i = 0; i<arrayEmail.length; i++){
        
            if(arrayEmail[i].match(pattern)){
                    
                validEmails.push(arrayEmail[i])

            } else {

                invalidEmails.push(arrayEmail[i])

            }

        }
    
    //check if there is only one element in the field(example@email)
    } else if(textareaValue.indexOf(' ') == -1 && textareaValue.indexOf(',') == -1){
        
        //check if the email inside is valid
        if(textareaValue.match(pattern)){

            validEmails.push(textareaValue)
         
        //if not, invalid
        } else {

            invalidEmails.push(textareaValue)

        }      
    }

    //if the textarea value is not empty
    if(textareaValue != ''){

        //add the layout for each email
        for(let i = 0; i<validEmails.length; i++){

            //adding layout to valid emails
            spansValidHtml += "<span class='layoutEmail'>"+validEmails[i]+"</span>"

        }

        for(let i = 0; i<invalidEmails.length; i++){

            //adding layout to invalid emails
            spansInvalidHtml += "<span class='layoutInvalidEmail'>"+invalidEmails[i]+"</span>"

        }

        //making textarea invisible
        getTextareaEmail.style.display = 'none'
        
        //leaving the verified layouts visible
        getNewDiv.style.display = 'block'

        //adding the layout in HTML
        getNewDiv.insertAdjacentHTML('afterbegin', spansValidHtml)

        //adding the layout in HTML
        getNewDiv.insertAdjacentHTML('afterbegin', spansInvalidHtml)

    }

}

//by pressing enter
document.addEventListener('keydown', function(event){

    const isEnterKey = event.key

    if (isEnterKey === 'Enter'){

        let textareaValue = getTextareaEmail.value
        let spansValidHtml = ''
        let spansInvalidHtml = ''
        
        let arrayEmail = []
        let invalidEmails = []
        let validEmails = []

        //parameter to validate email
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        
        //if have a ',' and ' ' in the field (example@email, )
        if(textareaValue.indexOf(',') != -1 && textareaValue.indexOf(' ') != -1){
            
            textareaValue = textareaValue.replaceAll(' ', '')
            arrayEmail = textareaValue.split(',')

            for(let i = 0; i<arrayEmail.length; i++){
            
                if(arrayEmail[i].match(pattern)){
                        
                    validEmails.push(arrayEmail[i])
    
                } else {
    
                    invalidEmails.push(arrayEmail[i])
    
                }
    
            }
        
        //separate emails by ',' (example@email, example2@email)
        } else if(textareaValue.indexOf(',') != -1){
            
            arrayEmail = textareaValue.split(',')

            for(let i = 0; i<arrayEmail.length; i++){
            
                if(arrayEmail[i].match(pattern)){
                        
                    validEmails.push(arrayEmail[i])
    
                } else {
    
                    invalidEmails.push(arrayEmail[i])
    
                }
    
            }
            
        //separate emails by ' ' (example@email example2@email)    
        } else if(textareaValue.indexOf(' ') != -1 ){
            
            arrayEmail = textareaValue.split(' ')

            for(let i = 0; i<arrayEmail.length; i++){
            
                if(arrayEmail[i].match(pattern)){
                        
                    validEmails.push(arrayEmail[i])
    
                } else {
    
                    invalidEmails.push(arrayEmail[i])
    
                }
    
            }
        
        //check if there is only one element in the field(example@email)
        } else if(textareaValue.indexOf(' ') == -1 && textareaValue.indexOf(',') == -1){
            
            //check if the email inside is valid
            if(textareaValue.match(pattern)){

                validEmails.push(textareaValue)
             
            //if not, invalid
            } else {

                invalidEmails.push(textareaValue)

            }     
        }

        //if the textarea value is not empty
        if(textareaValue != ''){

            //add the layout for each email
            for(let i = 0; i<validEmails.length; i++){

                //adding layout to valid emails
                spansValidHtml += "<span class='layoutEmail'>"+validEmails[i]+" <i id='remove' class='fas fa-times'></i></span>"

            }

            for(let i = 0; i<invalidEmails.length; i++){

                //adding layout to invalid emails
                spansInvalidHtml += "<span class='layoutInvalidEmail'>"+invalidEmails[i]+"</span>"

            }

            //making textarea invisible
            getTextareaEmail.style.display = 'none'
            
            //leaving the verified layouts visible
            getNewDiv.style.display = 'block'

            //adding the layout in HTML
            getNewDiv.insertAdjacentHTML('afterbegin', spansValidHtml)

            //adding the layout in HTML
            getNewDiv.insertAdjacentHTML('afterbegin', spansInvalidHtml)

        } else {

            alert('Empty field!')

        }

        getTextareaEmail.removeEventListener('blur', switchLayout)

    }

})

//return with empty field
function returnToTheField(){

    location.reload()

}

//attempt to do the function to delete the email
/*function returnToTheField(){

    const getRemoveEmail = document.querySelectorAll('i')

    for(let i = 0; i<getRemoveEmail.length; i++){

        getRemoveEmail[i].addEventListener('click', removeEmail)

    }

    function removeEmail(){

        let elementNode = []
        let emailRemove
    
        const getRemoveEmail = document.querySelectorAll('i')
    
        for(let i = 0; i<getRemoveEmail.length; i++){
    
            elementNode.push(getRemoveEmail[i].parentNode)
    
        }
    
        for(let i = 0; i<elementNode.length; i++){
    
            if(elementNode[i] == getRemoveEmail[i].parentNode){
    
                emailRemove = elementNode[i]
    
            }
    
        }
    
        console.log(emailRemove)
        getNewDiv.removeChild(emailRemove)
    
    }

}*/
