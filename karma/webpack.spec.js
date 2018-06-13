
var context = require.context('./src', true, /\.unit\.spec\.js$/);
context.keys().forEach(context);