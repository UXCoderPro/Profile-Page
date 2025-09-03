import logo from "../assets/Logo/logo.svg";
import Button from "./Button";

const Header = ({ onEdit }) => {
  return (
    <div className="w-full flex justify-between items-center py-2">
      <img src={logo} alt="logo" className="object-cover lg:w-48 w-28" />
      <Button handleClick={onEdit} />
    </div>
  );
};

export default Header;
