## Questions

__What is absolutely required in every var PageView = Backbone.View.extend({}); ?__

Backbone Views can actually be used "as is", without extending them. That's because the Backbone.View class is
already a fully functional wrapper! The `extend` method takes an object literal as an argument to extend the
_prototype_ of the class after you instanciate it.

What, what?

Take the following example. This is how you instanciate a class in JavaScript.
``` js
function MyClass()
{
  // ...
  returns variable;
}

var myInstanciatedClass = new MyClass();
myInstanciatedClass.prototype.myMethod = function(){...};

```

Woah, confusing. Actually, this is what we're doing with every view. First, the backbone way.

```js
var PageView = Backbone.View.extend({
  ...
});

var myPage = new PageView();
```

Now, this is what's really happening:

```js
var PageView = Backbone.View();
var myPage = new PageView();
myPage.prototype.initialize = Backbone.View.initialize;
myPage.prototype.render = // extend options go here

```

So, in short, you actually don't _need_ to extend anything into your view. It just overrides what's already there.
Read up some more on the methods you can override here:
http://backbonejs.org/#View

---

__Can I name _.template whatever I want?__

You have complete control over all aspects of your view, except for the method names. When you call:

```js
var myTemplate = _.template($('#pageTemplate').html());
```

What you're doing is really:

1. Selecting with jQuery the element with ID `pageTemplate`.
2. Getting the HTML of selected element
3. Running the jQuery dom object through underscore's template function
4. Saving the result as a variable.

What's important to note is that the _.template function will actually return ANOTHER function, which can
have JSON passed into the fields you've defined in your HTML template.

So: you can name the _cached_ result whatever you'd like. You cannot alter the template method.
