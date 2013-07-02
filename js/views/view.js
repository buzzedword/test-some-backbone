var PageView = Backbone.View.extend({

	// Not sure if it would make more sense to set this to the
	// body element: tagName: 'body',
	el: '.container',


	// You need to specify a model to listen to.
	model: homeModel,

	// Cache the template function for a single item.
	pageTemplate: _.template("An example template"),

	events: {
		'click .container': 'edit',
		'dblclick .container': 'edit'
	},

	// I think this will listen to a change on any pageModel
	// I'm not sure bc in the todo example I'm using for reference it says this
	// only works if there is a one to one relationship and I'm not sure
	// if that is the case here.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
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


// This should always be wrapped in a document.ready event.
$(function(){
	var firstPageView = new PageView();

	// I think this should log <button></button>
	console.log(firstPageView.el);
});