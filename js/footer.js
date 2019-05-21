
//For footer
window.addEventListener('scroll',function(){
	var footer=document.getElementById('footer');
	var flooter=document.getElementById('floating-footer');
	var yfooter=document.documentElement.scrollTop;	
	if(yfooter > 30 ){
		footer.style.transform="translateY(0vh)";
		flooter.style.transform="translateX(0)";
	}
	else{
		footer.style.transform="translateY(4vh)";
		flooter.style.transform="translateX(400px)";
	}
});

/*Navigation Bar*/
var menu=document.getElementsByClassName("menu-button");
		menu[0].addEventListener("click",menushow);
		function menushow(){
			var menuList=document.getElementsByClassName("nav-div2");
			if(menuList[0].classList.contains("menu-hide")){
				menuList[0].classList.remove("menu-hide");
				menuList[0].classList.add("menu-show");
				menu[0].style.borderColor="#37474F";
			}
			else if(menuList[0].classList.contains("menu-show")){
				menuList[0].classList.remove("menu-show");
				menuList[0].classList.add("menu-hide");
				menu[0].style.borderColor="White";
			}
			else{
				menuList[0].classList.add("menu-show");
				menu[0].style.borderColor="#37474F";
			}
			
		}