document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('type');
    let buttons = document.querySelectorAll(".button");
    let vett = "";
    let result = "";
    let flag = 0;
    buttons.forEach( button => {
        button.addEventListener("click", e=>{
            let target = e.target;                  
            if(target.id == "type"){
                vett = "";
            }else if(target.id == "canc"){ //canc
                    document.getElementById("type").innerHTML= "type number or operator";
                    vett = "";
            } else if( target.id == "ce"){//ce
                    vett = vett.slice(0,vett.length-1);
                    document.getElementById("type").innerHTML = vett;
            } else if(target.id == "="){//risultato
                    result = eval(vett);
                    document.getElementById("type").innerHTML= result;
                    vett = "";
            } else if(target.id == "+"){// primo char no +
                     if(vett == ""){
                        document.getElementById("type").innerHTML= "error";
                        
                    } else if( vett != ""){
                        vett+=target.id;
                        document.getElementById("type").innerHTML= vett;
                    }                  
            } else if(target.id == "-"){// primo char no -
                    if(vett == ""){
                        document.getElementById("type").innerHTML= "error";
                        
                    } else if( vett != ""){
                        vett+=target.id;
                        document.getElementById("type").innerHTML= vett;
                    }
            } else if(target.id == "/"){// primo char no /
                    if( vett == ""){
                        document.getElementById("type").innerHTML= "error";
                        
                    } else if(vett != ""){
                        vett+=target.id;
                        document.getElementById("type").innerHTML= vett;
                    }
            } else if(target.id == "*"){// primo char no *
                    if( vett == ""){
                        document.getElementById("type").innerHTML= "error";
                        
                    } else if(vett != ""){
                        vett+=target.id;
                        document.getElementById("type").innerHTML= vett;
                    }
            } else if(target.id == "."){// primo char no .
                        if(vett == ""){
                            document.getElementById("type").innerHTML= "error";
                            
                        } else if(vett != ""){
                            vett+=target.id;
                            document.getElementById("type").innerHTML= vett;
                        }
            }  else{
                    vett+=target.id;
                    document.getElementById("type").innerHTML= vett;
            }
        })
        })
        })