import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import logo from './assets/logo.jpeg';
import qrCode from './assets/qr_code.png';
import './styles.css';

const benefits = [
  {
    icon: '⌖',
    title: 'Tìm kiếm thông minh',
    description:
      'Tìm PT và phòng tập gần bạn qua bản đồ tương tác, lọc theo vị trí, giá, kinh nghiệm và chuyên môn.',
  },
  {
    icon: '✓',
    title: 'Hồ sơ xác thực',
    description:
      'Hệ thống xác minh chứng chỉ và kinh nghiệm PT, badge tin cậy giúp bạn chọn đúng người ngay từ đầu.',
  },
  {
    icon: '∞',
    title: 'Gym Buddy Matching',
    description:
      'Tìm người tập cùng dựa trên mục tiêu, ngân sách, lịch rảnh và khu vực, như hẹn hò nhưng cho việc tập.',
  },
  {
    icon: '★',
    title: 'Đánh giá minh bạch',
    description: 'Review thật từ học viên thật, không review ảo, không profile giả.',
  },
];

const features = [
  {
    kicker: 'PT Finder',
    title: 'Tìm Personal Trainer trong tầm tay',
    body:
      'Khám phá hàng trăm huấn luyện viên cá nhân quanh bạn qua bản đồ trực quan. Lọc theo vị trí, giá tiền, số năm kinh nghiệm và chuyên môn như Yoga, Gym, Pilates. Xem profile đầy đủ với rating, số học viên, chứng chỉ và đánh giá chi tiết, rồi đặt lịch ngay trong ứng dụng.',
    labels: ['4.9 rating', 'PT gần bạn', 'Đặt lịch nhanh', 'Chứng chỉ rõ ràng'],
    screen: 'pt',
  },
  {
    kicker: 'Gym Booking',
    title: 'Đặt phòng tập trong 30 giây',
    body:
      'Tìm phòng tập gần nhất với đầy đủ thông tin: ảnh và video không gian, tiện ích như WiFi, giữ xe, nước uống, mở cửa 24/7, cùng đánh giá từ cộng đồng. Chọn ngày, chọn khung giờ, xác nhận thanh toán qua VietQR, ATM, MoMo hoặc ZaloPay.',
    labels: ['24/7', 'VietQR', 'MoMo', 'Lịch trống real-time'],
    screen: 'booking',
  },
  {
    kicker: 'Buddy Match',
    title: 'Tập một mình thì chán, tập cùng nhau thì bứt phá',
    body:
      "Thiết lập mục tiêu tập luyện, ngân sách, lịch rảnh và khu vực muốn tập. FitMatch gợi ý những người phù hợp nhất với độ tương thích lên đến 95%. Khi cả hai cùng thích, It's a Match! Bắt đầu nhắn tin và lên lịch tập ngay.",
    labels: ['95% match', 'Chat ngay', 'Lịch rảnh', 'Cùng mục tiêu'],
    screen: 'buddy',
  },
];

const heroStats = [
  ['200+', 'PT & phòng tập'],
  ['95%', 'độ phù hợp'],
  ['24/7', 'đặt lịch nhanh'],
];

