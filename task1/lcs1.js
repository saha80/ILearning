// const [node, js, ...args] = process.argv;


// function lcs(data) {
//     switch (data.length) {
//         case 0:
//             return ''
//         case 1:
//             return data[0]
//         default:
//             break;
//     }

//     data.sort((a, b) => a.length - b.length)
//     let first_len = data[0].length
//     let res = ''
//     for (let i = 0; i < first_len; i++)
//         for (let j = 0; j < first_len - i + 1; j++)
//             if (j > res.length && data.every(s => s.includes(data[0].slice(i, i + j))))
//                 res = data[0].slice(i, i + j);
//     return res;
// }
const[n,j,...a]=process.argv;function lcs(e){let l=e.length;if(!l)return"";if(1==l)return e[0];e.sort((e,l)=>e.length-l.length);let t="";for(let l=0;l<e[0].length;l++)for(let n=0;n<e[0].length-l+1;n++)n>t.length&&e.every(t=>t.includes(e[0].slice(l,l+n)))&&(t=e[0].slice(l,l+n));return t}console.log(lcs(a));

// console.log(lcs(['Oh, hello, my friend.', 'I prefer Jelly Belly beans.', 'When hell freezes over!']))

// console.log(lcs([]))
// console.log(lcs(['ABCDEFZ', 'WBCDXYZ']))

// console.log(lcs(['132', '12332', '12312']));
// console.log(lcs(['ABCDEFGH', 'ABCDEFG', 'ABCEDF', 'ABCED']))
// console.log(lcs(['ABCDEFGH', 'ABCDEFG', 'ABCEDF', 'ABCED']))
// console.log(lcs(['ABCDEFGH', 'ABCDEFG', 'ABCDEF', 'ABCDE']))
// console.log(lcs(['ABCDEFGH', 'ABCDEFG', 'ABCDEF', 'ABCDE', 'EDCBA']))
// console.log(lcs(['ABCDEFGH', 'ABCDEFG', 'ABCDEF', 'ABCDE', 'EDCBCA']))
// console.log(lcs(['ABCDEFGH', 'ABCDEFG', 'AxBCDEF', 'ABCDxE', 'EDCBCAABCD']))
// console.log(lcs(['ABCDEFGH', '1234']))
// console.log(lcs(['ABCDEFGH']))
// console.log(lcs(a));