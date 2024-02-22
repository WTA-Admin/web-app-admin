'use client';

import { Button, Card, Notification, PasswordInput, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function LoginForm() {
	const router = useRouter();

	const initialStates = {
		userName: '',
		password: '',
		ErrorMessage: false,
	};

	const [state, setState] = useState(initialStates);

	const handleInputChange = e => {
		//const name = e.target.name
		//const value = e.target.value
		const { name, value } = e.target;

		setState({
			...state,
			[name]: value,
		});
	};

	function Login() {
		window.event.preventDefault();
		if (state.userName !== 'Admin' || state.password !== 'root') {
			setState({ ErrorMessage: true });
		} else {
			setState({ ErrorMessage: false });
			router.push('/dashboard');
		}
	}

	return (
		<Card withBorder shadow="md" p={30} mt={30} radius="md">
			<form onSubmit={() => Login()} method="POST">
				<TextInput
					required
					label="Kullanıcı Adı"
					placeholder="Admin"
					name="userName"
					value={state.userName}
					onChange={handleInputChange}
					error={state.ErrorMessage}
					autoSave={false}
					radius={5}
				/>
				<PasswordInput
					required
					label="Parola"
					placeholder="Parolanızı giriniz"
					name="password"
					value={state.password}
					onChange={handleInputChange}
					error={state.ErrorMessage}
					radius={5}
					mt="md"
				/>
				<Button type="submit" fullWidth mt="xl">
					Giriş Yap
				</Button>
			</form>
			<Notification
				title="Giriş Başarısız"
				withCloseButton={false}
				style={{ display: state.ErrorMessage ? 'block' : 'none' }}
				color="red"
				mt={16}
			>
				Kullanıcı adınızı ve parolayı doğru girdiğinizden emin olun.
			</Notification>
		</Card>
	);
}
