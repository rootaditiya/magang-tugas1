import Section from './Section.js'
import Card from './Card.js'
import Button from './Button.js'
import CollabSectionImage from '../assets/section-2.svg'

const Collaboration = () => {
	return(
		<Section 
		className="bg-appskep-primary "
		id="join">
			<Card className="w-full sm:container relatif lg:max-w-screen-lg px-[26px] py-[29.25px] bg-appskep-white rounded-[40px] flex lg:grid lg:grid-cols-2 gap-0">
				 <div className="flex flex-col">
				 	<div className="mb-[19.5px]">
				 		<p>#PasienBahagia</p>
				 		<p>#PerawatSejahtera</p>
				 	</div>

				 	<div className="flex flex-col space-y-10 mb-[32.5px]">
				 		<h2 className="text-appskep-dark">
					 		Bergabunglah bersama kami untuk meningkatkan derajat kesehatan masyarakat Indonesia
					 	</h2>

					 	<p className="text-appskep-secondary">
					 		Kami menyambut Anda untuk bergabung dengan tim kami yang terdiri dari profesional muda dan berpengalaman.
					 	</p>
				 	</div>

				 	<div className="mb-0">
				 		<Button title="Kirim CV Sekarang"/>
				 	</div>

				 </div>

				 <div className="hidden lg:block px-0 ps-[48.75px] pe-[9.75px]">
				 	<img src={CollabSectionImage} alt="true" width="full" height="auto"/>
				 </div>
			</Card>
		</Section>
		);
}

export default Collaboration;