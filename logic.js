// Debatable need to change the entire date every second, although it could be a cheap process
// it still is a bit redundant for the majority, being the clock the most necessary update
function updateTime() {
	let today = new Date();
	let day = today.getDay();
	let daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	
	let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
	let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); 
	let dateTime = date+' '+time; 
	
	document.getElementById("displayWeekday").innerHTML = daylist[day];
	document.getElementById("displayDate").innerHTML = dateTime;
}

updateTime();
setInterval(updateTime, 1000);
