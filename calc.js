function displayData(n){
    output.value+=n
}

function clearData(){
    output.value=""
}

function deleteData(){
    output.value=output.value.slice(0,-1)
}


// function add(a,b){
    
//     return a+b
// }

// function sub(a,b){
//     return a-b 
// }

// function mul(a,b){
//     return a*b 
// }

// function div(a,b){
//     return a/b
// }
function result(){
    if(output.value.includes('+')){
        r=[]
        a=output.value;
        r=a.split("+");
        output.value=parseInt(r[0]) + parseInt(r[1])
        console.log(r);

    }
    else if(output.value.includes('-')){
        r=[]
        a=output.value;
        r=a.split("-");
        output.value=parseInt(r[0]) - parseInt(r[1])
        console.log(r);

    }
    else if(output.value.includes('-')){
        r=[]
        a=output.value;
        r=a.split("-");
        output.value=parseInt(r[0]) - parseInt(r[1])
        console.log(r);

    }
    else if(output.value.includes('*')){
        r=[]
        a=output.value;
        r=a.split("*");
        output.value=parseInt(r[0]) * parseInt(r[1])
        console.log(r);

    }
    else if(output.value.includes('/')){
        r=[]
        a=output.value;
        r=a.split("/");
        output.value=parseInt(r[0]) / parseInt(r[1])
        console.log(r);

    }

}



