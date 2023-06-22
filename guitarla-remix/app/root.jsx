import { useState } from 'react'
import {
	Meta,
	Links,
	Outlet,
	Scripts,
	LiveReload,
	useRouteError,
	isRouteErrorResponse,
	Link
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
	return [
		{
			title: 'GuitarLA - Remix'
		}
	]
}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com'
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossOrigin: 'true'
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
		},
		{
			rel: 'stylesheet',
			href: styles
		}
	]
}

export default function App() {

	const [carrito, setCarrito] = useState([]);

	const agregarCarrito = guitarra => {
		if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
			const carritoActualizado = carrito.map(guitarraState => {
				if (guitarraState.id === guitarra.id) {
					guitarraState.cantidad = guitarra.cantidad;
				}
				return guitarraState
			});
			setCarrito(carritoActualizado)
		} else {
			setCarrito([...carrito, guitarra])
		}
	}

	return (
		<Document>
			<Outlet
				context={{
					agregarCarrito,
					carrito
				}}
			/>
		</Document>
	)
}

function Document({ children }) {
	return (
		<html lang="es">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				{children}
				<Footer />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}

/** Manejo de errores */
export function ErrorBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<Document>
				<p className='error'>
					{error.status} {error.statusText}
				</p>
				<Link className='error-enlace' to="/">Tal vez quires volver a la pagina principal</Link>
			</Document>
		);
	} else if (error instanceof Error) {
		return (
			<Document>
				<p className='error'>{error.message}</p>
				<Link className='error-enlace' to="/">Tal vez quires volver a la pagina principal</Link>
			</Document>
		);
	} else {
		return <h1>Unknown Error</h1>;
	}
}

