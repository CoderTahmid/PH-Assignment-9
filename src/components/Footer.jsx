import logo from "../assets/Logo.png";
import {FaFacebook, FaXTwitter, FaYoutube} from "react-icons/fa6";

const Footer = () => {
	return (
		<div className="">
			<footer className="footer sm:footer-horizontal bg-[#7678ED] text-base-content p-10">
				<nav className="text-center">
					<h6 className="footer-title">Contuct us</h6>
					<a className="link link-hover">Phone: 0224423</a>
					<a className="link link-hover">Email: lingobingo@gmail.com</a>
					<a className="link link-hover">Location: Shewrapara</a>
					<a className="link link-hover">Fax: 993324</a>
				</nav>
				<nav>
					<h6 className="footer-title">Legal</h6>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</nav>
			</footer>
			<footer className="footer bg-[#7678ED] text-base-content border-base-300 border-t px-10 py-4">
				<div className="grid-flow-col items-center font-black text-xl md:place-self-center">
					<img fillRule="evenodd" clipRule="evenodd" className="fill-current" width="40" height="40" src={logo} alt="" />
					<p className="font-bold">Lingo Bingo</p>
				</div>
				<div className="grid grid-flow-col gap-4 md:place-self-center text-2xl">
					<a href="https://x.com/">
						<FaXTwitter></FaXTwitter>
					</a>
					<a href="https://www.youtube.com/">
						<FaYoutube></FaYoutube>
					</a>
					<a href="https://www.facebook.com/">
						<FaFacebook></FaFacebook>
					</a>
				</div>
			</footer>
			<footer className="footer bg-[#7678ED] flex text-center justify-center border-base-300 border-t px-10 py-4">Copyright © 2025 - All right reserved by Lingo Bingo</footer>
		</div>
	);
};

export default Footer;
