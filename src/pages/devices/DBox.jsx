import React from "react";
import "./XBox.css";
import DBox1 from "/src/assets/device4.png";

const DBox = () => {

return (

<div className="premium-viewport">


{/* HEADER */}

<header className="exclusive-nav">

<div className="nav-line"></div>

<span className="brand-identifier">

D-BOX 1 // PREMIUM DISPLAY + AUDIO DEVICE

</span>

<div className="nav-line"></div>

</header>



{/* HERO */}

<section className="hero-monolith">

<h1 className="hero-display">

Visual + Audio Confirmation for <span className="mint-text">Premium Merchants</span>

</h1>


<div className="hero-visual-center">

<img src={DBox1} className="hardware-hero-img" />

</div>



<div className="boutique-function-grid">


<div className="function-cell">

<span className="cell-num">I</span>

<h4>DISPLAY CONFIRMATION</h4>

<p>Visual payment confirmation screen.</p>

</div>


<div className="function-cell">

<span className="cell-num">II</span>

<h4>DUAL SPEAKER AUDIO</h4>

<p>Loud and clear payment alerts.</p>

</div>


<div className="function-cell">

<span className="cell-num">III</span>

<h4>LONG BATTERY</h4>

<p>Up to 7 days battery backup.</p>

</div>


<div className="function-cell">

<span className="cell-num">IV</span>

<h4>PREMIUM DESIGN</h4>

<p>Modern device for premium counters.</p>

</div>


</div>

</section>



{/* WHAT IS DBOX */}

<section className="about-sbox">

<div className="about-container">


<div className="about-left">

<h2>What is <span>D-BOX 1?</span></h2>


<p>

D-BOX 1 is a premium QR sound device combining visual display and audio confirmation

for high-end merchant environments.

</p>


<p>

It ensures fast, clear and reliable confirmation for every payment while enhancing

bank brand visibility.

</p>


</div>



<div className="about-right">


<div className="feature-item">

<div className="icon-circle">🔊</div>

Audio confirmation

</div>


<div className="feature-item">

<div className="icon-circle">🖥</div>

Display confirmation

</div>


<div className="feature-item">

<div className="icon-circle">🔋</div>

7 day battery

</div>


<div className="feature-item">

<div className="icon-circle">☁</div>

Cloud managed

</div>


<div className="feature-item">

<div className="icon-circle">⚡</div>

Instant alerts

</div>


</div>

</div>

</section>



{/* WHERE IT FITS */}

<section className="usage-section">


<h2 className="usage-title">

Where It <span>Fits</span>

</h2>


<p className="usage-sub">

Built for premium merchants and enterprise deployment

</p>



<div className="usage-grid">



<div className="usage-card">

<img src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"/>

<div className="usage-content">

<h4>Retail Stores</h4>

<p>Premium checkout counters</p>

</div>

</div>



<div className="usage-card">

<img src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg"/>

<div className="usage-content">

<h4>Restaurants</h4>

<p>Clear payment alerts</p>

</div>

</div>



<div className="usage-card">

<img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"/>

<div className="usage-content">

<h4>Hotels</h4>

<p>Guest payment confirmation</p>

</div>

</div>



<div className="usage-card">

<img src="https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg"/>

<div className="usage-content">

<h4>Brand Merchants</h4>

<p>Premium experience</p>

</div>

</div>



<div className="usage-card">

<img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"/>

<div className="usage-content">

<h4>Cafes</h4>

<p>Busy environment clarity</p>

</div>

</div>



<div className="usage-card">

<img src="https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg"/>

<div className="usage-content">

<h4>Bank Deployment</h4>

<p>Premium merchant acquisition</p>

</div>

</div>



</div>

</section>



{/* HOW IT WORKS */}

<section className="works2-section">


<div className="works2-header">

<h2>

Payment <span>Flow</span>

</h2>


<p>

Real-time payment confirmation

</p>


</div>



<div className="works2-timeline">



<div className="works2-item">

<div className="works2-icon">📱</div>

<h4>Scan & Pay</h4>

<p>Customer pays</p>

</div>



<div className="works2-item">

<div className="works2-icon">☁</div>

<h4>Cloud Process</h4>

<p>Bank verifies</p>

</div>



<div className="works2-item">

<div className="works2-icon">🔊</div>

<h4>Audio Alert</h4>

<p>Sound confirmation</p>

</div>



<div className="works2-item">

<div className="works2-icon">🖥</div>

<h4>Display</h4>

<p>Screen confirmation</p>

</div>



</div>

</section>


{/* ENTERPRISE CONTROL & SECURITY – D-BOX */}

<section className="enterprise-security-highlight">
  <div className="security-content-limiter">
    
    <div className="security-header-block">
      <h2>Enterprise Control & Security</h2>
      <p>Advanced infrastructure for secure device management and banking operations</p>
    </div>

    <div className="security-feature-wall">

      <div className="sec-feature-card">
        <div className="sec-feature-icon">🔗</div>
        <h4>Secure webhook integration</h4>
      </div>

      <div className="sec-feature-card">
        <div className="sec-feature-icon">📡</div>
        <h4>MQTT command push control</h4>
      </div>

      <div className="sec-feature-card">
        <div className="sec-feature-icon">💓</div>
        <h4>Real-time device heartbeat monitoring</h4>
      </div>

      <div className="sec-feature-card">
        <div className="sec-feature-icon">⚙️</div>
        <h4>Remote firmware management</h4>
      </div>

      <div className="sec-feature-card">
        <div className="sec-feature-icon">📊</div>
        <h4>Admin dashboard visibility</h4>
      </div>

      <div className="sec-feature-card">
        <div className="sec-feature-icon">☁️</div>
        <h4>Cloud-based device activation</h4>
      </div>

      <div className="sec-feature-card">
        <div className="sec-feature-icon">🔐</div>
        <h4>Encrypted device communication</h4>
      </div>

    </div>

    <div className="security-footer-statement">
      <p>
        D-BOX 1 ensures secure, real-time communication between bank servers and devices.
        Full remote control, monitoring, and firmware updates enable reliable and scalable deployment across large merchant networks.
      </p>
    </div>

  </div>
</section>


{/* BUSINESS IMPACT SECTION */}
<section className="business-impact">
  <div className="impact-container">
    
    <div className="impact-header">
      <h2>Business <span>Impact</span></h2>
      <p>Premium value delivered to banks and high-end merchants</p>
    </div>

    <div className="impact-grid">
      
      {/* LEFT COLUMN: FOR BANKS */}
      <div className="impact-card-column">
        <div className="column-title">
          <div className="title-icon green-bg">🏦</div>
          <h3>For Banks</h3>
        </div>
        
        <div className="impact-list">

          <div className="impact-item">
            <div className="item-icon-box">⭐</div>
            <div className="item-text">
              <h4>Premium brand positioning</h4>
              <p>Enhanced visibility at merchant counters</p>
            </div>
          </div>

          <div className="impact-item">
            <div className="item-icon-box">🔊</div>
            <div className="item-text">
              <h4>Reduced transaction disputes</h4>
              <p>Audio + visual payment confirmation proof</p>
            </div>
          </div>

          <div className="impact-item">
            <div className="item-icon-box">📊</div>
            <div className="item-text">
              <h4>Improved merchant satisfaction</h4>
              <p>Premium device experience delivery</p>
            </div>
          </div>

          <div className="impact-item">
            <div className="item-icon-box">🚀</div>
            <div className="item-text">
              <h4>High-value merchant acquisition</h4>
              <p>Target premium and enterprise segments</p>
            </div>
          </div>

        </div>
      </div>


      {/* RIGHT COLUMN: FOR MERCHANTS */}
      <div className="impact-card-column">
        <div className="column-title">
          <div className="title-icon orange-bg">🧑‍💼</div>
          <h3>For Merchants</h3>
        </div>

        <div className="impact-list">

          <div className="impact-item">
            <div className="item-icon-box">🖥️</div>
            <div className="item-text">
              <h4>Visual payment confirmation</h4>
              <p>Clear display-based transaction validation</p>
            </div>
          </div>

          <div className="impact-item">
            <div className="item-icon-box">🔊</div>
            <div className="item-text">
              <h4>Ultra-clear audio alerts</h4>
              <p>Hear confirmation even in noisy environments</p>
            </div>
          </div>

          <div className="impact-item">
            <div className="item-icon-box">🔋</div>
            <div className="item-text">
              <h4>Reliable long battery life</h4>
              <p>Continuous business operation</p>
            </div>
          </div>

          <div className="impact-item">
            <div className="item-icon-box">💼</div>
            <div className="item-text">
              <h4>Premium counter experience</h4>
              <p>Enhances professional brand image</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


{/* CTA */}

<footer className="exclusive-footer">


<button className="mint-cta">

REQUEST D-BOX DEMO

</button>


</footer>



</div>

);

};

export default DBox;