let amount = document.getElementById('donateAmount').value;

function append00() {
  if (!amount.includes('.00')) {
    amount = amount + '.00';
    document.getElementById('donateAmount').value = amount;
  }
}


// Doenst give me error
// pls halp