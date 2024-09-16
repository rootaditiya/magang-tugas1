import Section from './Section.js'

const Privillage = () => {

	const privillageList = [
			{
				id: 1,
				icon: 'https://homecare.appskep.id/assets/img/icon-perawat/icon-1.svg',
				title: 'Paket All-Inclusive',
				description: 'Kami menawarkan paket layanan yang tidak hanya mencakup perawatan medis berkualitas, tetapi juga makanan dan transportasi yang diperlukan. Kami memahami betapa berharganya waktu Anda dan kami siap untuk memberikan kenyamanan yang penuh.',
			},
			{
				id: 2,
				icon: 'https://homecare.appskep.id/assets/img/icon-perawat/icon-2.svg',
				title: 'Tim Perawat Berpengalaman',
				description: 'Untuk meminimalkan risiko kesalahan, kami mempekerjakan tim perawat yang berpengalaman dan memastikan bahwa tidak lebih dari 3 perawat yang bergantian merawat Anda. Ini adalah langkah konkret kami untuk menjaga kualitas layanan.',
			},
			{
				id: 3,
				icon: 'https://homecare.appskep.id/assets/img/icon-perawat/icon-3.svg',
				title: 'Fleksibilitas dalam Harga',
				description: 'Kami memahami bahwa kebutuhan setiap klien berbeda. Oleh karena itu, kami menyediakan tarif paket layanan yang dapat dinegosiasikan, memastikan bahwa Anda mendapatkan layanan yang sesuai dengan keinginan Anda.',
			}
		];

	return(
			<Section id="privillage" ClassName="bg-appskep-primary text-white">
				<div className="container relative flex items-center flex-col gap-5 ">
					<h2 ClassName="">Apa yang Membuat Kami Unggul?</h2>
					<p>
						Keunggulan yang kami miliki dalam memberikan perawatan terbaik untuk Anda dan orang tersayang
					</p>

					<div className="relatif lg:max-w-7xl grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-items-start">

						{privillageList.map((item) => (
								<div key={item.id}
								className="flex flex-col gap-4 w-full text-[1.25rem] shadow-2xl shadow-appskep-primary/15 rounded-xl p-10 bg-appskep-white">

									<img src={item.icon} alt="null" width="64"/>
									<span className="text-appskep-primary font-bold">
										{item.title}
									</span>
									<p className="text-[12px] text-appskep-secondary">
										{item.description}
									</p>
								</div>
							))	
						}

					</div>

				</div>
			</Section>
		);
}

export default Privillage;