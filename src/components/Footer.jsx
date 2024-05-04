import React from "react";
import { footer } from "../utils/data";
import Link from "antd/es/typography/Link";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-blue-50 p-2">
      <div className="grid grid-cols-3 p-2">
        <div>
          <p className="text-lg font-semibold">Categories</p>
          <div className="flex flex-col gap-2">
            {footer.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">Top Categories</p>
          <div className="flex flex-col gap-2">
            {footer.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Contact Us</p>
          <Link
            href="https://www.linkedin.com/in/anandakrishnan-dinej-29b737227/"
            color="foreground"
          >
            Linkedin
          </Link>
          <Link href="https://github.com/Anandakrishnan21" color="foreground">
            Github
          </Link>
          <p>8:00 AM to 8:00 PM, 365 days</p>
        </div>
      </div>
      <p className="text-center text-neutral-400 text-sm">
        © {currentYear} copyright. All rights reserved{" "}
      </p>
    </div>
  );
}

export default Footer;
