const translations = {
  English: {
    nav: {
      home: "Home",
      about: "About",
      gallery: "Gallery",
      instagram: "Instagram",
      guides: "Guides",
      booking: "Book Appointment",
      contact: "Contact",
    },

    hero: {
      subtitle: "Premium Tattoo Studio",
      title: "Art You Wear.",
      titleHighlight: "Stories You Tell.",
      description:
        "Every tattoo has a meaning. We turn your ideas into meaningful artwork with passion, precision and creativity.",
      book: "Book Appointment",
      gallery: "View Gallery",

      features: [
        "Professional Artists",
        "Premium Hygiene",
        "Custom Designs",
        "Safe & Sterile",
      ],
    },

    about: {
      label: "About The Studio",
      title: "Where Your Ideas",
      titleHighlight: "Become Art.",

      description:
        "At Graffiti Tattoo Studio, we believe a tattoo is more than just ink on skin. It's a form of self-expression, a memory, a story and something uniquely yours.",

      secondDescription:
        "Our artists work closely with every client to understand their vision and transform it into a custom tattoo that reflects their personality and style.",

      customArtwork: "Custom Artwork",

      experiencedArtists: "Experienced Artists",
      experiencedArtistsText:
        "Skilled artists focused on detail and creativity.",

      premiumHygiene: "Premium Hygiene",
      premiumHygieneText:
        "A clean and professional environment for every client.",

      customDesigns: "Custom Designs",
      customDesignsText:
        "Designs created specifically around your vision.",

      clientFocused: "Client Focused",
      clientFocusedText:
        "Your idea, your story, your tattoo.",

      startTattoo: "Start Your Tattoo",
    },

    gallery: {
      label: "Our Portfolio",
      title: "Our Work Speaks",
      artwork: "Tattoo Artwork",
      fullGallery: "View Full Gallery",
    },

    instagram: {
      label: "Follow Our Work",
      title: "Graffite",
      titleHighlight: "On Instagram",
      follow: "Follow Us",
      viewPost: "View Post",
      unavailable: "Instagram posts are currently unavailable.",
      visit: "Visit Instagram",
      newWork: "New work. New ideas. New stories.",
    },

    guides: {
      label: "Studio Guides",
      title: "Everything You Need",
      titleHighlight: "Before & After.",
      intro:
        "Helpful information from our studio to help you prepare for your tattoo or piercing and take care of it afterward.",

      aftercare: {
        title: "Tattoo Aftercare",
        description:
          "Everything you need to know to care for your new tattoo while it heals.",

        intro:
          "Proper tattoo aftercare is essential to ensure smooth healing and preserve the quality of your tattoo.",

        steps: [
          {
            number: "01",
            title: "Leave the Wrap On",
            text:
              "Leave the wrap on for 1–2 hours after your tattoo session.",
          },
          {
            number: "02",
            title: "Clean the Tattoo Gently",
            text:
              "Wash with lukewarm water and mild, fragrance-free soap using only your hands. Pat dry with a clean towel and avoid rubbing.",
          },
          {
            number: "03",
            title: "Dermalize Wrap",
            text:
              "Visit the studio the next day for Dermalize Wrap application. The studio guide recommends keeping the wrap on for about a week.",
          },
          {
            number: "04",
            title: "Avoid Scratching",
            text:
              "Itching can be normal during healing. Do not scratch or pick at scabs.",
          },
          {
            number: "05",
            title: "Avoid Soaking",
            text:
              "Avoid swimming, hot tubs and soaking in baths during the first few weeks. Showering is fine.",
          },
          {
            number: "06",
            title: "Protect Your Tattoo",
            text:
              "Wear loose clothing and minimize direct sunlight for 2–3 weeks. After healing, use SPF 50 or higher to help protect against fading.",
          },
        ],

        warningTitle: "Watch for signs of infection",

        warningText:
          "Unusual redness, swelling, pus or excessive pain should be taken seriously. Contact your tattoo artist or a healthcare professional immediately.",
      },

      piercing: {
        title: "Piercing Guide",
        description:
          "Piercing sizes, cleaning instructions, healing times and important aftercare.",

        sizeGuide: "Hoops Size Guide",
        location: "Location",
        thickness: "Thickness",
        length: "Length",

        sizes: [
          ["Lobe", "20G / 18G / 16G", "6mm / 8mm / 10mm"],
          ["Helix", "18G / 16G", "6mm / 8mm"],
          ["Rook", "18G / 16G", "6mm"],
          ["Daith", "16G", "8mm / 10mm"],
          ["Forward Helix", "18G / 16G", "6mm"],
          ["Conch", "16G", "10mm / 12mm"],
          ["Tragus", "18G / 16G", "4mm / 6mm"],
        ],

        aftercareTitle: "Piercing Aftercare",

        aftercare: [
          {
            title: "Clean",
            text:
              "Wash your hands before touching your piercing. Use sterile saline solution or piercing aftercare spray twice daily.",
          },
          {
            title: "Dry",
            text:
              "Gently pat dry with a disposable paper towel. Avoid cloth towels.",
          },
          {
            title: "Avoid",
            text:
              "Avoid unnecessary touching or twisting of the jewelry.",
          },
          {
            title: "Swimming",
            text:
              "Avoid pools, hot tubs and lakes for the first 2–4 weeks.",
          },
        ],

        healingTitle: "Estimated Healing Times",

        healing: [
          ["Earlobe", "6–8 weeks"],
          ["Cartilage", "3–9 months"],
          ["Nostril", "3–6 months"],
          ["Septum", "6–8 weeks"],
          ["Navel", "6–12 months"],
          ["Eyebrow", "6–8 weeks"],
          ["Tongue", "4–8 weeks"],
        ],
      },

      skintone: {
        title: "Tattoo Colors & Skin Tone",
        description:
          "Understand how skin tone, contrast and undertones can affect tattoo colors.",

        heading: "Tattoo Colors Selection Guide Based On Skin Tone",

        intro:
          "Skin tone can affect how tattoo colors appear. Contrast, color choice and undertones are important when planning a tattoo.",

        darker: {
          title: "Darker Skin",
          subtitle: "Contrast is key",
          text:
            "Black, deep blues, dark reds and shades of green can work well. Bright colors such as yellows and oranges may be harder to see or may fade faster.",
        },

        medium: {
          title: "Medium Skin",
          subtitle: "Versatile",
          text:
            "Medium skin tones offer flexibility with color choices. A balanced combination of light and dark inks can create a striking design.",
        },

        lighter: {
          title: "Lighter Skin",
          subtitle: "Vibrant colors",
          text:
            "Lighter skin tends to display colors more vibrantly. Undertones and the potential for fading should still be considered.",
        },

        artistTitle: "Talk to your artist",

        artistText:
          "A skilled tattoo artist can assess your skin tone and recommend suitable colors and techniques. Consider whether your undertone is warm, cool or neutral.",
      },

      painchart: {
        title: "Tattoo Pain Chart",
        description:
          "Understand the different pain levels across common tattoo placement areas.",

        intro:
          "A visual guide to help you understand the different pain levels associated with common tattoo placement areas.",

        keepInMind: "Keep In Mind",

        note:
          "Pain tolerance varies from person to person. Stay hydrated, eat well, and take breaks when needed for the best tattoo experience.",
      },
    },

    booking: {
      label: "Book Your Session",
      title: "Let's Create Something Permanent.",
      personalDetails: "Personal Details",
      tattooDetails: "Tattoo Details",
      dateTime: "Select Date & Time",
      continueWhatsapp: "Continue To WhatsApp",
    },

    contact: {
      label: "Visit The Studio",
      title: "Let's Create",
      titleHighlight: "Something Permanent.",

      description:
        "Have an idea for your next tattoo? Visit Graffite Tattoo Studio or get in touch with us to discuss your design.",

      studio: "Studio",

      whatsapp: "WhatsApp",
      contactWhatsapp: "Contact us on WhatsApp",
      whatsappDescription: "For appointments and enquiries.",

      openingHours: "Opening Hours",
      mondaySunday: "Monday – Sunday",
      openingTime: "10:00 AM – 10:00 PM",

      instagram: "Instagram",

      bookAppointment: "Book An Appointment",

      callUs: "Call Us On",
      email: "Email",
      address: "Address",
      directions: "Get Directions",
    },

    reviews: {
      label: "Client Stories",
      title: "What Our Clients Say",
      rating: "4.9 / 5 · Google Reviews",
      verified: "Verified Google Review",
      viewAll: "View All Google Reviews",
    },

    common: {
      close: "Close",
      next: "Next",
      previous: "Previous",
    },
  },

  Hindi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      gallery: "गैलरी",
      instagram: "इंस्टाग्राम",
      guides: "गाइड",
      booking: "अपॉइंटमेंट बुक करें",
      contact: "संपर्क करें",
    },

    hero: {
      subtitle: "प्रीमियम टैटू स्टूडियो",
      title: "त्वचा पर कला।",
      titleHighlight: "आपकी कहानी।",
      description:
        "हर टैटू का एक अर्थ होता है। हम आपके विचारों को जुनून, सटीकता और रचनात्मकता के साथ खूबसूरत कला में बदलते हैं।",
      book: "अपॉइंटमेंट बुक करें",
      gallery: "गैलरी देखें",

      features: [
        "प्रोफेशनल कलाकार",
        "प्रीमियम हाइजीन",
        "कस्टम डिज़ाइन",
        "सुरक्षित और स्वच्छ",
      ],
    },

    about: {
      label: "स्टूडियो के बारे में",
      title: "जहाँ आपके विचार",
      titleHighlight: "कला बनते हैं।",

      description:
        "Graffite Tattoo Studio में हमारा मानना है कि टैटू सिर्फ त्वचा पर बनी स्याही नहीं है। यह आत्म-अभिव्यक्ति, एक याद, एक कहानी और आपकी अपनी पहचान है।",

      secondDescription:
        "हमारे कलाकार हर ग्राहक के साथ मिलकर उनकी कल्पना को समझते हैं और उसे एक ऐसे कस्टम टैटू में बदलते हैं जो उनकी व्यक्तित्व और स्टाइल को दर्शाता है।",

      customArtwork: "कस्टम आर्टवर्क",

      experiencedArtists: "अनुभवी कलाकार",
      experiencedArtistsText:
        "बारीकियों और रचनात्मकता पर ध्यान देने वाले कुशल कलाकार।",

      premiumHygiene: "प्रीमियम हाइजीन",
      premiumHygieneText:
        "हर ग्राहक के लिए साफ और प्रोफेशनल वातावरण।",

      customDesigns: "कस्टम डिज़ाइन",
      customDesignsText:
        "आपकी कल्पना के अनुसार विशेष रूप से तैयार किए गए डिज़ाइन।",

      clientFocused: "ग्राहक केंद्रित",
      clientFocusedText:
        "आपका विचार, आपकी कहानी, आपका टैटू।",

      startTattoo: "अपना टैटू शुरू करें",
    },

    gallery: {
      label: "हमारा पोर्टफोलियो",
      title: "हमारा काम खुद बोलता है",
      artwork: "टैटू आर्टवर्क",
      fullGallery: "पूरी गैलरी देखें",
    },

    instagram: {
      label: "हमारा काम देखें",
      title: "Graffite",
      titleHighlight: "इंस्टाग्राम पर",
      follow: "हमें फॉलो करें",
      viewPost: "पोस्ट देखें",
      unavailable: "फिलहाल Instagram पोस्ट उपलब्ध नहीं हैं।",
      visit: "Instagram देखें",
      newWork: "नया काम। नए विचार। नई कहानियाँ।",
    },

    guides: {
  label: "स्टूडियो गाइड",
  title: "वह सब जो आपको चाहिए",
  titleHighlight: "पहले और बाद में।",
  intro:
    "टैटू या पियर्सिंग के लिए तैयार होने और बाद में उसकी सही देखभाल करने के लिए हमारे स्टूडियो की उपयोगी जानकारी।",

      aftercare: {
        title: "टैटू आफ्टरकेयर",

        description:
          "नए टैटू के ठीक होने के दौरान उसकी सही देखभाल के लिए जरूरी जानकारी।",

        intro:
          "टैटू की सही देखभाल अच्छी हीलिंग और टैटू की गुणवत्ता बनाए रखने के लिए बहुत जरूरी है।",

        steps: [
          {
            number: "01",
            title: "रैप लगा रहने दें",
            text:
              "टैटू सेशन के बाद रैप को लगभग 1–2 घंटे तक लगा रहने दें।",
          },
          {
            number: "02",
            title: "टैटू को धीरे से साफ करें",
            text:
              "गुनगुने पानी और हल्के, खुशबू रहित साबुन से केवल अपने हाथों का उपयोग करके टैटू साफ करें। साफ तौलिये से हल्के हाथ से सुखाएं और रगड़ने से बचें।",
          },
          {
            number: "03",
            title: "डर्मलाइज़ रैप",
            text:
              "अगले दिन डर्मलाइज़ रैप लगाने के लिए स्टूडियो जाएं। स्टूडियो की सलाह के अनुसार इसे लगभग एक सप्ताह तक रखा जा सकता है।",
          },
          {
            number: "04",
            title: "खुजलाने से बचें",
            text:
              "हीलिंग के दौरान खुजली होना सामान्य हो सकता है। पपड़ी को न खुजलाएं और न ही हटाएं।",
          },
          {
            number: "05",
            title: "भिगोने से बचें",
            text:
              "पहले कुछ हफ्तों तक स्विमिंग, हॉट टब और लंबे समय तक पानी में रहने से बचें। सामान्य शॉवर लेना ठीक है।",
          },
          {
            number: "06",
            title: "अपने टैटू की सुरक्षा करें",
            text:
              "ढीले कपड़े पहनें और 2–3 हफ्तों तक सीधी धूप से बचें। टैटू ठीक होने के बाद फीका पड़ने से बचाने के लिए SPF 50 या उससे अधिक का उपयोग करें।",
          },
        ],

        warningTitle: "इन्फेक्शन के संकेतों पर ध्यान दें",

        warningText:
          "असामान्य लालिमा, सूजन, पस या अत्यधिक दर्द को गंभीरता से लें। तुरंत अपने टैटू आर्टिस्ट या किसी स्वास्थ्य विशेषज्ञ से संपर्क करें।",
      },

      piercing: {
        title: "पियर्सिंग गाइड",

        description:
          "पियर्सिंग के आकार, सफाई, हीलिंग टाइम और जरूरी आफ्टरकेयर की जानकारी।",

        sizeGuide: "हूप्स साइज गाइड",
        location: "स्थान",
        thickness: "मोटाई",
        length: "लंबाई",

        sizes: [
          ["लोब", "20G / 18G / 16G", "6mm / 8mm / 10mm"],
          ["हेलिक्स", "18G / 16G", "6mm / 8mm"],
          ["रूक", "18G / 16G", "6mm"],
          ["डेथ", "16G", "8mm / 10mm"],
          ["फॉरवर्ड हेलिक्स", "18G / 16G", "6mm"],
          ["कॉनच", "16G", "10mm / 12mm"],
          ["ट्रैगस", "18G / 16G", "4mm / 6mm"],
        ],

        aftercareTitle: "पियर्सिंग आफ्टरकेयर",

        aftercare: [
          {
            title: "साफ करें",
            text:
              "पियर्सिंग को छूने से पहले अपने हाथ धोएं। दिन में दो बार स्टेराइल सलाइन सॉल्यूशन या पियर्सिंग आफ्टरकेयर स्प्रे का उपयोग करें।",
          },
          {
            title: "सुखाएं",
            text:
              "डिस्पोजेबल पेपर टॉवल से हल्के हाथ से सुखाएं। कपड़े के तौलिये का उपयोग न करें।",
          },
          {
            title: "बचें",
            text:
              "पियर्सिंग या ज्वेलरी को बार-बार छूने या घुमाने से बचें।",
          },
          {
            title: "स्विमिंग",
            text:
              "पहले 2–4 हफ्तों तक स्विमिंग पूल, हॉट टब और झीलों से बचें।",
          },
        ],

        healingTitle: "अनुमानित हीलिंग समय",

        healing: [
          ["ईयरलोब", "6–8 सप्ताह"],
          ["कार्टिलेज", "3–9 महीने"],
          ["नॉस्ट्रिल", "3–6 महीने"],
          ["सेप्टम", "6–8 सप्ताह"],
          ["नेवल", "6–12 महीने"],
          ["आइब्रो", "6–8 सप्ताह"],
          ["टंग", "4–8 सप्ताह"],
        ],
      },

      skintone: {
        title: "टैटू कलर और स्किन टोन",

        description:
          "समझें कि स्किन टोन, कॉन्ट्रास्ट और अंडरटोन टैटू के रंगों को कैसे प्रभावित कर सकते हैं।",

        heading:
          "स्किन टोन के आधार पर टैटू कलर चुनने की गाइड",

        intro:
          "स्किन टोन इस बात को प्रभावित कर सकता है कि टैटू के रंग कैसे दिखाई देते हैं। टैटू की योजना बनाते समय कॉन्ट्रास्ट, रंगों का चुनाव और अंडरटोन महत्वपूर्ण होते हैं।",

        darker: {
          title: "गहरी त्वचा",
          subtitle: "कॉन्ट्रास्ट महत्वपूर्ण है",
          text:
            "काला, गहरा नीला, गहरा लाल और हरे रंग के शेड्स अच्छे दिख सकते हैं। पीले और नारंगी जैसे चमकीले रंग कम दिखाई दे सकते हैं या जल्दी फीके पड़ सकते हैं।",
        },

        medium: {
          title: "मध्यम त्वचा",
          subtitle: "बहुमुखी विकल्प",
          text:
            "मध्यम स्किन टोन पर रंगों के कई विकल्प अच्छे काम कर सकते हैं। हल्के और गहरे रंगों का संतुलित संयोजन आकर्षक डिज़ाइन बना सकता है।",
        },

        lighter: {
          title: "हल्की त्वचा",
          subtitle: "चमकदार रंग",
          text:
            "हल्की त्वचा पर रंग आमतौर पर अधिक चमकदार दिखाई देते हैं। फिर भी अंडरटोन और रंगों के फीके पड़ने की संभावना पर विचार करना चाहिए।",
        },

        artistTitle: "अपने आर्टिस्ट से बात करें",

        artistText:
          "एक कुशल टैटू आर्टिस्ट आपकी स्किन टोन देखकर सही रंग और तकनीक की सलाह दे सकता है। यह भी ध्यान रखें कि आपका अंडरटोन वार्म, कूल या न्यूट्रल है।",
      },

      painchart: {
        title: "टैटू पेन चार्ट",

        description:
          "शरीर के अलग-अलग हिस्सों पर टैटू बनवाने के दर्द के स्तर को समझें।",

        intro:
          "यह विज़ुअल गाइड आपको शरीर के सामान्य टैटू प्लेसमेंट एरिया में दर्द के अलग-अलग स्तरों को समझने में मदद करेगी।",

        keepInMind: "ध्यान रखें",

        note:
          "दर्द सहने की क्षमता हर व्यक्ति में अलग होती है। पर्याप्त पानी पिएं, अच्छी तरह खाना खाएं और जरूरत पड़ने पर ब्रेक लें ताकि टैटू का अनुभव बेहतर रहे।",
      },
    },

    booking: {
      label: "अपना सेशन बुक करें",
      title: "आइए कुछ खास और स्थायी बनाएं।",
      personalDetails: "व्यक्तिगत जानकारी",
      tattooDetails: "टैटू की जानकारी",
      dateTime: "तारीख और समय चुनें",
      continueWhatsapp: "WhatsApp पर जारी रखें",
    },

    contact: {
      label: "स्टूडियो आएं",
      title: "आइए बनाएं",
      titleHighlight: "कुछ खास और स्थायी।",

      description:
        "अपने अगले टैटू के लिए कोई आइडिया है? Graffite Tattoo Studio आएं या अपने डिज़ाइन पर चर्चा करने के लिए हमसे संपर्क करें।",

      studio: "स्टूडियो",

      whatsapp: "व्हाट्सऐप",
      contactWhatsapp: "WhatsApp पर संपर्क करें",
      whatsappDescription: "अपॉइंटमेंट और जानकारी के लिए।",

      openingHours: "खुलने का समय",
      mondaySunday: "सोमवार – रविवार",
      openingTime: "सुबह 10:00 – रात 10:00",

      instagram: "इंस्टाग्राम",

      bookAppointment: "अपॉइंटमेंट बुक करें",

      callUs: "हमें कॉल करें",
      email: "ईमेल",
      address: "पता",
      directions: "दिशा देखें",
    },

    reviews: {
      label: "क्लाइंट अनुभव",
      title: "हमारे क्लाइंट क्या कहते हैं",
      rating: "4.9 / 5 · Google Reviews",
      verified: "वेरिफाइड Google Review",
      viewAll: "सभी Google Reviews देखें",
    },

    common: {
      close: "बंद करें",
      next: "आगे",
      previous: "पिछला",
    },
  },

  Marathi: {
    nav: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      gallery: "गॅलरी",
      instagram: "इंस्टाग्राम",
      guides: "गाइड",
      booking: "अपॉइंटमेंट बुक करा",
      contact: "संपर्क",
    },

    hero: {
      subtitle: "प्रीमियम टॅटू स्टुडिओ",
      title: "त्वचेवरची कला.",
      titleHighlight: "तुमची गोष्ट.",
      description:
        "प्रत्येक टॅटूला एक अर्थ असतो. आम्ही तुमच्या कल्पनांना आवड, अचूकता आणि सर्जनशीलतेसह अर्थपूर्ण कलेत बदलतो.",
      book: "अपॉइंटमेंट बुक करा",
      gallery: "गॅलरी पहा",

      features: [
        "प्रोफेशनल कलाकार",
        "प्रीमियम स्वच्छता",
        "कस्टम डिझाइन्स",
        "सुरक्षित आणि स्वच्छ",
      ],
    },

    about: {
      label: "स्टुडिओबद्दल",
      title: "जिथे तुमच्या कल्पना",
      titleHighlight: "कलेत बदलतात.",

      description:
        "Graffite Tattoo Studio मध्ये आमचा विश्वास आहे की टॅटू म्हणजे फक्त त्वचेवरील शाई नाही. ती आत्मअभिव्यक्ती, एक आठवण, एक गोष्ट आणि तुमची खास ओळख आहे.",

      secondDescription:
        "आमचे कलाकार प्रत्येक क्लायंटसोबत जवळून काम करून त्यांची कल्पना समजून घेतात आणि त्यांच्या व्यक्तिमत्त्वाला व स्टाइलला साजेसा खास टॅटू तयार करतात.",

      customArtwork: "कस्टम आर्टवर्क",

      experiencedArtists: "अनुभवी कलाकार",
      experiencedArtistsText:
        "बारीकसारीक तपशील आणि सर्जनशीलतेवर लक्ष देणारे कुशल कलाकार.",

      premiumHygiene: "प्रीमियम स्वच्छता",
      premiumHygieneText:
        "प्रत्येक क्लायंटसाठी स्वच्छ आणि प्रोफेशनल वातावरण.",

      customDesigns: "कस्टम डिझाइन्स",
      customDesignsText:
        "तुमच्या कल्पनेनुसार खास तयार केलेले डिझाइन्स.",

      clientFocused: "क्लायंट-केंद्रित",
      clientFocusedText:
        "तुमची कल्पना, तुमची गोष्ट, तुमचा टॅटू.",

      startTattoo: "तुमचा टॅटू सुरू करा",
    },

    gallery: {
      label: "आमचे पोर्टफोलिओ",
      title: "आमचे कामच आमची ओळख आहे",
      artwork: "टॅटू आर्टवर्क",
      fullGallery: "संपूर्ण गॅलरी पहा",
    },

    instagram: {
      label: "आमचे काम पहा",
      title: "Graffite",
      titleHighlight: "इंस्टाग्रामवर",
      follow: "आम्हाला फॉलो करा",
      viewPost: "पोस्ट पहा",
      unavailable: "सध्या Instagram पोस्ट उपलब्ध नाहीत.",
      visit: "Instagram पहा",
      newWork: "नवीन काम. नवीन कल्पना. नवीन कथा.",
    },

    guides: {
      label: "स्टुडिओ गाइड",
      title: "तुम्हाला हवे असलेले सर्व काही",
      titleHighlight: "आधी आणि नंतर.",

      intro:
        "टॅटू किंवा पिअर्सिंगसाठी तयारी करण्यासाठी आणि नंतर त्याची योग्य काळजी घेण्यासाठी आमच्या स्टुडिओकडून उपयुक्त माहिती.",

      aftercare: {
        title: "टॅटू आफ्टरकेअर",

        description:
          "नवीन टॅटू भरून येत असताना त्याची योग्य काळजी घेण्यासाठी आवश्यक माहिती.",

        intro:
          "टॅटू योग्य प्रकारे भरून येण्यासाठी आणि त्याची गुणवत्ता टिकवण्यासाठी योग्य आफ्टरकेअर अत्यंत महत्त्वाचे आहे.",

        steps: [
          {
            number: "01",
            title: "रॅप तसाच ठेवा",
            text:
              "टॅटू सेशननंतर रॅप साधारण 1–2 तास तसाच ठेवा.",
          },
          {
            number: "02",
            title: "टॅटू हळुवारपणे स्वच्छ करा",
            text:
              "कोमट पाणी आणि सौम्य, सुगंध नसलेल्या साबणाने फक्त हातांचा वापर करून टॅटू स्वच्छ करा. स्वच्छ टॉवेलने हलकेच पुसून कोरडे करा आणि घासू नका.",
          },
          {
            number: "03",
            title: "डर्मलाइझ रॅप",
            text:
              "पुढच्या दिवशी डर्मलाइझ रॅप लावण्यासाठी स्टुडिओला भेट द्या. स्टुडिओच्या मार्गदर्शनानुसार तो साधारण एक आठवडा ठेवता येतो.",
          },
          {
            number: "04",
            title: "खाजवणे टाळा",
            text:
              "टॅटू भरून येताना खाज येणे सामान्य असू शकते. खाजवू नका किंवा खरूज काढू नका.",
          },
          {
            number: "05",
            title: "पाण्यात भिजणे टाळा",
            text:
              "पहिल्या काही आठवड्यांत पोहणे, हॉट टब किंवा बाथमध्ये जास्त वेळ भिजणे टाळा. सामान्य शॉवर घेणे ठीक आहे.",
          },
          {
            number: "06",
            title: "टॅटूचे संरक्षण करा",
            text:
              "सैल कपडे घाला आणि 2–3 आठवडे थेट सूर्यप्रकाश कमी करा. टॅटू भरून आल्यानंतर फिकट होण्यापासून संरक्षणासाठी SPF 50 किंवा त्याहून अधिक वापरा.",
          },
        ],

        warningTitle: "इन्फेक्शनच्या लक्षणांकडे लक्ष द्या",

        warningText:
          "असामान्य लालसरपणा, सूज, पू किंवा जास्त वेदना याकडे गंभीरपणे लक्ष द्या. त्वरित तुमच्या टॅटू आर्टिस्ट किंवा आरोग्य तज्ज्ञांशी संपर्क साधा.",
      },

      piercing: {
        title: "पिअर्सिंग गाइड",

        description:
          "पिअर्सिंगचे आकार, स्वच्छता, बरे होण्याचा कालावधी आणि आवश्यक आफ्टरकेअरची माहिती.",

        sizeGuide: "हूप्स साइज गाइड",
        location: "ठिकाण",
        thickness: "जाडी",
        length: "लांबी",

        sizes: [
          ["इअर लोब", "20G / 18G / 16G", "6mm / 8mm / 10mm"],
          ["हेलिक्स", "18G / 16G", "6mm / 8mm"],
          ["रूक", "18G / 16G", "6mm"],
          ["डेथ", "16G", "8mm / 10mm"],
          ["फॉरवर्ड हेलिक्स", "18G / 16G", "6mm"],
          ["कॉन्च", "16G", "10mm / 12mm"],
          ["ट्रॅगस", "18G / 16G", "4mm / 6mm"],
        ],

        aftercareTitle: "पिअर्सिंग आफ्टरकेअर",

        aftercare: [
          {
            title: "स्वच्छ करा",
            text:
              "पिअर्सिंगला हात लावण्यापूर्वी हात स्वच्छ धुवा. दिवसातून दोनदा स्टेराइल सलाईन सोल्यूशन किंवा पिअर्सिंग आफ्टरकेअर स्प्रे वापरा.",
          },
          {
            title: "कोरडे करा",
            text:
              "डिस्पोजेबल पेपर टॉवेलने हलकेच कोरडे करा. कापडी टॉवेल वापरणे टाळा.",
          },
          {
            title: "टाळा",
            text:
              "पिअर्सिंग किंवा ज्वेलरीला विनाकारण हात लावणे किंवा फिरवणे टाळा.",
          },
          {
            title: "पोहणे",
            text:
              "पहिल्या 2–4 आठवड्यांसाठी स्विमिंग पूल, हॉट टब आणि तलाव टाळा.",
          },
        ],

        healingTitle: "अंदाजे बरे होण्याचा कालावधी",

        healing: [
          ["इअर लोब", "6–8 आठवडे"],
          ["कार्टिलेज", "3–9 महिने"],
          ["नॉस्ट्रिल", "3–6 महिने"],
          ["सेप्टम", "6–8 आठवडे"],
          ["नेव्हल", "6–12 महिने"],
          ["आयब्रो", "6–8 आठवडे"],
          ["टंग", "4–8 आठवडे"],
        ],
      },

      skintone: {
        title: "टॅटूचे रंग आणि स्किन टोन",

        description:
          "स्किन टोन, कॉन्ट्रास्ट आणि अंडरटोनचा टॅटूच्या रंगांवर होणारा परिणाम समजून घ्या.",

        heading:
          "स्किन टोननुसार टॅटूचे रंग निवडण्यासाठी मार्गदर्शक",

        intro:
          "स्किन टोनमुळे टॅटूचे रंग कसे दिसतात यावर परिणाम होऊ शकतो. टॅटूचे नियोजन करताना कॉन्ट्रास्ट, रंगांची निवड आणि अंडरटोन महत्त्वाचे असतात.",

        darker: {
          title: "गडद त्वचा",
          subtitle: "कॉन्ट्रास्ट महत्त्वाचा आहे",
          text:
            "काळा, गडद निळा, गडद लाल आणि हिरव्या रंगाच्या छटा चांगल्या दिसू शकतात. पिवळा आणि नारिंगीसारखे चमकदार रंग कमी दिसू शकतात किंवा लवकर फिकट होऊ शकतात.",
        },

        medium: {
          title: "मध्यम त्वचा",
          subtitle: "बहुपयोगी",
          text:
            "मध्यम स्किन टोनवर अनेक रंग चांगले दिसू शकतात. हलक्या आणि गडद शाईचा संतुलित वापर आकर्षक डिझाइन तयार करू शकतो.",
        },

        lighter: {
          title: "फिकट त्वचा",
          subtitle: "चमकदार रंग",
          text:
            "फिकट त्वचेवर रंग सामान्यतः अधिक उठून दिसतात. तरीही अंडरटोन आणि रंग फिकट होण्याची शक्यता विचारात घ्यावी.",
        },

        artistTitle: "तुमच्या आर्टिस्टशी बोला",

        artistText:
          "एक कुशल टॅटू आर्टिस्ट तुमचा स्किन टोन पाहून योग्य रंग आणि तंत्राची शिफारस करू शकतो. तुमचा अंडरटोन वॉर्म, कूल किंवा न्यूट्रल आहे का हे देखील विचारात घ्या.",
      },

      painchart: {
        title: "टॅटू पेन चार्ट",

        description:
          "शरीराच्या वेगवेगळ्या भागांवर टॅटू काढताना होणाऱ्या वेदनांची पातळी समजून घ्या.",

        intro:
          "हा व्हिज्युअल गाइड शरीरावरील सामान्य टॅटू प्लेसमेंट भागांमध्ये होणाऱ्या वेदनांच्या वेगवेगळ्या पातळी समजून घेण्यास मदत करेल.",

        keepInMind: "लक्षात ठेवा",

        note:
          "वेदना सहन करण्याची क्षमता प्रत्येक व्यक्तीनुसार वेगळी असते. पुरेसे पाणी प्या, चांगले खा आणि गरजेनुसार ब्रेक घ्या जेणेकरून टॅटूचा अनुभव अधिक चांगला राहील.",
      },
    },

    booking: {
      label: "तुमचे सेशन बुक करा",
      title: "चला काहीतरी कायमस्वरूपी आणि खास तयार करूया.",
      personalDetails: "वैयक्तिक माहिती",
      tattooDetails: "टॅटूची माहिती",
      dateTime: "तारीख आणि वेळ निवडा",
      continueWhatsapp: "WhatsApp वर पुढे जा",
    },

    contact: {
      label: "स्टुडिओला भेट द्या",
      title: "चला तयार करूया",
      titleHighlight: "काहीतरी कायमस्वरूपी.",

      description:
        "तुमच्या पुढील टॅटूसाठी काही कल्पना आहे का? Graffite Tattoo Studio ला भेट द्या किंवा तुमच्या डिझाइनबद्दल चर्चा करण्यासाठी आमच्याशी संपर्क साधा.",

      studio: "स्टुडिओ",

      whatsapp: "व्हॉट्सअॅप",
      contactWhatsapp: "WhatsApp वर संपर्क करा",
      whatsappDescription: "अपॉइंटमेंट आणि चौकशीसाठी.",

      openingHours: "उघडण्याची वेळ",
      mondaySunday: "सोमवार – रविवार",
      openingTime: "सकाळी 10:00 – रात्री 10:00",

      instagram: "इंस्टाग्राम",

      bookAppointment: "अपॉइंटमेंट बुक करा",

      callUs: "आम्हाला कॉल करा",
      email: "ईमेल",
      address: "पत्ता",
      directions: "दिशा पहा",
    },

    reviews: {
      label: "क्लायंट अनुभव",
      title: "आमचे क्लायंट काय म्हणतात",
      rating: "4.9 / 5 · Google Reviews",
      verified: "व्हेरिफाइड Google Review",
      viewAll: "सर्व Google Reviews पहा",
    },

    common: {
      close: "बंद करा",
      next: "पुढे",
      previous: "मागे",
    },
  },
};

export default translations;