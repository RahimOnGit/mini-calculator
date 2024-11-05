let tal1 = prompt("Enter the first number");
   let tal2 = prompt("Enter the second number");
   let teken = prompt("which calculation method would you use -,+,/,*")
   tal1 = parseFloat(tal1);
   tal2 = parseFloat(tal2);
   


if(tal1&&tal2)
{


switch(teken)
{
case "+" :
alert("the result is "+(tal1+tal2));
break;

case "-":
alert("the result is "+(tal1-tal2));
break;
case "/":
if(tal2!==0)
{
    alert("the result is "+(tal1/tal2));
}
else
{
    alert("Can't division by zero ..it's not possible");
}
break;

case "*":
alert("the result is "+(tal1*tal2));
break;

default:
    alert("wrong operation..");
    break;
}
}
else
{
    alert("please enter valid numbers")
}

