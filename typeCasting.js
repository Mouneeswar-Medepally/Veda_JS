/*
Type casting in JavaScript, also known as type coercion or conversion, 
is the process of converting a value from one type to another. 
There are two types of type casting: implicit and explicit.

Implicit Type Casting (Type Coercion)
JavaScript automatically converts values to the expected type when it can. 
This usually happens during operations involving different types. 
For example:

let result;

result = 1 + '2';    // '12' (number to string)
result = '5' - 2;    // 3 (string to number)
result = true + 1;   // 2 (boolean to number)
result = false + '1'; // 'false1' (boolean to string)
result = '3' * '2';  // 6 (string to number)

Explicit Type Casting (Type Conversion)
You manually convert values from one type to another using functions or constructors.

To String
Using String() function
let num = 123;
let str = String(num); // "123"

Using toString() method:
let num = 123;
let str = num.toString(); // "123"

To Number
Using Number() function
let str = "123";
let num = Number(str); // 123

Using parseInt() or parseFloat() for integers and floating-point numbers:

let str = "123.45";
let intNum = parseInt(str);   // 123
let floatNum = parseFloat(str); // 123.45

To Boolean
Using Boolean() function

let str = "hello";
let bool = Boolean(str); // true

falsy values: values that are considered as false - 
0, undefined,null , empty string (''), NaN, false



Operator precedence:

In JavaScript, operator precedence determines the order in which operators are evaluated in expressions. Operators with higher precedence are evaluated before operators with lower precedence. When operators have the same precedence, they are evaluated based on their associativity, which can be either left-to-right or right-to-left.

### Operator Precedence Table
Here is a table of JavaScript operators in order of precedence, from highest to lowest:

Expressions in parentheses are computed before the rest of the expression
Function calls are executed before the result is used in the rest of the expression

Val   Operator      Description                    Example
18    ( )           Expression Grouping            (100 + 50) * 3
17    .             Member Of                      person.name
17    []            Member Of                      person["name"]
17    ?.            Optional Chaining (ES2020)     x ?. y
17    ()            Function Call                  myFunction()
17    new           New with Arguments             new Date("June 5,2022")
16    new           New without Arguments          new Date()
15    ++            Postfix Increment              i++
15    --            Postfix Decrement              i--
14    ++            Prefix Increment               ++i
14    --            Prefix Decrement               --i
14    !             Logical NOT                    !(x == y)
14    ~             Bitwise NOT                    ~x
14    +             Unary Plus                     +x
14    -             Unary Minus                    -x
14    typeof        Data Type                      typeof x
14    void          Evaluate Void                  void(0)
14    delete        Property Delete                delete myCar.color
13    **            Exponentiation (ES2016)        10 ** 2
12    *             Multiplication                 10 * 5
12    /             Division                       10 / 5
12    %             Division Remainder             10 % 5
11    +             Addition                       10 + 5
11    -             Subtraction                    10 - 5
11    +             Concatenation                  "John" + "Doe"
10    <<            Shift Left                     x << 2
10    >>            Shift Right (signed)           x >> 2
10    >>>           Shift Right (unsigned)         x >>> 2
9     in            Property in Object             "PI" in Math
9     instanceof    Instance of Object             x instanceof Array
9     <             Less than                      x < y 
9     <=            Less than or equal             x <= y
9     >             Greater than                   x > y
9     >=            Greater than or equal          x >= y
8     ==            Equal                          x == y
8     ===           Strict equal                   x === y
8     !=            Unequal                        x != y
8     !==           Strict unequal                 x !== y
7     &             Bitwise AND                    x & y
6     ^             Bitwise XOR                    x ^ y
5     |             Bitwise OR                     x | y
4     &&            Logical AND                    x && y
3     ||            Logical OR                     x || y
3     ??            Nullish Coalescing (ES2020)    x ?? y
2     ? :           Conditional (ternary)          ? "yes" : "no"
2     =             Simple Assignment              x = y
2     :             Colon Assignment               x: 5
2     +=            Addition Assignment            x += y
2     -=            Subtraction Assignment         x -= y
2     *=            Multiplication Assignment      x *= y
2     **=           Exponentiation Assignment      x **= y
2     /=            Division Assignment            x /= y
2     %=            Remainder Assignment           x %= y
2     <<=           Left Shift Assignment          x <<= y
2     >>=           Right Shift Assignment         x >>= y
2     >>>=          Unsigned Right Shift Assignment x >>>= y
2     &=            Bitwise AND Assignment         x &= y
2     |=            Bitwise OR Assignment          x |= y
2     ^=            Bitwise XOR Assignment         x ^= y
2     &&=           Logical AND Assignment         x &&= y
2     ||=           Logical OR Assignment          x ||= y
2     =>            Arrow                          x => y
2     yield         Pause / Resume                 yield x
2     yield*        Delegate                       yield* x
2     ...           Spread                         ... x
1     ,             Comma                          x , y

*/