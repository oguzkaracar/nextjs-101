import Link from "next/link";

// module.css kullanarak, scope(component) bazlı stillendirmeler yapabiliriz. Büyük projelerde işe yarar. her bir classname next.js middleware'i ile bazı eklemeler yapılarak unique hale getirilir... 
import style from "./nav.module.css"; 


const Navigation = () => {
	return (
		<nav>
			<Link href="/">
				{/* Link' içinde first child a tag i olmak zorunda Link elementi DOM' da gözükmez!! */}
				<a className={style.link}> Home Page</a>
			</Link>
			<Link href="/about">
				<a className={style.link}> About Me </a>
			</Link>
			<Link href="/contact">
				<a className={style.link}> Contact </a>
			</Link>
			<Link href="/users">
				<a className={style.link}> Users </a>
			</Link>
		</nav>
	);
};

export default Navigation;
