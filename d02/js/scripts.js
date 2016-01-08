$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    

    var newLess = [1442361600, 1444176000, 1446595200, 1449014400, 1452038400, 1454457600, 1456876800, 1459296000, 1461715200, 1464134400];


    var d = new Date(),
        n = Math.floor(d.getTime()/1000),
        cLesson;

    newLess.push(n);

    newLess.sort(function(a, b){return a-b});
    cLesson = newLess.indexOf(n);
    
    $('#R' + cLesson).css("color","red");
})