const steps = [
  'Tải App FitMatch',
  'Tạo hồ sơ cá nhân',
  'Chọn mục tiêu luyện tập',
  'Tìm PT / Phòng tập / Gym Buddy',
  'Đặt lịch & bứt phá!',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);

  const openQr = () => setQrOpen(true);
  const closeQr = () => setQrOpen(false);

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#hero" aria-label="FitMatch home">
          <img src={logo} alt="FitMatch" />
          <span>
            Fit<span>Match</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Mở menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Giới thiệu
          </a>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Tính năng
          </a>
          <a href="#download" onClick={() => setMenuOpen(false)}>
            Tải app
          </a>
          <button className="nav-cta" type="button" onClick={openQr}>
            Quét QR
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">FitMatch Mobile</p>
            <h1>FitMatch</h1>
            <p className="hero-subtitle">Tiện ích tập luyện, sống khỏe chất tôi.</p>
            <p className="hero-body">
              Ứng dụng thể thao toàn diện đầu tiên tại Việt Nam, kết nối bạn với huấn luyện
              viên cá nhân, phòng tập uy tín và gym buddy phù hợp nhất, chỉ trong một chạm.
            </p>
            <div className="hero-actions">
              <button className="primary-button" type="button" onClick={openQr}>
                Tải App Ngay
              </button>
              <a className="ghost-button" href="#features">
                Khám phá tính năng
              </a>
            </div>
            <div className="hero-stats" aria-label="FitMatch highlights">
              {heroStats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </section>

        <section className="section" id="benefits">
          <div className="section-heading">
            <p className="eyebrow">Ưu điểm nổi bật</p>
            <h2>Mọi thứ bạn cần để bắt đầu tập luyện đúng cách</h2>
          </div>
          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section feature-section" id="features">
          <div className="section-heading">
            <p className="eyebrow">Tính năng nổi bật</p>
            <h2>Giao diện app rõ ràng, thao tác gọn như banking app hiện đại</h2>
          </div>
          <div className="feature-stack">
            {features.map((feature, index) => (
              <article className="feature-block" key={feature.title}>
                <MockPhone feature={feature} index={index} />
                <div className="feature-copy">
                  <p className="feature-kicker">{feature.kicker}</p>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                  <a href="#download">Tìm hiểu ngay &gt;</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-intro">
            <p className="eyebrow">Sứ mệnh & Tầm nhìn</p>
            <h2>FitMatch ra đời từ một câu hỏi đơn giản</h2>
            <p>
              Tại sao việc tìm một PT tốt, một phòng tập uy tín hay một người tập cùng lại
              khó đến vậy? Chúng tôi tin rằng ai cũng xứng đáng có một hành trình thể thao
              đúng nghĩa, được hỗ trợ đúng người, đúng nơi, đúng lúc.
            </p>
          </div>
          <div className="about-cards">
            <article>
              <h3>Mission</h3>
              <p>
                Kết nối cộng đồng thể thao Việt Nam, làm cho việc luyện tập trở nên dễ
                dàng, minh bạch và đầy cảm hứng hơn cho mọi người.
              </p>
            </article>
            <article>
              <h3>Vision</h3>
              <p>
                Trở thành nền tảng thể thao số #1 Đông Nam Á, nơi mỗi người đều tìm được
                PT, phòng tập và cộng đồng phù hợp với mình.
              </p>
            </article>
          </div>
        </section>

        <section className="section download" id="download">
          <div className="section-heading">
            <p className="eyebrow">Tải app</p>
            <h2>Bắt đầu hành trình của bạn ngay hôm nay</h2>
          </div>
          <div className="timeline">
            {steps.map((step, index) => (
              <div className="timeline-step" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <div className="download-panel">
            <div>
              <p className="download-title">Quét mã tải App FitMatch tại đây</p>
              <p className="download-note">Một QR cho cả iOS và Android.</p>
            </div>
            <button className="qr-button" type="button" onClick={openQr} aria-label="Mở QR tải app">
              <img src={qrCode} alt="QR tải app FitMatch" />
            </button>
            <div className="store-badges" aria-label="App download badges">
              <button type="button" onClick={openQr}>
                App Store
              </button>
              <button type="button" onClick={openQr}>
                Google Play
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <img src={logo} alt="FitMatch" />
            <a href="#about">Giới thiệu</a>
            <a href="#features">Tính năng</a>
            <a href="mailto:hello@fitmatch.vn">Liên hệ</a>
          </div>
          <div>
            <a href="#download">Hỗ trợ</a>
            <a href="#download">FAQ</a>
            <a href="#download">Điều khoản</a>
            <a href="#download">Chính sách bảo mật</a>
          </div>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
        <p>© 2025 FitMatch. Made with 💚 for Vietnamese fitness community.</p>
      </footer>

      {qrOpen && (
        <div className="modal-backdrop" role="presentation" onClick={closeQr}>
          <div className="qr-modal" role="dialog" aria-modal="true" aria-label="QR tải app">
            <button className="modal-close" type="button" onClick={closeQr} aria-label="Đóng">
              ×
            </button>
            <h2>Tải App FitMatch</h2>
            <p>Quét mã QR để bắt đầu hành trình luyện tập của bạn.</p>
            <img src={qrCode} alt="QR tải app FitMatch" />
          </div>
        </div>
      )}
    </>
  );
}

function MockPhone({ feature, index }) {
  return (
    <div className={`feature-visual ${feature.screen}`} aria-hidden="true">
      <div className="feature-glow" />
      <div className="phone small">
        <div className="phone-header" />
        <div className="mock-title">{feature.kicker}</div>
        <div className="mock-list">
          {feature.labels.map((label) => (
            <div className="mock-row" key={label}>
              <span />
              <strong>{label}</strong>
            </div>
          ))}
        </div>
        <div className="mock-action">{index === 2 ? "It's a Match" : 'Đặt lịch'}</div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="promo-panel">
        <div className="promo-copy">
          <span>Bật Match thông minh</span>
          <strong>Tìm đúng nơi, đúng người, đúng lịch</strong>
        </div>
        <div className="phone">
          <div className="phone-header" />
          <div className="app-card app-card-main">
            <span>Fit score</span>
            <strong>95%</strong>
            <small>phù hợp hôm nay</small>
          </div>
          <div className="app-card app-card-side">
            <span>PT Yoga</span>
            <strong>4.9</strong>
            <small>1.2 km</small>
          </div>
          <div className="map-pin pin-one" />
          <div className="map-pin pin-two" />
          <div className="buddy-row">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="coin coin-one" />
        <div className="coin coin-two" />
        <div className="spark spark-one">+</div>
        <div className="spark spark-two">✓</div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
