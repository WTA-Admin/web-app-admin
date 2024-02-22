import { Box, Title } from '@mantine/core';
import classes from './layout.module.css';

interface Props {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
	return (
		<Box className={classes.wrapper}>
			<Title order={1} fw="bolder">
				YTA Admin
			</Title>
			<Box w={400}>{children}</Box>
		</Box>
	);
}
