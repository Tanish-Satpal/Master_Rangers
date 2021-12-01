var canvas=new fabric.Canvas('myCanvas')
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img){
		fabric.Image
	})
}
function new_image(){
    fabric.Image.fromURL(get_image, function(Img){
	block_image_object = Img;

    block_image_object.scaleToWidth(150);
    block_image_object.scaleToHeight(140);
    block_image_object.set({
        top:block_x,
        left:block_y
    });
    canvas.add(block_image_object);
    });
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
x`x`
	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_image('rr1.png');
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image('gr.png');
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png');
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png');
	// upload blue ranger
	}
	
}

