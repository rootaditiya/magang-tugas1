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
		<div id={id} className={`relative flex justify-center items-center scroll-mt-20 py-[39px] sm:py-[32px] ${className || ''} ${customPaddings ?? 'sm:px-10 xs:px-5 2xs:px-3'}`} 
		>
			{children}

			<div className="hidden absolute top-0 left-5 w-0.25 h-full bg-appskep-primary pointer-events-none md:block lg:left-7.5 xl:left:10" />
			<div className="hidden absolute top-0 right-5 w-0.25 h-full bg-appskep-primary pointer-events-none md:block lg:right-7.5 xl:right:10" />

			{crosses && (
				<>
					<div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-10 right-10`}></div>
				</>
				)}
		</div>
	);
}

export default Section;