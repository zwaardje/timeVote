(function ($) {
	
	
	$.fn.serializeObject = function() {
	  var o = {};
	  var a = this.serializeArray();
	  $.each(a, function() {
		  if (o[this.name] !== undefined) {
			  if (!o[this.name].push) {
				  o[this.name] = [o[this.name]];
			  }
			  o[this.name].push(this.value || '');
		  } else {
			  o[this.name] = this.value || '';
		  }
	  });
	  return o;
	};
	
	
	
	var Projects = Backbone.Collection.extend({
		url: 'php/new-projects.php'									  
	});
	
	var SaveVote = Backbone.Model.extend({
		urlRoot :  'php/add-vote.php'										 
	});
	
	var ProjectList = Backbone.View.extend({
		el: '.projects',
		render: function(){
			var that = this;
			var projects = new Projects();
			projects.fetch({
				success: function(projects){
					var template = _.template($('#project-list-template').html(), {projects: projects.models});
					that.$el.html(template);
				}
			})
		},
		events:{
			'submit .cast-vote': 'castVote'	
		},
		castVote: function(ev){
			var voteDetails = $(ev.currentTarget).serializeObject();
			var vote = new SaveVote();
			vote.save(voteDetails,{
				success: function(){
					console.log('vote has been cast');	
				}
			})
			return false;
		}
		
		
	});
	
	
	var projectList = new ProjectList();

	var Pages = Backbone.Router.extend({
		routes:{
			'' : 'home',
		}
	});
	
		
	var page = new Pages;
	page.on('route:home',function(){
		projectList.render();						  
	});
	
	Backbone.history.start();
	
})(jQuery);



