function FocusBox(txt){
    txt.style.background = 'yellow';
}

function BlurBox(txt){
    txt.style.background = 'white';
}


function Submit(){

    // Input --> Value //
    let NameInput = document.getElementById('NameB');
        let Name = NameInput.value;
        console.log(Name);
    let SurnameInput = document.getElementById('SurnB');
        let Surname = SurnameInput.value;
        console.log(Surname);
    let Date = document.getElementById('Date');
        let BirthDate = DateInput.value;
        console.log(BirthDate);
    let langauge = document.getElementById('menu');
        choose = langauge.value;
        console.log(choose);

    // Output //
    let Output = document.getElementById('print');
        Output.innerHTML ='<span style="color: green;">'+Name +" , "+Surname+" , "+BirthDate+" , "+choose+'</span>'
    
}

function removeInstName(){
    document.getElementById('InstName').innerHTML = "";
    
}
function removeInstSur(){
    document.getElementById('InstSur').innerHTML = "";
    
}
function removeInstBD(){
    document.getElementById('InstBD').innerHTML = "";
    
}
function removeSelectL(){
    document.getElementById('SelectL').innerHTML = "";
    
}