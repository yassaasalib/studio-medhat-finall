import { PhotoService } from '../../types/services.interface';

export const servicesData: PhotoService[] = [
  {
    id: 1,
    name: "services.categories.family.title",
    description: "services.categories.family.description",
    extendedDescription: "services.categories.family.extendedDescription",
    duration: "2-3 hours",
    basePrice: 500,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1728136340.jpg",
    inclusions: [
      "Multiple family poses",
      "Indoor and outdoor shots",
      "Professional editing",
      "Digital image gallery",
      "Print release"
    ],
    addOns: [
      {
        name: "Additional Hour",
        price: 150,
        description: "Extra shooting time"
      },
      {
        name: "Premium Photo Album",
        price: 200,
        description: "High-quality family album"
      }
    ],
    studioDetails: {
      hours: "1:00 PM - 10:00 PM (Closed Wednesdays)",
      location: "88 El Hegaz Street, Airport, El Nozha District, Cairo",
      policies: [
        "Personal photography not permitted in studio",
        "Rescheduling available with 48-hour notice",
        "50% deposit required for booking"
      ],
      notes: [
        "Additional prints available for purchase",
        "Complimentary consultation included",
        "Indoor and outdoor locations available"
      ]
    },
    promotions: [
      "✨ Limited time offer: Complimentary mini album with any package booking ✨",
      "Book now and receive a 20% discount on your next session"
    ]
  },
  {
    id: 2,
    name: "services.categories.adultBirthday.title",
    description: "services.categories.adultBirthday.description",
    extendedDescription: "services.categories.adultBirthday.extendedDescription",
    duration: "3-4 hours",
    basePrice: 400,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1728048492.jpg",
    inclusions: [
      "Event coverage",
      "Candid shots",
      "Group photos",
      "Digital delivery",
      "Basic editing"
    ],
    addOns: [
      {
        name: "Photo Booth Setup",
        price: 200,
        description: "With props and backdrop"
      }
    ],
    studioDetails: {
      hours: "1:00 PM - 10:00 PM (Closed Wednesdays)",
      location: "88 El Hegaz Street, Airport, El Nozha District, Cairo",
      policies: [
        "Event location visit required for venues",
        "Backup equipment provided",
        "Additional hours available"
      ],
      notes: [
        "Same-day preview available",
        "Custom backdrop options",
        "Professional lighting included"
      ]
    },
    promotions: [
      "✨ Book now and receive a complimentary photo booth session ✨"
    ]
  },
  {
    id: 3,
    name: "services.categories.childrenBirthday.title",
    description: "services.categories.childrenBirthday.description",
    extendedDescription: "services.categories.childrenBirthday.extendedDescription",
    duration: "2-3 hours",
    basePrice: 350,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1727981754.jpg",
    inclusions: [
      "Party coverage",
      "Candid moments",
      "Group photos",
      "Digital gallery",
      "Basic editing"
    ],
    addOns: [
      {
        name: "Theme-based Props",
        price: 100,
        description: "Custom party props"
      }
    ],
    studioDetails: {
      hours: "1:00 PM - 10:00 PM (Closed Wednesdays)",
      location: "88 El Hegaz Street, Airport, El Nozha District, Cairo",
      policies: [
        "Child-friendly environment",
        "Parents must be present",
        "Safe equipment handling"
      ],
      notes: [
        "Themed backdrops available",
        "Child-friendly photographer",
        "Quick turnaround time"
      ]
    },
    promotions: [
      "✨ Free themed props with any package booking ✨"
    ]
  },
  {
    id: 4,
    name: "services.categories.maternity.title",
    description: "services.categories.maternity.description",
    extendedDescription: "services.categories.maternity.extendedDescription",
    duration: "1-2 hours",
    basePrice: 450,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1727979335.jpg",
    inclusions: [
      "Multiple poses",
      "Outfit changes",
      "Professional editing",
      "Digital delivery",
      "Print release"
    ],
    addOns: [
      {
        name: "Hair and Makeup",
        price: 150,
        description: "Professional styling"
      }
    ],
    studioDetails: {
      hours: "1:00 PM - 10:00 PM (Closed Wednesdays)",
      location: "88 El Hegaz Street, Airport, El Nozha District, Cairo",
      policies: [
        "Maternity gowns available",
        "Partner/family welcome",
        "Comfort-focused session"
      ],
      notes: [
        "Best between 28-34 weeks",
        "Styling consultation included",
        "Indoor and outdoor options"
      ]
    },
    promotions: [
      "✨ Complimentary mini album with premium package booking ✨"
    ]
  },
  {
    id: 5,
    name: "services.categories.fashion.title",
    description: "services.categories.fashion.description",
    extendedDescription: "services.categories.fashion.extendedDescription",
    duration: "3-4 hours",
    basePrice: 800,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1728143380.jpg",
    inclusions: [
      "Studio setup",
      "Multiple looks",
      "Professional editing",
      "Commercial rights",
      "Digital delivery"
    ],
    addOns: [
      {
        name: "Stylist Services",
        price: 300,
        description: "Professional styling"
      }
    ],
    studioDetails: {
      hours: "1:00 PM - 10:00 PM (Closed Wednesdays)",
      location: "88 El Hegaz Street, Airport, El Nozha District, Cairo",
      policies: [
        "Professional makeup required",
        "Model release needed",
        "Commercial licensing available"
      ],
      notes: [
        "High-end equipment used",
        "Multiple backdrop options",
        "Professional lighting setup"
      ]
    },
    promotions: [
      "✨ 20% off for first-time clients ✨"
    ]
  }
];