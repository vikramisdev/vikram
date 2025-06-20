const About = () => {
	return (
		<div
			id="about"
			className="dark:bg-[#111] bg-[#f8f8f8] pt-24 md:px-32 px-12 h-screen duration-1000 text-gray-300 flex md:flex-row md:items-center md:gap-x-28 gap-y-20 flex-col items-center"
		>
			<img
				src="/images/vikram.jpg"
				alt="line"
				width={500}
				height={500}
				className="rounded-full grayscale contrast-100 outline-dashed outline-offset-[30px] size-48 md:size-[500px]"
			/>
			<section
				className="flex-1 text-justify"
				// data-scroll
				// data-scroll-speed="0.8"
			>
				<h1 className="text-3xl font-semibold dark:text-inherit mb-2 uppercase text-orange-400">
					Introduction ?!
				</h1>
				<p className="text-xl md:text-2xl text-black dark:text-inherit">
					Hey There, My name is Vikram Vishwakarma and I belong from
					Maharashtra, India. I have recently completed my degree in
					the field of computer science, I like to design and build
					websites that are responsive and beautiful. I use softwares
					like figma & adobe illustrator to design & for the building
					part I use various web frameworks to build my website. I
					always try to make the websites clean, minimal, responsive &
					user friendly with smooth animations and transitions.
				</p>
			</section>
		</div>
	);
};

export default About;
