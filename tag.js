//@ts-check

var t = function (tag) {
  return new Tag(tag)
}

var Tag = function (tag) {
  this.queue = []
  this.tag = tag
  this.element = document.createElement(tag)
  return this
}

Tag.prototype.withText = function (text) {
  this.element.textContent = text
  return this
}

Tag.prototype.withChild = function (element) {
  this.element.appendChild(element)
  return this
}

Tag.prototype.appendTo = function (selector) {
  function getElements (selector) {
    return document.querySelectorAll(selector)
  }
  var parents = getElements(selector)

  for (var i = 0; i < parents.length; i++) {
    var child = this.element.cloneNode(true)
    parents[i].appendChild(child)
  }
  return this
}

Tag.prototype.setAttr = function (attribute) {
  this.element.attribute = attribute
  this.queue.push(attribute)
  return this
}

Tag.prototype.useMethod = function (methodName) {
  this.methodName = methodName
  this.queue.push(methodName)
  return this
}

Tag.prototype.withValue = function (value) {
  var setAttributeOrMethod = this.queue[this.queue.length - 1]
  this.element[setAttributeOrMethod] = value
  return this
}

Tag.prototype.done = function () {
  return this.element
}
