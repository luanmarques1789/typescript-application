import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
		{ name: 'Luan', email: 'luan@gmail.com' },
		{ name: 'Luan', email: 'luan@gmail.com' },
		{ name: 'Luan', email: 'luan@gmail.com' },
	],
	message = {
		subject: 'Bem-vindo ao sistema',
		body: 'Seja bem-vindo, visitante',
	};

export default {
	async index(req: Request, res: Response) {
		return res.json(users);
	},

	async create(req: Request, res: Response) {
		const emailService = new EmailService();
		emailService.sendMail({ to: users[0], message });

		res.send('Success!');
	},
};
