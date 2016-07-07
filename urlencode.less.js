/*
 *  Less URL Encode Function - urlencode.less.js
 */


functions.addMultiple({
	'urlencode': function (arg) {
		return new tree.Quoted('"', encodeURIComponent(arg.value))
	}
})
