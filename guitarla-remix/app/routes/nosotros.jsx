import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
	return [
		{ title: 'GuitarLA - Sobre Nosotros' },
		{
			name: 'description',
			content: 'Venta de guitarras, blog de música'
		}
	]
}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: styles
		},
		{
			rel: 'preload',
			href: imagen,
			as: 'image'
		}
	]
}

function Nosotros() {

	return (
		<main className="contenedor nosotros">
			<h2 className="heading">Nosotros</h2>

			<div className="contenido">
				<img src={imagen} alt="Imagen de sobre nosotros" />

				<div>
					<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vitae libero feugiat, elementum ante a, viverra felis.
						Sed imperdiet aliquet ex in volutpat. Mauris sit amet accumsan dolor. Phasellus metus dolor, blandit a elementum eu, malesuada vel urna.
						Praesent vitae nulla ac massa finibus rhoncus. Nulla luctus dolor felis, vitae placerat diam consectetur cursus.
						Ut vel efficitur dui, in porttitor mauris. Phasellus ante erat, sagittis vitae faucibus et, porta et leo.</p>
					<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vitae libero feugiat, elementum ante a, viverra felis.
						Sed imperdiet aliquet ex in volutpat. Mauris sit amet accumsan dolor. Phasellus metus dolor, blandit a elementum eu, malesuada vel urna.
						Praesent vitae nulla ac massa finibus rhoncus. Nulla luctus dolor felis, vitae placerat diam consectetur cursus.
						Ut vel efficitur dui, in porttitor mauris. Phasellus ante erat, sagittis vitae faucibus et, porta et leo.</p>
				</div>
			</div>
		</main>
	)
}

export default Nosotros