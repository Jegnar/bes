import logo from '../assets/bes-logo.png';

export default function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="BES Beyond Electricity Solutions, ir al inicio">
      <img className="brand__logo" src={logo} alt="BES Beyond Electricity Solutions" />
    </a>
  );
}
