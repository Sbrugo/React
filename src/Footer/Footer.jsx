import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Created by: Sofia</p>
      <button
        onClick={() => (window.location.href = "/portfolio")}
        classNam="btn btn-primary"
      >
        Github
      </button>
    </div>
  );
};

export default Footer;
