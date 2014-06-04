App = Ember.Application.create({});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).format('MMMM Do YYYY');
});

/*
Ember.Handlebars.helper('format-excerpt', function(body) {
	n = 100;
   	var toLong = body.length>n,
		s_ = toLong ? body.substr(0,n-1) : body;
	s_ = toLong ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
	return  toLong ? s_ + '...' : s_;
});
*/