//Ajax code same as we looked at previously
var ajax=function(url,success)
{
	var ajaxRequest = new XMLHttpRequest(); 
	var handleResponse=function()
	{
		if(ajaxRequest.readyState===4)
		{
			if(ajaxRequest.status===200)
			{
		    	var data=JSON.parse(ajaxRequest.responseText);
		    	success(data); //this will call populateList
			}
		}
	}
	ajaxRequest.addEventListener("readystatechange",handleResponse,false); 
	ajaxRequest.open('GET', url, true);
	ajaxRequest.send("test");
}


var navList;
var contentDiv;
function createHandler(country)
{
	//need to use a closure to link each hyperlink to a country object
	return function(){
		contentDiv.innerHTML="The capital city is "+country.capital;
	}
}

function populateList(countries)
{
	navList=document.getElementById("nav");
	contentDiv=document.getElementById("content");

	countries.forEach(function(country){
		//create a list item <li>
		var newLi=document.createElement("li");
		newLi.innerHTML=country.name;
	    newLi.addEventListener("click", createHandler(country), false)
		//add the list item to the list
		navList.appendChild(newLi);
	})
}

function init(){
	ajax("data/countries.json",populateList);
}

init();



