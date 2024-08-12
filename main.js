var noseX=0;
var noseY=0;

function preload(){
  Leon = loadImage("LeonHEAD-removebg-preview.png")
  video = loadImage("LeonHEAD-removebg-preview.png")
}

function setup(){
  canvas = createCanvas(650,500);
  canvas.center();

  video = createCapture(VIDEO)
  video.hide()
   poseNet = ml5.poseNet(video,modeloCarregado)
   poseNet.on("pose",resultados)

}
   function modeloCarregado(){
   console.log("modelo carregado")
}

  function draw() {
    image(video,0,0,650,500)
    fill("darkblue")
    //circle(noseX,noseY,50)
    image(Leon,noseX-150,noseY-200,350,350)
}

function resultados(r){
  if(r.length>0){
    console.log(r)
    noseX = r[0].pose.nose.x
    noseY = r[0].pose.nose.y
    console.log(noseX+","+noseY)
  }
}

function takeSnapshot(){    
    save('imagem-com-filtro.png');
}