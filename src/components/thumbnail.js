import OSImg from "../images/os.jpg";
import Cus from "../images/Cus.jpg";
import Map from "../images/map.jpg";
import "../index.css";
function Thumbnails() {
    return (
      <>
       <div className="osimg">
        <video
          className="hello"
          src="/banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
         <div className="video-overlay">
    <h1>Find Your Dream Home</h1>
    <button>Get In Touch</button>
  </div>

      </div>
        <h2 className="os">Our Services</h2>
      <div className="oslali">
        <img src={OSImg} className="osi"/>
        <ul className="osli">
          <li><b>Buy a Property</b>: Choose from a wide range of verified residential and commercial listings.</li>
          <li><b>Sell or Rent Out:</b> List your property with us and reach thousands of potential buyers or tenants.</li>
          <li><b>Legal & Loan Assistance: </b>End-to-end guidance for documentation, legal clearance, and home loan support.</li>
        </ul>
      </div>
      <h1 className="os"> Why Choose Us</h1>
      <div className="oslali">
        <ul className="osli">
          <li>✔ Transparent Pricing</li>
          <li>✔ Verified Listings Only</li>
          <li>✔ Local Expertise</li>
          <li>✔ Fast and Reliable Support</li>
          <li>✔ Personalized Property Recommendations</li>
        </ul>
        <img src={Cus} className="osii"/>
      </div>
      <div>
        <h2 className="os">Locate Us</h2>
        <img src={Map} className="hello"/>
      </div>
      <div>
        <p className="para">Project Gallery</p>
      </div>
      </>
    );
  }
  export default Thumbnails;
  