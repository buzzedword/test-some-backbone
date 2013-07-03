### Questions about models.js

__Is buttontitle a valid attribute (or should I be calling it a value?)?__

What's great about javascript (and by association, backbone) is that you can name your attribute
whatever you'd like. This is your application logic and data: however you feel like organizing it
is entirely alright. It's important to remember that outside of application logic, Backbone just stays
out of your way. It's a `library`, not a `framework`, so you only have the tools to do the job-- not the
opinionation you would get from a full fledged framework.

___

__Can I put the keys ie: title, buttontitle, and completed in quotes and it still be valid (backbone, JSON, etc)?
Is that better?__

The keys in your model are fine as they are. In their current state:

```js
defaults: {
    title: 'Default Title',
    buttontitle: 'Default button title',
    completed: false
  }
```

This would be called an "object literal". This is perfectly valid javascript. However, if for whatever reason
you require valid JSON (tooling like Grunt, QUNIT, or JS(L/H)int mandates as user defines) then you would have to
alter your syntax to:

```js
defaults: {
    "title": "Default Title",
    "buttontitle": "Default button title",
    "completed": false
  },
```

Note that the JSON syntax begins in "defaults". This object literal can be swapped out for a fully valid JSON string,
and both work. The only time this might be needed is if, say, you populated your defaults with a web service that
output JSON. Or, if a backend application bootstrapped the data with fully qualified JSON.

Bottom line, both syntaxes work fine for the application. The preference lies with you.
