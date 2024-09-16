import Button from './Button.js'
import Section from './Section.js'

const Contact = () => {

	const icon = <i className="fa-brands fa-whatsapp fa-sm" style={{color: '#ffffff'}}></i>;

	return(
		<Section 
		ClassName=""
		id="contact">
			<div className="container relatif bg-[#181c32] lg:max-w-screen-lg lg:min-h-[150px] px-[48.75px] py-[29.25px] bg-appskep-white rounded-[40px] flex items-center md:flex-row sm:flex-col md:justify-between sm:justify-center ">
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