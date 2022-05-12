let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12

result = prompt("What is your name?", ["John"]);
alert(result);


"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // nan
"  -9  " + 5 // "  -9   5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // nan
" \t \n" - 2 // -2


5 > 4 // t
"ананас" > "яблоко" // f
"2" > "12" // t
undefined == null // t
undefined === null // f
null == "\n0\n" // f
null === +"\n0\n" // f