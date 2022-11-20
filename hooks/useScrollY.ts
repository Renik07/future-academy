import { useState } from 'react';
import { useEffect } from 'react';

export const useScrollY = (): number => {
	const [userScrollY, setUserScrollY] = useState<number>(0);
	const isBrowser = typeof window !== "undefined";

	const handleScroll = () => {
		const currentScrollY = isBrowser ? window.scrollY : 0;
		setUserScrollY(currentScrollY);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll, {passive: true});
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return userScrollY;
};