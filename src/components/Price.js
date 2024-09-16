import Section from './Section.js'
import Button from './Button.js'

const Price = () => {

	const priceList = [
			{
				id: 1,
				title: 'Paket Per Jam',
				price: '16.000',
				unit: 'per jam',
				description: 'Kebutuhan fleksibel yang hanya memerlukan bantuan perawat untuk jangka waktu singkat',
			},
			{
				id: 2,
				title: 'Paket Per Shift (8 Jam)',
				price: '120.000',
				unit: 'per shift',
				description: 'Pilihan yang sempurna jika Anda memerlukan perawatan harian yang konsisten',
			},
			{
				id: 3,
				title: 'Paket Long Shift (12 Jam)',
				price: '178.000',
				unit: 'per shift',
				description: 'Cocok untuk situasi di mana Anda memerlukan perawatan yang lebih lama, dan tidak sepanjang waktu.',
			},
			{
				id: 4,
				title: 'Paket Full Day (24 Jam)',
				price: '354.000',
				unit: 'per hari',
				description: 'Pilihan terbaik jika Anda memerlukan perawatan yang berkelanjutan sepanjang hari',
			}
		];

	return(
			<Section id="harga" ClassName="">
				<div className="container relative flex items-center flex-col gap-5 ">
					<h2 ClassName="text-appskep-dark">Pilihan Harga Terbaik untuk Anda</h2>
					<p className="text-appskep-secondary">
						Kami selalu memberikan layanan berkualitas tinggi dengan tarif kompetitif
					</p>

					<div className="relatif lg:max-w-7xl xs:flex xs:flex-col gap-5 sm:grid sm:grid-cols-2 sm:gap-5 justify-items-start">

						{priceList.map((item) => (
								<div key={item.id}
								className="flex flex-col gap-4 w-full text-[1.25rem] shadow-2xl shadow-appskep-primary/15 rounded-xl p-10 bg-appskep-white">
									<span className="font-bold">
										{item.title}
									</span>
									<div className="flex flex-row gap-5">
										<span className="text-appskep-primary">Rp. {item.price},-</span>
										<span className="text-appskep-secondary text-[12px]">{item.unit}</span>
									</div>
									<p className="text-[12px] text-appskep-secondary mb-10">
										{item.description}
									</p>

									<Button title="Pesan Sekarang" classes="mb-0"/>
								</div>
							))	
						}

					</div>

				</div>
			</Section>
		);
}

export default Price;