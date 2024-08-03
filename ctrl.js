var span = 0;
var pos = 0;


window.onload = function() {
    document.getElementById("successbtn").innerHTML = ''; 
    document.getElementById("failbtn").innerHTML = ''; 
    document.getElementById('inputBox').value = span.toString();

    const breakdownButton = document.querySelectorAll('.card');
    breakdownButton.forEach(function(btn) {
      btn.addEventListener('click', function() {
        console.log(this.innerHTML);
        if(pos<6){
            span = (span*10) + parseInt(this.innerHTML,10);
            console.log(typeof(span));
            console.log((span));
            console.log(pos);
            document.getElementById('inputBox').value = span.toString();
            pos++;
        }
      });
    });
    document.getElementById('clearbtn').onclick = function(event) {
       
        event.preventDefault();

        if(pos>0){
            span = Math.round(Math.floor(span/10)); 
            console.log(typeof(span));
            console.log((span));
            document.getElementById('inputBox').value = span.toString();
            pos--;
        }
       
    }
    document.getElementById('closebtn').onclick = function(event) {
       
        event.preventDefault();

        if(pos>0){
            span = 0 
            console.log(typeof(span));
            console.log((span));
            document.getElementById('inputBox').value = span.toString();
            pos = 0;
        }
       
    }
    document.getElementById('matchbtn').onclick = function(event) {
       
        event.preventDefault();
        var randNum = parseInt(document.getElementById('randNum').innerHTML, 10);
        console.log(randNum);

        if(span == randNum){
           
            console.log("Matched");
            document.getElementById("successbtn").innerHTML = `<div  class="alert1">
                        <span  class="succesbtn" onclick="this.parentElement.style.display='none';">&check;</span> 
                        <strong>Congratulations!</strong> Number Matched.
                    </div>`; 
            document.getElementById("failbtn").innerHTML = ''; 

           
        }else{
            console.log("Not Matched");
            document.getElementById("successbtn").innerHTML = ''; 
            document.getElementById("failbtn").innerHTML = `<div class="alert">
                        <span  class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                        <strong>Danger!</strong> Number Didn't Match.
                    </div>`; 

        }
       
    }
}