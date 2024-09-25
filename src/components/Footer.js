import Section from './Section.js'

export default function Footer(){

	const productList = [
			'Appskep Ukom',
			'Asnesia',
			'Askbidan',
			'Appsgizi',
			'Appshomecare'
		]

	return(
		<Section id="footer" className="bg-slate-100">
			<div className="container relative lg:max-w-screen-lg flex flex-col gap-10 items-center text-[14px] text-appskep-dark">

				<div className="md:grid grid-cols-12 flex flex-col gap-5">

					<div className="flex flex-col gap-5 col-span-4">
						<span className="font-bold">
							Apps Homecare by Appskep
						</span>

						<p>
							Kantor Appskep Indonesia, Gedung Ruko Komplek Taruko I Blok G10, RT 003 RW 008, Kelurahan Korong Gadang, Kecamatan Kuranji, Kota Padang, Kode Pos 25156
						</p>
					</div>

					<div className="col-span-2">
						
					</div>

					<div className="flex flex-col gap-5 col-span-3">
						<span className="font-bold">Produk Appskep</span>
						<ul>
							{productList.map((item, index) => (
								<li key={index}>
									{item}
								</li>
								))}
						</ul>
					</div>

					<div className="flex flex-col gap-5 col-span-3">
						<div className="flex flex-col gap-5 cursor-pointer"
							onClick={() => {
					        const phoneNumber = "6283850206320"; 
					        const message = "Hello!";
					          
					        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
				        }}
				        >
							<span className="font-bold">
								Hubungi Kami
							</span>
							<div className="flex gap-5  items-center">
								<img alt="contact" src="https://homecare.appskep.id/assets/img/icon/phone.svg"/>
								<span>0838-50206320</span>
							</div>
						</div>

						<div className="flex flex-col gap-5">
							<span className="font-bold">
								Ikuti Kami
							</span>
							<div className="">
								<ul className="flex gap-5 items-center">
									<a href="https://www.youtube.com/@APPSKEP/videos">
										<li>
											<img alt="" src="https://homecare.appskep.id/assets/img/icon/youtube.svg"/>
										</li>
									</a>
									<a href="https://www.instagram.com/appshomecare/">
										<li>
											<img alt="" src="https://homecare.appskep.id/assets/img/icon/instagram.svg"/>
										</li>
									</a>
									<a href="https://www.tiktok.com/@appskep">
										<li>
											<img alt="" src="https://homecare.appskep.id/assets/img/icon/tiktok.svg"/>
										</li>
									</a>
									<a href="https://homecare.appskep.id/#">
										<li>
											<img alt="" src="https://homecare.appskep.id/assets/img/icon/linkedin.svg"/>
										</li>
									</a>
								</ul>
								
							</div>
						</div>
					</div>

				</div>

				<p className="font-bold">© 2024 Appskep. All Right Reserved PT APLIKASI KRIYA PRATAMA</p>
			</div>
		</Section>
		);
}