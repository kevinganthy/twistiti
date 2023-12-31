import { readable } from 'svelte/store';

const getHours = () => {
	const date = new Date();
	return date.getHours();
}

const getMinutes = () => {
	const date = new Date();
	return date.getMinutes();
}

const getSeconds = () => {
	const date = new Date();
	return date.getSeconds();
}

export const second = readable(getSeconds(), (set) => {
	const interval = setInterval(() => {
		set(getSeconds());
	}, 1000);
	return () => clearInterval(interval);
});

export const minute = readable(getMinutes(), (set) => {
	const interval = setInterval(() => {
		set(getMinutes());
	}, 1000);
	return () => clearInterval(interval);
});

export const hour = readable(getHours(), (set) => {
	const interval = setInterval(() => {
		set(getHours());
	}, 1000);
	return () => clearInterval(interval);
});

