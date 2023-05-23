export const incNumber = (num)=>{
    return{
        type:"INCREMENT",
        payload: num
        
    }
}

export const decNumber = () =>{
    return{
        type: "DECREMENT"
    }
}

export const multNumber = (num)=>{
    return{
        type :"MULTIPLICATION",
        payload:num
    }
}

export const devNumber = (num)=>{
    return{
        type :"DIVISION",
        payload: num
    }
}