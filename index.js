let color= "skyblue";
color="yellow";
console.log(color);

//변수 명명 규칙
//예약어 사용 불가

let iscatordog;

//변수 선언시 카멜표기법 사용
let isCatOrDog;

let nowType="안녕하세요";
console.log(typeof nowType);

//상수 선언
//중간에 값 변경 불가능 
const color1="skyblue";



//원시타입 자료형
//프로그램이 실행되는 도중에는 단 하나의값을 갖고있는 자료형

let number=123;
number="123"; //원시타입

let array= [1,"2",3]; //비원시 타입

let name="juyoung";

let isClicked= false; // 버튼이 클릭되었는지 안되었는지
let isOpen= true;

if(isClicked){
    console.log("클릭 O");
}else{
    console.log("클릭X");

}
//널형
let name1=null;

//묵시적 형변환
let num1="15";
let num2=5;

console.log(num1/num2);


