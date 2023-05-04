const header_options = [
	"Why art is so important",
	"Why you shouldn't buy the new iPhone",
	"Is life actually real?",
	"How to learn JS in 2 months"
  ];
  const body_options = [
	"69 min. read",
	"7 min. read",
	"8 min. read",
	"87,658.1277 min. read"
  ];
  const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"];
  const image_options = [
	"https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
	"https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
	"https://images.unsplash.com/photo-1506073828772-2f85239b6d2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
	"https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
  ];
  var i = 0;
  const selectedHeader = document.getElementById("selected-header");
  const selectedBody = document.getElementById("selected-body");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel");
  const mainMenu = document.getElementById("board");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  currentOptionText1.innerText = header_options[i];
  currentOptionText2.innerText = body_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  mainMenu.style.background = color_options[i];
  
  optionNext.onclick = function () {
	i = i + 1;
	i = i % header_options.length;
	currentOptionText1.dataset.nextText = header_options[i];
  
	currentOptionText2.dataset.nextText = body_options[i];
  
	mainMenu.style.background = color_options[i];
	carousel.classList.add("anim-next");
	
	setTimeout(() => {
	  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
	}, 455);
	
	setTimeout(() => {
	  currentOptionText1.innerText = header_options[i];
	  currentOptionText2.innerText = body_options[i];
	  carousel.classList.remove("anim-next");
	}, 650);
  };
  
  optionPrevious.onclick = function () {
	if (i === 0) {
	  i = header_options.length;
	}
	i = i - 1;
	currentOptionText1.dataset.previousText = header_options[i];
  
	currentOptionText2.dataset.previousText = body_options[i];
  
	mainMenu.style.background = color_options[i];
	carousel.classList.add("anim-previous");
  
	setTimeout(() => {
	  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
	}, 455);
	
	setTimeout(() => {
	  currentOptionText1.innerText = header_options[i];
	  currentOptionText2.innerText = body_options[i];
	  carousel.classList.remove("anim-previous");
	}, 650);
  };
  