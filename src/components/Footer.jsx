import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-700">
        
        {/* College Info */}
        <div>
          <h3 className="text-lg font-semibold text-primary">
            Government College for Women
          </h3>
          <p className="mt-2">
            Daudkhel, Mianwali
          </p>
          <p className="mt-1">
            The college is affiliated with the Board of Intermediate and Secondary Education, Sargodha for Secondary and Intermediate education.

For degree-level programs, the college is affiliated with the University of Sargodha.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">
            Contact Information
          </h4>
          <p>Phone: 0459-332118</p>
          <p>Email: . Gc.women.daudkhel.hed@gmail.com</p>
          <p className="mt-1">
            Office Hours: 8:00 AM – 2:00 PM
          </p>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">
            Address
          </h4>
          <p>
            Government College for Women<br />
            Daudkhel,Post Office Daudkhel Tesil & District Mianwali<br />
            Punjab, Pakistan
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Government College for Women, Daudkhel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
