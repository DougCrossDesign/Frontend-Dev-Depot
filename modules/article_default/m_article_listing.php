<div class="dropdown">
	<button class="dropbtn">Select Month</button>
	<div class="dropdown-content">
		<a href="#">Link 1</a>
		<a href="#">Link 2</a>
		<a href="#">Link 3</a>
	</div>
</div>			
<a href="#viewall" class="btn small" title="View All">View All</a>

<hr>		

<?php for ($i=0; $i < 5; $i++) { ?>
<!-- Event -->
<div class="article-list-wrap">
	<div class="clearfix btm-margin">												
		<div class="article-list-left clearfix">
			<div class="article-list-image">
				<a href="/article-details" title="Title"><img class="fluid-img" src="http://placehold.it/320x230" title="title" alt="title" ></a>
			</div>
		</div>
		<div class="article-list-mid">
			<a href="/article-details" title=""><h2 class="hdr3 btm-margin-sm">Article Title</h2></a>
			<div class="article-list-desc btm-margin">
				<div class="btm-margin-sm">August 20th 2016</div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit placerat magna, ac pretium massa luctus mattis. Aliquam accumsan feugiat pellentesque. 
				<a class="more" href="/article-details">...more</a>
			</div>
			<div>
				<a href="#" class="btn small">More Info</a>
			</div>
		</div>
	</div>	
</div>
<?php } ?>

<hr>
<center>
<div class="pagination">
	<a href="#">&laquo;</a>
	<a href="#">1</a>
	<a href="#" class="active">2</a>
	<a href="#">3</a>
	<a href="#">4</a>
	<a href="#">5</a>
	<a href="#">6</a>
	<a href="#">&raquo;</a>
</div>
</center>