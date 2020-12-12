window.onload = function(){
    var strength = 0
    var dexterity = 0
    var constitution = 0
    var intelligence = 0
    var wisdom = 0
    var charisma = 0
    var name = ""
    var race = ""
    var character_class = ""
    var gender = ""
    var right_handed = "NO"
    var myList = []
    //Create new character button function
    document.getElementById("createnewcharacter").addEventListener("click", createnewcharacter);
    //Reroll button function
    document.getElementById("reroll").addEventListener("click", reroll);
    //Create character finalization button function
    document.getElementById("finalizecharacter").addEventListener("click", finalizecharacter);
    //Cancel character creation button
    document.getElementById("cancelbutton").addEventListener("click", cancelbutton);
};

//function createitem(name, strength, dexterity, constitution, intelligence, wisdom, charisma, race, charclass, gender, right){
    //var newObject = {
        //name: name,
        //strength: strength,
        //dexterity: dexterity,
        //constitution: constitution,
        //intelligence: intelligence,
        //wisdom: wisdom,
        //charisma: charisma,
        //race: race,
        //charclass: charclass,
        //gender: gender,
        //right: right
    //}
    //myList.push(newObject)
    //return newObject
//}

//function getallitems(){
    //return myList
//}

//function getitembyid(id){

//}

function createnewcharacter(){
    document.getElementById("listdiv").style.display = "none"
    document.getElementById("formdiv").style.display = "block"
    document.getElementById("createnewcharacter").style.display = "none"
    strength = rollDice()
    document.getElementById("strength").value = strength
    dexterity = rollDice()
    document.getElementById("dexterity").value = dexterity
    constitution = rollDice()
    document.getElementById("constitution").value = constitution
    intelligence = rollDice()
    document.getElementById("intelligence").value = intelligence
    wisdom = rollDice()
    document.getElementById("wisdom").value = wisdom
    charisma = rollDice()
    document.getElementById("charisma").value = charisma
    document.getElementById("charactername").value = ""
    document.getElementById("male").checked = true
}

function reroll(){
    strength = rollDice()
    document.getElementById("strength").value = strength
    dexterity = rollDice()
    document.getElementById("dexterity").value = dexterity
    constitution = rollDice()
    document.getElementById("constitution").value = constitution
    intelligence = rollDice()
    document.getElementById("intelligence").value = intelligence
    wisdom = rollDice()
    document.getElementById("wisdom").value = wisdom
    charisma = rollDice()
    document.getElementById("charisma").value = charisma
}

function cancelbutton(){
    document.getElementById("formdiv").style.display = "none"
    document.getElementById("createnewcharacter").style.display = "block"
    document.getElementById("listdiv").style.display = "block"
}  

function finalizecharacter(){
    var has_name = true
    var has_race = true
    var has_class = true
    if (document.getElementById("charactername").value == ""){
        has_name = false
    }
    if (document.getElementById("race").value == ""){
        has_race = false
    }
    if (document.getElementById("class").value == ""){
        has_class = false
    }
    if (has_name == true && has_race == true && has_class == true) {
        document.getElementById("nameerrorbox").style.display = "none"
        document.getElementById("raceerrorbox").style.display = "none"
        document.getElementById("classerrorbox").style.display = "none"
        var has_name = true
        var has_race = true
        var has_class = true
        document.getElementById("formdiv").style.display = "none"
        document.getElementById("createnewcharacter").style.display = "block"
        name = document.getElementById("charactername").value
        race = document.getElementById("race").value
        character_class = document.getElementById("class").value
        gender = document.querySelector('input[name=gender]:checked').value
        if (document.getElementById("righthanded").checked == true){
            right_handed = "YES"
        }
        else {
            right_handed = "NO"
        }
        document.getElementById("charactertable").innerHTML += "<tr><td>" + name + "</td><td>" + race + "</td><td>" + character_class + "</td><td>" + gender + "</td><td>" + right_handed + "</td><td>" + strength + "</td><td>" + dexterity + "</td><td>" + constitution + "</td><td>" + intelligence + "</td><td>" + wisdom + "</td><td>" + charisma + "</td></tr>"
        document.getElementById("righthanded").checked = false
        document.getElementById("race").value = ""
        document.getElementById("class").value = ""
        document.getElementById("listdiv").style.display = "block"
    }
    else {
        if (has_name == false){
            document.getElementById("nameerrorbox").style.display = "block"
        }
        if (has_race == false){
            document.getElementById("raceerrorbox").style.display = "block"
        }
        if (has_class == false){
            document.getElementById("classerrorbox").style.display = "block"
        }
    }  
}

function rollDice() {
    total = 0
    total += 1 + Math.floor(Math.random()*6)
    total += 1 + Math.floor(Math.random()*6)
    total += 1 + Math.floor(Math.random()*6)
    return total
}
