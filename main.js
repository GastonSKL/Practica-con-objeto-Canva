const canvas = document.getElementById("canvas");
const dif = canvas.getBoundingClientRect();
const contexto = canvas.getContext("2d");

let painting, color, linewidth, difx, dify;

canvas.addEventListener("mousedown", (e) => {
  difx = e.clientX - dif.left;
  dify = e.clientY - dif.top;
  painting = true;
  color = document.getElementById("color").value;
  linewidth = document.getElementById("lw").value;
  contexto.beginPath();
});



canvas.addEventListener("mouseup",()=>{
  contexto.closePath();
  painting = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (painting) {
    dibujar(difx, dify, e.clientX - dif.left, e.clientY - dif.top);
    difx = e.clientX - difx.left;
    dify = e.clientY - dify.top;
  }
});

const dibujar = (x1,y1,x2,y2) =>{
  contexto.strokeStyle = color;
  contexto.linewidth = linewidth;
  contexto.moveTo(x1,y1);
  contexto.lineTo(x2,y2);
  contexto.stroke();
  
  
}




