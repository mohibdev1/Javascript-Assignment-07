// Q1
document.write("<h2>Chp:25 to 30 Q1 </h2>");
var num = prompt("Q1: Enter a positive number:");
    num = Number(num);

    document.write("number: " + num + "<br>");
    document.write("round off value: " + Math.round(num) + "<br>");
    document.write("floor value: " + Math.floor(num) + "<br>");
    document.write("ceil value: " + Math.ceil(num) +"<br><br>");

    // Q2
    document.write("<h2>Chp:25 to 30 Q2 </h2>");
     var num = prompt("Q2: Enter a negative floating point number:");
    num = Number(num);

    document.write("Number: " + num +"<br>");
    document.write("Round off value: " + Math.round(num) + "<br>");
    document.write("Floor value: " + Math.floor(num) + "<br>");
    document.write("Ceil value: " + Math.ceil(num) +"<br><br>");

    // Q3
    document.write("<h2>Chp:25 to 30 Q3 </h2>");
    var num = prompt("Q3: Enter a number");
    num=Number(num);

    var absvalue =Math.abs(num);
    document.write("The absolute value of" + num  +  "is" + absvalue +"<br><br>");

    // Q4
    document.write("<h2>Chp:25 to 30 Q4 </h2>");
     var dice = Math.floor(Math.random() * 6) + 1;

    document.write("random dice value: " + dice +"<br><br>");

    // Q5
    document.write("<h2>Chp:25 to 30 Q5 </h2>");
     var toss = Math.floor(Math.random() * 2);

    if (toss === 0) {
        document.write("random coin value: Heads" +"<br>");
    } else {
        document.write("random coin value: Tails" +"<br><br>");
    }

    // Q6
    document.write("<h2>Chp:25 to 30 Q6 </h2>");
       // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
      
    document.write("random number between 1 and 100: " + randomNumber + "<br><br>");


    //   Q7
    document.write("<h2>Chp:25 to 30 Q7 </h2>");
     let userInput = prompt("Q7: Enter your weight in kilograms");
    let weight = parseFloat(userInput);
     
    document.write("The weight of user is " + weight + " kilograms<br><br>");


    //   Q8
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let userNumber;

  for (;;) {
      const userinput = prompt("Q8: Enter a number between 1 and 10");
      userNumber = parseInt(userinput);

      if (userNumber === secretNumber) {
          alert("Congratulations! You guessed the correct number ");
          break; // Exit the loop
      } else {
          alert("Wrong guess, try again!");
      }
  }

