var myList = [
    {
        name: "Frodo",
        race: "Halfling",
        charclass: "Thief",
        gender: "Male",
        right: "Yes",
        strength: 3,
        dexterity: 5,
        constitution: 15,
        intelligence: 12,
        wisdom: 14,
        charisma: 18
    },
    {
        name: "Gimli",
        race: "Dwarf",
        charclass: "Warrior",
        gender: "Male",
        right: "Yes",
        strength: 15,
        dexterity: 4,
        constitution: 17,
        intelligence: 8,
        wisdom: 7,
        charisma: 12
    },
    {
        name: "Eowyn",
        race: "Human",
        charclass: "Swordsman",
        gender: "Female",
        right: "No",
        strength: 2,
        dexterity: 11,
        constitution: 10,
        intelligence: 13,
        wisdom: 12,
        charisma: 14
    },
    {
        name: "Legolas",
        race: "Elf",
        charclass: "Archer",
        gender: "Male",
        right: "No",
        strength: 12,
        dexterity: 18,
        constitution: 11,
        intelligence: 16,
        wisdom: 15,
        charisma: 12
    }
]

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
    var right_handed = "No"
    var current_name = ""
    
    populateTable()
    
    //Create new character button function
    document.getElementById("createnewcharacter").addEventListener("click", createnewcharacter);
    //Reroll button function
    document.getElementById("reroll").addEventListener("click", reroll);
    //Create character finalization button function
    document.getElementById("finalizecharacter").addEventListener("click", finalizecharacter);
    //Cancel character creation button
    document.getElementById("cancelbutton").addEventListener("click", cancelbutton);
    document.getElementById("finalizeEdit").addEventListener("click", finalizeEdit);
};

function createItem(name, race, charclass, gender, right, strength, dexterity, constitution, intelligence, wisdom, charisma){
    var newObject = {
        name: name,
        race: race,
        charclass: charclass,
        gender: gender,
        right: right,
        strength: strength,
        dexterity: dexterity,
        constitution: constitution,
        intelligence: intelligence,
        wisdom: wisdom,
        charisma: charisma
    }
    myList.push(newObject)
    return newObject
}

function getAllItems(){
    return myList
}

function getItemByName(name){
    for (item in myList){
        if (myList[item].name == name) {
            return myList[item]
        }
    }
}

function createnewcharacter(){
    document.getElementById("listdiv").style.display = "none"
    document.getElementById("formdiv").style.display = "block"
    document.getElementById("createnewcharacter").style.display = "none"
    document.getElementById("finalizeEdit").style.display = "none"
    document.getElementById("finalizecharacter").style.display = "block"
    document.getElementById("windowBanner").innerHTML = "Character Creation Window"
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
    document.getElementById("race").value = ""
    document.getElementById("class").value = ""
    document.getElementById("righthanded").checked = false
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
            right_handed = "Yes"
        }
        else {
            right_handed = "No"
        }
        createItem(name, race, character_class, gender, right_handed,  strength, dexterity, constitution, intelligence, wisdom, charisma)
        populateTable()
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

function populateTable(){
    document.getElementById("charactertable").innerHTML = "<tr id='labels'><td><strong>Name</strong></td><td><strong>Race</strong></td><td><strong>Class</strong></td><td><strong>Gender</strong></td><td><strong>Right Handed</strong></td><td><strong>STR</strong></td><td><strong>DEX</strong></td><td><strong>CON</strong></td><td><strong>INT</strong></td><td><strong>WIS</strong></td><td><strong>Cha</strong></td></tr>"
    for (item in myList) {
        document.getElementById("charactertable").innerHTML += "<tr id='stats'><td>" + myList[item].name + "</td><td>" + myList[item].race + "</td><td>" + myList[item].charclass + "</td><td>" + myList[item].gender + "</td><td>" + myList[item].right + "</td><td>" + myList[item].strength + "</td><td>" + myList[item].dexterity + "</td><td>" + myList[item].constitution + "</td><td>" + myList[item].intelligence + "</td><td>" + myList[item].wisdom + "</td><td>" + myList[item].charisma + `</td><td id="editdelete"><button type='button' class='edit' id='${myList[item].name}'>Edit</button></td><td id="editdelete"><button type='button' class='delete' id='${myList[item].name}'>Delete</button></td></tr>`
    }
    document.querySelectorAll('.edit').forEach(item => {
        item.addEventListener('click', editItem)})
    document.querySelectorAll('.delete').forEach(item => {
        item.addEventListener('click', deleteItem)})
}

