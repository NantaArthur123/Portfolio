(function () {
	try {
		const stored = localStorage.getItem('dark');
		if (stored !== null) {
			if (stored === 'true') document.documentElement.classList.add('dark');
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		}
	} catch (e) {
		console.log('Theme Init is failed sadkek');
	}
})();
