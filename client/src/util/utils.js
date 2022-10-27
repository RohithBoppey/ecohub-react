export const sendMessageToAdmin = async (messageDetails) => {
	let flag = false;
	console.log(messageDetails);
	const allMessages = await fetch("http://localhost:3002/messages");
	const allMessagesJson = await allMessages.json();
	allMessagesJson.forEach((message) => {
		if (
			message.useremail === messageDetails.useremail &&
			message.typeofQuery === messageDetails.typeofQuery
		) {
			// already a message is there
			alert(
				`You have already kept a ${messageDetails.typeofQuery} message. Please wait.`
			);
			flag = true;
			return;
		}
	});

	if (flag === false) {
		await fetch("http://localhost:3002/messages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(messageDetails),
		});

		console.log("Sent", messageDetails);
	}
};
