/**
 * Khai báo biến:
 * +Khai báo biến với let và const 
 * + so sánh giữa .vs let .vs const (hoiting ,scope)
 *  .var có hoisting, function scope (nó lớn hơn let và const )
 *  .let,const ko có hoisting ,block scope (block là mấy cái biến khai báo 
 *      trong vong for hoặc if thì bên ngoài  ko sử dụng được(do cùng cấp))
 *  .const: bắt buoojc phải gán giá trị khai báo và không được re-assign giá trị
 * +nên dùng cái nào trong trường hợp nào
 *  .var: khi browser ko sử hỗ trợ (let,const )
 *  .const :khi ko cầm re-assign giá trị
 */

// scope của var là trong 1 function còn của let thì nhỏ hơn chỉ trong phạm vi let hoặc for
/**
 * vd: function abc(){
    var x= 'ccc'
    if(){
        let c='23'
    }=>chỉ có thể gọi lại trong cái if này thôi, bên ngoài ko gọi đc
}=>trong phạm vi củ function này thì đền có thể xem clg(x);
 */

//var
// console.log(fullName);//work (undefined) => hoisting
// fullName='chu ho dong'
// console.log(fullName);
// var fullName = 'chu ho tay';
// age =18;// work (không cần dung từ khóa khai báo)
// console.log(fullName,age);
//biến global(ai cũng có thể sử dụng)


//biến local chỉ bên trong ms đc sd
// function showErrorWithVar(){
//     var isError=true;
//     var error='';
//     if(isError){
//         var error = 'Something went wrong !';
//         console.log(error);
//     }
//     console.log(error);
//     console.log(fullName); //gọi được bên ngoài
// }

//  showErrorWithVar();




 //let : ko thể hoisting (phải khai báo xong mới đc dùng)
//  console.log(tuoi);//Cannot access 'tuoi' before initialization
//  let tuoi =18;
//  console.log(tuoi);
//  let tuoi = 19;
//  console.log(tuoi);//error

 //=> trong 1 scope(global,local) khong đc khai báo cùng tên biến 
 // hàm let baan trên lỗi nên function phía dưới ko chạy được

 function showErrorWithLet(){
    let isError=true;
    let error='';
    if(isError){
        let error = 'Something went wrong !';
        console.log(error);
    }
    console.log(error);//=> rỗng do let nó ko cho hoisting 
    // console.log(fullName); 
}

showErrorWithLet();
//=>2 cái đều lỗi do ko đc gọi trung tên




//const (ko có co chết hoisting )
// console.log(birthday );
// const birthday = 28;

// const birthday;//sai (phải có giá trị khi gán )

// const Name = 'chu ho tay';
// Name =' chu '//sai vì ko đc gán lại cho nó


// function showErrorWithLet(){
//     const isError=true;
//     const error='';
//     if(isError){
//         const error = 'Something went wrong !';
//         console.log(error);
//     }
//     console.log(error);//=> rỗng do let nó ko cho hoisting 
//     // console.log(fullName); 
// }

// showErrorWithLet();



/**
 * Function
 * -Arrow function
 * - so sánh declaration .vs expression (normal func) .vs arorw func(cú pháp,con trỏ this)
 * - Trường hợp nên và ko nên dùng arrow func
 */

//Normal func
const calcAgeNormal = function(birthYear){
    console.log(this);
    console.log(2021- birthYear);
} 
calcAgeNormal('2000');

//arrow func
/**
 * không định nghãi bối cảnh thực thi của riêng nó
 * không quan tâm nó thực thi trong ngữ cảnh nào,giá this của arrow func=this của outer func 
 * Nếu ko có outer func thì this = global object (windown )
 * không sử dụng arrow funtion để làm phương thức của object
 * -không dung arror func làm phương thức obj
 * -không dùn arrow func làm func contructor
*/
const calcAgeArrow = (birthYear) =>{
    console.log(this);
   console.log(2021- birthYear);

}
calcAgeArrow('2000');


//shorter
const calcAgeArrowShort = (birthYear)=> 2021 - birthYear;
console.log(calcAgeArrowShort('2000'));

const calcAgeArrowParam = birthYear => 2021 - birthYear;//chỉ có 1 param(birthyear),
//nếu có 2 param trỏ lên thì sài dấu ngoặc 

