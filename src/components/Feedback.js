import Section from './Section.js'
import Carousel from './Carousel.js'

export default function Feedback(){

	const slides = [
			{id:1, comment:"this comment 1", img:"https://storage.googleapis.com/appskep/ukom/testimonial/43.jpg?updated_at=1711618844"},
			{id:2, comment:"this comment 2", img:"https://storage.googleapis.com/appskep/ukom/testimonial/22.jpg?updated_at=1711618585"},
			{id:3, comment:"this comment 3", img:"https://storage.googleapis.com/appskep/ukom/testimonial/69.jpg?updated_at=1711619526"}
		]

	return(
			<Section id="feedback">
				<div className="w-full sm:container lg:max-w-screen-lg flex flex-col gap-5 items-center">
					<h2 className="">Cerita Mereka Tentang Apps Homecare</h2>
					<p className="text-appskep-secondary">
						Terdapat testimoni yang diberikan oleh pasien terhadap Apps Homecare
					</p>

					<div className="max-w-screen-lg">
						<Carousel slides={slides} autoslide={true}/>
					</div>

				</div>
			</Section>
		);
}