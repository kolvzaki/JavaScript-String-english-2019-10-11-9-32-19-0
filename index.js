// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
const res1 = () => {
  let res = name.toUpperCase()
  console.log(res);
  return res
}

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
const res2 = () => {
  let regex = /\b\w|\s\w/g
  str = sentence.toLowerCase().replace(regex,res=>{
    return res.toUpperCase()
  })
  console.log(str);
  return str
}

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
const res3 = () => {
  let str = money.substring(money.indexOf('￥')+1,money.length)
  let res = parseInt(str)
  console.log(res);
  return res
} 