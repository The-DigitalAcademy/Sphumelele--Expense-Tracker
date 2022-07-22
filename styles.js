var balance = 5500;
var income = 400;
var expense = 2290;
var history = [];

//Add transactions to DOM list
// function addTransaction() {}

// //update the balance, income and expense
// function updateValues() {
   
//     text = document.getElementById('text');
//      amount = Number (document.getElementById('amount').value);
// }

function displayS() {
    var balanceE = document.getElementById('balancetotal')
    var moneyIncome = document.getElementById('moneyplus')
    var moneyExpense = document.getElementById('moneyminus')

    tabledata = document.getElementById('tabledata')

    tabledata.innerHTML = `<table">
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    
</table>`

for (let index = 0; index < history.length; index++) {
    tabledata.innerHTML  += `<table>
    <tr>
      <td>fgbbnhf</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    </table>`
    
}
    balancetotal.innerHTML = `R${balance}`;
    moneyplus.innerHTML = `R${income}`;
    moneyminus.innerHTML = `R${expense}`;
}   
displayS();