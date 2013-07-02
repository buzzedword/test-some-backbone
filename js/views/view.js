var PageView = Backbone.View.extend({

	// this will grab the element that is already on the page with a class of .container
	// you could also create an element with tagName: 'li',
	el: '.container',

	// Cache the template function for a single item.
	pageTemplate: _.template( $('#page-template').html() ),

	// 
	events: {
		'click .button': 'render'
	},

	// this will let me know the PageView has been initialized
    initialize: function() {
      console.log('The PageView has been initialized.');
    },

	render: function() {
		// function to render the PageView with the either the homeModel or aboutModel data
		// probably should use the .toggle() jQuery function, but I'm not sure
		// not sure if i can leverage the code commented out below or not.
		// this.$el.html( this.pageTemplate( this.model.toJSON() ) );
	}

});

var firstPageView = new PageView();

// I don't know why this isn't initializing the PageView
console.log(pageTemplate.el);