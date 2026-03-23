import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const footerLinks = [
    { label: 'About', to: '/' },
    { label: 'Contact', to: '/' },
    { label: 'Terms', to: '/' },
];

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-md-5">
                        <h2 className={styles.brand}>Trải Nghiệm</h2>
                        <p className={styles.copy}>
                            Khám phá những bộ phim đang thịnh hành, những lựa chọn điện ảnh và danh sách phim yêu thích
                            cá nhân của bạn trong một trải nghiệm được trau chuốt lấy cảm hứng từ Netflix.
                        </p>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3">
                        <h3 className={styles.heading}>Khám Phá</h3>
                        <div className={styles.linkGroup}>
                            {footerLinks.map((link) => (
                                <Link key={link.label} className={styles.link} to={link.to}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <h3 className={styles.heading}>Theo Dõi</h3>
                        <div className={styles.socials}>
                            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                                <FiFacebook />
                            </a>
                            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                                <FiInstagram />
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer">
                                <FiTwitter />
                            </a>
                        </div>
                        <p className={styles.meta}>
                            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Hà, Thành phố
                            Hà Nội, Việt Nam
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
