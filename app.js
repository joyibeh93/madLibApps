
"use strict";

window.onload = () => {
// number of questions to asks
let numberOfQuestion =11;

//loop counter
let questionCounter = 0;
//user prompt
let userinput =`please enter a verb or noun`;

// the  questions
let questionArray = [
  ( `${userinput}child ("daughter", "son-in-law" etc)`),
  ( `${userinput} person( "cat","woman","boat")`),
  (`${userinput}person("institution","school","man")`),
  (`${userinput}verb("singing","missing","running")`),
  (`${userinput}noun("firewood","water","snake")`),
  (`${userinput}evil("young","energetic","witch")`),
  (`${userinput}verb("voice","step","chair")`),
  (`${userinput}huntingjob("hunter","farmer","teacher")`),
  (`${userinput}verb("running","playing","swimming")`),
  (`${userinput}noun("boy","horse","prince")`),
  (`${userinput}popular("Ralia","shiwa","suzzan")`),
  (`${userinput}settlement("village","town","city")`)

];
let userInputs=[];
// an array  that stores user input
for (let i = numberOfQuestion; i >= 0; i--){
  //console.log(i);
  alert(questionArray[questionArray] + `(${numberOfQuestion} questions left)`);
  userInputs.push(prompt(questionArray[questionCounter] + `... (${numberOfQuestion} questions left)`));
  console.log(userInputs);
  console.log(questionCounter =questionCounter +1);
  console.log(numberOfQuestion--);
}


// The Plot Ralia Story of Ralia the sugar girl
let originalStory = `<h2>Ralia is the ${userInputs[0]},of a blind ${userInputs[1]} and a 
${userInputs[2]} with a broken back who goes ${userInputs[3]} in the forest while arranging 
${userInputs[4]} and is taken in by an old ${userInputs[5]} who offer her accommodation in 
return for Ralia's singing ${userInputs[6]}.Fews days later Ralia runs away from the ${userInputs[5]} house.
she is taken by a  ${userInputs[7]} and his family which Ralia befriends the ${userInputs[7]},${userInputs[0]}.
"</h2>
 <h2>One day while"${userInputs[8]} together" she is knocked down by the  ${userInputs[9]},who takes her to his home to nurse her.
  After recovering ${userInputs[10]}  was taken back home to her ${userInputs[11]} where she unites with her parents"</h2>`;

  // End of User Inputs
  alert(
    "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
  );

  // Output
  console.log(originalStory);
  document.write(mainStory);
};




// the main plot story of Ralia the sugar girl

 mainStory = `Ralia is the daughter of a blind woman and a man with a broken back who goes missing in the
forest while arranging firewood and is taken in by an old witch who offers her accomdation 
in return for Ralia's singing voice.//Fews days later Ralia runs away from the witch house.
 She is taken in by a hunter and his family which Ralia befriends the hunter daughter.
One day while playing together, She is knocked down by a prince who takes her his home to nurse her.

After recovering Ralia is taken back home to her village where she reunites with her parents`