import React, {useState, useEffect} from 'react'
import QuoteImage from '../assets/quote.svg'

export default function Carousel({slides, autoslide=false, autoslideInterval = 3000}){

	const [currentIndex, setCurrentIndex] = useState(-1);

  	const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

	const handlePrev = () => {
	    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

	};

	const handleNext = () => {
    	setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};

	const handleView = (index) => {
		return index >= extendedSlides.length ? 1 : index +1 ;
	}

	const getTranslateValue = () => {
	    return currentIndex * 100;
	  };

	const translateValue = window.innerWidth < 640 ? getTranslateValue(): getTranslateValue()+50;

	useEffect(() => {
			if(!autoslide) return
			const slideInterval = setInterval(handleNext, autoslideInterval)
			return () => clearInterval(slideInterval)
		},[]);

	return(
		<div className="relative flex flex-col space-y-5 justify-center items-center lg:overflow-auto md:overflow-hidden space-y-5 ">
			<div className="relatif flex overflow-hidden max-w-[300px] sm:max-w-[640px] items-center py-5 sm:space-x-5"
			>		
				
				{
					extendedSlides.map((item, index) => (
						<div className={`${handleView(currentIndex) === index ? 'scale-100': 'scale-50'} select-none min-w-[300px] relative flex flex-col shadow-xl shadow-appskep-primary/25 justify-center items-center w-1/3 ${handleView(currentIndex) === index ? 'opacity-100 scale-100': 'opacity-50 scale-50'} transition-transform duration-500 ease-in-out`} key={index}
							style={{ 
								  transform: `translateX(-${translateValue}%)`, 
								}}

						>
							<div className="absolute right-0 top-0 max-w-[50px] ">
								<img alt="" src={QuoteImage}/>
							</div>
							<div className="block h-[100px]">
								
							</div>
							<div className="px-5 py-10">{item.comment}</div>
						</div>
						))
				}
			</div>
			<div className="flex flex-row space-x-10 items-center mt-10">
				<button onClick={handlePrev} className="bg-slate-100 rounded-xl px-2 py-1"><h2>{"<"}</h2></button>
				<button onClick={handleNext} className="bg-slate-100 rounded-xl px-2 py-1"><h2>{">"}</h2></button>
			</div>
		</div>
		);
}