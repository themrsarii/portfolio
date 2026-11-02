import React from 'react';

export const WhatsAppWidget = () => {
  const phoneNumber = "03002848525";
  const internationalNumber = "923002848525";
  const message = "Hi Muhammad Sarfaraz, I saw your portfolio and would like to discuss a project.";
  const whatsappUrl = `https://wa.me/${internationalNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none print:hidden"
      aria-label="Direct WhatsApp Contact"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 focus:outline-none"
        aria-label={`Chat on WhatsApp with Muhammad Sarfaraz (${phoneNumber})`}
        title={`WhatsApp: ${phoneNumber}`}
      >
        {/* Catchy engaging text line on the left side of the icon */}
        <div className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white/95 dark:bg-[#14151B]/95 backdrop-blur-md border border-[#E8E8E8] dark:border-[#282B34] text-[#171717] dark:text-[#EDEDED] shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.35)] group-hover:border-[#D4D4D4] dark:group-hover:border-[#383C46] group-hover:-translate-x-0.5 transition-all duration-200">
          <span className="text-xs font-mono font-medium tracking-tight whitespace-nowrap">
            <span className="hidden sm:inline">Have a project in mind? </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Let's talk</span>
          </span>
        </div>

        {/* Clean, dedicated WhatsApp Circular Icon */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(37,211,102,0.35)] group-hover:scale-105 group-active:scale-95 transition-all duration-200">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </a>
    </aside >
  );
};

export default WhatsAppWidget;
