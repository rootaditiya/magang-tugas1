const Button = (props) => {
	return(
		<button className={`px-5 py-4 bg-appskep-primary hover:bg-appskep-primary-hover text-white text-lg rounded-full font-semibold ${props.classes}`}>
			{props.title }
		</button>
		);
}

export default Button