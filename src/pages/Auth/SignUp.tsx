import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './LoginSignup.module.css';

import ApiService from '../../service/ApiService';

import user_icon from './img/person.png';
import email_icon from './img/email.png';
import password_icon from './img/password.png';

const SignUp = () => {
	const [action, setAction] = useState('signup');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [messageEmail, setMessageEmail] = useState('');
	const [messagePassword, setMessagePassword] = useState('');

	const navigate = useNavigate();

	const validationEmail = (email: string) => {
		const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		if (regEx.test(email)) {
			setMessageEmail('');
		} else if (!regEx.test(email) && email !== '') {
			setMessageEmail('* Email is not valid');
		}
	};

	const validatePassword = (password: string) => {
		const regEx =
			/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+|~\-=`{}[\]:";'<>?,.\/])[a-zA-Z0-9!@#$%^&*()_+|~\-=`{}[\]:";'<>?,.\/]{8,}$/;
		if (regEx.test(password)) {
			setMessagePassword('');
		} else if (!regEx.test(password) && password !== '') {
			setMessagePassword('* Password is not valid');
		}
	};

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setName(value);
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setEmail(value);
		validationEmail(value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setPassword(value);
		validatePassword(value);
	};

	const handleRegistration = async () => {
		try {
			const response = await ApiService.registration(email, password, name);
			if (response.ok) {
				console.log('Регистрация выполнена успешно');
				setName('');
				setEmail('');
				setPassword('');
				setMessageEmail('');
				setMessagePassword('');
				navigate('/signup');
			} else {
				console.log('Ошибка регистрации');
				setName('');
				setEmail('');
				setPassword('');
				setMessageEmail('');
				setMessagePassword('');
				navigate('/signup');
			}
		} catch (error) {
			console.log('Ошибка при выполнении регистрации:', error);
			setName('');
			setEmail('');
			setPassword('');
			setMessageEmail('');
			setMessagePassword('');
			navigate('/signup');
		}
	};
	return (
		<>
			<div className={cn(styles['headerLog'])}>
				<div className={cn(styles['text'])}>
					{action === 'signup' ? 'Sign Up' : 'Login'}
				</div>
				<div className={cn(styles['underline'])}></div>
			</div>
			<div className={cn(styles['container'])}>
				<div className={cn(styles['inputs'])}>
					<div className={cn(styles['input'])}>
						<img src={user_icon} alt="" />
						<input
							type="text"
							placeholder="Name"
							value={name}
							onChange={handleNameChange}
						/>
					</div>
					<div className={cn(styles['input'])}>
						<img src={email_icon} alt="" />
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={handleEmailChange}
						/>
						<div className={cn(styles['NotValidM'])}>{messageEmail}</div>
					</div>
					<div className={cn(styles['input'])}>
						<img src={password_icon} alt="" />
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={handlePasswordChange}
						/>
						<div className={cn(styles['NotValidP'])}>{messagePassword}</div>
					</div>
				</div>
				<div className={cn(styles['submit-container'])}>
					<button
						type="button"
						className={
							action === 'signup'
								? cn(styles['submit'], styles['gray'])
								: cn(styles['submit'])
						}
						onClick={() => {
							setAction('login');
							navigate('/login');
						}}
					>
						Login
					</button>
					<button
						type="button"
						className={
							action === 'login'
								? cn(styles['submit'], styles['gray'])
								: cn(styles['submit'])
						}
						onClick={() => {
							setAction('signup');
							handleRegistration();
							navigate('/signup');
						}}
					>
						Sign Up
					</button>
				</div>
			</div>
		</>
	);
};

export default SignUp;
