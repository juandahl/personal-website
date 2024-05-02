export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<header className="flex bg-[transparent] px-20">
				<h3>BLOG</h3>
			</header>
			<div className="w-full flex flex-col">{children}</div>
		</>
	);
}
