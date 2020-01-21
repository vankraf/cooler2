<html>
	<script src="jquery-3.0.0.js"></script>
	<script>
	function query(){
		$.ajax({
			url: 'get.php',
			method: 'post',
			dataType: 'html',
			data: {
				server: "http://coolercontroller.000webhostapp.com/requestUnity.php"
			},
			success: function(data){
				 $("#block").text(data);
			}
		});
	}
	</script>
	<body>
		<input type="button" onClick="query();"></input>
		<div id ="block"></div>
	</body>
</html>