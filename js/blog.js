$(function() {
// Enable jQuery for Parse
	Parse.$ = jQuery;
 Parse.initialize("28I2KtJC7OSfMX7gh9UN5SGiif61bpUBzG9pdq8Z", "bm8W75dpSmvayu26EWikgyq8s263log6HNl4FWTW");
 var Blog = Parse.Object.extend("Blog");
 var Blogs = Parse.Collection.extend({
     model: Blog
 });
 var blogs = new Blogs();
 blogs.fetch({
     success: function(blogs) {
         console.log(blogs);
     },
     error: function(blogs, error) {
         console.log(error);
     }
 });
});
