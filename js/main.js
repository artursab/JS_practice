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
    // alert("Beutiful");

    // var data = confirm("Are you home now?");
    // if(data){
    //     alert("You're good!");
    // }

    // var data1 = prompt("What's your age?");
    // console.log(data1);


    // var person = null;
    // if(confirm("Are you sure?")){
    //     person = prompt("Enter your name!");
    //     alert("Hi, " + person)
    // } else {
    //     alert("You pressed <<Cancel>>");
    // }


//functions
    function info(word){
        console.log(word + "!");
    }

    function summa(a, b){
        var res = a + b;
        info(res);
    }
    summa(5, 7);



    function arrsumma(arr){
        var sum = 0;

        for(var i = 0; i < arr.length; i++){
            sum += arr[i];
        }

        return sum;
    }
    var array = [6, 8, 1];
    
    var result = arrsumma(array);
    console.log("Result: " + result);




    var num = 10;

    function info(){
        var num = 20;
        console.log(num);
    }

    info();

    console.log(num);

    

//Events and event handler
    // var counter = 0;

    // function onClickButton(element){
    //     counter++;
    //     element.innerHTML = "You pressed on button: " + counter;
    //     // element.style.background = "red";
    //     // element.style.color = "blue";

    //     element.style.cssText = "border-radius: 5px; border: 0; font-size: 20px";
    // }

    /* onmouseover, oninput, onload */


    // function onInput(el){
    //     if(el.value == "Hello")
    //         alert("you too");

    //     console.log(el.value);    
    // }


//HTML management and form processing

    // var text = document.getElementById('text');
    // text.title = "New Text";
    // console.log(text.title);

    // text.style.color = "red";
    // text.style.backgroundColor = "blue";

    // text.innerHTML = "New<br>string";

    // document.getElementById('text').style.color = "white";

    // var spans = document.getElementsByTagName('span');

    // var spans = document.getElementsByClassName('simple-text');

    // for(var i = 0; i < spans.length; i++){
    //     console.log(spans[i].innerHTML);
    // }



    // document.getElementById('main-form').addEventListener("click", checkForm);

    // function checkForm(el){
    //     event.preventDefault();
    //     var el = document.getElementById('main-form');

    //     //var name = document.getElementById('name').value;
    //     var name = el.name.value;
    //     var pass = el.pass.value;
    //     var repass = el.repass.value;
    //     var state = el.state.value;

    //     if(name = ""|| pass == "" || state == "")
    //         fail = "Enter all fields";
    //     else if(name.length <= 1 || name.length > 50)
    //         fail = "Enter correct name";
    //     else if(pass != repass)
    //         fail = "Passwords must be the same";
    //     else if(pass.split("&").length > 1)
    //         fail = "Uncorrect password";

    //     if(fail != "") {
    //         document.getElementById('error').innerHTML = fail;
    //     } else {
    //     alert("All fields inputed correctly");
    //     window.location = ' https://itproger.com ';
    //     }

    //         }
    






    /* interval */ 
    // setInterval(my_func, 1000);

    // var counert = 0;
    // function my_func(){
    //      counter++;
    //      console.log("Counter: " + counert);

    //      if(counter == 3){
    //         clearInterval(id);
    //      }
    // }

    // setInterval(function(){
    //     counert++;
    //     console.log("Sec: " + counter);
    // }, 1000);


    /* Timer */ 
    // setTimeout(my_func, 1000);

    // function my_func(){
    //     console.log("Timer is working!";)
    // }



    /* Objects */ 
    // var date = new Date();

    // console.log(date.getFullYear());
    // console.log(date.getFullMonths() + 1);
    // console.log(date.getHours());

    // date.setHours(23);
    // console.log("Time: " + date.getHours() + ":" + date.getMinutes());



    /* special func of array */

    var arr = [5, 6, 7, 8];
    // console.log(arr.join("|||"));

    var str = arr.reverse().join(", ");

    console.log(str.split(", "));
