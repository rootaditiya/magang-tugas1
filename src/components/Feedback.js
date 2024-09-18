import Section from './Section.js'
import Carousel from './Carousel.js'
import QuoteImage from '../assets/quote.svg'


export default function Feedback(){

	const slides = [
			{id:1, comment:"this comment 1"},
			{id:2, comment:"this comment 2"},
			{id:3, comment:"this comment 3"},
		]

	return(
			<Section id="feedback">
				<div className="container lg:max-w-screen-lg flex flex-col gap-5 items-center">
					<h2 className="">Cerita Mereka Tentang Apps Homecare</h2>
					<p className="text-appskep-secondary">
						Terdapat testimoni yang diberikan oleh pasien terhadap Apps Homecare
					</p>

					<div className="max-w-screen-lg">
						<Carousel>
							{
								slides.map((item) => (
									<div className="relative flex flex-col items-center m-5 p-5 min-w-[300px]" key={item.id}>
										<div className="absolute right-0 top-0 max-w-[50px] ">
											<img alt="" src={QuoteImage}/>
										</div>
										<div className="block h-[100px] bg-appskep-primary">
											
										</div>
										<div className="px-5 py-10">{item.comment}</div>
									</div>
									))
							}
						</Carousel>
					</div>

				</div>
			</Section>
		);
}