 const NavItems = document.getElementById('NavItems');
  const bars = document.getElementById('bar');
  const close = document.getElementById('cls');
  
  if(bars){
bars.addEventListener('click',()=>{
    NavItems.style.left = '40vw';
    bars.style.display = 'none';
    close.style.display = 'block';
})}
if(close){
close.addEventListener('click',()=>{
    NavItems.style.left = '-40vw';
    bars.style.display = 'block';
    close.style.display = 'none';
})}