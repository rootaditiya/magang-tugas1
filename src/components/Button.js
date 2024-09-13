const Button = (props) => {
	return(
		<button className={`flex items-center px-5 py-4 bg-appskep-primary hover:bg-appskep-primary-hover text-white text-lg rounded-full font-semibold ${props.classes}`}>
			{props.img ? <img src={props.img} alt=""/> : ''}
			<span>{props.title}</span> 
		</button>
		);
}

export default Button