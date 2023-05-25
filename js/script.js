//untuk ngeget

function hitungLuas (){
        //pakai id lebih mudah karena hanya satu                  //value itu nilai
     var sisiLuas = document.getElementsByID("sisi-luas").value;

     document.getElementsByClassName("result-luas").style.d="block";
     console.log(sisiLuas);
     document.getElementById("output-luas").innerHTML = sisiLuas;
} 