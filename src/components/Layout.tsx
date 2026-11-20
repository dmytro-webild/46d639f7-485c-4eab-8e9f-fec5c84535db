import { Outlet } from "react-router-dom";
import NavbarSealCorner from "@/components/navbars/NavbarSealCorner";
import FooterPlumPhone from "@/components/sections/footer/FooterPlumPhone";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="solid" data-card="frame" data-pattern="hairlines">
      <header data-webild-section="Header">
        <NavbarSealCorner
          brand="ITRAN VOYAGES MOROCCO"
          cta={{
            text: "Book Your Trip",
            href: "#contact-plum-form"
          }}
        />
      </header>
      <main className="flex-grow" data-button="solid" data-card="frame" data-pattern="hairlines">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterPlumPhone
          brand="ITRAN VOYAGES MOROCCO"
          phone="+212 661 000 000"
          email="info@itranvoyages.com"
          address={[
            "Derb Dabachi No. 42, Medina",
            "Marrakech 40000, Morocco"
          ]}
          columns={[
            {
              title: "Explore",
              links: [
                {
                  text: "Destinations",
                  href: "#about"
                },
                {
                  text: "Private Tours",
                  href: "#pricing"
                },
                {
                  text: "Photo Gallery",
                  href: "#gallery"
                }
              ]
            },
            {
              title: "Company",
              links: [
                {
                  text: "About Us",
                  href: "#about"
                },
                {
                  text: "Traveler Reviews",
                  href: "#testimonial"
                },
                {
                  text: "Reserve Journey",
                  href: "#contact-plum-form"
                }
              ]
            },
            {
              title: "Support",
              links: [
                {
                  text: "Traveler FAQ",
                  href: "#faq-plus-accordion"
                },
                {
                  text: "WhatsApp Booking",
                  href: "https://wa.me/212661000000?text=Hello%20ITRAN%20VOYAGES,%20I%20would%20like%20to%20book%20a%20tour."
                },
                {
                  text: "Contact Us",
                  href: "#contact-plum-form"
                }
              ]
            }
          ]}
          legal="© 2026 ITRAN VOYAGES MOROCCO. All rights reserved."
          toTopText="Back to top"
        />
      </footer>
      <WhatsAppButton />
    </div>
  );
}
