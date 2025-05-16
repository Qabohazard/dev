import './contact.css'

export default function Contact() {
  return (
    <div className='contact-section '>
      <h1 className="text-3xl sm:text-4xl font-bold text-white">ways to reach me out</h1>
      <div className=' text-white font-sans min-h-[200px] xl:min-h-[180px] flex items-center justify-center '>



        <div className="max-w-3xl w-full bg-[#1E293B] rounded-xl p-6 shadow-lg text-center space-y-6">


          <p className="text-gray-300">I am available at</p> <br />

          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 text-teal-400 text-lg">
            <div className="flex items-center gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h1.4a1 1 0 01.9.55L9.6 6.6a1 1 0 01-.1 1.1L8.3 9a16 16 0 006.7 6.7l1.3-1.3a1 1 0 011.1-.1l3.05 2.3a1 1 0 01.55.9V19a2 2 0 01-2 2h-1c-8.28 0-15-6.72-15-15V5z" />
              </svg>
              <span>0937848785</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16 12H8m0 0v4m0-4l-4-4m4 4l4-4m0 0h4a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-4" />
              </svg>
              <span>Qeysabaxa11@gmail.com</span>
            </div>
          </div> <br />

          <div className="flex justify-center gap-6 text-teal-400 text-2xl mt-4">
            {/* Telegram */}
            <a href="https://t.me/m0h4mm3d_hu553n" aria-label="Telegram" className="hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  d="M9.27 13.77l-.39 4.36c.56 0 .81-.24 1.11-.53l2.67-2.53 5.53 4.03c1.01.56 1.74.27 2.01-.93l3.64-16.34c.37-1.62-.62-2.26-1.65-1.87L.98 9.76C-.62 10.41-.6 11.26.75 11.65l5.3 1.65 12.29-7.74c.58-.39 1.12-.17.68.22L9.27 13.77z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://t.me/m0h4mm3d_hu553n" aria-label="LinkedIn" className="hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48c0 1.65 1.33 2.98 2.98 2.98 1.65 0 2.98-1.33 2.98-2.98C7.96 4.83 6.63 3.5 4.98 3.5zM2.4 8.9h5.17v13.5H2.4V8.9zm7.6 0h4.95v1.85h.07c.69-1.3 2.37-2.68 4.88-2.68 5.23 0 6.19 3.44 6.19 7.91v9.42h-5.17v-8.35c0-1.99-.04-4.55-2.77-4.55-2.77 0-3.2 2.17-3.2 4.41v8.49H10V8.9z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a href="https://t.me/m0h4mm3d_hu553n" aria-label="X (Twitter)" className="hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.1 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16.1a2 2 0 002-2V4a2 2 0 00-2-2zm-4.4 13.4l-3-4.4-3.1 4.4H7.7l4-5.5-3.6-5h2.3l2.8 4.2 2.7-4.2H17l-3.8 5.5 4 5.5h-2.5z" />
              </svg>
            </a>

            {/* GitHub */}
            <a href="#" aria-label="GitHub" className="hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.112.82-.26.82-.577v-2.17c-3.338.727-4.033-1.61-4.033-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.744.083-.729.083-.729 1.204.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.931 0-1.31.467-2.381 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 6.845a11.5 11.5 0 012.998.404c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.839 1.234 1.91 1.234 3.22 0 4.61-2.807 5.628-5.48 5.921.43.37.813 1.102.813 2.222v3.293c0 .319.218.694.825.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}








