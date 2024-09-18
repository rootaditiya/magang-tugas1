
export default function Carousel({children: slides, key}){
	return(
		<div className="relative lg:overflow-auto md:overflow-hidden" key={key}>
			<div className="flex">		
				{slides}
			</div>
		</div>
		);
}