/*
The switch statement evaluates an expression, matching the expression's value to a case clause, 
and executes statements associated with that case. 
It provides a way to handle multiple conditions by comparing an expression against a set of possible values.
switch (expression) {
    case value1:
        // Statements executed when the result of expression matches value1
        break;
    case value2:
        // Statements executed when the result of expression matches value2
        break;
    // Add more cases as needed
    default:
        // Statements executed when none of the values match the expression
}


JavaScript switch Statement
Definition
The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case. It provides a way to handle multiple conditions by comparing an expression against a set of possible values.
Syntax
javascript
Copy code
switch (expression) {
    case value1:
        // Statements executed when the result of expression matches value1
        break;
    case value2:
        // Statements executed when the result of expression matches value2
        break;
    // Add more cases as needed
    default:
        // Statements executed when none of the values match the expression
}
        
Key Points
Expression: The value to compare against the case values.
Case Clauses: Each case contains a value and the code to execute if the expression matches the value.
break Statement: Exits the switch statement. If omitted, execution will continue to the next case (fall-through behavior).
default Clause: Optional; executed if no case matches the expression. Acts like the else statement in an if...else chain.

switch(-1){
    case 1:console.log(1);
    break
    case 2:console.log(2);
    break;
    case 3:console.log(3);
    break
    default:console.log(0)
}
*/

switch(-1){
    case 1:console.log(1);
    break
    case 2:console.log(2);
    break;
    case 3:console.log(3)
    break
    default:console.log(0)
}