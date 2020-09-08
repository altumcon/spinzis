function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "spinzisshillong@gmail.com",
	Password : "PriyasSalon@2018",
	To : '<recipient’s email address>',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}