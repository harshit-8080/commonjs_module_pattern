async function printName(name){

    console.log("Your name ", name);

}

async function printAddress(address) {
    
    console.log("Your address ", address);

}


module.exports = {
    printName,
    printAddress
}