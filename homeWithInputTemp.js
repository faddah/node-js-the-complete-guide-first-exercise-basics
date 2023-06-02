const homeWithInputTemplate = `
<html>
	<head>
		<title>My Enter Message Form Page</title>
	</head>
	<body style="margin: 3em">
		<h1 style="color: dodgerblue; font-size: 36px; margin-bottom: 7.5%; text-align: center;">
			Hello from Faddah's Node.JS User List Server!
		</h1>
		<form action="/create-user" method="POST">
			<input type="text" name="create-user" style="font-size: 24px; width: 35%;">
			<button type="submit" style="background-color: dodgerblue; border-radius: 15px; color: white; font-size: 24px; font-weight: 700; padding: 0.5em;">Add User Name</button>
		</form>
		<div style="color: dodgerblue; font-size: 36px; margin-top: 7.5%; text-align: center;">
			<a href="/users">Go To Users List</a>
		</div>
	</body>
</html>
`;

module.exports.homeWithInputTemplate = homeWithInputTemplate;