let devOpsDetails = document.getElementById("devOpsDetails");

function openDevOpsDetails() {
  devOpsDetails.style.visibility = "visible";
}

let closeDevOpsDetails = () => {
  devOpsDetails.style.visibility = "hidden";
};

function calculate() {
    // Get the values from the input boxes
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var result;

    // Define an array of operations
    var operations = ['+', '-', '*', '/'];

    // Perform the operation using a for loop
    for (var i = 0; i < operations.length; i++) {
        if (operation === operations[i]) {
            if (operations[i] === '+') {
                result = num1 + num2;
            } else if (operations[i] === '-') {
                result = num1 - num2;
            } else if (operations[i] === '*') {
                result = num1 * num2;
            } else if (operations[i] === '/') {
                result = num1 / num2;
                
            }
            break;
        }
    }
    console.log(result);
    // Display the result
    document.getElementById('result').innerText = result;
}
