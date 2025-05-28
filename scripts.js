let GameInfo = document.querySelector(".GameInfo");
let newgamebtn= document.querySelector(".btn");
console.log(GameInfo);

let innercontainergrid = document.querySelectorAll(".innercontainergrid");
console.log(innercontainergrid);    
let temparray = new Array(3);
let  currentPlayer=null;
function gameinit()
{
     currentPlayer="X";
    GameInfo.textContent=`CurrentPlayer : ${currentPlayer}`;

    gamegrid_locations=["","","","","","","","",""];
    

    
    
    newgamebtn.classList.remove("active");
    newgamebtn.classList.add("inactive");




        temparray.forEach(function(formalp) {
            innercontainergrid[formalp].classList.remove("wincolor") ;
        })


    innercontainergrid.forEach(function (formalp) {
        formalp.style.cssText="pointer-events:all";

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
    }
    else if (currentPlayer == "O")
    {
            GameInfo.textContent=`Turn of ${currentPlayer}...`;
    }
}



function handleclickforNotHavingRedudantPlaceClick(formalp)

{
    if (gamegrid_locations[formalp]==="")
    {
              innercontainergrid[formalp].style.cssText="font-size:44px ; color: white ; ";
                innercontainergrid[formalp].textContent = `${currentPlayer}`;
                gamegrid_locations[formalp]=`${currentPlayer}`;
                 swapX_to_O();
                changeX_to_O_in_UserInfo();
                When_Player_win_track();


                 let check =true;
                gamegrid_locations.forEach(function (formalp) {
                                if(formalp==="")
                                {
                                    check =false;
                                }
                })



                    if (check===true)
                    {
                        GameInfo.textContent="Draw...";
                        newgamebtn.classList.add("active");
                    }
    }
 
}





let tempZ= new Array(9);
innercontainergrid.forEach(function (formalp, notingindex ) {

    formalp.addEventListener("click" , function(event) {


        tempZ.push(notingindex);


        handleclickforNotHavingRedudantPlaceClick(notingindex) ;
    })
}  )



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



function      When_Player_win_track()
{
    winningPositions.forEach(function(formalp) {
        if (  (gamegrid_locations[formalp [0]  ] !="" || gamegrid_locations[formalp[1] !=""] ||  gamegrid_locations[formalp[2] ]!="")  &&(  gamegrid_locations[formalp[0]] == gamegrid_locations[formalp[1] ] ) && ( gamegrid_locations[formalp[1] ] == gamegrid_locations[formalp[2]  ] )  )
                    {


                        console.log("check : ",innercontainergrid);
                        console.log(innercontainergrid[formalp[0]] );
                        console.log(innercontainergrid[formalp[1]] );
                        console.log(innercontainergrid[formalp[2]] );

                        innercontainergrid[formalp[0]].classList.add("wincolor")
                        innercontainergrid[formalp[1]].classList.add("wincolor")
                        innercontainergrid[formalp[2]].classList.add("wincolor")
                        
                        temparray.splice(0,0,formalp[0]);
                        temparray.splice(1,0,formalp[1]);
                        temparray.splice(2,0,formalp[2]);
                        


                        console.log("win...");
                         GameInfo.textContent=`${gamegrid_locations[formalp [0]  ] } wins...` ;
                        
                            innercontainergrid.forEach(function (formalp){
                            formalp.style.cssText="pointer-events:none ; font-size:44px ; color: white ;";

                        }  );




                        newgamebtn.classList.add("active") ;
                        
           
                        newgamebtn.addEventListener("click", function (event) {
                                            
                            gameinit();
                        })


                    }

               
    }  )
}


newgamebtn.addEventListener("click",function() {
    
    gameinit();
})