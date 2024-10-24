const priceListDataEn = [
  {
    key: 1,
    packageName: "Basic",
    description: "Essential Protection for Your Network.",
    price: {
      monthly: "500",
      yearly: "5.299",
    },
    features: [
      { key: 1, text: "Initial consultation and needs analysis", status: "active" },
      { key: 2, text: "Basic network installation (one-time fee)", status: "active" },
      { key: 3, text: "Firewall setup and basic protection", status: "active" },
      { key: 4, text: "Network monitoring", status: "active" },
      { key: 5, text: "24/7 technical support", status: "inactive" },
    ],
  },
  {
    key: 2,
    packageName: "Standard",
    description: "Comprehensive Network Security.",
    price: {
      monthly: "799",
      yearly: "9.199",
    },
    features: [
      { key: 1, text: "All features of the Basic Package", status: "active" },
      { key: 2, text: "24/7 technical support", status: "active" },
      {
        key: 3, 
        text: "Additional security device setup (VPN, etc.)",
        status: "active",
      },
      {
        key: 4, 
        text: "Employee usage and security training (monthly sessions)",
        status: "active",
      },
      { key: 5, text: "Monthly reports on network health", status: "active" },
    ],
  },

  {
    key: 3,
    packageName: "Premium",
    description: "Peace of Mind, Fully Protected.",
    price: {
      monthly: "1.499",
      yearly: "17.789",
    },
    features: [
      { key: 1, text: "All features of the Standard Package", status: "active" },
      {
        key: 2, 
        text: "Comprehensive security audit (every 6 months)",
        status: "active",
      },
      {
        key: 3, 
        text: "Security hardware installation (one-time fee)",
        status: "active",
      },
      { key: 4, text: "Priority technical support", status: "active" },
      { key: 5, text: "System updates and maintenance", status: "active" },
    ],
  },
];

export default priceListDataEn;
