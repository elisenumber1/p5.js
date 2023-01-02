function preload(){

}

function setup(){
	canvas=createCanvas(680,680);
	canvas.position(110,250);
	circle(30,30,20)
		circle(40,40,20)
			circle(50,50,20)
				circle(60,60,20)
					circle(20,20,20)
						circle(10,10,20)
						circle(70,70,20)
}

function draw(){
	image(video,0,0,640,480);
		tint(tint_color);
}

function take_snapshot(){
	save("student_name.png");
}

function filter_tint(){
	tint_color=document.getElementById("color_name").value;
}