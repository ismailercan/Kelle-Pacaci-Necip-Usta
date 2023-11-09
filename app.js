
//let animals = ["pig", "cow", "cow" , "pig", "chicken", "cow", "sheep", "pig", "chicken"];

let animalInput = document.getElementById("animal");
let calculateButton = document.getElementById("calculate");
let resultElement = document.getElementById("result");

let sum = 0;


function calculate(){

    for(let i=0; i<animals.length; i++){
        if(animals[i]!=="pig"){
            
            if(animals[i]=="cow"){
                a=4;
                sum= sum+a;
            }
            if(animals[i]=="sheep"){
                a=4;
                sum= sum+a;
            }
            if(animals[i]=="chicken"){
                a=2;
                sum= sum+a;
            }
        

        console.log(sum);
    }
    }
    
    return resultElement.innerHTML = sum;
}

let animals = []; // Boş bir dizi oluşturun



animalInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") { // Enter tuşuna basıldığını kontrol edin
        const inputValue = animal.value;
       
            animals.push(inputValue); // Diziye girilen sayıyı ekleyin
            console.log("Dizi Güncellendi:", animals);
            animalInput.value = ""; // Input alanını temizleyin
        
    }
});