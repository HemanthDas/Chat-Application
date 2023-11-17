import IconLink from "./iconlink";
import home from "../assets/home.svg";
import search from "../assets/search.svg";
import profile from "../assets/profile.svg";
import create from "../assets/create.svg";
import explore from "../assets/explore.svg";
const Navbar = () => {
  return (
    <nav>
      <IconLink name="Home" svg={home} link={"/"} />
      <IconLink name="Search" svg={search} link={"/search"} />
      <IconLink name="Explore" svg={explore} link={"/explore"} />
      <IconLink name="Create" svg={create} link="/create" />
      <IconLink name="Profile" svg={profile} link="/profile" />
    </nav>
  );
};
export default Navbar;
