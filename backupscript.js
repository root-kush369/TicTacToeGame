let GameinformationOnTop=document.querySelector(".GameInfo");
let boxesHu= document.querySelectorAll( ".innercontainergrid");
let newgamebtn= document.querySelector(".btn")

console.log(GameinformationOnTop);
console.log(boxesHu);
console.log("k ::",newgamebtn);

let currentPlayer;
let gamegrid_locations;
let winningPositions=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]; 
function gameinit()
{
    currentPlayer="X";
    GameinformationOnTop.textContent=`CurrentPlayer : ${currentPlayer}`;
    gamegrid_locations=["","","","","","","","",""];
    

    console.log(typeof(x));
    console.log(typeof(gamegrid_locations));
    newgamebtn.classList.add("inactive");


  

}
gameinit();
console.log("call");

// console.log(newgamebtn);


// 2nd Actualargument in forEach predicate function is for index

// loop

// valueofXO[2]=[]

let tempX=[3];
let tempY=[3];
let tempZ = new Array(9);//for point @Opx
let count=0;
let counttwo=0;


// boxesHu.forEach(function(temp){
//     // temp.value="";
// })





 



function swapX_to_O()
{
    if(`${currentPlayer}` === 'X')
    {
        currentPlayer ='O';
        // GameinformationOnTop.textContent=`CurrentPlayer : ${currentPlayer}`;
    }
    else if (`${currentPlayer}`=='O')
    {
        currentPlayer='X';
        // GameinformationOnTop.textContent=`CurrentPlayer : ${currentPlayer}`;
    }
}
function changeX_to_O_in_UserInfo()
{
    if(`${currentPlayer}` === 'X')
        {
            GameinformationOnTop.textContent=`CurrentPlayer : ${currentPlayer}`;
        }
        else if (`${currentPlayer}`=='O')
        {
            GameinformationOnTop.textContent=`CurrentPlayer : ${currentPlayer}`;
        }   
}







// ....................................................................................................................


let tempArray=new Array(3);

let counter=0;

function When_Player_win_track(){
    
    let answer=""; /*used to present draw on top of screen on userInfo Banner*/
    
    
    winningPositions.forEach(function(temp){ //here temp mapps to each element of array winningPosition
        // console.log("t :",temp); /*Tracking..*/

        // array ke andr array ke 0,1,2 position check~NestedArray h ye

        // bruteforce algo
        //i will try to fast it by binary search
        if ( (gamegrid_locations[temp[0] ] !== "" || gamegrid_locations[ temp[1] ] !=="" || gamegrid_locations[temp[2] ]!=="" ) && ( gamegrid_locations[ temp[0] ] ===  gamegrid_locations[  temp[1] ])&& ( gamegrid_locations[ temp[1] ] === gamegrid_locations[temp[2] ] ) )
        {
            // console.log(al)
            boxesHu[temp[0]].classList.add("wincolor");
            boxesHu[temp[1]].classList.add("wincolor");
            boxesHu[temp[2]].classList.add("wincolor");
            

            // here i kept track of all positions of array where it maps winningpositionarray via temp stored in tempArray so i can remove
            // greencolor later from it


            tempArray.splice(0,0,temp[0]);
            tempArray.splice(1,0,temp[1]);
            tempArray.splice(2,0,temp[2]);
            

            boxesHu.forEach(function(check){
                

                check.style.cssText="pointer-events:none ; font-size:44px ; color: white ;";
                /*when won do pointevents :none so ek he baar win ho wrna uske theek baad suppose X win hogya or ek box mark se O rehgya
                to wo be jeet skta h*/
                
                //...................................................................
                //ANOTHER WAY OF STYLING {check which is actual argument}
                // element.style.cssText += "pointer-events: none;"; 
                /*or i can use this if i dont want to override previous properties
                style.cssText only used when i want to use default syntax of css with multiple css properties*/
                //...................................................................
                
                
                // console.log("check:",check);/*check is each single element of array [boxesHu div]*/
            });

            newgamebtn.classList.add("active"); /*active bcoz game won start new game now*/

            swapX_to_O();/*bcoz as X won to O aayega usko dubara btane ke leeye ke X jeeta swapX_toO() call krna hoga so on top userinfo 0 show hojaye*/
            console.log(`${currentPlayer} won...`);
            GameinformationOnTop.textContent=`${currentPlayer} won...`;
             
            // alert(`${currentPlayer} won...`);
            // alert last ka tick rok rha h
            answer=`${currentPlayer} won...`;

            
        }
     

       


    }); 



    
    // console.log("answer is : ",answer);`// tracking
    
    
    if (answer!== "")
    {
        // console.log("HOGYAAAAAAAAAAAAAAAAAA RETURN")
        return;
    }
    
    
    let boardFilled = true; /*like a flag variable*/
   
    gamegrid_locations.forEach(function(t,ind){
        
        // console.log("each index : ", ind , "value : ", t);
        if (t === "")
        {
            console.log("no item in gamegrid");
            boardFilled = false;
        }
    });


    // console.log("counter is : ",counter);
    
    if(boardFilled === true) //items are there in grid and agr uprr tk return ne hua to chess m draw hogya h
    {
        // alert("game is draw");
        GameinformationOnTop.textContent="game draw";
        newgamebtn.classList.remove("inactive");
        newgamebtn.classList.add("active");
        
        
    }
  
    
       
    
}

