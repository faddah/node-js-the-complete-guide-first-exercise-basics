const { usersList } = require('./usersList')

console.log(usersList);

const usersTemplate = `
<html>
	<head>
		<title>User List Page</title>
	</head>
	<body>
		<div style="color: darkblue; font-family: 'Apple Gothic', Helvetica, Ariel, sans-serif; font-size: 24px; margin: 2.5%;">
			<h1 style="font-size: 36px; text-align: center";">User List Page</h1>
			<ul>
				${usersList}
			</ul>
			<a href="/"><<= Go back</a>
		</div>
	</body>
</html>
`;

module.exports.usersTemplate = usersTemplate;