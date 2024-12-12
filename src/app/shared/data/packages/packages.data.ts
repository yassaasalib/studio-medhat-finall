import { PackageGroup } from '../../types/package.interface';

export const packagesData: PackageGroup[] = [
  {
    serviceId: 1, // Family Photography
    packages: [
      {
        name: "PREMIUM",
        price: 2500,
        featureKeys: [
          "packages.features.family.digitalPhotos30",
          "packages.features.family.twoHourSession",
          "packages.features.family.twoOutfitChanges",
        ],
        isPopular: true
      },
      {
        name: "DELUXE",
        price: 1800,
        featureKeys: [
          "packages.features.family.digitalPhotos25",
          "packages.features.family.oneAndHalfHourSession",
          "packages.features.family.oneOutfitChange",
        ]
      },
      {
        name: "CLASSIC",
        price: 1200,
        featureKeys: [
          "packages.features.family.digitalPhotos20",
          "packages.features.family.oneHourSession",
        ]
      },
      {
        name: "ESSENTIAL",
        price: 900,
        featureKeys: [
          "packages.features.family.digitalPhotos15",
          "packages.features.family.fortyFiveMinuteSession",
        ]
      },
      {
        name: "BASIC",
        price: 600,
        featureKeys: [
          "packages.features.family.digitalPhotos10",
          "packages.features.family.thirtyMinuteSession",
        ]
      }
    ]
  },
  {
    serviceId: 2, // Adult Birthday Photography
    packages: [
      {
        name: "PREMIUM",
        price: 2000,
        featureKeys: [
          "packages.features.adultBirthday.digitalPhotos200",
          "packages.features.adultBirthday.photoBooth",
          "packages.features.adultBirthday.printedAlbum",
          "packages.features.adultBirthday.sameDayPreview"
        ],
        isPopular: true
      },
      {
        name: "DELUXE",
        price: 1500,
        featureKeys: [
          "packages.features.adultBirthday.digitalPhotos150",
          "packages.features.adultBirthday.photoBooth",
          "packages.features.adultBirthday.nextDayPreview"
        ]
      },
      {
        name: "CLASSIC",
        price: 1000,
        featureKeys: [
          "packages.features.adultBirthday.digitalPhotos100",
          "packages.features.adultBirthday.twoHourCoverage",
        ]
      },
      {
        name: "ESSENTIAL",
        price: 800,
        featureKeys: [
          "packages.features.adultBirthday.digitalPhotos75",
          "packages.features.adultBirthday.oneAndHalfHourCoverage",
        ]
      },
      {
        name: "BASIC",
        price: 500,
        featureKeys: [
          "packages.features.adultBirthday.digitalPhotos50",
          "packages.features.adultBirthday.oneAndHalfHourCoverage",
          "packages.features.adultBirthday.oneAndHalfHourCoverage",
        ]
      }
    ]
  },
  {
    serviceId: 3, // Children's Birthday Photography
    packages: [
      {
        name: "PREMIUM",
        price: 1800,
        featureKeys: [
          "packages.features.childBirthday.digitalPhotos150",
          "packages.features.childBirthday.threeHourCoverage",
          "packages.features.childBirthday.decorations",
          "packages.features.childBirthday.smallAlbum",
          "packages.features.childBirthday.sameDayPreview"
        ],
        isPopular: true
      },
      {
        name: "DELUXE",
        price: 1400,
        featureKeys: [
          "packages.features.childBirthday.digitalPhotos120",
          "packages.features.childBirthday.twoAndHalfHourCoverage",
          "packages.features.childBirthday.decorations",
          "packages.features.childBirthday.onlineGallery"
        ]
      },
      {
        name: "CLASSIC",
        price: 1000,
        featureKeys: [
          "packages.features.childBirthday.digitalPhotos90",
          "packages.features.childBirthday.twoHourCoverage",
          "packages.features.childBirthday.basicDecorations",
          "packages.features.childBirthday.onlineGallery"
        ]
      },
      {
        name: "ESSENTIAL",
        price: 800,
        featureKeys: [
          "packages.features.childBirthday.digitalPhotos60",
          "packages.features.childBirthday.oneAndHalfHourCoverage",
          "packages.features.childBirthday.onlineGallery"
        ]
      },
      {
        name: "BASIC",
        price: 500,
        featureKeys: [
          "packages.features.childBirthday.digitalPhotos40",
          "packages.features.childBirthday.oneHourCoverage",
          "packages.features.childBirthday.onlineGallery"
        ]
      }
    ]
  },
  {
    serviceId: 4, // Maternity Photography
    packages: [
      {
        name: "PREMIUM",
        price: 2200,
        featureKeys: [
          "packages.features.maternity.digitalPhotos25",
          "packages.features.maternity.twoHourSession",
          "packages.features.maternity.makeupAndHair",
        ],
        isPopular: true
      },
      {
        name: "DELUXE",
        price: 1800,
        featureKeys: [
          "packages.features.maternity.digitalPhotos20",
          "packages.features.maternity.oneAndHalfHourSession",
        ]
      },
      {
        name: "CLASSIC",
        price: 1400,
        featureKeys: [
          "packages.features.maternity.digitalPhotos15",
          "packages.features.maternity.oneHourSession",
        ]
      },
      {
        name: "ESSENTIAL",
        price: 1000,
        featureKeys: [
          "packages.features.maternity.digitalPhotos10",
          "packages.features.maternity.fortyFiveMinuteSession",
        ]
      },
      {
        name: "BASIC",
        price: 800,
        featureKeys: [
          "packages.features.maternity.digitalPhotos8",
          "packages.features.maternity.thirtyMinuteSession",
        ]
      }
    ]
  },
  {
    serviceId: 5, // Fashion Photography
    packages: [
      {
        name: "PREMIUM",
        price: 3500,
        featureKeys: [
          "packages.features.fashion.digitalPhotos40",
          "packages.features.fashion.fourHourSession",
        ],
        isPopular: true
      },
      {
        name: "DELUXE",
        price: 2800,
        featureKeys: [
          "packages.features.fashion.digitalPhotos30",
          "packages.features.fashion.threeHourSession",
        ]
      },
      {
        name: "CLASSIC",
        price: 2200,
        featureKeys: [
          "packages.features.fashion.digitalPhotos25",
          "packages.features.fashion.twoHourSession",
          "packages.features.fashion.commercialRights"
        ]
      },
      {
        name: "ESSENTIAL",
        price: 1800,
        featureKeys: [
          "packages.features.fashion.digitalPhotos20",
          "packages.features.fashion.oneAndHalfHourSession",
          "packages.features.fashion.commercialRights"
        ]
      },
      {
        name: "BASIC",
        price: 1500,
        featureKeys: [
          "packages.features.fashion.digitalPhotos15",
          "packages.features.fashion.oneHourSession",
          "packages.features.fashion.commercialRights"
        ]
      }
    ]
  }
];