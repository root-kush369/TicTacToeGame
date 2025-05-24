// step1 
let GameInfo = document.querySelector(".GameInfo");
let newgamebtn= document.querySelector(".btn");
console.log(GameInfo);

let innercontainergrid = document.querySelectorAll(".innercontainergrid"); //gives array
console.log(innercontainergrid);
let temparray = new Array(3);
let  currentPlayer=null;
// step2
function gameinit()
{
    // step1 
     currentPlayer="X";
    GameInfo.textContent=`CurrentPlayer : ${currentPlayer}`;

    // step2 gamegrid ko esaa krna hai reset
    gamegrid_locations=["","","","","","","","",""];
    

    // console.log(typeof(x));
    // console.log(typeof(gamegrid_locations));
    
    
    // step3 //means button hta dena hai new game walaa taki game ke time bakchodi na ho reset krne ke users mai!
    newgamebtn.classList.remove("active");
    newgamebtn.classList.add("inactive");


    // step4 wincolor wali class css ke hai jo in elements mai innercontainer is array uske andr array of element hai usme se remove krne hae


        temparray.forEach(function(formalp) {
            innercontainergrid[formalp].classList.remove("wincolor") ;
        })
                                            // innercontainergrid[temp[0]].classList.remove("wincolor")
                                            // innercontainergrid[formalp[1]].classList.remove("wincolor")
                                            // innercontainergrid[formalp[2]].classList.remove("wincolor")


                                            // step5 pointer events none
    innercontainergrid.forEach(function (formalp) {
        formalp.style.cssText="pointer-events:all";

        // step 6 step2 is done but actually remove krna hai whaa se text
     innercontainergrid.forEach(function(formalp) {
        formalp.textContent="";
     })
        
    })                                            

  

}
gameinit();


console.log("call");



function swapX_to_O()
{
    if (currentPlayer =='X')
    {
        currentPlayer='O';

    }
    else if (currentPlayer == "O")
    {
        currentPlayer='X';
        GameInfo.textContent=`Turn of ${currentPlayer}...`;
    }
}

function changeX_to_O_in_UserInfo()
{
     if (currentPlayer =='X')
    {
             GameInfo.textContent= `Turn of ${currentPlayer}...`;
    //  return currentPlayer;
    }
    else if (currentPlayer == "O")
    {
    //   currentPlayer ="X";
            GameInfo.textContent=`Turn of ${currentPlayer}...`;
    //   return currentPlayer;
    }
}



function handleclickforNotHavingRedudantPlaceClick(formalp) //formalp is index so in array of  innercontainergrid i can insert 'X or O' 

{
    if (gamegrid_locations[formalp]==="") //this ensure no same tick comes
    {
              innercontainergrid[formalp].style.cssText="font-size:44px ; color: white ; "; /*to change color*/
                innercontainergrid[formalp].textContent = `${currentPlayer}`;
                gamegrid_locations[formalp]=`${currentPlayer}`; //fill up krde wo array
                 swapX_to_O();
                changeX_to_O_in_UserInfo(); /*for management created new function*/
                When_Player_win_track();


                // handle click krte hue check krna hai
                 let check =true;
                gamegrid_locations.forEach(function (formalp) {
                                if(formalp==="")
                                {
                                    check =false;
                                }
                }) //means board touch ne hua to draw nahi leekhna



                    //but agr board touch hua or yhaa tk b agr koe win  nahi aara h to  draw for sure
                    if (check===true)
                    {
                        GameInfo.textContent="Draw...";
                        newgamebtn.classList.add("active");
                        //  gameinit();
                    }
    }
 
}





// step3
let tempZ= new Array(9);
innercontainergrid.forEach(function (formalp, notingindex ) {

    formalp.addEventListener("click" , function(event) {
        // console.log("sws");

        // formalp.textContent="X";

        tempZ.push(notingindex);


        handleclickforNotHavingRedudantPlaceClick(notingindex) ; //called handleclick
    })
}  )

// newgamebtn.addEventListener("click")


// step4 win game
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

// let temparray=[]; //it increase dynamically so take fix size


function      When_Player_win_track()
{
    winningPositions.forEach(function(formalp) {
        // used or here to optimise so cpu won't go to check further 
        if (  (gamegrid_locations[formalp [0]  ] !="" || gamegrid_locations[formalp[1] !=""] ||  gamegrid_locations[formalp[2] ]!="")  &&(  gamegrid_locations[formalp[0]] == gamegrid_locations[formalp[1] ] ) && ( gamegrid_locations[formalp[1] ] == gamegrid_locations[formalp[2]  ] )  )
                    {

                        // jese he win

                        // step 1
                        // color laana hai un specific win box pr
                        console.log("check : ",innercontainergrid); //its array of element so specific element mai color bhej deeya
                        console.log(innercontainergrid[formalp[0]] );
                        console.log(innercontainergrid[formalp[1]] );
                        console.log(innercontainergrid[formalp[2]] );

                        innercontainergrid[formalp[0]].classList.add("wincolor")
                        innercontainergrid[formalp[1]].classList.add("wincolor")
                        innercontainergrid[formalp[2]].classList.add("wincolor")
                        
                        // step2 un boxes ka track so stored in array so i can remove color of new game
                        //>>>>>>>>>>>>>>>>>>>>>>>
                        // in location pr color udana hai green tbhi daal deeya 
                        temparray.splice(0,0,formalp[0]);
                        temparray.splice(1,0,formalp[1]);
                        temparray.splice(2,0,formalp[2]);
                        //>>>>>>>>>>>>>>>>>>>>>
                        


                        // step3 win tag player info
                        console.log("win...");
                        // GameInfo.textContent="win";
                         GameInfo.textContent=`${gamegrid_locations[formalp [0]  ] } wins...` ;
                        
                        // step4 pointer events ko none krdo
                            innercontainergrid.forEach(function (formalp){
                            formalp.style.cssText="pointer-events:none ; font-size:44px ; color: white ;";

                        }  );

                        //step5 newgame button

                        // let wrapperRetrieve= document.querySelector(".wrapper");
                        // console.log("de:",wrapperRetrieve);

                        // wrapperRetrieve
                        // activate krna hai new button

                        newgamebtn.classList.add("active") ;
                        
           
                        newgamebtn.addEventListener("click", function (event) {
                                            
                            gameinit();
                        })


                    }

               
    }  )
}
//    else if    (  (gamegrid_locations[formalp [0]  ] !="" || gamegrid_locations[formalp[1] !=""] ||  gamegrid_locations[formalp[2] ]!="")  &&(  gamegrid_locations[formalp[0]] !== gamegrid_locations[formalp[1] ] ) && ( gamegrid_locations[formalp[1] ] !== gamegrid_locations[formalp[2]  ] ) && (gamegrid_locations .length===9 ) )
//             {
//                 GameInfo.textContent="DRAW..."
//             }             


newgamebtn.addEventListener("click",function() {
    
    gameinit();
})