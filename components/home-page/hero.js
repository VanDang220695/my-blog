import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image src='/images/site/avatar.jpg' alt='photo' width={300} height={300} />
			</div>
			<p>Hi, I am Dang</p>
			<p>I blog about Web developer</p>
		</section>
	);
}

export default Hero;
