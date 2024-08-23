let arr = [];

function solver(){
        
    for(let i = 0; i < 9; i++){
        let sbarr = [];
        for(let j = 0; j < 9; j++){
            const v = "." + i + (j+1);
            // console.log(v);     
                let p = document.getElementById(v).value;
                if(p != ""){
                    sbarr.push(p);
                }else{
                    sbarr.push(".");
                }
        }
        arr.push(sbarr);
    }
    const nw = Date.now();
    if(outsource(nw)) blender(arr);
    else  {
    console.log("No solution");
    reset()
}

}

function blender(arr){
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            const v = "." + i + (j+1);
            // console.log(v);     
                console.log(arr[i][j]);
                document.getElementById(v).value = arr[i][j];
        }
    }
}

function timer( then, n){
    if(Date.now() - then > n*1000) return true;
}

function outsource(nw){

    for(let rows = 0; rows < 9; rows++){
        for(let col = 0; col < 9; col++){
            if(timer(nw ,8)) throw("wrong input");
            if(arr[rows][col] === "."){
                for(let c = '1'; c <= '9'; c++){
                    console.log(c);
                if(rowChecker(rows,arr, c) && Colchecker(col, arr, c) &&  boxChecker(rows, col, arr, c)){
                    arr[rows][col] = c;
                    if(outsource(nw)){
                        return true;
                    }else{ arr[rows][col] = ".";}
                }
        }
        return false;
        }
    }
}
return true;
}

function  rowChecker(rows, arr, c){
    for(let i = 0; i <9; i++){
        if(arr[rows][i] == c) return false;
    }
    return true;
}
function Colchecker(col, arr, c){
    for(let i = 0; i < 9; i++){
        if(arr[i][col] == c) return false;
    }
    return true;
}

function boxChecker(i, j, board , x){
    let row_n = Math.floor(i / 3)*3;
    let col_n = Math.floor(j / 3)*3;

    for (let r = row_n; r < row_n + 3; r++) {
        for (let c = col_n; c < col_n + 3; c++) {
            if (board[r][c] == x)
                return false;
        }
    }
    return true;
}

function reset(){
    console.log(arr);
    const arrr = document.querySelectorAll("input");
    arr = [];
    for(let i = 0; i < arrr.length; i++){
        arrr[i].value = "";
    }
}


function render(darr){
    const arrr = document.querySelectorAll("input");
    let ans = [];
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            ans.push(darr[i][j]);
        }
    }
    for(let i = 0; i < arrr.length; i++){
        arrr[i].value = ans[i];
    }
    
}
