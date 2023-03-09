function fun1(){
    console.log('fun 1 invoked');
    console.log('fun1 modified line');
}

function fun2(){
    console.log('fun2 invoked');
    console.log('developer 2 added a line');
    
}

function fun3(){
    console.log('fun3 invoked');
    /**
     * 
     * some commented code added by dev2
     */
    setTimeout(()=>{
        //todo 

    },3000)
}


function fun4(){
    console.log('fun4 invoked');
}