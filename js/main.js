    // document.write("Js day hi!");
    // console.log("JS say hi!");
    // console.info("JS say hi!");
    // console.error("JS say hi!");
    // console.warn("JS say hi!");

    //math
    var num_1 = 5;
    var num_2 = 15;

    console.log("Result: " + (num_1 % num_2));

    var num_3 = 5;
    num_3 += 7;
    console.log("Result: " + num_3);

    var str_1 = Number("12");
    var str_2 = Number("2");
    console.log("Result: " + (str_1 + str_2));

    Math.log("Math: " + Math.PI);
    Math.log("Math: " + Math.E);
    Math.log("Math: " + Math.min(4, 56, 7, 8));



    //Conditional statements
    var number = 15;
    if( number > 5){
        console.log("OK");
    }

    var str = "word";

    switch(str){
        case "word":
            console.log("str word");
        case "5":
            console.log("5");
        default:
            console.log("Default");
            break;
    }


    //arrays
    var arr = [5, true, "words", 5.6];
    arr[3] = "word";
    console.log(arr.length);

    var matrix = [
        [5, true, "words"], 
        [true, "words", 5.6], 
        [true, 5, 5.6]
    ];

    matrix[1][0] = false;

    //loops
    for(var i = 100; i > 5; i /= 2){
        console.log(i);
    }

    var j = 0;
    while(j < 10) {
        console.log(j);
        j++;
    }

    // var isHasCar = true;
    // while(isHasCar){

    // }

    var x = 0;
    do{
        console.log(x);
        x++;
    }while(x < 10);

    for(var i = 10; i <= 20; i += 2){
        if(i % 2 == 0)
            continue;

        console.log(i);
    }

    //array loop
    var arr1 = [4 ,5 ,6 ,7 , 8, "word"];

    for(var i = 0; i < arr.length; i++){
        arr[i] *= 2;

        console.log("Element: " + (i + 1) + ": " + arr[i]);
    }

    //methods --- alert, prompt, confirm
    alert("Beutiful");

    var data = confirm("Are you home now?");
    if(data){
        alert("You're good!");
    }

    var data1 = prompt("What's your age?");
    console.log(data1);


    var person = null;
    if(confirm("Are you sure?")){
        person = prompt("Enter your name!");
        alert("Hi, " + person)
    } else {
        alert("You pressed <<Cancel>>");
    }


