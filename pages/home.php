<script type="text/template" id="project-list-template">
<% _.each(projects, function( project){ %>
	<div class="project span3">
		<h2><%= project.get('name')  %></h2>
		<img src="<%= project.get('image') %>"/>
		<p><%= project.get('description') %></p>
		<form class="cast-vote">
			<input type="hidden" name="id" value="<%= project.get('id') %>">
			<button type="submit" class="btn">Vote for this project</button>
		</form>
	</div>
<% }); %>
</script>


<div id="home" class="container">
	<h1>Project list</h1>
    <hr>
    <div class="projects">
    
    </div>
</div>