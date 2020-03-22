
window.onload = function(){
    var board = document.getElementById("board");
    var aaa = 400;
    var bbb = 20;
    var ccc = 500;
    var eee = [];
    for(var i=0; i<aaa; i++){ eee.push(false);}
    var ddd;
    ddd = eee.slice();

    function fff(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function ggg(){
        //populate eee
        for(var n=0;n<3*bbb;n++){
            var cellid = fff(aaa);
        var i = cellid % bbb;
        var j = parseInt(cellid / bbb);
        if( i>0 && i<bbb-1 && j>0 && j<bbb-1){
            var cellid2 = (i+1)+bbb*j;  
            var cellid3 =  i+bbb*(j+1); 
            var hhh = document.getElementById(cellid);
            var iii = document.getElementById(cellid2);
            var jjj = document.getElementById(cellid3);
            
            //cluster
            hhh.classList.add("life");
            iii.classList.add("life");
            jjj.classList.add("life");


            eee[cellid] = true;
            eee[cellid2] = true;
            eee[cellid3] = true;
            ddd = eee.slice();
        }
        }

    }

    function lll(){
        for(var i=0;i<aaa;i++){
        cell = document.createElement("DIV");
        cell.className = "cell";
        cell.id = i;
        board.appendChild(cell);
        }
    }

    function change(){

        for(n=0; n<eee.length; n++){ 
                var relem = document.getElementById(n);
        var row, col;
        i = n % bbb;
        j = parseInt(n / bbb);
        var kkk = 0;
        //console.log(`(${i},${j} => ${n})`)

        for(x=i-1; x<=i+1; x++){
            for(y=j-1; y<=j+1; y++){
                row = x;
                col = y;
                
                    if(row>0 && col>0 && row<bbb && col<bbb ){
                    var idx = row+bbb*col;
                    if(ddd[idx] == true && !(row == i && col == j)){
                        kkk+=1;
                    }
                }

            }
        }
        //1. If a living cell has less than two living neighbors, it is dead in
        //the next generation, as if by underpopulation.
        if(ddd[n] && kkk<2){
            eee[n] = false;
        }	
        //2. If a living cell has two or three living neighbors, it stays alive
        //in the next generation.
        
        //3. If a living cell has more than three living neighbors, it is dead
        //in the next generation, as if by overcrowding.
        if(ddd[n] && kkk>3){
            eee[n] = false;
        }
        //4. If a dead cell has exactly three living neighbors, it comes to
        //life in the next generation.
        if(!ddd[n] && kkk == 3){
            eee[n] = true;
        }

        
        relem = document.getElementById(n);
        if( !ddd[n]  && relem.classList.contains("life")){
                relem.classList.remove("life");
        }
        if( ddd[n]  && !relem.classList.contains("life")){
                relem.classList.add("life");
        }

        //{
        //    relem.classList.add("life");
        //}

        }
        ddd = eee.slice();
        //console.log(`(${i},${j} => ${n})`)

    }

    
    setInterval(change, ccc);
    lll();
    ggg();
}


