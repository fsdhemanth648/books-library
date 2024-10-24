import React from "react";
import {
  NavLink as MNavLink,
  NavLinkProps as MNavLinkProps,
} from "@mantine/core";
import { Link } from "react-router-dom";

interface NavLinkProps extends Omit<MNavLinkProps, "component"> {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, ...props }) => {
  return (
    <Link to={href}>
      <MNavLink {...props} />
    </Link>
  );
};

export default NavLink;
