 Parse.initialize("28I2KtJC7OSfMX7gh9UN5SGiif61bpUBzG9pdq8Z", "bm8W75dpSmvayu26EWikgyq8s263log6HNl4FWTW");
    var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
