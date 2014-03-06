var gameFranchise = ["Super Mario Bros", "The Legend of Zelda", "Gears of War", "Pokemon", "Bioshock", "inFamous"];
var dropNumber = 0;


var getPrevious = function(){
	myText.text = gameFranchise[dropNumber];
        if (dropNumber === 0){
        	dropNumber === gameFranchise.length - 1
        } else {
        	dropNumber === dropNumber - 1
};

    var getNext = function(){
        myText.text = gameFranchise[dropNumber];
   		if (dropNumber === gameFranchise.length - 1){
        dropNumber = 0 }
    else {dropNumber = dropNumber + 1};
};

nextButtonBack.addEventListener("click", displayAlert);
previousButtonBack.addEventListener("click", getPrevious);