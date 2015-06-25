var verses=prompt("How much beer is there?")
for (i=verses; (i <= verses) && (i >= 0); i--) {
    if (i == 1) {
        console.log(i + " bottle of beer on the wall, " + i + " bottle of beer! Take one down and pass it around, " + (i) + " bottle of beer on the wall.")    
    } else if (i == 0) {
        i = "No more";
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer! Take one down and pass it around, " + (i) + " bottles of beer on the wall.")
    } 
    else { 
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer! Take one down and pass it around, " + (i) + " bottles of beer on the wall.")
    }
}  