var Mybutton = document.getElementById('Cliclme');
var writing = document.getElementById('writing');
var shunasheep = document.getElementById('myImg');
var src1 =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27FXCFIl3eYPiDVbZ4UcZ_N2j4Goim5VZ4-8RSp0rK_Py_z8L';
var src2 = 'https://media2.giphy.com/media/3ohhwfrNSCLUL05AVG/source.gif';
console.log(Mybutton);

// Mybutton.addEventListener('click', clickEcent);
Mybutton.onclick = clickEcent;
function clickEcent(e) {
  e.target.innerText = 'You Clicked Me';
  writing.innerHTML = 'Hello Guys';
  //   e.target.style.color = 'blue';
  //   document.body.style.backgroundColor = 'red';
  //   writing.innerHTML = 'Hellow lovlly Peaple';
  if (
    shunasheep.src ===
    'https://media2.giphy.com/media/3ohhwfrNSCLUL05AVG/source.gif'
  ) {
    shunasheep.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27FXCFIl3eYPiDVbZ4UcZ_N2j4Goim5VZ4-8RSp0rK_Py_z8L';
    writing.innerHTML = 'Hello Guys';
  } else {
    shunasheep.src =
      'https://media2.giphy.com/media/3ohhwfrNSCLUL05AVG/source.gif';
    writing.innerHTML = 'Do you Want to Dance with Me ... Guys';
  }
  // shunasheep.src =
  //   'https://3.bp.blogspot.com/-JOYCkCuDluU/WeVo8AEDCXI/AAAAAAAJ6sQ/UTZ7OJMUWAcztigYqZe8qzTiw7mIm10mQCLcBGAs/s1600/AF005415_02.gif';
  // ('https://3.bp.blogspot.com/-JOYCkCuDluU/WeVo8AEDCXI/AAAAAAAJ6sQ/UTZ7OJMUWAcztigYqZe8qzTiw7mIm10mQCLcBGAs/s1600/AF005415_02.gif');
}
