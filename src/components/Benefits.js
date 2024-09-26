import Section from './Section.js'

const Benefits = () => {

	const benefitsLists =[
			{
				id: 1,
				title: 'Membantu pasien dalam pemenuhan nutrisi, seperti pemberian makan'
			},

			{
				id: 2,
				title: 'Membantu pasien dalam Buang Air Kecil (BAK), Buang Air Besar (BAB), mandi dan berpakaian'
			},
			{

				id: 3,

				title: 'Membantu pasien dalam pemenuhan fungsi mobilitas, seperti berpindah dan berjalan'

			},	
			{

				id: 4,

				title: 'Menemani pasien selama bertugas'

			},	

		];
		

	return(
		<Section
			id="benefits"
		>
			<div className="w-full sm:container relative flex flex-col justify-center items-center ">
				<h2 className="mb-4 text-appskep-dark">Apa yang Pasien Kami Dapatkan?</h2>

				<p className="text-appskep-secondary">
					Job Desk Perawat kami yang akan membantu Anda dengan setulus hati
				</p>
 
				<div className="relatif lg:max-w-7xl grid grid-cols-1 gap-10 md:grid-cols-2 justify-items-start">

						{benefitsLists.map((item) => (
								<div key={item.id}
								className="flex flex-col gap-4 w-full text-[1.25rem] shadow-2xl shadow-appskep-primary/15 rounded-xl p-10 transition transform ease-in">
								<span className="text-appskep-primary">{item.id < 10 ? `0${item.id}` : item.id}</span>
									<p className="font-medium">{item.title}</p>
								</div>
							))	
						}

				</div>

				<p className="text-appskep-secondary pt-[32.5px] sm:pt-[30px] mt-0 ">
					Dan banyak lainnya...
				</p>
			</div>
		</Section>
		);
}

export default Benefits