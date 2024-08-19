import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCounter } from "../../store/slice/CharitySlice";

import CharityModal from "./CharityModal";
import MobileCharityModal from "./MobileCharityModal";

import style from "./Charity.module.scss";

import phone from "../../assets/icon/phoneCharity.svg";
import email from "../../assets/icon/emailCharity.svg";
import usmuch from "../../assets/icon/us_much.svg";
import world from "../../assets/icon/world.svg";

const Charity = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.charity.counter);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch({ type: "SUBSCRIBE_TO_COUNTER" });
	}, [dispatch]);

	const [modalOpen, setModalOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (modalOpen && !isMobile) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [modalOpen, isMobile]);

	const openModal = () => {
		if (isMobile) {
			navigate("/modal");
		} else {
			setModalOpen(true);
		}
	};

	const closeModal = () => {
		if (isMobile) {
			setIsMobile(false);
		} else {
			setModalOpen(false);
		}
	};

	const handlerUpdateCounter = () => {
		dispatch(updateCounter());
	};

	return (
		<section>
			<div className={style.container}>
				<div className={style.content}>
					<h2 className={style.content__title}>
						Каждый может принять участие в благотворительной помощи и
						волонтерстве
					</h2>
					<p className={style.content__text}>
						Хочешь присоединиться к команде волонтеров?
					</p>

					<div className={style.content__contacts}>
						<div className={style.content__contacts_phone}>
							<img src={phone} alt="Phone" className={style.icon} />
							<a className={style.link} href="tel:+79050698829">
								+7 905 069 8829
							</a>
						</div>

						<div className={style.content__contacts_email}>
							<img src={email} alt="E-mail" className={style.icon} />
							<a className={style.link} href="mailto:RAHMA_LI@MAIL.RU">
								RAHMA_LI@MAIL.RU
							</a>
						</div>
					</div>

					<div className={style.content__join}>
						<button
							className={`${style.content__join_btn} ${style.pulse}`}
							onClick={openModal}
						>
							Принять участие
						</button>

						<div className={style.content__join_counter}>
							<img src={usmuch} alt="Us much" className={style.icon} />
							<p>
								<span className={style.span}>{counter}</span>+
							</p>
						</div>
					</div>
				</div>

				<div className={style.pictures}>
					<img
						src={world}
						alt="Follow Us world"
						className={style.pictures__img}
					/>
				</div>
			</div>
			{/* новая логика  */}
			{isMobile ? (
				<MobileCharityModal closeModal={closeModal} />
			) : (
				!isMobile &&
				modalOpen && (
					<CharityModal
						openModal={modalOpen}
						closeModal={closeModal}
						updateCounter={handlerUpdateCounter}
						isMobile={isMobile}
					/>
				)
			)}
		</section>
	);
};

export default Charity;
