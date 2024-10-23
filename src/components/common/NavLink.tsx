"use client";

import React from "react";
import {
  NavLink as MNavLink,
  NavLinkProps as MNavLinkProps,
} from "@mantine/core";
import Link from "next/link";

interface NavLinkProps extends Omit<MNavLinkProps, "component"> {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, ...props }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <MNavLink {...props} />
    </Link>
  );
};

export default NavLink;
