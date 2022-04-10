$(document).ready(function() {
					
    $("#edit").click(function(){
		  	$('.summernote').summernote();
			  $("#edit").hide();
		    	$("#save").show();
		     	$('.summernote').summernote('code', $("#opis").html());
	});
		
	$("#save").click(function(){
		bootbox.confirm({
			size: "medium",
			  message: "Are you sure?",
			   buttons: {
			 	confirm: {
					  label: 'Save',
				  },
			     	cancel: {
					 label: 'Cancel',
				}
			},
			callback: function(result) { 
				if(result)
				{
					var markupStr = $('.summernote').summernote('code');
					$("#opis").html(markupStr);
				}
				$("#edit").show();
				 $("#save").hide();
				  $('.summernote').summernote('destroy');
			     	$('.summernote').hide();
			}
		})
	});

	
	$("#save").hide();
});
