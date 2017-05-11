# chainable dom manipulation

I thought it might be nice to chain methods when scripting against the DOM without having to load jQuery.

Loading `tag.js` gives you a global `t` variable.

**There's a good chance this README will not stay up to date as I play around. Just check out `examples.js`.**

Suppose you have a `div` with an id of "app". The following creates a `p` element and you then append it to the `div`.

```javascript
var p = t('p').withText('A "p" element with text.').done()
var app = document.getElementById('app')

app.appendChild(p)
```

You can also create an element with children:

```javascript
var p2 = t('p')
            .withText('A "p" element')
            .withChild(
                  t('b')
                    .withText(' with a child.')
                    .done()
                ).done()

var app = document.getElementById('app')
app.appendChild(p2)
```

`.withText()`: A method for setting the `textContent` of the element.

`.done()`: A method that returns the element rather than the `t` object. Necessary if you want to assign the element itself to a variable.

`.withChild()`: Appends a child to the element you're building.

`.appendTo()`: Appends your element to another element.

Example:

```javascript
var app = document.getElementById('app')
var note = 'A "p" element appended to "app". Meant to be convenient convenient'

t('p')
  .withText(note)
  .appendTo('app')
```

`.setAttr()`: A method for setting an attribute on the tag. This is used in conjunction with the `.withValue()` method.

Example:

```javascript
var app = document.getElementById('app')

t('a')
  .withText('A link to Google')
  .setAttr('href')
  .withValue('https://google.com')
  .appendTo('app')
```

`.useMethod()`: A method for using a random method on the node. This is used in conjunction with the `.withValue()` method.

Example:

```javascript
var app = document.getElementById('app')

t('p')
  .useMethod('textContent')
  .withValue('Setting the textContent of the element without "withText"')
  .appendTo('app')
```

Questions/Problems:

- How far does this get me?
- Too verbose?
- `.appendTo()` just selects id's. (fixed)
- nodes vs. html tags
- update readme
- think about syntax