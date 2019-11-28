function triangleTracker(a, b, c) {

    if (a + b <= c || a + c <= b || b + c <= a) {
        alert('invalid triangle option');
    } else if (a == b && b == c) {
        alert('This is an equilateral triangle');
        //  document.write("This is an equilateral triangle");
    } else if ((a == b && b != c) || (a == c && c != b) || (b == c && c != a)) {
        alert('This is an isosceles triangle');
        // document.write("This is an isosceles triangle");
    } else if (
        (Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2)) ||
        (Math.pow(b, 2) == Math.pow(a, 2) + Math.pow(c, 2)) ||
        (Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2)))

    {
        alert('This is a right angle triangle');
        // document.write("This is a right angle triangle");
    } else if ((a != b && b != c && a != c) && a + b > c || a + c > b || b + c > a) {
        alert('this is a scalene trianle');
        // document.write("This is an scalene triangle");
    } else {
        alert('please input correct values and try again!!');
        // document.write("This is not a triangle");
    }

}

// Get values from prompt
// var number1 = parseFloat(prompt('input first side length'));
// var number2 = parseFloat(prompt('input second side length'));
// var number3 = parseFloat(prompt('input final side length'));

triangleTracker(
    parseFloat(document.getElementById('ben').value),
    parseFloat(document.getElementById('juma').value),
    parseFloat(document.getElementById('chao').value));


//    var l=prompt();