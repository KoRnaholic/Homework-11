const products = [
    {
      id: 1,
      name: "UltraBook Pro",
      price: 1499.99,
      image: {
        alt: "Laptop Image",
        url: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
      },
      categories: [
        {
          categoryId: 101,
          categoryName: "Electronics"
        },
        {
          categoryId: 104,
          categoryName: "Computers"
        }
      ],
      details: {
        description: "Sleek and powerful, designed for professionals.",
        specs: [
          {
            specName: "CPU",
            specValue: "Intel i9"
          },
          {
            specName: "RAM",
            specValue: "32GB"
          },
          {
            specName: "Storage",
            specValue: "1TB SSD"
          }
        ]
      }
    },
    {
      id: 2,
      name: "Gaming Beast",
      price: 1999.99,
      image: {
        alt: "Laptop Image",
        url: "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      categories: [
        {
          categoryId: 101,
          categoryName: "Electronics"
        },
        {
          categoryId: 104,
          categoryName: "Computers"
        },
        {
          categoryId: 103,
          categoryName: "Gaming"
        }
      ],
      details: {
        description: "High-performance gaming laptop with RGB lighting.",
        specs: [
          {
            specName: "CPU",
            specValue: "AMD Ryzen 9"
          },
          {
            specName: "GPU",
            specValue: "NVIDIA GeForce RTX 3080"
          },
          {
            specName: "RAM",
            specValue: "64GB"
          },
          {
            specName: "Storage",
            specValue: "2TB NVMe SSD"
          }
        ]
      }
    },
    {
      id: 3,
      name: "Business Elite",
      price: 1299.99,
      image: {
        alt: "Laptop Image",
        url: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      categories: [
        {
          categoryId: 101,
          categoryName: "Electronics"
        },
        {
          categoryId: 104,
          categoryName: "Computers"
        },
        {
          categoryId: 105,
          categoryName: "Business"
        }
      ],
      details: {
        description: "Designed for productivity and reliability.",
        specs: [
          {
            specName: "CPU",
            specValue: "Intel Core i5"
          },
          {
            specName: "RAM",
            specValue: "8GB"
          },
          {
            specName: "Storage",
            specValue: "512GB SSD"
          }
        ]
      }
    },
    {
      id: 4,
      name: "Convertible Touch",
      price: 999.99,
      image: {
        alt: "Laptop Image",
        url: "https://images.pexels.com/photos/1989304/pexels-photo-1989304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      categories: [
        {
          categoryId: 101,
          categoryName: "Electronics"
        },
        {
          categoryId: 104,
          categoryName: "Computers"
        },
        {
          categoryId: 106,
          categoryName: "Convertible"
        }
      ],
      details: {
        description: "Versatile laptop with touchscreen functionality.",
        specs: [
          {
            specName: "CPU",
            specValue: "Intel Core i7"
          },
          {
            specName: "RAM",
            specValue: "16GB"
          },
          {
            specName: "Storage",
            specValue: "256GB SSD"
          }
        ]
      }
    },
    {
      id: 5,
      name: "Portable Workstation",
      price: 1799.99,
      image: {
        alt: "Laptop Image",
        url: "https://images.pexels.com/photos/129205/pexels-photo-129205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      categories: [
        {
          categoryId: 101,
          categoryName: "Electronics"
        },
        {
          categoryId: 104,
          categoryName: "Computers"
        }
      ],
      details: {
        description: "Powerful workstation for on-the-go professionals.",
        specs: [
          {
            specName: "CPU",
            specValue: "Intel Xeon"
          },
          {
            specName: "RAM",
            specValue: "64GB ECC"
          },
          {
            specName: "Storage",
            specValue: "1TB NVMe SSD"
          }
        ]
      }
    },
    {
      id: 6,
      name: "Student Edition",
      price: 899.99,
      image: {
        alt: "Laptop Image",
        url: "https://images.pexels.com/photos/246340/pexels-photo-246340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      categories: [
        {
          categoryId: 101,
          categoryName: "Electronics"
        },
        {
          categoryId: 104,
          categoryName: "Computers"
        },
        {
          categoryId: 107,
          categoryName: "Student"
        }
      ],
      details: {
        description: "Affordable and reliable laptop for students.",
        specs: [
          {
            specName: "CPU",
            specValue: "Intel Core i3"
          },
          {
            specName: "RAM",
            specValue: "8GB"
          },
          {
            specName: "Storage",
            specValue: "256GB SSD"
          }
        ]
      }
    }
  ];
  
  

export default products