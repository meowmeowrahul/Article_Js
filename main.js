/* Default share mobile*/
const defaultShare=document.querySelector('#defaultShare');
const Share=document.querySelector('#Share');
const activeShare=document.querySelector('#activeShare');
const activeShareDesk=document.querySelector('#activeShareDesk');
const defaultShareDesk=document.querySelector('#defaultShareDesk');
const newShare=document.querySelector('#newShare');



Share.addEventListener('click',async(e)=>{
    e.preventDefault();
    defaultShare.classList.add('hidden');
    activeShare.classList.remove('hidden');
    activeShare.classList.add('flex');
});
newShare.addEventListener('click',async(e)=>{
    e.preventDefault();
    activeShare.classList.add('hidden');
    activeShare.classList.remove('flex');
    defaultShare.classList.remove('hidden');
});
defaultShareDesk.addEventListener('click',async(e)=>{
    e.preventDefault();
    activeShareDesk.classList.remove('hidden');
    setTimeout(()=> activeShareDesk.classList.add('hidden'),3000)
});
