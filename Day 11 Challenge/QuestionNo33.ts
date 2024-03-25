

let Nmb:number[]=[1,2,3,4,5,6,7,8,9]
suffix(Nmb)
function suffix(arr:number[]):void{

    Nmb.forEach(nmb=>{
        if(nmb===1){
            console.log(`${nmb}st`)
        }
        else if(nmb===2){
            console.log(`${nmb}nd`)
        }
        else if(nmb===3){
            console.log(`${nmb}rd`)
        }
        else if(nmb===4 || nmb===5 || nmb===6 || nmb===7 || nmb===8 || nmb===9 ){
            console.log(`${nmb}th`)
        }
    })
}