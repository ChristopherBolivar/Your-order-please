function order(words){
  if(words === undefined || words === null || words === ""){
    return ""
  }else{
  let wArray =  words.split(" ")
  let narr = []
  let i = 0
  let x = 0
 let arr = wArray.map((item,i)=>{
   let number = item.match((/(\d)/))[0]
   return number
 }).sort()
 console.log(arr[0],wArray[0],i)
  while(narr.length < arr.length){
    if(wArray[i].includes(arr[x])){
      narr.push(wArray[i])
      x++
    }
  i++
  if(i >= arr.length){
    i=0
  }
  }
return narr.toString().replace(/,/gi, " ")
}
}