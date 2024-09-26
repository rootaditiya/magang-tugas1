const Section = ({
	className,
	id,
	crosses,
	crossesOffset,
	customPaddings,
	children
	}) => {
	
	return(
		// <div id={id} className={`relative flex justify-center items-center ${crosses ? 'lg:py-32 xl:py40' : ''} ${className || ''}
		// `} 
		// >
		// 
		<div id={id} className={`relative flex justify-center items-center scroll-mt-[50px] sm:scroll-mt-20 py-[39px] sm:py-[32px] ${className || ''} ${customPaddings ?? 'sm:px-10 xs:px-5 2xs:px-3'} min-w-full`} 
		>
			{children}
		</div>
	);
}

export default Section;