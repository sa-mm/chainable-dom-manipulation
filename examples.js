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
  .appendTo('app')

t('a')
  .withText('A link to Google')
  .setAttr('href')
  .withValue('https://google.com')
  .appendTo('app')

t('p')
  .useMethod('textContent')
  .withValue('Setting the textContent of the element without "withText"')
  .appendTo('app')

