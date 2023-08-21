
// typing animation 

var typed = new Typed(".typing", {
	strings:["", "Web Designer", "Front-end Developer"],
	typeSpeed:100,
	BackSpeed:60,
	loop:true,
});

// aside 
let nav = document.querySelector('.nav');
let navList = nav.querySelectorAll('li');
let totalNavList = navList.length;

  for(let i=0; i < totalNavList; i++) {
  	let a = navList[i].querySelector("a");
  	a.addEventListener('click', function () {
  		for (let j = 0; j < totalNavList; j++) {
  			navList[j].querySelector("a").classList.remove('active');
  		}

  		this.classList.add('active');
  	})
  }

  