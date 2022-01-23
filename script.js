menu.onclick = function myFunction() {
  var x = document.getElementById('myTopnav');
  if(x.className==="topnav"){
    x.className += " responsive";
  }else{
    x.className="topnav";
  }
}
<script>
var bigsize = "300";
var smallsize = "150";
function changeSizeImage(im) {
if(im.height == bigsize) im.height = smallsize;
else im.height = bigsize;
}
</script>
