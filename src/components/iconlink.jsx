import { Link } from "@tanstack/react-router";
import PropTypes from "prop-types";

const IconLink = (props) => {
  return (
    <Link className="link-box" to={props.link}>
      <img src={props.svg} alt="svg" />
      {props.name}
    </Link>
  );
};

IconLink.propTypes = {
  link: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default IconLink;
