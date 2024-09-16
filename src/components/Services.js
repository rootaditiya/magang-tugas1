import Section from './Section.js'

const Services = () => {

	const serviceList = [
			{
				id: 1,
				icon: 'https://homecare.appskep.id/assets/img/icon/icon-1.svg',
				title: 'Jasa Perawat Homecare',
				description: 'Layanan Perawat Care Giver datang ke rumah. Tersedia paket layanan harian, mingguan, dan bulanan',
			},
			{
				id: 2,
				icon: 'https://homecare.appskep.id/assets/img/icon/icon-2.svg',
				title: 'Jasa Perawat Orang Sakit',
				description: 'Membantu keluarga dalam mendampingi anggota keluarga yang sakit di fasilitas layanan kesehatan, seperti rumah sakit.',
			},
			{
				id: 3,
				icon: 'https://homecare.appskep.id/assets/img/icon/icon-4.svg',
				title: 'Jasa Perawat Lansia',
				description: 'Jasa perawat Care Giver untuk membantu orang tersayang Anda tetap sehat di masa lansia',
			},
			{
				id: 4,
				icon: 'https://homecare.appskep.id/assets/img/icon/icon-5.svg',
				title: 'Perawatan Post Operasi',
				description: 'Membantu proses pemulihan luka setelah operasi atau pembedahan dengan memberikan perawatan yang komprehensif.',
			},
			{
				id: 5,
				icon: 'https://homecare.appskep.id/assets/img/icon/icon-6.svg',
				title: 'Perawatan Luka Modern',
				description: 'Jasa perawatan luka dengan teknik modern untuk penyembuhan luka yang terukur',
			},
			{
				id: 6,
				icon: 'https://homecare.appskep.id/assets/img/icon/icon-7.svg',
				title: 'Jasa Perawatan Home Visit',
				description: 'Membantu dalam pemberian tindakan delegatif dari dokter, seperti pemasangan NGT, pemasangan infus, dan pemasangan kateter urin',
			},
		]

	return(
		<Section id="layanan">
			<div className="container relative flex items-center flex-col gap-5 ">
				<h2 className="text-appskep-dark">Layanan Kami</h2>
				<p className="text-appskep-secondary">
					Penuhi segala kebutuhan kesehatanmu terjaga bersama APPS HOMECARE
				</p>

				<div className="relatif lg:max-w-7xl grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 justify-items-start">

						{serviceList.map((item) => (
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

export default Services