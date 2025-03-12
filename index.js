function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase();
    });
}
function fuzzyMatch(drivers,letter){
    return drivers.filter(function(char){
        return char.toLowerCase().startsWith(letter.toLowerCase())
         })         
}
function matchName(drivers,name){
    return drivers.filter(function(driver){
        return driver.name===name
    })

}

