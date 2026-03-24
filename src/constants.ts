/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'kitchens',
    title: 'Kitchen Remodeling',
    description: 'Custom contemporary and rustic kitchen transformations.',
    longDescription: 'Our kitchen remodeling services combine functionality with aesthetic appeal. Whether you prefer a sleek modern look or a warm rustic feel, we use premium materials to create the heart of your home. From custom cabinetry to high-end countertops, we handle every detail.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200',
    features: ['Custom Cabinetry', 'Countertop Installation', 'Lighting Design', 'Flooring & Tiling', 'Appliance Integration']
  },
  {
    id: 'bathrooms',
    title: 'Bathroom Renovations',
    description: 'Modern bathroom designs and precision tiling.',
    longDescription: 'Transform your bathroom into a personal sanctuary. We specialize in complete bathroom overhauls, including plumbing updates, luxury tiling, and modern fixture installations. Our designs focus on maximizing space and creating a spa-like atmosphere.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200',
    features: ['Shower & Bath Installation', 'Vanity Customization', 'Waterproofing', 'Designer Tiling', 'Modern Fixtures']
  },
  {
    id: 'bedrooms',
    title: 'Bedroom Transformations',
    description: 'Elegant bedroom designs and comfortable living spaces.',
    longDescription: 'Your bedroom should be a place of rest and order. We design and install custom bedroom solutions that enhance the room\'s style and comfort. From layout planning to final finishes, we create spaces tailored to your needs.',
    image: 'https://images.unsplash.com/photo-1505693419148-403bb79a9ff1?auto=format&fit=crop&q=80&w=1200',
    features: ['Space Planning', 'Custom Headboards', 'Integrated Lighting', 'Flooring Solutions', 'Wall Finishes']
  },
  {
    id: 'cupboards',
    title: 'Built-in Cupboards',
    description: 'Custom-made storage solutions for every room.',
    longDescription: 'Maximize your storage with our custom built-in cupboards. We design walk-in closets, kitchen cabinets, and bedroom storage that are as beautiful as they are functional. Our cupboards are built to last using high-quality materials and hardware.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200',
    features: ['Walk-in Closets', 'Kitchen Cabinets', 'Wardrobe Design', 'Integrated Shelving', 'Premium Hardware']
  },
  {
    id: 'furniture',
    title: 'Custom Furniture',
    description: 'Handcrafted contemporary and rustic furniture pieces.',
    longDescription: 'We specialize in creating unique, handcrafted furniture that tells a story. Using high-quality woods and metals, we build contemporary and rustic pieces that are both functional and artistic. Each piece is custom-made to fit your space perfectly.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1200',
    features: ['Dining Tables', 'Coffee Tables', 'Shelving Units', 'Outdoor Furniture', 'Rustic & Modern Styles']
  },
  {
    id: 'welding',
    title: 'Welding & Metalwork',
    description: 'Professional metalwork and structural welding.',
    longDescription: 'Our welding services cover everything from decorative metalwork to heavy-duty structural projects. We build gates, fences, carports, and custom metal frames with a focus on durability and precision. We combine strength with design.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200',
    features: ['Security Gates', 'Fencing', 'Structural Steel', 'Custom Metal Frames', 'Repair & Maintenance']
  },
  {
    id: 'carpentry',
    title: 'Expert Carpentry',
    description: 'Fine woodwork, finishing, and structural carpentry.',
    longDescription: 'Carpentry is at the core of what we do. From structural roofing to fine finish work, our carpenters bring years of experience to every project. We handle door installations, skirting, architraves, and all custom woodwork requirements.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
    features: ['Door Installation', 'Skirting & Moldings', 'Roofing Structures', 'Custom Woodwork', 'Repairs']
  },
  {
    id: 'brickwork',
    title: 'Brickwork & Construction',
    description: 'Durable construction and professional bricklaying.',
    longDescription: 'We provide professional bricklaying and construction services for both interior and exterior projects. Whether it\'s a new wall, a patio, or structural additions, we ensure a level, durable, and beautiful finish that lasts.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200',
    features: ['Wall Construction', 'Structural Additions', 'Paving', 'Plastering', 'Foundation Work']
  },
  {
    id: 'painting',
    title: 'Professional Painting',
    description: 'Interior and exterior painting with premium finishes.',
    longDescription: 'A fresh coat of paint can transform any space. We offer professional interior and exterior painting services using premium paints and meticulous preparation techniques. We ensure clean lines and a long-lasting finish.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200',
    features: ['Interior Painting', 'Exterior Painting', 'Surface Preparation', 'Wood Staining', 'Specialty Finishes']
  },
  {
    id: 'tiling',
    title: 'Professional Tiling',
    description: 'Precision tiling for floors, walls, and outdoor areas.',
    longDescription: 'Our tiling services ensure a perfect finish for any surface. We specialize in ceramic, porcelain, and natural stone tiling for kitchens, bathrooms, and outdoor areas. We focus on precision, alignment, and durability.',
    image: 'https://images.unsplash.com/photo-1588473219725-ba49932d9aa4?auto=format&fit=crop&q=80&w=1200',
    features: ['Floor Tiling', 'Wall Tiling', 'Mosaic Accents', 'Outdoor Paving', 'Grouting & Sealing']
  },
  {
    id: 'ceilings',
    title: 'Ceiling & Drywalls',
    description: 'Installation and repair of ceilings and drywall partitions.',
    longDescription: 'We provide high-quality ceiling and drywall solutions for residential and commercial spaces. From standard ceiling boards to decorative cornices and drywall partitioning, we create smooth, professional finishes.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    features: ['Drywall Partitioning', 'Ceiling Board Installation', 'Cornice Fitting', 'Skimming & Finishing', 'Repairs']
  },
  {
    id: 'pergolas',
    title: 'Decking & Pergolas',
    description: 'Elegant outdoor living spaces and wooden structures.',
    longDescription: 'Enhance your outdoor living with our custom decking and pergola solutions. We use weather-resistant materials to create beautiful, functional spaces for relaxation and entertainment. Our designs blend seamlessly with your home\'s architecture.',
    image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80&w=1200',
    features: ['Timber Decking', 'Custom Pergolas', 'Outdoor Seating', 'Balustrades', 'Maintenance & Sealing']
  },
  {
    id: 'carports',
    title: 'Carports & Outdoor Areas',
    description: 'Functional outdoor entertainment and vehicle protection.',
    longDescription: 'We design and build durable carports and outdoor entertainment areas that add value and functionality to your property. From steel structures to wooden carports, we provide solutions that protect your assets and enhance your lifestyle.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
    features: ['Steel Carports', 'Wooden Carports', 'Patio Roofs', 'Outdoor Kitchens', 'Entertainment Areas']
  },
];

export const MISSION = "To provide exceptional home maintenance and custom craftsmanship that enhances the lives of our clients through quality, reliability, and artistic passion.";
export const VISION = "To be the leading artisan partner in South Africa, recognized for transforming houses into dream homes through innovative design and superior workmanship.";
