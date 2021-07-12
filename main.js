var names_array = [];
function add(){
     var name_1 = document.getElementById("name_of_the_student_1").value;
     var name_add = names_array.push(name_1);

     console.log(names_array);
}

function submit(){

console.log(names_array);
var name_of_the_students_in_the_array_and_cheese_and_tacos = [];
var size = names_array.length;
for(var k=0; k < size; k++){
name_of_the_students_in_the_array_and_cheese_and_tacos.push("<h4>NAME = "+ names_array[k]+ "</h4>");
};
document.getElementById("display_name_with_commas").innerHTML=name_of_the_students_in_the_array_and_cheese_and_tacos;
var remove_da_commas_and_also_nachos= name_of_the_students_in_the_array_and_cheese_and_tacos.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_da_commas_and_also_nachos;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    names_array.sort();
    var cheese_with_nachos = [];
    var size = names_array.length;
    for(var l=0; l < size; l++){
        cheese_with_nachos.push("<h4>NAME =" + names_array[l] + "</h4>");
        };
    document.getElementById("display_name_without_commas").innerHTML=cheese_with_nachos;
    document.getElementById("display_name_with_commas").innerHTML=cheese_with_nachos;
}