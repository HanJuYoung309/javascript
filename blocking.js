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
