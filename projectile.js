$(document).ready(function () {



    //remove loader
    setTimeout(function () { jQuery("#preloader").remove(); }, 2000);



    //collapse button press
    $('#collapse').click(function () {
        if ($('#controls').css('left') == '0px') {
            $('#controls').animate({ left: '-250px' });
            $('#collapse').animate({ left: '-242px' });
            $('#collapse').text('chevron_right');
            $('#MainCont').animate({ width: '1362px', left: '0px' });
        }
        else {
            $('#controls').animate({ left: '0px' });
            $('#collapse').animate({ left: '8px' });
            $('#collapse').text('chevron_left');
            $('#MainCont').animate({ width: '1112px', left: '250px' });
        }
    });



    //Initial Velocity Expand button press
    $('#Vel h5 span').click(function () {
        if ($('#Vel h5 span').text() == 'expand_less') {
            $('#VelCon').slideUp();
            $('#Vel h5 span').text('expand_more');
        }
        else {
            $('#VelCon').slideDown();
            $('#Vel h5 span').text('expand_less');
        }
    });



    //Gravity Expand button press
    $('#Gra h5 span').click(function () {
        if ($('#Gra h5 span').text() == 'expand_less') {
            $('#GraCon').slideUp();
            $('#Gra h5 span').text('expand_more');
        }
        else {
            $('#GraCon').slideDown();
            $('#Gra h5 span').text('expand_less');
        }
    });



    //Force Field button press
    $('#For h5 span').click(function () {
        if ($('#For h5 span').text() == 'expand_less') {
            $('#ForCon').slideUp();
            $('#For h5 span').text('expand_more');
        }
        else {
            $('#ForCon').slideDown();
            $('#For h5 span').text('expand_less');
        }
    });



    //Initial Height Expand button press
    $('#Hei h5 span').click(function () {
        if ($('#Hei h5 span').text() == 'expand_less') {
            $('#HeiCon').slideUp();
            $('#Hei h5 span').text('expand_more');
        }
        else {
            $('#HeiCon').slideDown();
            $('#Hei h5 span').text('expand_less');
        }
    });



    //Obstacle Expand button press
    $('#Obs h5 span').click(function () {
        if ($('#Obs h5 span').text() == 'expand_less') {
            $('#ObsCon').slideUp();
            $('#Obs h5 span').text('expand_more');
        }
        else {
            $('#ObsCon').slideDown();
            $('#Obs h5 span').text('expand_less');
        }
    });



    //initial velocity toggle
    $('#VelComCon').css('display', 'none');
    $('#VelInpTyp span').click(function () {
        if ($('#VelComCon').css('display') == 'none') {
            $('#VelMagCon').slideUp();
            $('#VelComCon').slideDown();
        }
        else {
            $('#VelComCon').slideUp();
            $('#VelMagCon').slideDown();
        }
    });



    //force field toggle
    $('#ForComCon').css('display', 'none');
    $('#ForInpTyp span').click(function () {
        if ($('#ForComCon').css('display') == 'none') {
            $('#ForMagCon').slideUp();
            $('#ForComCon').slideDown();
        }
        else {
            $('#ForComCon').slideUp();
            $('#ForMagCon').slideDown();
        }
    });



    //initial height block toggle
    $('#HeiCon div').css('display', 'none');
    $('#HeiBlo span').click(function () {
        if ($('#HeiCon div').css('display') == 'none') {
            $('#HeiCon div').slideDown();
            $('#ObsHeiTip,#ObsWidTip,#ObsDisTip,#ObsCoeTip,#ObsGroTip').css('transform', 'translateY(60px)');
            $('#block').css('transform', 'translateX(0px)');
        }
        else {
            $('#HeiCon div').slideUp();
            $('#ObsHeiTip,#ObsWidTip,#ObsDisTip,#ObsCoeTip,#ObsGroTip').css('transform', 'translateY(0px)');
            $('#block').css('transform', 'translateX(-1000px)');
        }
    });



    //range sliders value label  
    var HeiCoeInp = document.getElementById('HeiCoeInp');
    var HeiCoeInpVal = document.getElementById('HeiCoeInpVal');
    HeiCoeInp.oninput = function () {
        HeiCoeInpVal.value = this.value;
    }
    HeiCoeInpVal.oninput = function () {
        HeiCoeInp.value = this.value;
    }

    var ObsCoeInp = document.getElementById('ObsCoeInp');
    var ObsCoeInpVal = document.getElementById('ObsCoeInpVal');
    ObsCoeInp.oninput = function () {
        ObsCoeInpVal.value = this.value;
    }
    ObsCoeInpVal.oninput = function () {
        ObsCoeInp.value = this.value;
    }

    var ObsGroInp = document.getElementById('ObsGroInp');
    var ObsGroInpVal = document.getElementById('ObsGroInpVal');
    ObsGroInp.oninput = function () {
        ObsGroInpVal.value = this.value;
    }
    ObsGroInpVal.oninput = function () {
        ObsGroInp.value = this.value;
    }



    //Tooltips
    var timer;
    var tool;
    var tooltip;
    function tooltipDisplay(tool, tooltip) {
        $(tool).mouseenter(function () {
            timer = setTimeout(function () { $(tooltip).animate({ left: '250px' }, 'slow') }, 1000);
        });
        $(tool).mouseleave(function () {
            clearTimeout(timer);
            $(tooltip).animate({ left: '-250px' }, 'slow');
        });
    };

    tooltipDisplay('#VelMagInp', '#VelMagTip');
    tooltipDisplay('#VelAngInp', '#VelAngTip');
    tooltipDisplay('#VelXInp', '#VelXTip');
    tooltipDisplay('#VelYInp', '#VelYTip');
    tooltipDisplay('#GraInp', '#GraTip');
    tooltipDisplay('#ForMagInp', '#ForMagTip');
    tooltipDisplay('#ForAngInp', '#ForAngTip');
    tooltipDisplay('#ForXInp', '#ForXTip');
    tooltipDisplay('#ForYInp', '#ForYTip');
    tooltipDisplay('#HeiHeiInp', '#HeiHeiTip');
    tooltipDisplay('#HeiBlo span', '#HeiBloTip');
    tooltipDisplay('#HeiWidInp', '#HeiWidTip');
    tooltipDisplay('#HeiCoeInp,#HeiCoeInpVal', '#HeiCoeTip');
    tooltipDisplay('#ObsHeiInp', '#ObsHeiTip');
    tooltipDisplay('#ObsWidInp', '#ObsWidTip');
    tooltipDisplay('#ObsDisInp', '#ObsDisTip');
    tooltipDisplay('#ObsCoeInp,#ObsCoeInpVal', '#ObsCoeTip');
    tooltipDisplay('#ObsGroInp,#ObsGroInpVal', '#ObsGroTip');



    //mouse pointer location
    $('svg').mousemove(function (event) {
        var relX = (event.pageX - $(this).offset().left - 251) / 10;
        var relY = - (event.pageY - $(this).offset().top - (502 - parseFloat($('#HeiHeiInp').val() * 10))) / 10;
        var relBoxCoords = "(" + relX + ", " + relY + ") m";
        $("#pointer").text(relBoxCoords);
    });



    //modes
    $('#mode').click(function () {
        if ($('#sky').attr('fill') == 'url(#day_color)') {
            $('#sky').attr('fill', 'url(#night_color)');
            $('#mode').css({
                'background-color': 'transparent',
                'box-shadow': 'none',
                'text-shadow': '0px 0px 50px #faffad, 0px 0px 25px #faffad',
                'transform': 'rotate(30deg)',
                'color': '#faffad'
            });
            $('#VelArrow').css('stroke', 'yellowgreen');
            $('#VelArrowHead').css('fill', 'yellowgreen');
        }
        else {
            $('#sky').attr('fill', 'url(#day_color)');
            $('#mode').css({
                'background-color': '#ffffff',
                'box-shadow': "0px 0px 25px rgb(255, 255, 0), 0px 0px 50px rgb(255, 255, 0), 0px 0px 75px rgb(255, 255, 0),0px 0px 100px rgb(255, 255, 0)",
                'text-shadow': 'none',
                'transform': 'rotate(0deg)',
                'color': '#ffffff'
            });
            $('#VelArrow').css('stroke', 'green');
            $('#VelArrowHead').css('fill', 'green');
        };
    });



    //input validation
    $('input[type=text]').on('input', function () {
        if (isNaN($(this).val()) && $(this).val() != '-') {
            $(this).val(0);
        };
    });



    //initial velocity input response
    var Vx = 0;
    var Vy = 0;
    var path_d = 'M250 '
    $('#VelMagInp, #VelAngInp').on('input', function () {
        Vx = $('#VelMagInp').val() * Math.cos($('#VelAngInp').val() * Math.PI / 180);
        Vy = $('#VelMagInp').val() * Math.sin($('#VelAngInp').val() * Math.PI / 180);
        VelArrow(Vx, Vy);
    });
    $('#VelXInp, #VelYInp').on('input', function () {
        Vx = $('#VelXInp').val();
        Vy = $('#VelYInp').val();
        VelArrow(Vx, Vy);
    });

    function VelArrow(Vx, Vy) {
        path_d = 'M250 ' + (ball_cy).toString() + ' L' + (250 + Vx * 10).toString() + ' ' + (ball_cy - Vy * 10).toString();
        $('#VelArrow').attr('d', path_d);
        $('#VelArrowHead').attr('cx', (250 + Vx * 10).toString()).attr('cy', (ball_cy - Vy * 10).toString())
    };



    //Gravitational acceleration input response
    var g = 9.80665;
    $('#GraInp').on('input', function () {
        g = $('#GraInp').val();
    });



    //force field input response
    var Ax = 0;
    var Ay = 0;
    var ForArrow_d = 'M250 '
    $('#ForMagInp, #ForAngInp').on('input', function () {
        Ax = $('#ForMagInp').val() * Math.cos($('#ForAngInp').val() * Math.PI / 180);
        Ay = $('#ForMagInp').val() * Math.sin($('#ForAngInp').val() * Math.PI / 180);
        ForArrow(Ax, Ay);
    });
    $('#ForXInp, #ForYInp').on('input', function () {
        Ax = $('#ForXInp').val();
        Ay = $('#ForYInp').val();
        ForArrow(Ax, Ay);
    });

    function ForArrow(Ax, Ay) {
        ForArrow_d = 'M150 250 L' + (150 + Ax * 10).toString() + ' ' + (250 - Ay * 10).toString();
        $('#ForArrow').attr('d', ForArrow_d);
        $('#ForArrowHead').attr('cx', (150 + Ax * 10).toString()).attr('cy', (250 - Ay * 10).toString())
    };



    //initial height input response
    var ball_cy = 500;
    var block_height = 0;
    var block_width = 0;
    var block_x = 250;
    var block_y = 510;
    var e_block = 0;
    $('#HeiHeiInp').on('input', function () {
        ball_cy = (500 - parseFloat($('#HeiHeiInp').val() * 10));
        $('#ball').attr('cy', (ball_cy).toString() + 'px');
        block_height = parseFloat($('#HeiHeiInp').val() * 10);
        block_y = (510 - parseFloat($('#HeiHeiInp').val() * 10));
        $('#block').attr('height', (block_height).toString() + 'px').attr('y', (block_y).toString() + 'px');
        VelArrow(Vx, Vy);
    });
    $('#HeiWidInp, #HeiCoeInp, #HeiCoeInpVal').on('input', function () {
        block_width = (parseFloat($('#HeiWidInp').val()) * 10 - 20);
        block_x = (260 - parseFloat($('#HeiWidInp').val() * 10) / 2);
        $('#block').attr('width', (block_width).toString() + 'px').attr('x', (block_x).toString() + 'px');

        if ($('#HeiCoeInpVal').val() <= 1 && $('#HeiCoeInpVal').val() >= 0) {
            e_block = parseFloat($('#HeiCoeInpVal').val());
        }
        else if ($('#HeiCoeInpVal').val() > 1) {
            $('#HeiCoeInpVal').val(1);
            e_block = 1;
        }
        else {
            $('#HeiCoeInpVal').val(0);
            e_block = 0;
        };
    });



    //obstacle input response
    var obstacle_height = 0;
    var obstacle_width = 0;
    var obstacle_x = -1000;
    var obstacle_y = 510;
    var e_obstacle = 0;
    var e_ground = 0;
    $('#ObsHeiInp, #ObsWidInp, #ObsDisInp, #ObsCoeInp, #ObsCoeInpVal, #ObsGroInp, #obsGroInpVal').on('input', function () {
        obstacle_height = parseFloat($('#ObsHeiInp').val() * 10);
        obstacle_y = (510 - parseFloat($('#ObsHeiInp').val() * 10));
        $('#obstacle').attr('height', (obstacle_height).toString() + 'px').attr('y', (obstacle_y).toString() + 'px');

        obstacle_width = (parseFloat($('#ObsWidInp').val()) * 10 - 20);
        obstacle_x = (260 - parseFloat($('#ObsWidInp').val() * 10) / 2);
        $('#obstacle').attr('width', (obstacle_width).toString() + 'px').attr('x', (obstacle_x).toString() + 'px');

        obstacle_x = (260 - parseFloat($('#ObsWidInp').val() * 10) / 2 + parseFloat($('#ObsDisInp').val()) * 10);
        $('#obstacle').attr('x', (obstacle_x).toString() + 'px');

        if ($('#ObsCoeInpVal').val() <= 1 && $('#ObsCoeInpVal').val() >= 0) {
            e_obstacle = parseFloat($('#ObsCoeInpVal').val());
        }
        else if ($('#ObsCoeInpVal').val() > 1) {
            $('#ObsCoeInpVal').val(1);
            e_obstacle = 1;
        }
        else {
            $('#ObsCoeInpVal').val(0);
            e_obstacle = 0;
        };

        if ($('#ObsGroInpVal').val() <= 1 && $('#ObsGroInpVal').val() >= 0) {
            e_ground = parseFloat($('#ObsGroInpVal').val());
        }
        else if ($('#ObsGroInpVal').val() > 1) {
            $('#ObsGroInpVal').val(1);
            e_ground = 1;
        }
        else {
            $('#ObsGroInpVal').val(0);
            e_ground = 0;
        };
    });



    //simulate button click
    var t_global;
    var tx, ty;
    var run;
    var runtime;
    var posX, posY;
    var velX, velY;
    var collision_counter;
    var h;
    var trajectory;
    $('#simulate').click(function () {
        $(this).prop('disabled', true);
        trajectory = 'M250 ' + ball_cy;
        h = 0;
        collision_counter = 0;
        t_global = 0;
        tx = 0;
        ty = 0;
        posX = 250;
        posY = ball_cy;
        velX = 0;
        velY = 0;
        clearTimeout(run);
        clearTimeout(runtime);
        //Global time
        GlobalTime();
        //the simulation
        throwBall();
        //stop button
        $('#stop').prop('disabled', false);
    });



    //simulation function
    function throwBall() {
        tx += 1;
        ty += 1;
        ballX = posX + (Vx * tx / 145 + 1 / 2 * Ax * Math.pow((tx / 145), 2)) * 10;
        ballY = posY - (Vy * ty / 145 + 1 / 2 * (Ay - g) * Math.pow((ty / 145), 2)) * 10;
        velX = parseFloat(Vx) + Ax * tx / 145;
        velY = parseFloat(Vy) + (Ay - g) * ty / 145;

        //collision with horizontal surfaces
        if (ballY > 500 && velY < 0) {
            Vy = - e_ground * velY;
            posY = 500;
            ty = 0;
            collision_counter += 1;
        }
        else if ($('#block').attr('x') != '-1000px' && ballY > (510 - block_height - 10) && ballY < (510 - block_height) && ballX > (block_x - 10) && ballX < (block_x + block_width + 10) && velY < 0) {
            Vy = - e_block * velY;
            posY = ballY - 1;
            ty = 0;
            collision_counter += 1;
        }
        else if (ballY > (510 - obstacle_height - 10) && ballY < (510 - obstacle_height) && ballX > (obstacle_x - 10) && ballX < (obstacle_x + obstacle_width + 10) && velY < 0) {
            Vy = - e_obstacle * velY;
            posY = ballY - 1;
            ty = 0;
            collision_counter += 1;
        }

        //colision with vertical surfaces
        if ($('#block').attr('x') != '-1000px' && ballX > (block_x - 10) && ballX < block_x && ballY < 501 && ballY > (510 - block_height - 10) && velX > 0) {
            Vx = - e_block * velX;
            posX = ballX - 1;
            tx = 0;
            collision_counter += 1;
        }
        else if ($('#block').attr('x') != '-1000px' && ballX < (block_x + block_width + 10) && ballX > (block_x + block_width) && ballY < 501 && ballY > (510 - block_height - 10) && velX < 0) {
            Vx = - e_block * velX;
            posX = ballX + 1;
            tx = 0;
            collision_counter += 1;
        }
        else if (ballX > (obstacle_x - 10) && ballX < obstacle_x && ballY < 501 && ballY > (510 - obstacle_height - 10) && velX > 0) {
            Vx = - e_obstacle * velX;
            posX = ballX - 1;
            tx = 0;
            collision_counter += 1;
        }
        else if (ballX < (obstacle_x + obstacle_width + 10) && ballX > (obstacle_x + obstacle_width) && ballY < 501 && ballY > (510 - block_height - 10) && velX < 0) {
            Vx = - e_obstacle * velX;
            posX = ballX + 1;
            tx = 0;
            collision_counter += 1;
        }

        //trajectory
        trajectory = trajectory + " L" + ballX + ' ' + ballY;
        $('#trajectory').attr('d', trajectory);

        //maximum height
        if (h < (500 - ballY) / 10) {
            h = (500 - ballY) / 10;
            $('#height').text(h.toFixed(3) + ' m');
        }

        //final velocity, total time required, range at first collision
        if (collision_counter == 0) {
            $('#finalV').text('(' + (velX).toFixed(3) + ', ' + (velY).toFixed(3) + ') m/s');
            $('#time').text((t_global / 145).toFixed(3) + ' S');
            $('#range').text(((ballX - 250) / 10).toFixed(3) + ' m');
        }

        //velocity of the ball
        $('#velocity').text('(' + velX.toFixed(3) + ', ' + velY.toFixed(3) + ') m/s');

        // location of the ball
        $('#location').text('(' + ((ballX - 250) / 10).toFixed(3) + ', ' + ((ball_cy - ballY) / 10).toFixed(3) + ') m');

        //simulate position of the ball
        $('#ball').attr('cx', ballX.toString() + 'px').attr('cy', ballY.toString() + 'px');

        //recursion
        run = setTimeout(throwBall, 1);
    };



    //global-time function
    function GlobalTime() {
        t_global += 1;
        $('#global_time').text((t_global / 145).toFixed(3) + ' S');
        runtime = setTimeout(GlobalTime, 1);
    }



    //pause button
    $('#stop').click(function () {
        if ($('#stop').attr('value') == 'Pause') {
            clearTimeout(run);
            clearTimeout(runtime);
            $('#stop').attr('value', 'Start').css('background', 'linear-gradient(180deg, #ec9838, #ffc578, #ffdab0)');
        }
        else if ($('#stop').attr('value') == 'Start') {
            throwBall();
            GlobalTime();
            $('#stop').attr('value', 'Pause').css('background', 'linear-gradient(180deg, #ffdab0, #ffc578, #ec9838)');
        }
    });



    //reset button
    $('#reset').click(function () {
        $('#simulate').prop('disabled', false);
        $('#ball').attr({ cx: '250px', cy: '500px' });
        $('#block').attr({ x: '-1000px', y: '510px', height: '0px', width: '0px' });
        $('#obstacle').attr({ x: '-1000px', y: '510px', height: '0px', width: '0px' });
        $('#VelArrow').attr({ d: 'M250 500' });
        $('#VelArrowHead').attr({ cx: '250px', cy: '500px' });
        $('#ForArrow').attr({ d: 'M150 250' });
        $('#ForArrowHead').attr({ cx: '150px', cy: '250px' });
        $('#global_time').text('0 S');
        $('#location').text('(0, 0) m');
        $('#finalV, #time, #range, #height').text('');
        $('#velocity').text('(0, 0) m/s')
        $('#trajectory').attr('d', 'M250 500');
        $('#stop').attr('value', 'Pause').css('background', 'linear-gradient(180deg, #ffdab0, #ffc578, #ec9838)').prop('disabled', true);
        clearTimeout(run);
        clearTimeout(runtime);
        h = 0;
        Vx = 0;
        Vy = 0;
        g = 9.80665;
        Ax = 0;
        Ay = 0;
        e_block = 0;
        e_ground = 0;
        e_obstacle = 0;
        block_x = - 1000;
        obstacle_x = -1000;
        posX = 250;
        posY = 0;
        ball_cy = 500;
        velX = 0;
        velY = 0;
        collision_counter = 0;
    });



    //trajectory button
    $('#trajectory_display').click(function () {
        if ($('#trajectory').attr('stroke') == 'transparent') {
            $('#trajectory').attr('stroke', '#505050');
            $('#trajectory_display').css('background', 'linear-gradient(180deg, #bbb800, #ece922, #fff280, #fffab0)')
                .attr('value', 'Hide Trajectory');
        }
        else {
            $('#trajectory').attr('stroke', 'transparent');
            $('#trajectory_display').css('background', 'linear-gradient(180deg, #fffab0, #fff278, #ece922, #bbb800)')
                .attr('value', 'Show Trajectory');

        };
    });


    //keyboard shortcuts
    $('body').keypress(function (event) {
        if (event.which == 116) {
            $('#trajectory_display').click();
        }
        else if (event.which == 32) {
            if ($('#simulate').prop('disabled') == false) {
                $('#simulate').click();
            }
            else {
                $('#stop').click();
            };
        }
        else if (event.which == 114) {
            $('#reset').click();
        };
    });










})