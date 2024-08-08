//프로미스 객체

// const workA=(value,callback)=>{
//     setTimeout(()=>{
//    callback(value+5);
//     },5000);
// }

// const workB=(value,callback)=>{
//     setTimeout(()=>{
//    callback(value-3);
//     },3000)
// }
// const workC=(value,callback)=>{
//     setTimeout(()=>{
//    callback(value);
//     },10000)
// }
// const workD=(value,callback)=>{
    
//    callback(value);
   
// }




// workA(10,(resA)=>{
//     console.log(`1.${resA}`);
//     workB(resA,(resB)=>{
//         console.log(`2.${resB}`);
//         workC(resB,(resC)=>{
//             console.log(`3.${resC});
//         });
        
//     });
    
// });

const executor=(resolve, reject)=>{
    setTimeout(()=>{
        resolve("성공");
        console.log("3초만 기다리세요");
    },3000)
}
        
const promise= new Promise(executor);
//프로미스 객체의 내부 프로퍼티
//state:pending(대기)
//result:undefined

//state:fulfilled(성공)
//result: value

promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
     console.log(err);
});

const workA=(value)=>{
         const promise=new Promise((resolve,reject)=>{
            setTimeout(()=>{
               resolve(value-3);
            },3000)
         });
         return promise;
}
const workB=()=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(value+10);
        },10000)
     });
     return promise;
}

// workA(10).then((resA)=>{
//   console.log(`1.${resA}`);
//   workB(resA).then((resB)=>{
//      console.log(`2${resB}`);
//    workC(resB).then((resC)=>{
//     console.log(`2${resC}`);
//    });
//   });
// });

workA(10).then((resA)=>{
    return workB(resA);

}).then((resB)=>{
    return workC(resB)
}).then((resC)=>{
    console.log(`3.${resC}`)
})