const getEle = id=>document.getElementById(id);

const student={
    name :'tay',
    birthDay: 28,
    calcAgeNormal1 :function(){
        // console.log('calcAgeNormal1',this);
        console.log(2021 - this.birthDay);//this =student(do được gọi trực tiếp từ 
        // student)hs gán _this= student (this)

        //Cách 1: sửa lỗi thid bằng cac
        // const _this = this;

        // const checkAgeNormal=function(){
        //     console.log(this);
        //     if(2021- this.birthDay>=18){ //this ở đây là windown (do checkAgeNormal là hàm
        //         //con của calcAgeNormal1)
        //         console.log('you r old enough');
        //     }
        //     else{
        //         console.log('you r not old enough');
        //     }
        //     // Cách 2: hoặc có thể gán this bằng student bằng cách .bind(student) 
        // }.bind(student)//chỉ bind trong hàm checkAgeNormal


        //cách 3
        const checkAgeArrow=()=>{
                console.log(this);
                if(2021- this.birthDay>=18){ 
                    console.log('you r old enough');
                }
                else{
                    console.log('you r not old enough');
                }
            }
        checkAgeArrow();
    },

    calcAgeArrow1:()=>{
        console.log(this);// this ở đây đã là windown rồi nên ko thể ra kết quả đc

        console.log(2021 - this.birthDay);

    }

}
student.calcAgeNormal1();
// student.calcAgeArrow1();//NaN (gọi lần thứ 2 trở đi)


// const People = ()=>{

// }
// const person =new People();
//=> không dung làm constructor func




/**
 * default parameter
 */

//Cách 1
// const withoutDefaultParam = (typeofUser)=>{
//     if(typeofUser ==='user')
//     {
//     console.log('redirect to user page');

//     }else{
//     console.log('redirect to admin page');

//     }
// }
// withoutDefaultParam('user')


//Cách 2
const withoutDefaultParam = (typeofUser ='user')=>{
    if(typeofUser ==='user')
    {
    console.log('redirect to user page');

    }else{
    console.log('redirect to admin page');

    }
}
// withoutDefaultParam()//mặc định
withoutDefaultParam('admin')//nếu muốn thay đổi




/**
 * Destructure Array
 * Destructure obj
 */

//Array
//without Destructure
// const students =['tay','y','vy'] 
// const tay = students[0];
// console.log(tay);

//with Destructure
// const students = ['Tay','y','vy'];
// const [tay,y,vy]=students;
// console.log(tay,y,vy);

// const [,y,]=students;
// console.log(y);




//object

// const Student={
//     fullName :'chu ho tay',
//     age: 18,
//     class:'a2'

// }
// const fullName =Student.fullName;
// const age = Student['age'];
// console.log(fullName,age);

// const Student = {
//         fullName :'chu ho tay',
//         age: 18,
//         class:'a2',
    
//     }
// const {age ,fullName,class:className}=Student;//class bij trùng nên phải đổi tên
// console.log(fullName,age,className);





/**
 * Template String
 */

// const fullName= 'nhu ý';
// const str ='my name is '+ fullName;
// const templateStr = `My name is ${fullName}`;
// console.log(templateStr);


/**
 * Enhanced obj Literals (shorthand syntax)
 */

// const Person = {
//     fullName :'Phat',
//     age: 18,
//     calcAge: function(){

//     }
// }
// const enhancePerson ={
//     fullName:'Phat',
//     age,// nếu age: age thì có thể viết tăt ntn

//     calcAge(){ // viết tắt của calcAge: function(){}

//     }
// }



/**
 * Rest parameter
 */

// const calcSum=(num1,num2,num3)=> console.log(num1+num2+num3);
// calcSum (1,2,3);
// /param là nơi định nghĩa(num1,num2,num3) ,agument là nơi tuyền vào (1,2,3)


const calcSum=(...nums)=>{//muốn truyền vào bao nhiêu tham sô cũng dc
    // console.log(nums);
    let sum = 0;
    nums.forEach((num)=>{
       sum+=num; 
    });
    console.log(sum);
}

calcSum(9,8,6,7,9,9,1,10)



