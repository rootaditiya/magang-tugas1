import Section from './Section.js'
import ImageSection2 from '../assets/section-3.png'
import Form from './Form.js'

export default function Consult(){
	return(
			<Section id="konsul">
				<div className="container flex flex-col gap-3 sm:gap-5 items-center lg:max-w-screen-lg">
					<h2 className="">Temukan Solusi Bersama Kami</h2>
					<p className="text-appskep-secondary">
						Konsultasikan masalah Anda dengan mengisi form di bawah ini
					</p>

					<div className="flex w-full">
						<div className="hidden lg:block lg:pl-[9.75px] lg:pr-[48.75px] lg:basis-1/2">
							<img alt="" src={ImageSection2}/>
						</div>

						<div className="flex px-0 basis-full lg:basis-1/2 max-h-full">
							<Form/>
						</div>
					</div>

				</div>
			</Section>
		);
}