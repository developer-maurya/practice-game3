let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn0 = true;
// let arr =["apple", "banana", "litchi"]

// let arr2 = [["apple", "litchi"], ["patato", "mushuroom"],["pants","shirt"]]

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("click");
      if(turn0){
        box.innerText = "0";
        turn0 = false;
      } else{
        box.innerText="X"
        turn0= true
      }
      box.disabled = true
      checkWinner();
    })
   
})

const checkWinner =() =>{
    for(pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2])

        console.log(boxes[pattern[0]].innerText,
        boxes[pattern[1]].innerText,
        boxes[pattern[2]].innerText)
    }
}







