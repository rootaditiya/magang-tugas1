import Section from './Section.js'
import ImageSection2 from '../assets/section-3.png'
import Form from './Form.js'

export default function Consult(){
	return(
			<Section id="konsul">
				<div className="container  flex flex-col gap-5 items-center lg:max-w-screen-lg">
					<h2 className="">Temukan Solusi Bersama Kami</h2>
					<p className="text-appskep-secondary">
						Konsultasikan masalah Anda dengan mengisi form di bawah ini
					</p>

					<div className="flex flex-col lg:grid lg:grid-cols-2">
						<div className="hidden lg:block lg:col pl-[9.75px] pr-[48.75px]">
							<img alt="" src={ImageSection2}/>
						</div>

						<div className="flex w-100">
							<Form/>
						</div>
					</div>

				</div>
			</Section>
		);
}