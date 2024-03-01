let overscrolled = 0;
let prevScroll = 0;
let currentScale = 1.005;
let wheelEnd = false;
let wheelEventEndTimeout;

function isTrue(trfl) {
	let doc = document.querySelector('body');
	console.log(doc);
	doc.style.transformOrigin = "top";
	doc.style.transform = 'scaleY(1)';
	doc.style.transformOrigin = "top";
	doc.style.transition = ".3s";
		
	/*window.addEventListener('scroll', (e) => {
		console.log("scl")
		if(window.scrollY == 0) {
			if(prevScroll == 0) {
				console.log("overscrolling...")
				document.body.style.transform = "scaleY(1.4)";
			} else {
				document.body.style.transform = "auto";
			}
			prevScroll = 0;
		}
	})*/
	
	document.addEventListener('wheel', (e) => {
		if(window.scrollY == 0) {
			clearTimeout(wheelEventEndTimeout);
			wheelEventEndTimeout = setTimeout(() => {
				console.log("stopping.....");
				document.body.style.transform = "scaleY(1)";
			}, 100);
			
			if(prevScroll == 0) {
				console.log("overscrolling...")
				document.body.style.transform = `scaleY(${currentScale})`;
				if(currentScale < 1.1) {
					currentScale += .005;
				} else {
					//document.body.style.transform = "scaleY(1)";
				}
			} else {
				document.body.style.transform = "scaleY(1)";
			}
			prevScroll = 0;
		} else {
				document.body.style.transform = "scaleY(1)";
		}
	})
	
	return !trfl;
}



module.exports = isTrue;
