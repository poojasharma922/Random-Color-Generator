const getColor =()=>{
    const randomNumber = Math.floor( Math.random()*16777215);
    

    //math.random to generate any random number
    //multiply it with 16777215 to generate number that can be converted to hex number
    //math.floor used to get lowest approx value


    //for converting it to hex number
    const randomCode = "#"+ randomNumber.toString(16);

    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerHTML =randomCode;


    //to copy the color to clipboard automatically
    navigator.clipboard.writeText(randomCode)

}
//event call
document.getElementById("btn").addEventListener("click",getColor)


//initial call
getColor();