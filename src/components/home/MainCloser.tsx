/** Shared closing section for the site's content pages. */
export default function MainCloser({ anchorId = 'lead-form-anchor', bookingPage = false }: { anchorId?: string; bookingPage?: boolean }) {
  return (
    <section id={anchorId} className="contact-closer scroll-mt-24 bg-charcoal-900 text-[#f9f7f3] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-24 items-start">
        <div>
          <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c9ab72]"><span className="w-7 h-px bg-[#c9ab72]" aria-hidden="true" />Kapcsolat</span>
          <h2 className="font-serif-lux leading-[1.05] tracking-tight mt-7 mb-8" style={{ fontSize: 'clamp(3.1rem, 5.4vw, 5.4rem)', fontStyle: 'normal' }}>
            Kezdjük el a<br /><em className="text-[#c9ab72] font-light">közös történetet.</em>
          </h2>
          <p className="text-[#d0c9be] text-base md:text-lg leading-relaxed mb-7">Írd meg, miben segíthetek. Kinga személyesen válaszol a megkeresésekre.</p>
          <p className="text-[#d0c9be] text-sm leading-relaxed"><strong>Telefon:</strong> <a href="tel:+36307094370" className="hover:underline">+36 30 709 4370</a><br /><strong>Stúdió:</strong> 6726 Szeged, Barcsay Károly utca 7.</p>
        </div>
        <div className="bg-charcoal-800 border border-[#5e5140] p-7 sm:p-9 lg:p-10">
          <h3 className="font-serif-lux leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 2.5vw, 2.6rem)', fontStyle: 'normal' }}>Néhány sor.<br />Egy személyes találkozás.</h3>
          <p className="text-[#d0c9be] text-sm leading-relaxed mb-7">Válaszd ki a szolgáltatást, és írd meg, mikor lenne megfelelő. A rövid időpontkérés után személyesen egyeztethettek a részletekről.</p>
          <a href={bookingPage ? '#booking-form' : '/idopont'} className="inline-flex items-center justify-center bg-[#f9f7f3] text-[#191816] px-7 py-4 min-h-12 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#e7d4b3] transition-colors">Időpontot kérek ↗</a>
          <p className="border-l-2 border-[#c9ab72] pl-4 mt-7 text-xs text-[#d0c9be] leading-relaxed"><strong className="block text-[#e0c68f]">Személyes egyeztetés.</strong>Az elküldött időpontkérés után Kinga visszajelez. Az időpont ekkor válik véglegessé.</p>
        </div>
      </div>
    </section>
  );
}