function editItem(){
    current_name = this.id
    characterStats = getItemByName(this.id)
    strength = characterStats.strength
    dexterity = characterStats.dexterity
    constitution = characterStats.constitution
    intelligence = characterStats.intelligence
    wisdom = characterStats.wisdom
    charisma = characterStats.charisma
    name = this.id
    race = characterStats.race
    character_class = characterStats.charclass
    gender = characterStats.gender
    right_handed = characterStats.right
    document.getElementById("listdiv").style.display = "none"
    document.getElementById("formdiv").style.display = "block"
    document.getElementById("createnewcharacter").style.display = "none"
    document.getElementById("finalizecharacter").style.display = "none"
    document.getElementById("finalizeEdit").style.display = "block"
    document.getElementById("nameerrorbox").style.display = "none"
    document.getElementById("raceerrorbox").style.display = "none"
    document.getElementById("classerrorbox").style.display = "none"
    document.getElementById("windowBanner").innerHTML = "Character Editing Window"
    
    document.getElementById("strength").value = strength
    document.getElementById("dexterity").value = dexterity
    document.getElementById("constitution").value = constitution
    document.getElementById("intelligence").value = intelligence
    document.getElementById("wisdom").value = wisdom
    document.getElementById("charisma").value = charisma
    document.getElementById("charactername").value = name
    document.getElementById("race").value = race
    document.getElementById("class").value = character_class
    if (gender == "Male") {
        document.getElementById("male").checked = true
    }
    else {
        document.getElementById("female").checked = true
    }
    if (right_handed == "Yes"){
        document.getElementById("righthanded").checked = true
    }
    else {
        document.getElementById("righthanded").checked = false
    }
}

function finalizeEdit(){
    var has_name = true
    strength = document.getElementById("strength").value
    dexterity = document.getElementById("dexterity").value
    constitution = document.getElementById("constitution").value
    intelligence = document.getElementById("intelligence").value
    wisdom = document.getElementById("wisdom").value
    charisma = document.getElementById("charisma").value
    name = document.getElementById("charactername").value
    race = document.getElementById("race").value
    character_class = document.getElementById("class").value
    gender = document.querySelector('input[name=gender]:checked').value
    if (document.getElementById("righthanded").checked == true){
        right_handed = "Yes"
    }
    else {
        right_handed = "No"
    }
    if (document.getElementById("charactername").value == ""){
        has_name = false
    }
    if (has_name == true) {
        for (item in myList) {
            if (myList[item].name == current_name) {
                myList[item].name = name
                myList[item].race = race
                myList[item].charclass = character_class
                myList[item].gender = gender
                myList[item].right = right_handed
                myList[item].strength = strength
                myList[item].dexterity = dexterity
                myList[item].constitution = constitution
                myList[item].intelligence = intelligence
                myList[item].wisdom = wisdom
                myList[item].wisodom = wisdom
            }
        }
        document.getElementById("formdiv").style.display = "none"
        document.getElementById("listdiv").style.display = "block"
        document.getElementById("createnewcharacter").style.display = "block"
        document.getElementById("nameerrorbox").style.display = "none"
        populateTable()
    }
    else {
        if (has_name == false){
            document.getElementById("nameerrorbox").style.display = "block"
        }
    }
}

function deleteItem(){
    var character_name = this.id
    var r = confirm(`Are you sure you want to delete character: ${character_name}`)
    if (r == true) {
        var index = myList.findIndex(function(character) {
            return character.name == character_name
        })
        if (index > -1) {
            myList.splice(index, 1);
        }
        populateTable()
    } 
}