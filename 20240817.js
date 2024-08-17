//변수를 선언할 상수가 필요한 이유

// const currentYear=2022; //현재 연도

// let birthYear= parseInt(prompt("태어난 해를 입력하세요.")); //태어난 연도

// let age= currentYear- birthYear+1; //나이

//변수 재선언하고 재할당하기

function add(a,b){

    return a+b;
}

var sum=add(10,20);
console.log(sum);
var sum=100;  //var 
console.log(sum); //100

var sum=100; //var 변수는 재선언, 재할당 가능 
console.log(sum);

let data=5;
typeof(data);

let name="도레미";
let classroom=201;

console.log(name+"님"+classroom+"호 강의실로 입장하세요.");


name="백두산";
classroom=205;
console.log(`${name}님, ${classroom}호 강의실로 입장하세요`);

let gitBook={

    title:"깃허브 입문",
    pubDate:"2024-08-17",
    pages:272,
    finished:true
}

gitBook.title
gitBook["finished"]







