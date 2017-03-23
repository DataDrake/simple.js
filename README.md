# simple.js
A set of useful JS modules for making web development easier.

## About

**Simple.js** was started out of frustration with the many JS frameworks
that exist today. It does not strive to be a framework itself, but instead
focuses on building useful functionality upon the existing
[Umbrella.js](https://github.com/umbrellajs/umbrella) framework.
**Simple.js** is a collection of JS modules that may be used to augment many
HTML and HTML5 elements for improved programmability of the user interface.

## Modules

**Available:**
* [delete.js](#deletejs)
* [forms.js](#formsjs)
* [top.js](#topjs)

---

### delete.js

This module allows a developer to turn an `anchor` into a clickable delete button.

**Usage:**
```html
<a href="/user/1234" simple-delete="div">Delete Me!</a>
```
**delete.js** can be used by adding the `simple-delete` tag to the `anchor`
element. It accepts a single CSS selector to determine which item to remove
upon the successful completion of a `DELETE` XHR Request to the URI indicated by `href`.

---

### forms.js

This module allows a developer to force an HTML `form` to submit JSON data instead
of HTML query strings.

**Usage:**
```html
<form id="example" simple-form>
```
**forms.js** can be used by adding the `simple-form` attrubte to the `form`
element. It will then use the `method` specified by the `form` to perform an XHR
Request to the `action` URI. It automatically handles the translation of the
form elements into JSON.

**Supported Form Elements:**
- [x] `button`
- [x] `datalist`
- [x] `input`
  - [x] checkbox
  - [x] color
  - [x] datetime
    - [x] datetime-local
    - [x] date
      - [x] month
      - [x] week
      - [x] year
    - [x] time
  - [x] email
  - [x] file
  - [x] number
  - [x] password (Need to find a way to store this better)
  - [x] radio
  - [x] range
  - [x] search
  - [x] submit (Only for the event)
  - [x] tel
  - [x] text
  - [x] url
- [ ] `keygen` *Deprecated*
- [ ] `output`
- [x] `select`
  - [x] multiple
- [x] `textarea`

---

### top.js

This module allows a developer to turn an `anchor` into a "Return to Top" button.

**Usage:**
```html
<a href="#" simple-top>Top</a>
```
**top.js** can be used by adding the `simple-top` attribute to an `anchor`.

##License

MIT License

Copyright 2017 Bryan T. Meyers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
