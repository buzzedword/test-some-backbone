var PageView = Backbone.View.extend({

	// this will grab the element that is already on the page with a class of .container
	// you could also create an element with tagName: 'li',
	el: '.container',

	// Cache the template function for a single item.
	pageTemplate: ( $('#page-template').html() ),

	events: {
		'click .button': 'edit'
	},

	// this will let me know the PageView has been initialized
    initialize: function() {
      console.log()
    },

    // *while reading found this is an optional function*
    // Not really sure what is supposed to happen in the following function or if I need
    // both a render function and edit function for this tutorial
    //render: function() {
    //	this.$el.html( this.pageTemplate( this.model.toJSON() ) );
    //},

	edit: function() {
		// I think this is suppossed to be a function to get the initialized
		// models i've built in the models/model.js file: homeModel & aboutModel
	}

	// I'm not sure if I always need the other things that the todo app has in this file
	// Do I always need render: ? // *Render is an optional funtion*

});

var firstPageView = new PageView();

// I think this should log <button></button>
console.log(pageTemplate.el);