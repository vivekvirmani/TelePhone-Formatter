let input = document.querySelector("#input");

let previousVal = ""
let subStr = ""


input.addEventListener("input",(e)=>{
    let inputVal = e.target.value;

    if(/\d+$/g.test(inputVal)){
        input.value = inputVal
    }else{
        input.value = inputVal.substring(0, inputVal.length - 1)
    }
    if(inputVal.length === 4 && previousVal.length < inputVal.length){
      subStr = inputVal.substring(0,3)
      input.value = `+(${subStr}) - ${inputVal.length}`
    }else if(inputVal.length === 9 && previousVal.length > inputVal.length){
        input.value = subStr;
    }
    previousVal = inputVal;
})

