import React, { useEffect, useState } from "react";

import Messages from "../../components/Admin/Messages";

const ShowAllMessages = (props) => {
	const [allMessages, setAllMessages] = useState([]);

	const getAllMessages = async () => {
		const messages = await fetch("http://localhost:3002/messages");
		const messagesJson = await messages.json();
		console.log(messagesJson);
		setAllMessages(messagesJson);
	};

	useEffect(() => {
		getAllMessages();
	}, []);

	return (
		<div>
			{allMessages !== undefined && allMessages !== null && (
				<Messages messages={allMessages} onLogout={props.onLogout} />
			)}
		</div>
	);
};

export default ShowAllMessages;
