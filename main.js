let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #c10dfd;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#c10dfd;">Si lo puedes imaginar, lo puedes programar</span>')
  .pauseFor(2000)
  .deleteChars(10)
  .start();
