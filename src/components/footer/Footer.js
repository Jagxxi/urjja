import React from 'react'
import logo from '../../assets/logos/logo.png';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer aria-label="Site Footer" class="bg-gray-300">
      <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            {/* Company Logo */}
            <Link to='/luna-demo/'>
              <img
                class="h-24"
                viewBox="0 0 118 24"
                src={logo}
                alt="logo"
              />
            </Link>

            {/* Side Headings */}
            <p class="max-w-xs mt-4 text-gray-500">Established in 2025</p>
            <p class="max-w-xs mt-2 text-gray-500">Based in India</p>
            <a href='mailto:sauravpathak1000@gmail.com
                        ?subject=Luna%20Support:%20[INSERT%20Name]%20-%20[For%20Questions%20or%20Inquiries]%20
                        &body=Type%20Your%20Message%20Here'>
                <p class="max-w-xs mt-2 text-gray-500 hover:underline hover:text-indigo-600">
                  contact@urjja.io
                </p>
            </a>

            {/* Social Media Icons */}
            <ul class="flex gap-6 mt-8">
              {/* Facebook */}
              <li>
                <a
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-gray-700 transition hover:text-indigo-600"
                >
                  <span class="sr-only">Facebook</span>

                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-gray-700 transition hover:text-indigo-600"
                >
                  <span class="sr-only">Instagram</span>

                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              
              {/* Twitter */}
              <li>
                <a
                  href="https://twitter.com/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-gray-700 transition hover:text-indigo-600"
                >
                  <span class="sr-only">Twitter</span>

                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
              </li>

            </ul>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {/* COLUMN #1 -> Shop */}
            <div>
              <p class="font-medium text-gray-900">Shop</p>

              <nav aria-label="Footer Navigation - Services" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <Link to="/luna-demo/women/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Women
                    </Link>
                  </li>

                  <li>
                    <Link to="/luna-demo/men/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Men
                    </Link>
                  </li>

                  <li>
                    <Link to="/luna-demo/new-arrivals/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      New Arrivals
                    </Link>
                  </li>

                  <li>
                    <Link to="/luna-demo/error/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Accessories
                    </Link>
                  </li>

                  <li>
                    <a href="/luna-demo/error/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Brands
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* COLUMN #2 -> Company */}
            <div>
              <p class="font-medium text-gray-900">Company</p>

              <nav aria-label="Footer Navigation - Company" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <Link to="/luna-demo/error/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      About Luna
                    </Link>
                  </li>

                  <li>
                    <Link to="/luna-demo/error/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Careers
                    </Link>
                  </li>

                  <li>
                    <Link to="/luna-demo/error/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Investors
                    </Link>
                  </li>

                  <li>
                    <Link to="/luna-demo/error/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Sustainability
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            
            {/* COLUMN #3 -> Help */}
            <div>
              <p class="font-medium text-gray-900">Help</p>

              <nav aria-label="Footer Navigation - Company" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <Link to="/luna-demo/sign-in/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      My Account
                    </Link>
                  </li>

                  <li>
                    <Link to="/luna-demo/error/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Find a Store
                    </Link>
                  </li>

                  <li>
                    <Link to="/luna-demo/error/"class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Order Status
                    </Link>
                  </li>

                  <li>
                    <Link to="/luna-demo/error/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Refund & Exchange
                    </Link>
                  </li>

                  <li>
                    <Link to="/luna-demo/error/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Shipping & Deliveries
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* COLUMN #4 -> */}
            <div>
              <p class="font-medium text-gray-900">Legal</p>

              <nav aria-label="Footer Navigation - Legal" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <Link to="/luna-demo/error/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link to="/luna-demo/error/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Terms & Conditions
                    </Link>
                  </li>

                  <li>
                    <Link to="/luna-demo/error/" class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Accessibility
                    </Link>
                  </li>

                  <li>
                    <a href='mailto:sauravpathak1000@gmail.com
                        ?subject=Luna%20Support:%20[INSERT%20Name]%20-%20[For%20Questions%20or%20Inquiries]%20
                        &body=Type%20Your%20Message%20Here'
                        class="text-gray-700 transition hover:text-indigo-600 hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            
          </div>
        </div>

        {/* COPYRIGHT TEXT */}
        <p class="flex justify-center items-center text-xs text-gray-500">&copy; 2025 urjja Inc. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer