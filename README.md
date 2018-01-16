# Using jQuery 
This example uses Ajax so you'll need a web server up and running

* Open index.html in a browser.
* Test it works

Have a look at the code, there isn't anything in here that we haven't looked at before. To test you understand what is happening, try the following:

1. Can you add another country to the list
2. When a country is clicked can you display the country name and the population as well as the capital city 

The purpose of this practical is to re-write this example but use jQuery instead. Make a copy of the practical folder, work on the copy so we can compare the two versions at the end. 

* From https://jquery.com/ download a copy of jQuery, save this into the js folder. 
* In the HTML make sure you link to the jQuery library before your own JavaScript file e.g.

```html
...
<ul id="nav"></ul>
<div id="content"></div>
    
<script src="js/jquery-3.1.1.min.js"></script>
<script src="js/countries.js"></script>
    
</body>
...
```

In countries.js, comment out the existing JavaScript code, and add the following

```javascript
$(document).ready(function(){
    console.log("jquery working");
})
```

Run it in a browser check it works. 

The $ sign is a call to the jQuery library. The above code simply states select the entire document, and once it's loaded (ready), run a function. For more info have a look at:
* http://learn.jquery.com/about-jquery/how-jquery-works/
* http://learn.jquery.com/using-jquery-core/document-ready/

### Using Ajax with jQuery
First, we'll try and load the list of countries using Ajax. Have a look at http://api.jquery.com/jQuery.getJSON/ see if you can make an Ajax request to load the list of countries. For now simply display them in the console. If you get stuck the answers are at the bottom of these instructions.

### Iterating over an array
Inside this function can you iterate over the array of countries and display the name of each country in the console. Have a look at http://learn.jquery.com/using-jquery-core/iterating/ . If you get stuck the answers are at the bottom of these instructions.

### DOM Manipulation
Next try, to make the name of each country appear inside the ul element, *nav*. Have a look at http://learn.jquery.com/using-jquery-core/manipulating-elements/, in particular creating elements (about halfway down the page) . If you get stuck the answers are at the bottom of these instructions.

### Attaching Events
Now make each country name clickable. To start with, just display a simple console message, when any of the list items are clicked. See http://learn.jquery.com/events/event-basics/ . If you get stuck the answers are at the bottom of these instructions.

### Displaying the country's details
Now, can you make the div element, *content*, display the details for the country that was clicked on? If you get stuck the answers are at the bottom of these instructions.

Finally compare the original code, to your jQuery version, what do you think about the amount of code how easy it is to read, how easy it is to maintain?

## Answers

### Using Ajax with jQuery
```javascript
$(document).ready(function(){
    $.getJSON("data/countries.json",function(countries){
        console.log(countries);
    });
})

```

### Iterating over an array
```javascript
$(document).ready(function(){
    $.getJSON("data/countries.json",function(countries){
        $.each(countries, function(index,country){
            console.log(country.name);
        })
    });
});
```
### DOM Manipulation
```javascript
$(document).ready(function(){
    $.getJSON("data/countries.json",function(countries){
        $.each(countries, function(index,country){
            var $newLi = $('<li>'+country.name+'</li>');
            $("#nav").append($newLi);
        })
    });
});
```
### Attaching Events
```javascript
$(document).ready(function(){
    $.getJSON("data/countries.json",function(countries){
        $.each(countries, function(index,country){
            var $newLi = $('<li>'+country.name+'</li>').click(function(){
                console.log("clicked a list item");
            })
            $("#nav").append($newLi);
        })
    });
});
```
### Displaying the country's details
```javascript
$(document).ready(function(){
    $.getJSON("data/countries.json",function(countries){
        $.each(countries, function(index,country){
            var $newLi = $('<li>'+country.name+'</li>').click(function(){
                $("#content").html("The capital city is "+country.capital);
            })
            $("#nav").append($newLi);
        })
    });
});
```

