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
          imageSrc="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947588-xjtk3xt4.jpg?_wi=1"
          imageAlt="ITRAN VOYAGES MOROCCO - Sahara Desert & Atlas Expedition"
          cta={{
            text: "Start Designing Your Trip",
            href: "#contact-plum-form"
          }}
        />
      </div>

      <div id="about" data-webild-section="AboutArchCurve" data-webild-section-id="AboutArchCurve-1" data-section="about">
        <AboutArchCurve
          title="Iconic Morocco"
          label="Luxury private routes across Morocco"
          placeTitle="Imperial Cities & Dunes"
          description="Select your private itinerary across Marrakech, Erg Chebbi sand dunes, ancient Fes, and peaceful High Atlas mountain valleys."
          note="Bespoke private Moroccan tours"
          items={[
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947590-882v7oba.jpg?_wi=1",
              imageAlt: "Bespoke Moroccan Architecture & Medina"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947591-ulz48iup.jpg?_wi=1",
              imageAlt: "High Atlas Mountain & Desert Routes"
            }
          ]}
        />
      </div>

      <div id="gallery" data-webild-section="GalleryWindowMerge" data-webild-section-id="GalleryWindowMerge-1" data-section="gallery" data-scene data-gallery>
        <GalleryWindowMerge
          id="gallery"
          word="MOROCCO"
          quote="We curate every journey to reveal authentic Moroccan magic beyond the usual path."
          credit="ITRAN VOYAGES MOROCCO - Photo Gallery"
          imageSrc="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947591-f08ys6ss.jpg?_wi=1"
          imageAlt="ITRAN VOYAGES MOROCCO Photo Gallery"
          items={[
            {
              title: "Sahara Sunset & Dunes",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947588-xjtk3xt4.jpg?_wi=2",
              imageAlt: "Sahara Sunset & Dunes"
            },
            {
              title: "Imperial Medina Architecture",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947590-882v7oba.jpg?_wi=2",
              imageAlt: "Imperial Medina Architecture"
            },
            {
              title: "Luxury Desert Camp Experience",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947590-vaempi1k.jpg?_wi=1",
              imageAlt: "Luxury Desert Camp Experience"
            },
            {
              title: "High Atlas Mountain Routes",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947591-ulz48iup.jpg?_wi=2",
              imageAlt: "High Atlas Mountain Routes"
            },
            {
              title: "Authentic Moroccan Heritage",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947591-f08ys6ss.jpg?_wi=2",
              imageAlt: "Authentic Moroccan Heritage"
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
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947590-vaempi1k.jpg?_wi=2",
              imageAlt: "Sahara Desert expedition with luxury desert camp",
              cta: {
                text: "Book this tour",
                href: "#contact-plum-form"
              },
              whatsappUrl: "https://wa.me/212723902185?text=Hello%20ITRAN%20VOYAGES%20MOROCCO!%20I%20would%20like%20to%20book%20the%20Sahara%20Expedition%20tour."
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
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947590-882v7oba.jpg?_wi=3",
              imageAlt: "Imperial cities tour of Marrakech and Fes medinas",
              cta: {
                text: "Book this tour",
                href: "#contact-plum-form"
              },
              whatsappUrl: "https://wa.me/212723902185?text=Hello%20ITRAN%20VOYAGES%20MOROCCO!%20I%20would%20like%20to%20book%20the%20Imperial%20Cities%20tour."
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
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947591-ulz48iup.jpg?_wi=3",
              imageAlt: "Grand Morocco tour across High Atlas and Sahara",
              cta: {
                text: "Book this tour",
                href: "#contact-plum-form"
              },
              whatsappUrl: "https://wa.me/212723902185?text=Hello%20ITRAN%20VOYAGES%20MOROCCO!%20I%20would%20like%20to%20book%20the%20Grand%20Morocco%20tour."
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
          imageSrc="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947588-xjtk3xt4.jpg?_wi=3"
          imageAlt="Sahara desert sunrise traveler experience"
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
            { label: "WhatsApp Booking", value: "+212 723 902 185" },
            { label: "Email Reservation", value: "info@itranvoyages.com" },
            { label: "Agency Address", value: "Derb Dabachi No. 42, Marrakech Medina" },
            { label: "Response", value: "Instant via WhatsApp" }
          ]}
          imageSrc="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795200947591-f08ys6ss.jpg?_wi=3"
          imageAlt="Authentic Moroccan journey reservation"
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
