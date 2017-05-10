//@ts-check

var t = function (tag) {
  return new Tag(tag)
}

var Tag = function (tag) {
  this.queue = []
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

Tag.prototype.appendTo = function (id) {
  var parent = document.getElementById(id)
  parent.appendChild(this.element)
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
  var last = this.queue[this.queue.length - 1]
  this.element[last] = value
  return this
}

Tag.prototype.done = function () {
  return this.element
}
