import { PhotoService } from '../../types/services.interface';

export const servicesData: PhotoService[] = [
  {
    id: 1,
    name: "services.categories.family.title",
    description: "services.categories.family.description",
    extendedDescription: "services.categories.family.extendedDescription",
    duration: "2-3 ساعات",
    basePrice: 500,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1728136340.jpg",
    inclusions: [
      "وضعيات عائلية متعددة",
      "تصوير داخلي وخارجي",
      "تعديل احترافي",
      "معرض صور رقمي",
      "تصريح للطباعة"
    ],
    addOns: [
      {
        name: "ساعة إضافية",
        price: 150,
        description: "وقت تصوير إضافي"
      },
      {
        name: "ألبوم صور فاخر",
        price: 200,
        description: "ألبوم عائلي عالي الجودة"
      }
    ],
    studioDetails: {
      hours: "1:00 مساءً - 10:00 مساءً (مغلق أيام الأربعاء)",
      location: "88 شارع الحجاز، مطار القاهرة، حي النزهة، القاهرة",
      policies: [
        "التصوير الشخصي غير مسموح به في الاستوديو",
        "إعادة الجدولة متاحة بإشعار قبل 48 ساعة",
        "مطلوب دفع 50% كعربون للحجز"
      ],
      notes: [
        "طباعات إضافية متاحة للشراء",
        "استشارة مجانية مشمولة",
        "مواقع داخلية وخارجية متاحة"
      ]
    },
    promotions: [
      "✨ عرض لفترة محدودة: ألبوم صغير مجاني مع أي حجز للباقة ✨",
      "احجز الآن واحصل على خصم 20% على جلستك القادمة"
    ]
  },
  {
    id: 2,
    name: "services.categories.adultBirthday.title",
    description: "services.categories.adultBirthday.description",
    extendedDescription: "services.categories.adultBirthday.extendedDescription",
    duration: "3-4 ساعات",
    basePrice: 400,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1728048492.jpg",
    inclusions: [
      "تغطية الحدث",
      "لقطات عفوية",
      "صور جماعية",
      "تسليم رقمي",
      "تعديل أساسي"
    ],
    addOns: [
      {
        name: "تجهيز ركن التصوير",
        price: 200,
        description: "مع إكسسوارات وخلفية"
      }
    ],
    studioDetails: {
      hours: "1:00 مساءً - 10:00 مساءً (مغلق أيام الأربعاء)",
      location: "88 شارع الحجاز، مطار القاهرة، حي النزهة، القاهرة",
      policies: [
        "زيارة موقع الحدث مطلوبة للأماكن الخارجية",
        "توفير معدات احتياطية",
        "ساعات إضافية متاحة"
      ],
      notes: [
        "معاينة في نفس اليوم متاحة",
        "خيارات خلفيات مخصصة",
        "إضاءة احترافية مشمولة"
      ]
    },
    promotions: [
      "✨ احجز الآن واحصل على جلسة ركن تصوير مجانية ✨"
    ]
  },
  {
    id: 3,
    name: "services.categories.childrenBirthday.title",
    description: "services.categories.childrenBirthday.description",
    extendedDescription: "services.categories.childrenBirthday.extendedDescription",
    duration: "2-3 ساعات",
    basePrice: 350,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1727981754.jpg",
    inclusions: [
      "تغطية الحفلة",
      "لحظات عفوية",
      "صور جماعية",
      "معرض رقمي",
      "تعديل أساسي"
    ],
    addOns: [
      {
        name: "إكسسوارات حسب الثيم",
        price: 100,
        description: "إكسسوارات حفلة مخصصة"
      }
    ],
    studioDetails: {
      hours: "1:00 مساءً - 10:00 مساءً (مغلق أيام الأربعاء)",
      location: "88 شارع الحجاز، مطار القاهرة، حي النزهة، القاهرة",
      policies: [
        "بيئة مناسبة للأطفال",
        "يجب تواجد الوالدين",
        "تعامل آمن مع المعدات"
      ],
      notes: [
        "خلفيات حسب الثيم متاحة",
        "مصور متخصص مع الأطفال",
        "سرعة في تسليم الصور"
      ]
    },
    promotions: [
      "✨ إكسسوارات مجانية حسب الثيم مع أي حجز للباقة ✨"
    ]
  },
  {
    id: 4,
    name: "services.categories.maternity.title",
    description: "services.categories.maternity.description",
    extendedDescription: "services.categories.maternity.extendedDescription",
    duration: "1-2 ساعات",
    basePrice: 450,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1727979335.jpg",
    inclusions: [
      "وضعيات متعددة",
      "تغيير الملابس",
      "تعديل احترافي",
      "تسليم رقمي",
      "تصريح للطباعة"
    ],
    addOns: [
      {
        name: "مكياج وتصفيف شعر",
        price: 150,
        description: "تجهيز احترافي"
      }
    ],
    studioDetails: {
      hours: "1:00 مساءً - 10:00 مساءً (مغلق أيام الأربعاء)",
      location: "88 شارع الحجاز، مطار القاهرة، حي النزهة، القاهرة",
      policies: [
        "فساتين حمل متاحة",
        "الشريك/العائلة مرحب بهم",
        "جلسة تركز على الراحة"
      ],
      notes: [
        "أفضل بين الأسبوع 28-34",
        "استشارة تنسيق مشمولة",
        "خيارات داخلية وخارجية"
      ]
    },
    promotions: [
      "✨ ألبوم صغير مجاني مع حجز الباقة المميزة ✨"
    ]
  },
  {
    id: 5,
    name: "services.categories.fashion.title",
    description: "services.categories.fashion.description",
    extendedDescription: "services.categories.fashion.extendedDescription",
    duration: "3-4 ساعات",
    basePrice: 800,
    imageUrl: "https://studiomedhat.com/uploads/image/image_1728143380.jpg",
    inclusions: [
      "تجهيز الاستوديو",
      "إطلالات متعددة",
      "تعديل احترافي",
      "حقوق تجارية",
      "تسليم رقمي"
    ],
    addOns: [
      {
        name: "خدمات تنسيق الملابس",
        price: 300,
        description: "تنسيق احترافي"
      }
    ],
    studioDetails: {
      hours: "1:00 مساءً - 10:00 مساءً (مغلق أيام الأربعاء)",
      location: "88 شارع الحجاز، مطار القاهرة، حي النزهة، القاهرة",
      policies: [
        "مكياج احترافي مطلوب",
        "مطلوب تصريح العارض/ة",
        "ترخيص تجاري متاح"
      ],
      notes: [
        "استخدام معدات عالية الجودة",
        "خيارات خلفيات متعددة",
        "إعداد إضاءة احترافي"
      ]
    },
    promotions: [
      "✨ خصم 20% للعملاء الجدد ✨"
    ]
  }
];