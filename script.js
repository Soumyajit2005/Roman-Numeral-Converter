const number = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

convertButton.addEventListener('click', () =>{
    output.style.display = 'inline-block';
    if(number.value === ""){
        output.innerHTML = "Please enter a valid number";
    }
    else{
        let num = number.value;
        if( num < 1){
            output.innerHTML = "Please Enter a number greater than or equal to 1";
        }
        else if(num >= 4000){
            output.innerHTML = "Please enter a number less than or equal to 3999";
        }
    }
})