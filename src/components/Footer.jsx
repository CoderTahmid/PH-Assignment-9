import logo from "../assets/Logo.png";
import {FaFacebook, FaXTwitter, FaYoutube} from "react-icons/fa6";

const Footer = () => {
	return (
		<div>
			<footer className="bg-[#7678ED] text-center text-base-content p-10">
				<div className="md:flex mx-auto md:justify-around ">
					<div className="text-center flex-col">
						<h6 className="footer-title">Contuct us</h6>
						<a className="link link-hover block">Phone: 0224423</a>
						<a className="link link-hover block">Email: lingobingo@gmail.com</a>
						<a className="link link-hover block">Location: Shewrapara</a>
						<a className="link link-hover block">Fax: 993324</a>
					</div>
					<div className="text-center flex-col mt-8 md:mt-0">
						<h6 className="footer-title">Legal</h6>
						<a className="link link-hover block">Terms of use</a>
						<a className="link link-hover block">Privacy policy</a>
						<a className="link link-hover block">Cookie policy</a>
					</div>
				</div>
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
