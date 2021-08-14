var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 block_image_object = "";
 
 block_image_object_width = 700;
 block_image_object_height = 510;
function new_image()
{
   fabric.Image.fromURL("BirthdayImage.jpg", function(img){
       block_image_object = img;
     
     block_image_object.scaleToWidth(block_image_object_width);
     block_image_object.scaleToHeight(block_image_object_height);
     block_image_object.set({top:0, left:0});
     canvas.add(block_image_object);
       });
	
}

function playSound(){
x.play();	
}
