// function getPerfect(a, b) {
//     let result = [];
//     for (let i = a; i < b; i++) {
//       sum = 0;
//       for (let n = 1; n <= i/2; n++) {
//         if (i % n === 0) sum += n;
//       }
//       if (i === sum) result.push(i);
//     }
//     return result;
// }
   
// console.log(getPerfect(1, 100));
// ------------------------------
// function watchTime() {
// let hour = +prompt('Введите час');
// let minutes = +prompt('Введите минуты');
// let second = +prompt('Введите секунды');
//         if(hour > 24){
//             console.log('error, try again')
//             return
//         }else if(minutes > 60){
//             console.log('error, try again')
//             return
//         }else if(second > 60){
//             console.log('error, try again')
//             return
//         }else{
//             if(hour == 0){
//             hour = '00'
//             }else if(minutes == 0){
//             minutes = '00'
//             }else{
//             second = '00'
//             }
//             console.log(`<<${hour}:${minutes}:${second}>>`)
//         }
    
// }
// watchTime()
// ------------------------------
// function allInSecond() {
//     let hour = +prompt('Введите час');
//     let minutes = +prompt('Введите минуты');
//     let second = +prompt('Введите секунды');
//         let a = hour * 60;
//         let b = (a + minutes)*60;
//         let c = b + second;
//         console.log(`all in second ${c}`)
// }
// allInSecond()
// ------------------------------
// function reverseSecond() {
// let allTime = +prompt('Введите время в секундах')
// let hour = ((allTime / 60) / 60) | 0;
// let minutes = ((allTime - ((hour * 60) * 60)) / 60) | 0;
// let second = allTime - (((hour * 60) * 60) + (minutes * 60));
// console.log(`${hour}:${minutes}:${second}`);

// }
// reverseSecond()
// -----------------------------
// function differenceInTime() {
//     let hour = +prompt('Введите час');
//     let minutes = +prompt('Введите минуты');
//     let second = +prompt('Введите секунды');
//     let secondHour = +prompt('Введите  час снова');
//     let secondMinutes = +prompt('Введите минуты снова');
//     let secondSecond = +prompt('Введите секунды снова');
//         let a = hour * 60;
//         let b = (a + minutes) * 60;
//         let c = b + second;
//         let d = secondHour * 60;
//         let e = (d + secondMinutes) * 60;
//         let f = e + secondSecond
//         let difference = c - f;
//     if(difference < 0){
//         difference * -1;
//     }
//     let differenceHour = ((difference / 60) / 60) | 0;
//     let differenceMinutes = ((difference - ((differenceHour * 60) * 60)) / 60) | 0;
//     let differenceSecond = difference - (((differenceHour * 60) * 60) + (differenceMinutes * 60));
//     console.log(`Разница${differenceHour}:${differenceMinutes}:${differenceSecond}`);
// }
// differenceInTime()