/**
 * Spread operater
 * -Copy 1 cái Array
 * -Copy 1 cái object
 * -Tham trị(các kiểu dữ liệu nguyên thủy) .vs tham chiếu(array, object)
 * -Merge array
 * -thêm phần tử vào mảng
 * - sử dubgj cái aray như danh sách các tham số của function
 */

// const people = ['phat','thang']
// console.log(people);//xuất mảng
// console.log('phat',people[1]);//xuất phần tử
// console.log(...people);// xuất hết phần tử

//copy 1 cái array
// let nums1=[1,2,3]
// let nums2=nums1;

// nums2.push(4);
// console.log(nums1);
// console.log(nums2);//=>chỉ chiếm 1 vùng nhớ(của nums1)
//nums2 ko tạo ra vùng nhớ mới mà chỉ sử dụng vung nhớ của nums1

// var str1 = 'hello',
//     str2 = str1
// str1 += ' there'
// console.log(str1);
// console.log(str2);//=>str1 != str2


// let nums1 = [1,2,3],
//     nums2 = JSON.parse(JSON.stringify(nums1));
// nums2.push(4);
// console.log(nums1);
// console.log(nums2);


// const nums1 =[1,2,3],
//     nums2=[...nums1,4,10,9,20],
//     sv={
//         age:18
//     }

// nums2.push(4,6,sv.age);//thêm 2 số
// console.log(nums1);
// console.log(nums2);





// //merge aray
// const nums1 =[1,2,3]
// const nums2 =[4,5,6]


// //const nums3 = nums1.concat(nums2);
// // console.log(nums3);


// const nums3 = [...nums1,...nums2]
// console.log(nums3);





//copy object

// let obj1={
//     a:'a',
//     b:'b'
// }
// let obj2={...obj1,d:'d' ,a:'đè'};
// obj2.c='c'
// console.log(obj1);
// console.log(obj2);


//merge object

// let obj1={
//     a:'a',
//     b:'b'
// }
// let obj2={
//     c:'c',
//     d:'d'
// }

// // const obj3= Object.assign(obj1,obj2);
// const obj3 = {...obj1,...obj2};
// console.log(obj3);


/**
 * Module
 * -import
 * -export
 */

import SinhVienDefault,{
    getLocalStorage,
    setLocalStorage
} from './utils.js';

// import * as utils from './utils.js';
//hoặc
// import SinhVienDefault from './utils.js';
const sinhVien =new SinhVienDefault('phat','thăng')
console.log(sinhVien);
getLocalStorage();
setLocalStorage();


/**
 * Class : bản chất cũng là 1 function 
 */

//expression
 //const People = class{} 

 //declaration

//  class People {
//      constructor(fullName ,className,birthday){
//          this.fullName = fullName;
//          this.className = className;
//          this.birthday=birthday

//      }
//      calcAge(){
//          console.log(2021 - this.birthday);
//      }
//  }

//  const phat = new People ('phat ','Tan',28);
//  console.log(phat);
//  console.log(phat.__proto__ === People.prototype);



class chuyenXe{
    constructor(soXe,mauXe,taiXe){
        this.soXe=soXe;
        this.mauXe=mauXe;
        this.taiXe=taiXe;
    }
    tinhDoanhThu(){
        console.log('tính doanh thu chung');
    }

}
class chuyenXeNoiThanh extends chuyenXe{
    constructor(soXe,mauXe,taiXe,soTuyen){
        //gọi lại phương thức constructor lớp cha(chuyenXe)
        super(soXe,mauXe,taiXe);
        this.soTuyen=soTuyen;
    }
    tinhDoanhThu(){
        console.log('tính doanh thu chung');
    }
    timTuyenXeGanNhat(){
        console.log("Tim tuyên xe gần nhất");
    }
}
const chuyenXeNT = new chuyenXeNoiThanh();
chuyenXeNT.tinhDoanhThu
class chuyenXeNgoaiThanh extends chuyenXe{
    constructor(soXe,mauXe,taiXe,soNgayDi){
        //gọi lại phương thức constructor lớp cha(chuyenXe)
        super(soXe,mauXe,taiXe);
        this.soNgayDi=soNgayDi;
    }
    tinhDoanhThu(){
        console.log('tính doanh thu chung');
    }
    tinhSoNgayDiDuoc(){
        console.log("Số nggayf đi được");
    }
}