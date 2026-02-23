import React from "react";
import "./XBox.css";
import POS from "/src/assets/device1.png";

const XBox = () => {
  return (
    <div className="premium-viewport">

      {/* HEADER */}
      <header className="exclusive-nav">
        <div className="nav-line"></div>
        <span className="brand-identifier">X-BOX // ENTERPRISE POS TERMINAL</span>
        <div className="nav-line"></div>
      </header>


      {/* HERO */}
      <section className="hero-monolith">

        <h1 className="hero-display">
          A Smart POS Built for <span className="mint-text">Modern Banking</span>
        </h1>

        <div className="hero-visual-center">
          <img src={POS} className="hardware-hero-img" />
        </div>


        <div className="boutique-function-grid">

          <div className="function-cell">
            <span className="cell-num">I</span>
            <h4>CARD PAYMENTS</h4>
            <p>Accept Credit & Debit cards securely.</p>
          </div>

          <div className="function-cell">
            <span className="cell-num">II</span>
            <h4>NFC TAP-TO-PAY</h4>
            <p>Fast contactless transactions.</p>
          </div>

          <div className="function-cell">
            <span className="cell-num">III</span>
            <h4>UPI QR SUPPORT</h4>
            <p>Seamless UPI payment acceptance.</p>
          </div>

          <div className="function-cell">
            <span className="cell-num">IV</span>
            <h4>ENTERPRISE READY</h4>
            <p>Built for large scale merchant deployments.</p>
          </div>

        </div>

      </section>



      {/* WHAT IS XBOX */}

      <section className="about-sbox">

        <div className="about-container">


          <div className="about-left">

            <h2>What is <span>X-BOX?</span></h2>

            <p>
              X-BOX is a portable smart POS terminal designed for banks to enable enterprise merchants
              with multi-mode payment acceptance including Card, NFC, Tap-to-Pay and UPI QR.
            </p>

            <p>
              It delivers enterprise-grade performance, secure transactions, and seamless integration
              into banking infrastructure while enabling faster checkout experiences.
            </p>

          </div>


          <div className="about-right">

            <div className="feature-item">
              <div className="icon-circle">💳</div>
              Card payment acceptance
            </div>

            <div className="feature-item">
              <div className="icon-circle">📶</div>
              NFC Tap-to-Pay enabled
            </div>

            <div className="feature-item">
              <div className="icon-circle">📱</div>
              UPI QR integrated
            </div>

            <div className="feature-item">
              <div className="icon-circle">⚡</div>
              Fast enterprise billing
            </div>

            <div className="feature-item">
              <div className="icon-circle">☁</div>
              Cloud managed device
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
          Designed for enterprise merchants and high-value banking partners
        </p>



        <div className="usage-grid">


          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df" />

            <div className="usage-content">
              <h4>Retail Chains</h4>
              <p>Enterprise-level checkout infrastructure</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" />

            <div className="usage-content">
              <h4>Restaurants</h4>
              <p>Fast billing and table payments</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" />

            <div className="usage-content">
              <h4>Hotels</h4>
              <p>Secure guest payment processing</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" alt="Event Registration"></img>
            <div className="usage-content">
              <h4>Event Registrations</h4>
              <p>Portable POS for high-volume events</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da" />

            <div className="usage-content">
              <h4>Enterprise Merchants</h4>
              <p>Premium merchant billing solution</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44" />

            <div className="usage-content">
              <h4>Bank Partner Deployments</h4>
              <p>Device for premium merchant acquisition</p>
            </div>

          </div>


        </div>

      </section>



{/* HOW IT WORKS */}

<section className="works2-section">

<div className="works2-header">

<h2>
Enterprise <span>Integration Flow</span>
</h2>

<p>
Secure real-time transaction processing for banks
</p>

</div>


<div className="works2-timeline">


<div className="works2-item">

<div className="works2-icon">💳</div>

<h4>Payment</h4>

<p>Customer taps card or pays via UPI</p>

</div>


<div className="works2-item">

<div className="works2-icon">🏦</div>

<h4>Bank Process</h4>

<p>Bank authorizes transaction</p>

</div>


<div className="works2-item">

<div className="works2-icon">☁</div>

<h4>Cloud Sync</h4>

<p>Transaction synced to cloud</p>

</div>


<div className="works2-item">

<div className="works2-icon">✔</div>

<h4>Confirmation</h4>

<p>Payment confirmed instantly</p>

</div>


</div>

</section>



{/* SECURITY */}

<section className="enterprise-security-highlight">

<div className="security-content-limiter">

<div className="security-header-block">

<h2>Security Framework</h2>

<p>Enterprise-grade protection for banking infrastructure</p>

</div>


<div className="security-feature-wall">


<div className="sec-feature-card">
<div className="sec-feature-icon">🔐</div>
<h4>AES-256 encryption</h4>
</div>

<div className="sec-feature-card">
<div className="sec-feature-icon">🛡️</div>
<h4>PCI DSS compliant</h4>
</div>

<div className="sec-feature-card">
<div className="sec-feature-icon">🔑</div>
<h4>Token authentication</h4>
</div>

<div className="sec-feature-card">
<div className="sec-feature-icon">👤</div>
<h4>Role-based access</h4>
</div>

<div className="sec-feature-card">
<div className="sec-feature-icon">📡</div>
<h4>Threat monitoring</h4>
</div>

<div className="sec-feature-card">
<div className="sec-feature-icon">📱</div>
<h4>Device lockdown</h4>
</div>

<div className="sec-feature-card">
<div className="sec-feature-icon">☁</div>
<h4>Secure cloud control</h4>
</div>

</div>


<div className="security-footer-statement">

<p>

End-to-end encrypted transaction processing ensuring complete banking security and compliance.

</p>

</div>

</div>

</section>



{/* BUSINESS IMPACT */}

<section className="business-impact">

<div className="impact-container">

<div className="impact-header">

<h2>Business <span>Impact</span></h2>

<p>Strategic value for banking partners</p>

</div>


<div className="impact-grid">


<div className="impact-card-column">

<div className="column-title">

<div className="title-icon green-bg">🏦</div>

<h3>For Banks</h3>

</div>


<div className="impact-list">


<div className="impact-item">

<div className="item-icon-box">📈</div>

<div className="item-text">

<h4>Higher MDR volume</h4>

<p>Increase transaction revenue</p>

</div>

</div>


<div className="impact-item">

<div className="item-icon-box">🏢</div>

<div className="item-text">

<h4>Enterprise acquisition</h4>

<p>Onboard premium merchants</p>

</div>

</div>


<div className="impact-item">

<div className="item-icon-box">⭐</div>

<div className="item-text">

<h4>Premium positioning</h4>

<p>Upgrade bank brand image</p>

</div>

</div>


<div className="impact-item">

<div className="item-icon-box">🔗</div>

<div className="item-text">

<h4>Cross-sell opportunity</h4>

<p>Expand banking services</p>

</div>

</div>


</div>

</div>



<div className="impact-card-column">

<div className="column-title">

<div className="title-icon orange-bg">🏪</div>

<h3>For Merchants</h3>

</div>


<div className="impact-list">


<div className="impact-item">

<div className="item-icon-box">⚡</div>

<div className="item-text">

<h4>Faster checkout</h4>

<p>Improve customer experience</p>

</div>

</div>


<div className="impact-item">

<div className="item-icon-box">💳</div>

<div className="item-text">

<h4>Multi-payment support</h4>

<p>Accept all payment modes</p>

</div>

</div>


<div className="impact-item">

<div className="item-icon-box">📊</div>

<div className="item-text">

<h4>Transaction visibility</h4>

<p>Real-time reporting</p>

</div>

</div>


<div className="impact-item">

<div className="item-icon-box">🔐</div>

<div className="item-text">

<h4>Secure payments</h4>

<p>Enterprise-level protection</p>

</div>

</div>


</div>

</div>


</div>

</div>

</section>



{/* FINAL CTA */}

{/* <section className="commerce-final-cta-root">

<div className="commerce-final-cta-container">

<h2>The Future of <span>Enterprise POS</span></h2>

<p className="commerce-final-cta-subtitle">

Built for Banks. Designed for Scale.

</p>


<div className="commerce-final-cta-button-group">

<button className="commerce-final-btn-primary">

Start Deployment →

</button>


<button className="commerce-final-btn-secondary">

Download Specs

</button>


</div>


</div>

</section> */}



{/* FOOTER */}

<footer className="exclusive-footer">

<button className="mint-cta">

REQUEST X-BOX DEMO

</button>

</footer>


</div>

);

};

export default XBox;