import HeroArchPoster from "@/components/sections/hero/HeroArchPoster";
import AboutArchCurve from "@/components/sections/about/AboutArchCurve";
import GalleryWindowMerge from "@/components/sections/gallery/GalleryWindowMerge";
import PricingFramedSlider from "@/components/sections/pricing/PricingFramedSlider";
import TestimonialPhotoQuote from "@/components/sections/testimonial/TestimonialPhotoQuote";
import FaqPlusAccordion from "@/components/sections/faq/FaqPlusAccordion";
import ContactPlumForm from "@/components/sections/contact/ContactPlumForm";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-webild-section="HeroArchPoster" data-webild-section-id="HeroArchPoster-1" data-section="hero" className="contents" data-scene>
        <HeroArchPoster
          title="Itran Voyages"
          script="Morocco"
          labelLeft="Desert & Atlas"
          labelRight="Private Expeditions"
          marquee={[
            "Sahara Expeditions",
            "Imperial Cities",
            "Atlas Mountains"
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/beautiful-sand-dunes-sahara-desert_661209-131.jpg"
          imageAlt="beautiful sand dunes in sahara desert"
          cta={{
            text: "Explore Tours",
            href: "#about"
          }}
        />
      </div>

      <div id="about" data-webild-section="AboutArchCurve" data-webild-section-id="AboutArchCurve-1" data-section="about">
        <AboutArchCurve
          title="Iconic Morocco"
          label="Luxury private routes across Morocco"
          placeTitle="Imperial Cities"
          description="Select your private itinerary across Marrakech, Erg Chebbi sand dunes, ancient Fes, and peaceful Rif mountain valleys."
          note="Bespoke private Moroccan tours"
          items={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-natural-landscape_23-2151839177.jpg",
              imageAlt: "Beautiful natural landscape"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/green-grass-field-near-mountain-blue-sky-daytime_417767-83.jpg",
              imageAlt: "green field near mountain range"
            }
          ]}
        />
      </div>

      <div id="gallery" data-webild-section="GalleryWindowMerge" data-webild-section-id="GalleryWindowMerge-1" data-section="gallery" data-scene data-gallery>
        <GalleryWindowMerge
          word="MOROCCO"
          quote="We curate every journey to reveal authentic Moroccan magic beyond the usual path."
          credit="Connor Hayes, Expedition Director"
          imageSrc="https://img.b2bpic.net/free-photo/close-up-entrance-courtyard-lions_1139-26.jpg"
          imageAlt="Close-up of the entrance of the courtyard of the lions"
          items={[
            {
              title: "Sahara Dunes",
              imageSrc: "https://img.b2bpic.net/free-photo/sand-dunes-sunset-casting-nice-shadows-muine-vietnam_501050-170.jpg",
              imageAlt: "Sand dunes at sunset casting nice shadows in Muine Vietnam"
            },
            {
              title: "Moroccan Hospitality",
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-woman-preparing-tea-concept_23-2148555212.jpg",
              imageAlt: "Front view of woman preparing tea concept"
            },
            {
              title: "Historic Kasbahs",
              imageSrc: "https://img.b2bpic.net/free-photo/abandoned-greek-chapel-against-blue-sky-with-clouds-is-located-mountain-abandoned-ghost-town-near-fethiye-turkey-site-ancient-greek-city-karmilissos-from-18th-century_166373-3444.jpg",
              imageAlt: "An abandoned Greek chapel against a blue sky with clouds is located on a mountain in an abandoned ghost town near Fethiye in Turkey Site of the ancient Greek city of Karmilissos from the 18th century"
            },
            {
              title: "Atlas Mountain Views",
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-landscape-with-snowy-mountains-blue-sky-horizontal-alps-austria_1220-1412.jpg",
              imageAlt: "Beautiful Landscape with Snowy Mountains. Blue Sky. Horizontal. Alps, Austria."
            },
            {
              title: "Desert 4x4 Expeditions",
              imageSrc: "https://img.b2bpic.net/free-photo/off-road-car-wilderness_23-2151483004.jpg",
              imageAlt: "Off-road car in the wilderness"
            },
            {
              title: "Crafted Details",
              imageSrc: "https://img.b2bpic.net/free-photo/assortment-dry-tea-golden-vintage-mini-plates-tea-types_114579-7917.jpg",
              imageAlt: "Assortment of dry tea in golden vintage mini plates. Tea types"
            }
          ]}
        />
      </div>

      <div id="pricing" data-webild-section="PricingFramedSlider" data-webild-section-id="PricingFramedSlider-1" data-section="pricing">
        <PricingFramedSlider
          title="Luxury Tour Packages"
          script="journeys"
          items={[
            {
              name: "Sahara Expedition",
              price: "€850",
              period: "per person",
              description: "Three days across the dunes of Merzouga with private luxury desert camping under starry skies.",
              specs: [
                {
                  label: "Duration",
                  value: "3 Days"
                },
                {
                  label: "Group Size",
                  value: "Private 2-6"
                },
                {
                  label: "Highlights",
                  value: "Merzouga Camp"
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/sahara-desert-sunlight-blue-sky-morocco-africa_181624-27461.jpg",
              imageAlt: "Sahara desert under the sunlight and a blue sky in Morocco in Africa",
              cta: {
                text: "Book this tour",
                href: "#contact-plum-form"
              },
              whatsappUrl: "https://wa.me/212661000000?text=Hello%20ITRAN%20VOYAGES%20MOROCCO!%20I%20would%20like%20to%20book%20the%20Sahara%20Expedition%20tour."
            },
            {
              name: "Imperial Cities",
              price: "€1,400",
              period: "per person",
              description: "Seven days exploring Marrakech, Fes, Meknes, and Rabat with expert private cultural guides.",
              specs: [
                {
                  label: "Duration",
                  value: "7 Days"
                },
                {
                  label: "Group Size",
                  value: "Private 2-6"
                },
                {
                  label: "Highlights",
                  value: "Medina & Souks"
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/vertical-abstract-shot-water-reaching-sand-beach-leaving-trails_181624-4553.jpg",
              imageAlt: "abstract shot of sand texture",
              cta: {
                text: "Book this tour",
                href: "#contact-plum-form"
              },
              whatsappUrl: "https://wa.me/212661000000?text=Hello%20ITRAN%20VOYAGES%20MOROCCO!%20I%20would%20like%20to%20book%20the%20Imperial%20Cities%20tour."
            },
            {
              name: "Grand Morocco",
              price: "€2,200",
              period: "per person",
              description: "Ten days spanning coastal Chefchaouen, ancient Fes, High Atlas peaks, and luxury Sahara sands.",
              specs: [
                {
                  label: "Duration",
                  value: "10 Days"
                },
                {
                  label: "Group Size",
                  value: "Private 2-6"
                },
                {
                  label: "Highlights",
                  value: "Atlas & Sahara"
                }
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/full-shot-people-traveling-together_23-2148922098.jpg",
              imageAlt: "Full shot people traveling together",
              cta: {
                text: "Book this tour",
                href: "#contact-plum-form"
              },
              whatsappUrl: "https://wa.me/212661000000?text=Hello%20ITRAN%20VOYAGES%20MOROCCO!%20I%20would%20like%20to%20book%20the%20Grand%20Morocco%20tour."
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialPhotoQuote" data-webild-section-id="TestimonialPhotoQuote-1" data-section="testimonial" data-scene>
        <TestimonialPhotoQuote
          items={[
            {
              quote: "Our private driver took us through the Atlas Mountains with total care. The desert camp was absolute perfection.",
              name: "Connor Hayes",
              role: "Private Tour Guest"
            },
            {
              quote: "Watching sunset over the dunes in Merzouga was pure magic. Every luxury detail was taken care of.",
              name: "Holly Murphy",
              role: "Sahara Expedition Guest"
            },
            {
              quote: "Exploring Fes and Marrakech with local guides made our journey truly memorable and seamless.",
              name: "Callum Reid",
              role: "Cultural Tour Guest"
            }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/minimalist-landscape-from_23-2151599916.jpg"
          imageAlt="Minimalist landscape from above"
        />
      </div>

      <div id="faq-plus-accordion" data-webild-section="FaqPlusAccordion" data-webild-section-id="FaqPlusAccordion-1" data-section="faq-plus-accordion">
        <FaqPlusAccordion
          title="Before You Book"
          script="TRAVEL FAQ"
          items={[
            {
              title: "HOW DO I RESERVE A PRIVATE TOUR?",
              description: "Send us your dates and guest count via WhatsApp or email. We tailor the exact route to your preferences and confirm details within hours."
            },
            {
              title: "WHAT IS INCLUDED IN PRIVATE PACKAGES?",
              description: "Air-conditioned private transport, English-speaking driver, handpicked boutique riad stays, and luxury desert camp reservations are all included."
            },
            {
              title: "WHEN IS THE BEST TIME FOR A SAHARA TOUR?",
              description: "October through April offers comfortable daytime temperatures and cool, clear nights for stargazing in the desert."
            },
            {
              title: "CAN WE CUSTOMIZE OUR TRIP ITINERARY?",
              description: "Every journey with ITRAN VOYAGES MOROCCO can be fully personalized to match your pace, preferred imperial cities, and special experiences."
            },
            {
              title: "ARE MEALS INCLUDED DURING THE JOURNEY?",
              description: "Daily breakfast at boutique riads and traditional dinners at luxury desert camps are included, with handpicked lunch stops along your route."
            }
          ]}
          cta={{
            text: "Ask a Question",
            href: "#contact-plum-form"
          }}
          ariaLabel="Frequently asked questions about luxury travel in Morocco"
        />
      </div>

      <div id="contact-plum-form" data-webild-section="ContactPlumForm" data-webild-section-id="ContactPlumForm-1" data-section="contact-plum-form">
        <ContactPlumForm
          title="Plan Your Journey"
          script="Reserve"
          options={[
            "Sahara Desert Tour",
            "Private Grand Tour",
            "Custom Itinerary",
            "Day Trip Excursion"
          ]}
          submitText="Send Inquiry"
          details={[
            { label: "WhatsApp Booking", value: "+212 661 000 000" },
            { label: "Email Reservation", value: "info@itranvoyages.com" },
            { label: "Agency Address", value: "Derb Dabachi No. 42, Marrakech Medina" },
            { label: "Response", value: "Instant via WhatsApp" }
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/front-view-woman-preparing-tea-concept_23-2148555212.jpg"
          imageAlt="Moroccan tea preparation and traditional hospitality"
          labels={{
            name: "Full Name",
            email: "Email Address",
            enquiry: "Tour Type",
            message: "Travel Details & Dates",
            sending: "Sending...",
            sent: "Inquiry Sent",
            thanks: "Thank you, we will contact you via WhatsApp or email shortly."
          }}
        />
      </div>
    </>
  );
}
