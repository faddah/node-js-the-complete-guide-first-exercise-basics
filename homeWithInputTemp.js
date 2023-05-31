const homeWithInputTemplate = `
<html>
	<head>
		<title>My Enter Message Form Page</title>
	</head>
	<body>
		<h1 style = "color: dodgerblue; font-size: 36px; text-align: center;">
			Hello from Faddah's Node.JS User List Server!
		</h1>
		<form action="/create-user" method="POST">
			<input type="text" name="create-user">
			<button type="submit">Add User Name</button>
		</form>
	</body>
</html>
`;

module.exports.homeWithInputTemplate = homeWithInputTemplate;