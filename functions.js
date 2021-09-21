function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function passgenerator(){
    

    var nr_symbols = parseInt(document.getElementById('symbols').value)
    var nr_letters = parseInt(document.getElementById('letters').value)
    var nr_numbers = parseInt(document.getElementById('numbers').value)
    var password = ""

    var letters_choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var numbers_choices = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var symbols_choices = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

    var n = parseInt(nr_symbols) + parseInt(nr_letters) + parseInt(nr_numbers)

    if (nr_symbols >= 0 && nr_numbers >= 0 && nr_letters >=0){

        for(const i of Array(n).keys()) {
            
            h = getRandomInt(0,3)
            
            if (h == 0 && nr_letters != 0){      
                password += letters_choices[getRandomInt(0, letters_choices.length)]
                nr_letters -= 1

            } else if(h == 1 && nr_symbols != 0){

                password += symbols_choices[getRandomInt(0, symbols_choices.length)]
                nr_symbols -= 1

            } else if(h == 2 && nr_numbers != 0){

                password += numbers_choices[getRandomInt(0, numbers_choices.length)]
                nr_numbers -= 1

            } else{
                if(nr_letters != 0){
                    password += letters_choices[getRandomInt(0, letters_choices.length)]
                    nr_letters -= 1
                }else if(nr_symbols != 0){
                    password += symbols_choices[getRandomInt(0, symbols_choices.length)]
                    nr_symbols -= 1
                }else{
                    password += numbers_choices[getRandomInt(0, numbers_choices.length)]
                    nr_numbers -= 1
                }
            }
        } 
        document.getElementById('password').srcdoc = password
    } else{
        alert("Put a valid number")
    }
	
}
    

