import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const links = [
    { label: 'Giới thiệu', href: '/' },
    { label: 'Dự án', href: '/projects' },
    { label: 'Tổng kết', href: '/summary' },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex justify-center w-full">
      <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-6 py-3 md:px-10 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <ul className="flex items-center gap-6 sm:gap-10 md:gap-14">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={cn(
                  "text-[11px] sm:text-xs md:text-sm font-medium transition-colors duration-300",
                  path === link.href 
                    ? "text-[#E1E0CC]" 
                    : "text-[rgba(225,224,204,0.7)] hover:text-[#E1E0CC]"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
