const nameArray = [];
 function display(nameList){ 
    let table = document.getElementById('tb');
    table.innerHTML = "";
    if(nameArray.length > 5){
        alert('invalid Input')
        for(let i = 0; i < nameList.length -1; i++){
            const name = nameArray[i].playerName;
    
            const tr = document.createElement("tr")
    
            tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${name}</td>
            `;
            table.appendChild (tr);

        } 
        return;
    }
    
    for(let i = 0; i < nameList.length; i++){
        const name = nameArray[i].playerName;

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${name}</td>
        `;
        table.appendChild (tr);

    }
    
 }


 
function addToSelect(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
     
if(nameArray.length < 5){
    nameArray.push({playerName});
    element.setAttribute('disabled', true)
}
else{
    alert('Top Five Football er selected Now. You don,t 5+ player ! Thank You Sir')
}
document.getElementById('total-added').innerText = nameArray.length;

display(nameArray);
     
}
function getInputValue(id){
    const input = document.getElementById(id);
    const inputString = input.value;
    const inputValue = parseInt(inputString);
    if(Math.sign(inputValue) === -1){
        alert('Invalid Input')
    }
    else{
        return inputValue; 
    }
      
}

document.getElementById('calculate').addEventListener('click', function(){

    const perPlayer = getInputValue('per-player');
    
    const perPlayerTotalCost = perPlayer *nameArray.length;
    if(isNaN(perPlayer)){
        alert('Inavlid Input')
        return;
    }
     document.getElementById('player-expense').innerText = perPlayerTotalCost;
    
});

document.getElementById('calculate-total').addEventListener('click', function(){
    const player = document.getElementById('player-expense').innerText;
    const playerExpense = parseInt(player);
    const managerExpense = getInputValue('manager');
    const coachExpense = getInputValue('coach');

    const total = playerExpense + managerExpense + coachExpense;
    
    const totalCost = document.getElementById('total-cost');
    if(isNaN(total)){
        alert('Invalid Input')
        return ;
    }
    totalCost.innerText = total;

});




