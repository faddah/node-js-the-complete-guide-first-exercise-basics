const homeIndexTemplate = `
<html>
	<head>
		<title>My Enter Message Form Page</title>
	</head>
	<body>
		<h1 style = "color: dodgerblue; font-size: 36px; text-align: center;">
			Hello from Faddah's Node.JS Server!
		</h1>
		<form action="/message" method="POST">
			<input type="text" name="message">
			<button type="submit">Send</button>
		</form>
	</body>
</html>
`;

module.exports.homeIndexTemplate = homeIndexTemplate;