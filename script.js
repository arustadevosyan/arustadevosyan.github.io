let arr = [
	{
		img: "3e.jpg",
		title: "hands",
		description:"loving"
	},
	{
		img: "3e.jpg",
		title: "hands",
		description:"loving"
	},
	{
		img: "3e.jpg",
		title: "hands",
		description:"loving"
	}
];
for (var i = 0; i < arr.length; i++) {
	let box = document.createElement("div");
	box.style.width = "200px";
	box.style.height = "200px";
	box.style.display = "flex";
	box.style.justifyContent = "center";
	box.style.alignItems = "center";
	box.style.flexDirection = "column";
	box.style.border = "solid";
	let imm = document.createElement("img");
	imm.setAttribute("src",arr[i].img);
	imm.style.width = "50px";
	imm.style.height = "50px";
	imm.style.borderRadius = "50%";
	box.appendChild(imm);
	let chapter = document.createElement("h2");
	chapter.innerHTML = arr[i].title;
	box.appendChild(chapter);
	let des = document.createElement("p");
	des.innerHTML = arr[i].description;
	box.appendChild(des);
	let pa = document.getElementById("parent_js");
	pa.appendChild(box);
};

let arr_1 = [
	{
		img_g:"original.jpg",
		describe:"dontletmedown",
	},
	{
		img_g:"original.jpg",
		describe:"dontletmedown",
	},
	{
		img_g:"original.jpg",
		describe:"dontletmedown",
	},
	{
		img_g:"original.jpg",
		describe:"dontletmedown",
	},
];
for (var i = 0; i < arr_1.length; i++) {
	let boxik = document.createElement("div");
	boxik.style.width = "200px";
	boxik.style.height = "300px";
	boxik.style.border = "solid";
	let up = document.createElement("div");
	up.style.width = "100%";
	up.style.height = "70%";
	// up.style.border = "solid";
	let photo = document.createElement("img");
	photo.setAttribute("src",arr_1[i].img_g);
	photo.style.width = "100%";
	photo.style.height = "100%";
	up.appendChild(photo);
	boxik.appendChild(up);
	let down = document.createElement("div");
	down.style.width = "100%";
	down.style.height = "20%";
	// down.style.border = "solid";
	let text = document.createElement("h2");
	text.innerHTML = arr_1[i].describe;
	down.appendChild(text);
	boxik.appendChild(down);
	let par = document.getElementById("sec3_js");
	par.appendChild(boxik);
};

let arr_img = ["original.jpg","bbb.jpg","Cof.jpg","date.jpg","fff.jpg","red.jpg"];
let j = 0;
let slide = document.getElementsByClassName("slide_bg");
setInterval(function(){
	if(j<arr_img.length){
		slide[0].style.backgroundImage = "url("+ arr_img[j] +")";
		j++;
	}
},2000)
