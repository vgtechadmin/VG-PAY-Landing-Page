import React from "react";
import "./SBoxPocket.css";
import device from "/src/assets/device3.png";

const SBoxPocket = () => {
  return (
    <div className="premium-viewport">

      {/* HEADER */}
      <header className="exclusive-nav">
        <div className="nav-line"></div>
        <span className="brand-identifier">S-BOX POCKET // MASS DEPLOYMENT DEVICE</span>
        <div className="nav-line"></div>
      </header>


      {/* HERO */}
      <section className="hero-monolith">

        <h1 className="hero-display">
          Maximum Reach. <span className="mint-text">Minimum Cost.</span>
        </h1>

        <div className="hero-visual-center">
          <img src={device} className="hardware-hero-img" />
        </div>


        <div className="boutique-function-grid">

          <div className="function-cell">
            <span className="cell-num">I</span>
            <h4>QR PAYMENTS</h4>
            <p>Static QR payment confirmation.</p>
          </div>

          <div className="function-cell">
            <span className="cell-num">II</span>
            <h4>LOUD AUDIO</h4>
            <p>Instant voice payment alerts.</p>
          </div>

          <div className="function-cell">
            <span className="cell-num">III</span>
            <h4>PORTABLE DESIGN</h4>
            <p>Ultra-light and compact form.</p>
          </div>

          <div className="function-cell">
            <span className="cell-num">IV</span>
            <h4>MASS DEPLOYMENT</h4>
            <p>Built for large-scale rollout.</p>
          </div>

        </div>

      </section>



      {/* WHAT IS SBOX POCKET */}

      <section className="about-sbox">

        <div className="about-container">


          <div className="about-left">

            <h2>What is <span>S-BOX Pocket?</span></h2>

            <p>
              S-BOX Pocket is an ultra-light QR payment sound device designed for
              rural expansion and micro-merchant adoption.
            </p>

            <p>
              It enables secure QR payment confirmation with simple deployment,
              making it ideal for mass distribution and financial inclusion programs.
            </p>

          </div>


          <div className="about-right">

            <div className="feature-item">
              <div className="icon-circle">🔊</div>
              Loud audio confirmation
            </div>

            <div className="feature-item">
              <div className="icon-circle">📱</div>
              Static QR support
            </div>

            <div className="feature-item">
              <div className="icon-circle">🌏</div>
              Multi-language support
            </div>

            <div className="feature-item">
              <div className="icon-circle">⚡</div>
              Plug-and-play setup
            </div>

            <div className="feature-item">
              <div className="icon-circle">☁</div>
              Cloud activation
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
          Designed for rural, micro and mass merchant deployment
        </p>



        <div className="usage-grid">


          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=1000&q=80" />

            <div className="usage-content">
              <h4>Kirana Stores</h4>
              <p>Daily rural transaction support</p>
            </div>

          </div>



          <div className="usage-card">

          <img
            src="https://unsplash.com/photos/Bz18bJEC9Hg/download?force=true&w=1000"
            alt="Street Vendor"
            />
            <div className="usage-content">
              <h4>Street Vendors</h4>
              <p>Portable payment confirmation</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1000&q=80" />
            <div className="usage-content">
              <h4>Flea Markets</h4>
              <p>Reliable mobile payment alerts</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80" />

            <div className="usage-content">
              <h4>Micro Merchants</h4>
              <p>Affordable payment device</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.pexels.com/photos/6969963/pexels-photo-6969963.jpeg" />

            <div className="usage-content">
              <h4>Tier-2 & Tier-3 Cities</h4>
              <p>Mass merchant onboarding</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80" />

            <div className="usage-content">
              <h4>Rural Programs</h4>
              <p>Financial inclusion deployments</p>
            </div>

          </div>


        </div>

      </section>



{/* HOW IT WORKS */}

<section className="works2-section">

<div className="works2-header">

<h2>
Simple <span>Operation Flow</span>
</h2>

<p>
Fast onboarding and instant payment confirmation
</p>

</div>


<div className="works2-timeline">


<div className="works2-item">

<div className="works2-icon">📷</div>

<h4>Scan</h4>

<p>Customer scans QR</p>

</div>


<div className="works2-item">

<div className="works2-icon">🏦</div>

<h4>Bank Process</h4>

<p>Bank confirms payment</p>

</div>


<div className="works2-item">

<div className="works2-icon">☁</div>

<h4>Cloud Trigger</h4>

<p>Cloud sends signal</p>

</div>


<div className="works2-item">

<div className="works2-icon">🔊</div>

<h4>Audio Alert</h4>

<p>Device announces payment</p>

</div>


</div>

</section>



{/* SECURITY */}

<section className="enterprise-security-highlight">

<div className="security-content-limiter">

<div className="security-header-block">

<h2>Operational Advantage</h2>

<p>Built for scalable and simple deployment</p>

</div>


<div className="security-feature-wall">


<div className="sec-feature-card">
<div className="sec-feature-icon">⚡</div>
<h4>Plug and play onboarding</h4>
</div>

<div className="sec-feature-card">
<div className="sec-feature-icon">📱</div>
<h4>Agent provisioning app</h4>
</div>

<div className="sec-feature-card">
<div className="sec-feature-icon">☁</div>
<h4>Cloud activation</h4>
</div>

<div className="sec-feature-card">
<div className="sec-feature-icon">📊</div>
<h4>Central monitoring</h4>
</div>

<div className="sec-feature-card">
<div className="sec-feature-icon">🔄</div>
<h4>OTA updates</h4>
</div>

</div>


<div className="security-footer-statement">

<p>

Enables rapid rollout, easy provisioning, and nationwide scalability.

</p>

</div>

</div>

</section>



{/* BUSINESS IMPACT */}

<section className="business-impact">

<div className="impact-container">

<div className="impact-header">

<h2>Business <span>Impact</span></h2>

<p>Driving financial inclusion and rural expansion</p>

</div>


<div className="impact-grid">


<div className="impact-card-column">

<div className="column-title">

<div className="title-icon green-bg">🏦</div>

<h3>For Banks</h3>

</div>


<div className="impact-list">


<div className="impact-item">
<div className="item-icon-box">🌏</div>
<div className="item-text">
<h4>Rural expansion</h4>
<p>Reach new merchants</p>
</div>
</div>


<div className="impact-item">
<div className="item-icon-box">⚡</div>
<div className="item-text">
<h4>Fast onboarding</h4>
<p>Scale rapidly</p>
</div>
</div>


<div className="impact-item">
<div className="item-icon-box">🏛️</div>
<div className="item-text">
<h4>Government alignment</h4>
<p>Support inclusion programs</p>
</div>
</div>


<div className="impact-item">
<div className="item-icon-box">📈</div>
<div className="item-text">
<h4>Nationwide rollout</h4>
<p>Mass deployment ready</p>
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
<div className="item-icon-box">💰</div>
<div className="item-text">
<h4>Low cost device</h4>
<p>Affordable solution</p>
</div>
</div>


<div className="impact-item">
<div className="item-icon-box">🔊</div>
<div className="item-text">
<h4>Instant confirmation</h4>
<p>No payment confusion</p>
</div>
</div>


<div className="impact-item">
<div className="item-icon-box">📦</div>
<div className="item-text">
<h4>Easy deployment</h4>
<p>Minimal setup needed</p>
</div>
</div>


<div className="impact-item">
<div className="item-icon-box">🌐</div>
<div className="item-text">
<h4>Regional support</h4>
<p>Multi-language ready</p>
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

<h2>Built for <span>Mass Expansion</span></h2>

<p className="commerce-final-cta-subtitle">

Scale Financial Inclusion Nationwide

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

REQUEST S-BOX POCKET

</button>

</footer>


</div>
  );
};

export default SBoxPocket;