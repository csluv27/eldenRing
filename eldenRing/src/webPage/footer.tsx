function Footer() {
  return (
    <footer className="h-auto w-full relative">
      <div className="bg-black flex justify-between text-white text-center h-[24.5vh] px-22 py-10">
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 56.832" width="215" height="48.88" role="img" aria-labelledby="footerLogoBandaiNamcoHorizontalTitle" className="footer__logo">
            <title id="footerLogoBandaiNamcoHorizontalTitle">Logo Bandai Namco</title>
            <path className="logo-border fill-red-500" d="m243.57 41.679h-223.12v6.0712l-14.016-14.01v-27.67h237.13zm-1.01-41.679h-235.11c-4.1089 0-7.443 3.3341-7.443 7.443v25.479c0 2.2164 0.88274 4.3439 2.445 5.9125l17.998 17.998v-9.0814h222.11c4.109 0 7.443-3.3341 7.443-7.443v-32.865c0-4.1089-3.328-7.443-7.443-7.443z" />
            <path className="fill-white" d="m107.6 25.879-2.712-6.8904-2.705 6.8904zm0.286-10.123c1.816 4.4962 7.265 17.979 7.265 17.979h-4.464l-1.772-4.5026h-8.053l-1.7717 4.5026h-4.4264s5.4491-13.482 7.2651-17.979c0.578-1.4289 1.727-2.1402 2.979-2.1402 1.251 0 2.4 0.7113 2.978 2.1402zm-60.363 10.123-2.7118-6.8904-2.7053 6.8904zm0.2921-10.123c1.8163 4.4962 7.2652 17.979 7.2652 17.979h-4.4646l-1.7718-4.5026h-8.0463l-1.7718 4.5026h-4.4264s5.4488-13.482 7.2651-17.979c0.5779-1.4289 1.7274-2.1402 2.9785-2.1402s2.4005 0.7113 2.9785 2.1402zm42.753 8.0145c0-4.7122-3.5119-6.2109-6.4713-6.2109h-2.2164v12.625h2.1148c3.4865 0 6.5729-1.829 6.5729-6.4142zm4.5915 0c0 6.4967-4.782 9.9642-10.212 9.9642h-5.5695c-0.978 0-1.6766-0.6986-1.6766-1.6766v-16.372c0-0.9716 0.6986-1.6766 1.6766-1.6766h5.6203c5.4235 0 10.161 3.1309 10.161 9.761zm21.396 9.9642h4.337v-19.725h-4.337zm-47.065-7.0238s-6.1855-8.8402-8.2495-11.78c-0.8256-1.1876-2.4577-1.4734-3.6453-0.6414-0.6986 0.489-1.1177 1.3146-1.1177 2.1656v17.28h4.1787v-12.695s6.1856 8.8338 8.2495 11.774c0.8256 1.1876 2.4577 1.4734 3.6453 0.6415 0.6986-0.489 1.1177-1.3146 1.1177-2.1656v-17.28h-4.1787zm-39.946 1.0542c0-1.3337-1.0606-2.4133-2.6927-2.4133h-6.4205v4.8329h6.4205c1.6321 0 2.6927-1.0796 2.6927-2.4133zm-9.1132-5.7601h5.4488c1.5242 0 2.4958-0.9907 2.4958-2.2164 0-1.2256-0.9716-2.2227-2.4958-2.2227h-5.4488zm13.698 6.4142c0 2.7752-2.0385 5.3282-5.4806 5.3282h-10.726c-0.978 0-1.6766-0.6986-1.6766-1.6766v-16.385c0-0.9716 0.6986-1.6766 1.6766-1.6766h9.545c3.2706 0 5.5314 2.2228 5.5314 4.8901 0 2.21-1.5241 4.1152-3.5945 4.6867 2.68 0.1715 4.7249 2.1593 4.7249 4.8202zm126.31-2.5466-2.705-6.8905-2.706 6.8905h5.417zm0.292-10.123c1.816 4.4963 7.265 17.979 7.265 17.979h-4.464l-1.772-4.5026h-8.046l-1.772 4.5026h-4.427s5.449-13.482 7.266-17.979c0.577-1.4289 1.727-2.1401 2.978-2.1401s2.401 0.7112 2.979 2.1401zm70.321 8.1162c0-3.7025-2.572-6.7-6.319-6.7s-6.319 2.9912-6.319 6.7 2.572 6.6999 6.319 6.6999 6.319-2.9975 6.319-6.6999zm4.63 0c0 6.1919-5.062 10.256-10.949 10.256s-10.948-4.0708-10.948-10.256c0-6.1856 5.067-10.256 10.948-10.256s10.949 4.0644 10.949 10.256zm-30.287-6.7063c2.026 0 3.862 0.9018 5.144 2.2545l2.35-3.2643c-1.981-1.6257-4.623-2.5402-7.494-2.5402-6.058 0-11.278 4.0644-11.278 10.256s5.22 10.256 11.278 10.256c2.877 0 5.513-0.9145 7.494-2.5403l-2.35-3.2642c-1.282 1.3527-3.118 2.2545-5.144 2.2545-3.861 0-6.509-3.0039-6.509-6.7063 0-3.7025 2.648-6.7063 6.509-6.7063zm-63.214 9.545s-6.186-8.8401-8.25-11.78c-0.825-1.1875-2.457-1.4733-3.645-0.6414-0.698 0.489-1.118 1.3146-1.118 2.1656v17.28h4.179v-12.695s6.186 8.8337 8.25 11.774c0.825 1.1876 2.457 1.4733 3.645 0.6414 0.698-0.489 1.111-1.3146 1.111-2.1656v-17.274h-4.178v12.701zm48.983-10.224v17.248h-4.179v-12.695s-3.569 5.0996-4.763 6.8015c-0.94 1.3464-2.934 1.3464-3.88 0-1.188-1.7019-4.763-6.8015-4.763-6.8015v12.695h-4.179v-17.236c0-0.8764 0.413-1.7147 1.13-2.2101 1.181-0.8192 2.807-0.5271 3.633 0.6541 1.53 2.1847 6.122 8.7449 6.122 8.7449s4.591-6.5602 6.122-8.7449c0.825-1.1812 2.451-1.4733 3.632-0.6541 0.718 0.4954 1.125 1.34 1.125 2.2101" />
          </svg>
        </div>
        <div className="cursor-pointer">
          <nav className="text-[18px] text-left  flex flex-col gap-3 list-none">
            <li className="hover:text-[#c19d53]">Games</li>
            <li className="hover:text-[#c19d53]">About</li>
            <li className="hover:text-[#c19d53]">Press</li>
            <li className="hover:text-[#c19d53]">Recruitment</li>
            <li className="hover:text-[#c19d53]">Licensing</li>
          </nav>
        </div>
        <div className="text-left flex flex-col gap-3">
          <span className="text-[14px] ">DO YOU HAVE A QUESTION?</span>
          <span className="text-[14px] ">Go to <u className="cursor-pointer ml-1 underline-offset-6">Our support</u></span>
          <div className="flex flex-row gap-20 mt-10 cursor-pointer">
            <u className="text-[16px] underline-offset-8">REGISTER A GAME</u>
            <u className="text-[16px] underline-offset-8">JOIN THE CLUB</u>
            <span className="text-[16px]">LANGUAGES <span className="text-red-500">ENGLISH</span></span>
          </div>

          <div className="flex flex-row items-end cursor-pointer ml-auto mt-7 gap-10">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path></g></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M15,4c-4.186,0 -9.61914,1.04883 -9.61914,1.04883l-0.01367,0.01563c-1.90652,0.30491 -3.36719,1.94317 -3.36719,3.93555v6v0.00195v5.99805v0.00195c0.00384,1.96564 1.4353,3.63719 3.37695,3.94336l0.00391,0.00586c0,0 5.43314,1.05078 9.61914,1.05078c4.186,0 9.61914,-1.05078 9.61914,-1.05078l0.00195,-0.00195c1.94389,-0.30554 3.37683,-1.97951 3.37891,-3.94727v-0.00195v-5.99805v-0.00195v-6c-0.00288,-1.96638 -1.43457,-3.63903 -3.37695,-3.94531l-0.00391,-0.00586c0,0 -5.43314,-1.04883 -9.61914,-1.04883zM12,10.39844l8,4.60156l-8,4.60156z"></path></g></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M5.3125,1l-3.3125,8.8125v33.1875h11v6h7.40625l6,-6h9l12.59375,-12.5625v-29.4375zM11,6h32v22l-6,6h-12l-6,6v-6h-8zM20,13v14h6v-14zM30,13v14h6v-14z"></path></g></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"></path></g></g>
            </svg>
          </div>

        </div>
      </div>
      <div className="bg-red-500 text-white px-22 flex items-center h-[7.65vh] flex-wrap">
        <span className="text-[14px] w-full md:w-1/4 font-[400] text-left md:pr-4">
          © 2010 - 2025 Bandai Namco Entertainment Europe S.A.S
        </span>
        <div className="text-[14px] w-full md:w-3/4 flex flex-wrap gap-x-4 gap-y-2 justify-end text-right md:mt-0 cursor-pointer">
          <a className="hover:text-gray-600">Legal documentation</a>
          <a className="hover:text-gray-600">Legal information</a>
          <a className="hover:text-gray-600">Reservation of text/data mining rights</a>
          <a className="hover:text-gray-600">Illicit content report</a>
          <a className="hover:text-gray-600">Cookies policy</a>
          <a className="hover:text-gray-600">Management of cookies</a>
          <a className="hover:text-gray-600">Nara CSLuv</a>
          <a href="https://github.com/csluv27" className="hover:text-gray-600">Corn Spring Luv</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
