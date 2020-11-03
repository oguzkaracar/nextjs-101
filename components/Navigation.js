import Link from "next/link";

// module.css kullanarak, scope(component) bazlı stillendirmeler yapabiliriz. Büyük projelerde işe yarar. her bir classname next.js middleware'i ile bazı eklemeler yapılarak unique hale getirilir... 
import style from "./nav.module.css"; 


const Navigation = () => {
	return (
		<nav>
			<Link href="/">
				<a className={style.link}> Ana sayfa</a>
			</Link>
			<Link href="/about">
				<a style={{color:'#ad2626', fontSize:23}}> Hakkımda </a>
			</Link>
		</nav>
	);
};

export default Navigation;
