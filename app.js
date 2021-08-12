var student = [
    {
        name: "Faisal",
        Maths:40,
        Physics:60,
        Urdu:90,
        English:60,
        Chemistry:98,
       
    },
    {
        name: "Faraz",
        Maths:50,
        Physics:60,
        Urdu:80,
        English:80,
        Chemistry:78,
        
    },
    {
        name: "Furqan",
        Maths:80,
        Physics:70,
        Urdu:90,
        English:70,
        Chemistry:88,
        
    }
]
var results = document.getElementById('resultOutput')
var Button = document.getElementById('btn')
Button.addEventListener("click", function() {
    var name = document.getElementById('name1').value;
    for(let i = 0; i < student.length; i++){
        if(student[i].name.toLowerCase() == name.toLowerCase()){
            results.innerHTML = "<h3>"+'<hr>' + " Maths :" + student[i].Maths +'<hr>'+ "Physics :" +student[i].Physics + '<hr>'+ "Urdu :" +student[i].Urdu+ '<hr>'+ "English :" +student[i].English+ '<hr>'+"Chemistry :" +student[i].Chemistry+ '<hr>'+"</h3>"
            return;
        }
    }
    results.innerHTML = "<h3>" + " No Information about Particular Student" + "</h3>"
})