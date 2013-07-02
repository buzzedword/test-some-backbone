var PageModel = Backbone.Model.extend({

  defaults: {
    title: 'Default Title',
    buttontitle: 'Default button title',
    completed: false
  },
  
  initialize: function(){
    console.log('The PageModel has been initialized.');
    this.on('change', function(){
        console.log('- Values for this pageModel have changed.');
    });
  }

});

var homeModel = new PageModel({
  title: 'Home Title',
  buttontitle: 'Click to get to the About Pg',
  completed: true
});

var aboutModel = new PageModel({
  title: 'About Title',
  buttontitle: 'Click to get to the Home Pg',
  completed: true
});