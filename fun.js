let sum=0;

function add(num1,num2){
    sum= num1+num2;
}

add(10,15);
console.log(sum);

//스코프
//범위,변수 혹은 함수가 갖게되는 유효 범위

//전역,지역,함수

//전역 스코프
//어디서든지 해당 변수에 접근 가능
//지역 스코프
//지역을 벗어난 곳에서는 접근 불가능

const number=10;

function print() {
    
    const sum=100;
    console.log('지역 스코프 ${num}')
}

//호이스팅
//아직 선언되지 않은 함수나 변수들을 해당 스코프의 맨위로 끌어올려 사용하는 작동방식
print();

function print() {
    console.log("hello world");
}

//변수 호이스팅
console.log(num);

var num=10;

//함수 선언식과 표현식
//함수 선언식 - 지금까지 사용했던 함수 선언 방식

//회살표형 함수

const test =()=>{
    console.log("");
};

//콜백함수

function start(name,callback) {
    console.log(`안녕하세요 ${name}입니다`);
    callback();
}

function finish() {
    console.log("감사합니다");
}

start("juyoung",finish);

