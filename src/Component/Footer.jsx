import React from 'react'

export const Footer = () => {
  return (
    <div>
       <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p className='text-red-300 shadow-2xl shadow-sky-500'>Copyright © {new Date().getFullYear()} - All right reserved by SineSeek</p>
  </aside>
</footer>
    </div>
  )
}
