import Button from './Button.js'
import Section from './Section.js'

const Contact = () => {

	const icon = <i className="fa-brands fa-whatsapp fa-sm" style={{color: '#ffffff'}}></i>;

	return(
		<Section 
		className=""
		id="contact">
			<div className="w-full sm:container relatif lg:max-w-screen-lg lg:min-h-[150px] px-[48.75px] py-[29.25px] bg-appskep-dark rounded-[40px] flex items-center flex-col space-y-10 md:flex-row md:justify-between sm:justify-center ">
				 <h2 className="text-appskep-white">
				 	Punya pertanyaan lebih lanjut?
				 </h2>

				 <div>
				 	<Button title="Hubungi Kami" icon={icon}/>
				 </div>
			</div>
		</Section>
		);
}

export default Contact;