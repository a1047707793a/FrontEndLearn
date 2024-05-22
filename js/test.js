var testjs = '{"json1":"1","json2":"2"}';
var jsobject = JSON.parse(testjs)
console.log(jsobject);
console.log(typeof(jsobject));
var json = JSON.stringify(jsobject);
console.log(json);
console.log(typeof(json));