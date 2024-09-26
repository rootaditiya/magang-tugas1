const Button = (props) => {
	return(
		<button className={`flex items-center justify-center ${props.padding ?? 'px-4 py-3'} sm:px-6 sm:py-4 bg-appskep-primary hover:bg-appskep-primary-hover text-white text-[14px] sm:text-lg rounded-full font-semibold ${props.classes}`}
		onClick={props.onClick}>
				{props.img ? <img src={props.img} alt="" className=""/> : ''}
			<span>
				{props.icon || ''}
				{props.title}
				
			</span>
		</button>
		);
}

export default Button