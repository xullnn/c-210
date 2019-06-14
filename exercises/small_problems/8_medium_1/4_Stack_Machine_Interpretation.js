// The register is not part of the stack!
//
// which operations will pop out the last element:
//   - ADD
//   - SUB
//   - MULT
//   - MOD
//   - POP
//
// which only involve register value:
//   - N
//   - PRINT
//
// which push value into array
//   - PUSH
//
// ONLY PRINT will log info to console
//
// Initialize the stack and register to the values [] and 0, respectively.
//
// Arithmetic operatons are integer based
//
// Parse instruction into an array, transform any string number in to Number
//   '4 PUSH PUSH 7 MOD MULT PRINT'
//   [4, 'PUSH', 'PUSH', 7, 'MOD', 'MULT', 'PRINT']
//
// If N(single number)
//   update register
// If PRINT => print out register value
// If PUSH => inject value, keep register unchanged
// If - (ADD SUB MULT MOD POP)
//   pop and record the last value
//   Based on instruction perform certain operation with register value
//   Update register value to the result value
//
//

function minilang(command) {
  let commands = parseCommand(command);
  let register = 0;
  let stack = [];
  let operand;

  commands.forEach(command => {
    if (Number.isInteger(command)) {
      register = command;
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (command === 'PRINT') {
      console.log(register);
    } else if (/ADD|SUB|MULT|MOD|DIV|POP/.test(command)) {
      operand = stack.pop();
      if (command === 'ADD') register += operand
      else if (command === 'SUB') register -= operand
      else if (command === 'MULT') register *= operand
      else if (command === 'MOD') register %= operand
      else if (command === 'DIV') register = Math.floor(register / operand)
      else if (command === 'POP') register = operand
    }
  })
}

function parseCommand(command) {
  return command.split(' ').map(c => {
    return /[0-9]/.test(c) ? Number(c) : c;
  })
}



minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
