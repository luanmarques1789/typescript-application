interface IMailTo {
	name: string;
	email: string;
}

interface IMailMessage {
	subject: string;
	body: string;
	attachment?: string[];
}

// Data Transfer Object (DDD metodology)
interface IMessageDTO {
	to: IMailTo;
	message: IMailMessage;
}

export default class EmailService {
	sendMail({ to, message }: IMessageDTO) {
		console.log(`Email enviado para ${to.name}: ${message.subject}`);
	}
}
