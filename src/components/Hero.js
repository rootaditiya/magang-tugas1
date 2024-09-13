import Section from './Section.js'
import Button from './Button.js'
import section1Image from '../assets/section-1.svg'

const Hero = () => {
	return(

		<Section
			id="hero"
			ClassName=""
		>
			<div className="bg-gradient-to-t from-appskep-primary/10 to-transparent w-full h-full pb-[13px] sm:pb-[12px]">
				<div className="container relative mx-auto my-0  pb-[2rem]">
					<div className=" mx-auto relative max-w-screen-lg lg:grid grid-cols-2 gap-2">
						<div className="px-5 flex flex-col">
							<h1 className="leading-[1.2] mb-8">
								Perawatan Kesehatan di Rumah dengan Layanan <span className="text-appskep-primary">Profesional</span> dan <span className="text-appskep-primary">Berkualitas</span>
							</h1>

							<p className="mb-10 text-appskep-secondary">
								Kami siap memberikan layanan Homecare live in yang mengutamakan keamanan dan kenyamanan sepenuhnya di rumah Anda.
							</p>

							<div><Button title="Pesan Sekarang" classes="border-none"/></div>
						</div>
						<div className="hidden lg:block p-0 ">
							<img className="object-cover w-full m-0" src={section1Image} alt="Apps Homecare" height=""/>
						</div>

					</div>
				</div>
			</div>

		</Section>
		
		);
}

export default Hero