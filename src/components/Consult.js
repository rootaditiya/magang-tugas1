import Section from './Section.js'
import ImageSection2 from '../assets/section-3.png'
import Form from './Form.js'

export default function Consult(){
	return(
			<Section id="konsul">
				<div className="container lg:max-w-screen-lg flex flex-col gap-5 items-center">
					<h2 className="">Temukan Solusi Bersama Kami</h2>
					<p className="text-appskep-secondary">
						Konsultasikan masalah Anda dengan mengisi form di bawah ini
					</p>

					<div className="grid grid-cols-12">
						<div className="hidden lg:block col-span-5 pl-[9.75px] pr-[48.75px]">
							<img alt="" src={ImageSection2}/>
						</div>

						<div className="lg:col-span-7 md:col-span-12">
							<Form/>
						</div>
					</div>

				</div>
			</Section>
		);
}