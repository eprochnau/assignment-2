// Toggle Nav JS

	var navTop = document.querySelector('.nav-top');
	
	document.querySelector('.nav-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (navTop.getAttribute('data-state') == 'expanded'){
			
			navTop.setAttribute('data-state', 'collapsed');
		  this.setAttribute('data-state', 'inactive');
		}else{
		
			navTop.setAttribute('data-state', 'expanded');
	    this.setAttribute('data-state', 'active');
		}
	});
	
<script type="text/javascript">
	window.onload=function(){
	var tfrow=document.getElementById('tfhover').rows.length;
	var tbRow=[];
	for (var i=1;i<tfrow;i++) {
		tbRow[i]=document.getElementById('tfhover').rows[i];
		tbRow[i].onmouseover = function(){
		  this.style.backgroundColor = '#ffffff';
		};
		tbRow[i].onmouseout = function() {
		  this.style.backgroundColor = '#d4e3e5';
		};
	}
};
</script>
