//@ts-check

var p = t('p').withText('A "p" element with text.').done()
var app = document.getElementById('app')

app.appendChild(p)

var p2 = t('p')
            .withText('A "p" element')
            .withChild(
                  t('b')
                    .withText(' with a child.')
                    .done()
                ).done()

app.appendChild(p2)

var note = 'Another "p" element appended to "app" that\'s slightly more convenient'

t('p')
  .withText(note)
  .appendTo('#app')

t('a')
  .withText('A link to Google')
  .setAttr('href')
  .withValue('https://google.com')
  .appendTo('#app')

t('p')
  .useMethod('textContent')
  .withValue('Setting the textContent of the element without "withText"')
  .appendTo('#app')

// Test with class selector
t('p')
  .withText('This should show up multiple times')
  .appendTo('.test-class')

t('div')
  .setAttr('className')
  .withValue('blah')
  .withChild(
    t('p')
      .withText('blah')
      .done())
  .withChild(
    t('p')
      .withText('blah again')
      .done())
  .appendTo('body')
