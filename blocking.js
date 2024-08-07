//동기란

//하나의 작업이 실행되는 동안은 다른 작업을 동시에 하지 않는 방식

//비동기 처리란
//여러 작업들을 동시에 작업하는 처리방식

const work=(callback)=>{
    setTimeout(()=>{
        console.log("3초만 기다리세요");
        callback();
    }, 3000);
    
};

work (()=>{
     console.log("종료");
});


console.log("종료");

// let colors=["green","blue","purple"];
// let[c1,c2,c3]=colors;

// // let c1=colors[0];
// // let c2=colors[1];
// // let c3=colors[2];

// console.log(c1);
// console.log(c2);
// console.log(c3);

let c1,c2,c3;
[c1,c2,c3]=["green","blue","purple"];

let a=10;
let b=5;
// let tmp;

// tmp=a;
// a=b;
// b=tmp;

console.log(a,b);



