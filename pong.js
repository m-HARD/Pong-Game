var initialTop=0;
var initialAngle=0;
var initialSpeed;
var currentScore;
var xDirection;
var yDirection;
var curLeft;
var curTop;
var tanTheta;
var counter;

function initialize()
{
	
	initialTop=Math.floor((Math.random()*550)-50);
	initialAngle=Math.floor((Math.random()*90)-45);
	initialSpeed=1;
	currentScore=0;
	curTop=0;
	xDirection=true;
	if(initialAngle>0)
		yDirection=true;
	else
		yDirection=false;
}

function startGame(event)
{
	document.getElementById("theBall").style.top=initialTop+"px";
	document.getElementById("theBall").style.left="0px";

	var button = document.getElementById("startButton");
	button.disabled = true;
	button.classList.toggle("disabled")

	curLeft=0;
	if(curTop==0)
	curTop=initialTop;
	tanTheta=Math.tan(initialAngle*Math.PI/180);
	counter=setInterval("ballMove()", 5);
}

function setSpeed()
{
	var slider = document.getElementById("speedRang");
	initialSpeed=(slider.value *1)+.2;
}

function resetCounter()
{
	var button = document.getElementById("startButton");
	button.disabled = false;
	button.classList.toggle("disabled")

	initialize();
	clearInterval(counter);
}

function movePaddle(event)
{
	
	var paddleTop=event.clientY;
	if(paddleTop>=-50 && paddleTop<=500)
	document.getElementById("thePaddle").style.top=paddleTop+'px';
}

function increaseScore()
{
	currentScore=currentScore+1;
	document.getElementById("scoreBoard").innerHTML=currentScore;
}

function ballMove()
{
	if(xDirection==true)
	{
		if((curLeft<998 && curLeft>=0) || (curLeft<1050 && curLeft>1005))
		{
			curLeft=curLeft+initialSpeed;
		}
		else if(curLeft<=1005 && curLeft>=998)
		{
			var paddleTop = parseInt(document.getElementById("thePaddle").style.top);
			if(curTop>=(paddleTop-90) && curTop<=(paddleTop+42))
			{
				xDirection=false;
				curLeft=curLeft-initialSpeed;
			}
			else
			{
				curLeft=curLeft+initialSpeed;
			}
		}
		else if(curLeft>=1050)
		{
			curLeft=0;
			increaseScore();
			clearInterval(counter);
		}
		else
		{
			xDirection=false;
			curLeft=curLeft-initialSpeed;
		}
	}
	else 
	{
		if(curLeft<=1000 && curLeft>0)
		{
			curLeft=curLeft-initialSpeed;
		}
		else
		{
			xDirection=true;
			curLeft=curLeft+initialSpeed;
		}
	}
	if(yDirection==true)
	{
		if(curTop<=500 && curTop>-50)
		{
			curTop=curTop+(initialSpeed*tanTheta);
		}
		else
		{
			yDirection=false;
			curTop=curTop-(initialSpeed*tanTheta);
		}
	}
	else 
	{
		if(curTop<500 && curTop>=-50)
		{
			curTop=curTop-(initialSpeed*tanTheta);
		}
		else
		{
			yDirection=true;
			curTop=curTop+(initialSpeed*tanTheta);
		}
	}
	document.getElementById("theBall").style.left=curLeft+"px";
	document.getElementById("theBall").style.top=curTop+"px";
}