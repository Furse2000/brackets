/*module.exports = function check(str, br) {
 let kvotkr=0;
 let kvzakr=0;
 let krotkr=0;
 let krzakr=0;
 let kko=0;
 let kkz=0;
 let pr=0;
 let kk=0;
for(let i=0;i<str.length;i++)
{
 if(str[i]=='(') krotkr++
 if(str[i]==')') krzakr++
 if(str[i]=='[') kvotkr++
 if(str[i]==']') kvzakr++
 if(str[i]=='{') kko++
 if(str[i]=='}') kkz++
 if(str[i]=='|') pr++
if((str[str.length-1]=='[')||(str[str.length-1]=='{')||(str[str.length-1]=='(')){return false}
}
//if(((krotkr-krzakr)==0)||((kvzakr-kvotkr)==0)((kkz-kko)==0)||(pr%2)){return false}// else return true;

if((krotkr%2)||(krzakr%2)||(kvotkr%2)||(kvzakr%2)||(kkz%2)||(kko%2)||(pr%2)){return false} else return true;

}
*/
module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    arr = arr.concat(bracketsConfig[i]);
  }

  let toClose = [];
  for (let j = 0; j < str.length; j++) {
    let last = toClose[toClose.length - 1];
    if (arr.indexOf(str[j]) % 2 == 0 && str[j] == arr[arr.indexOf(str[j]) + 1]) {
      if (last !== str[j]) {
        toClose.push(str[j]);
      } else if (last == str[j]) {
        toClose.pop();
      }
    } else if (arr.indexOf(str[j]) % 2 == 0) {
      toClose.push(str[j]);
    }
    if (arr.indexOf(str[j]) % 2 !== 0) {
      if (arr.indexOf(last) == arr.indexOf(str[j]) - 1) {
        toClose.pop()
      } else {
        return false
      }
    }
  }
  if (toClose.length == 0) return true;
  else return false;
}