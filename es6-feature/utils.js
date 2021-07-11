export default function Sinhvien(fullName,className){//export default: 1 file chỉ đc 1 lần
    this.fullName=fullName;
    this.className=className;
}


// export const getLocalStorage =()=>{
//     console.log('getLocalStorage');
// }
// export const setLocalStorage =()=>{
//     console.log('setLocalStorage');
// }

//hoặc
const getLocalStorage =()=>{
    console.log('getLocalStorage');
}
const setLocalStorage =()=>{
    console.log('setLocalStorage');
}
export{
    getLocalStorage,
    setLocalStorage
}
