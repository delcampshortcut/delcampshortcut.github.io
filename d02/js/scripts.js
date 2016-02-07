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
    
    /*Game                               */
    $('#playBtn').click(function(){
        console.log("start");
        $('#playBtn').addClass('active');
        theGame();
    });
      
    $('#stopBtn').click(function(){
        console.log("stop");
        $('#playBtn').removeClass('active');
        clearTimeout(timeO);
    });
    
    var soundtest = [new Howl({src: ['snd/note1.mp3']}), new Howl({src: ['snd/note2.mp3']}), new Howl({src: ['snd/note4.mp3']}), new Howl({src: ['snd/note5.mp3']})];
      
    var ansArr = [new Howl({src: ['snd/ans1.mp3']}), new Howl({src: ['snd/ans2.mp3']}), new Howl({src: ['snd/ans4.mp3']}), new Howl({src: ['snd/ans5.mp3']})];
    
    var timeO, i, playArr;
    
    function theGame(){
        i = 0;
        playArr = [];

        for(var j=0;j<4;j++){
            playArr.push(Math.floor(Math.random() * 4));
        }  

        console.log(playArr);  

        function player(){
            if(i<4){
              soundtest[playArr[i]].play();
              timeO = setTimeout(player, 2000);
            }
            else{
                i = -1;
                timeO = setTimeout(ansplayer, 5000); 
            }
            i++;
        }

        function ansplayer(){
            if(i<4){
              ansArr[playArr[i]].play();
              timeO = setTimeout(ansplayer, 1000);
            }
            else{
                i = -1;
                playArr = [];
                for(var j=0;j<4;j++){
                    playArr.push(Math.floor(Math.random() * 4));
                }
                console.log(playArr);
                timeO = setTimeout(player, 2000); 
            }
            i++;
        }

        player();
    }
})