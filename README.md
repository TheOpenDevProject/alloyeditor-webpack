## What?!?!
So basically I was happily coding with my face and I needed to use AlloyEditor for a project AND THEY DONT SUPPORT
WEBPACK NATIVELY!!!!. So I made them support it.

## Usage
```javascript
let AlloyEditor = require('alloyeditor-webpack'); //Top of webpack.config.js

//Add this to your provide plugin
new webpack.ProvidePlugin({
AlloyEditor : "alloyeditor-webpack"
})  

//Your actual code
const alloyEditor = AlloyEditor.editable('');

```