// newgamebutton ke click hote aayega
function gameresetonNewbuttonclick()
{
    boxesHu.forEach(function(loc,index){
       console.log("in",index);
        // loc[index]="";
        
        boxesHu[index].textContent="";/*9 times remove it to 0 on screen ui of X | O game  */
        gamegrid_locations[index]="";    
        
    });

   
    
    // winning positions jo ke jeete whaa nongreen krdo tbhi tempArray m wo 3 location store kee thee or upr temparray declare keeya
    tempArray.forEach(function(temp){ //@Opx
        boxesHu[temp].classList.remove("wincolor");
        // console.log("seeTempArray's Each item by forEach: ",temp); //tracking
        // console.log("seeEntire TempArray: ",tempArray);//tracking
    });
    
    
    currentPlayer="X"; /*reset to x on top */
    GameinformationOnTop.textContent=`CurrentPlayer : ${currentPlayer}`; /*reset to x on top  `gameinformation of top*/

      // 1 or cheez jo thee wo ye aayege
      boxesHu.forEach(function(check){
        check.style.pointerEvents="all" ; /*game reset hote he newgame pr sb click on boxes start krdo*/
        
        // element.style.cssText = "pointer-events: all;"; 
            /*or i can use this(style.pointerEvents(js way of writing css)) if i dont want to override previous properties
                    
            
            //but if i use style.cssText
                style.cssText only used when i want to use default syntax of css with multiple css properties*/
        // console.log(check); /*tracking*/
    });
    newgamebtn.classList.remove("active");
    newgamebtn.classList.add("inactive");


    // console.log("mmmmmmmmmmmmmmmmmmmmmmm"); /*for tracking*/
    // console.log(gamegrid_locations);
    // console.log(boxesHu);
}





// click event/eventlistener~asynccode goes in eventloop
newgamebtn.addEventListener("click",function(e){
    
    gameresetonNewbuttonclick();    
})





function handleclick(formalParameterIndex)
{
    // console.log("indexhere:",formalParameterIndex);
    if (gamegrid_locations[formalParameterIndex] === "" ) /**VVVVVVvimp~~~~> tbhi bhrunga Xya0 wrna nahi isse redudant ek he box pr dubara click ne hoga**/
    {
        boxesHu[formalParameterIndex].style.cssText="font-size:44px ; color: white ; "; /*to change color*/
        boxesHu[formalParameterIndex].textContent = `${currentPlayer}`;
        // uske baad swap logic //swapturn x to O

        gamegrid_locations[formalParameterIndex]=`${currentPlayer}`;
        swapX_to_O();
        changeX_to_O_in_UserInfo(); /*for management created new function*/
        When_Player_win_track();
        
       
        

    

    }


}







// Click events for allboxes
// click event/eventlistener~asynccode goes in eventloop




boxesHu.forEach(function(event,indexNumber){
    console.log(event);//tracking 1st index e is for predicate function mapped e with all items of inneritems which are childgrid/flex too
    console.log("i:",indexNumber); //tracking 2nd item is index always starts from 0 to n
    
    
                // async function
                event.addEventListener("click",function(event){
                                // console.log("evenntName: ",event);   /*Just Tracking*/
                    console.log("Box number : ",indexNumber);
                    tempZ.push(indexNumber);
                    
                    
                    handleclick(indexNumber);
                });



                
});














/**Array knowledge
 * with friend grok2
 * 
 * 
 * 
 * so either we can delcare array with new concept or give value inside square brackets right only 2 ways we have in js and both lead to dynamic naturE?
Yes, that's correct. In JavaScript, you have primarily two ways to declare arrays, and both result in arrays that are dynamic in nature:

Using the Array Constructor:
javascript
let array1 = new Array(9); // Creates an array with 9 undefined elements
let array2 = new Array("a", "b", "c"); // Creates an array with specific values
Using Square Bracket Notation:
javascript
let array3 = []; // Creates an empty array
let array4 = ["", "", "", "", "", "", "", "", "", ""]; // Creates an array with 10 empty string elements

Both methods lead to dynamic arrays where:

You can add or remove elements at any time, and the array will adjust its size accordingly.
The JavaScript engine manages memory through garbage collection, automatically handling the allocation and deallocation of memory for these arrays.*/
