// Import your images from src/assets/
import printersImg from '../assets/printers.png';
import laptopsImg from '../assets/laptops.png';
import tonerImg from '../assets/toner-ink.png';
import cablesImg from '../assets/networking devices.png';
import serversImg from '../assets/servers.png';
import accessoriesImg from '../assets/Laptop_Rucksack.png';
import cctvImg from '../assets/cctv-cameras.png';
import sparepartsImg from '../assets/Copier_Machines_for_sale___eBay-removebg-preview.png';
import bindingImg from '../assets/binding machines.png';

// Printer brand images
import hpPrintersImg from '../assets/HP_LaserJet.png';
import canonPrintersImg from '../assets/canon-printers.png';
import risoPrintersImg from '../assets/riso-printers.png';
import konicaPrintersImg from '../assets/Konica_Minolta.png';

// Laptop brand images
import dellLaptopImg from '../assets/Dell_laptop.png';
import hpLaptopImg from '../assets/HP_Laptop.png';
import lenovoLaptopImg from '../assets/Lenovo_Laptop.png';
import macbookImg from '../assets/MacBook.png';

// Toner & Ink images
import tonerCartridgeImg from '../assets/Toner Cartridge.png';
import inkBottlesImg from '../assets/Ink bottles.png';

// Cable images
import usbCableImg from '../assets/USB_Cable.png';
import ethernetCableImg from '../assets/CAT_6_Ethernet_Cable.png';

// Accessory images
import backpackImg from '../assets/Business_Laptop_Smart_backpack.png';
import gamingMouseImg from '../assets/Scettar_Wireless_Gaming_Mouse.png';
import keyboardImg from '../assets/Dierya_DK61_Programmable.png';

// CCTV images - FIXED: Different variable names
import hikvisionCctvImg from '../assets/Security_Camera_System.png';
import dahuaCctvImg from '../assets/Dahua_1MP_HDCVI_IR_Dome_Camera.png';

export const productList = [
  { 
    id: 'printers', 
    name: 'Printers', 
    icon: '',
    image: printersImg
  },
  { 
    id: 'laptops', 
    name: 'Laptops', 
    icon: '',
    image: laptopsImg
  },
  { 
    id: 'toner-ink', 
    name: 'Toner & Ink', 
    icon: '',
    image: tonerImg
  },
  { 
    id: 'cables', 
    name: 'Cables', 
    icon: '🔌',
    image: cablesImg
  },
  { 
    id: 'servers', 
    name: 'Servers', 
    icon: '',
    image: serversImg
  },
  { 
    id: 'accessories', 
    name: 'Accessories', 
    icon: '',
    image: accessoriesImg
  },
  { 
    id: 'cctv-cameras', 
    name: 'CCTV Cameras', 
    icon: '',
    image: cctvImg
  },
  { 
    id: 'spare-parts', 
    name: 'Spare Parts', 
    icon: '',
    image: sparepartsImg
  },
  { 
    id: 'binding-machines', 
    name: 'Binding Machines', 
    icon: '',
    image: bindingImg
  }
];

// PRODUCT CATEGORIES WITH MULTIPLE ITEMS
export const productsData = {
  printers: {
    id: 'printers',
    name: 'Printers',
    icon: '',
    description: 'High-quality printers for home and office use.',
    items: [
      {
        id: 'hp-printers',
        name: 'HP Printers',
        price: 'Call for Price',
        image: hpPrintersImg,
        specs: ['Reliable performance', 'High-quality printing', 'Wireless connectivity', 'Energy efficient'],
        brand: 'HP',
        stock: 'In Stock'
      },
      {
        id: 'canon-printers',
        name: 'Canon Printers',
        price: 'Call for Price',
        image: canonPrintersImg,
        specs: ['Crisp text and vibrant colors', 'Fast printing speeds', 'User-friendly interface', 'Compact design'],
        brand: 'Canon',
        stock: 'In Stock'
      },
      {
        id: 'riso-printers',
        name: 'RISO Printers',
        price: 'Call for Price',
        image: risoPrintersImg,
        specs: ['High-speed printing', 'Low cost per page', 'Durable and reliable', 'Commercial grade'],
        brand: 'RISO',
        stock: 'In Stock'
      },
      {
        id: 'konica-minolta-printers',
        name: 'Konica Minolta Printers',
        price: 'Call for Price',
        image: konicaPrintersImg,
        specs: ['Advanced color management', 'High-volume printing', 'Professional quality', 'Eco-friendly'],
        brand: 'Konica Minolta',
        stock: 'In Stock'
      }
    ]
  },
  laptops: {
    id: 'laptops',
    name: 'Laptops',
    icon: '',
    description: 'New and refurbished laptops from top brands.',
    items: [
      {
        id: 'dell-xps-13',
        name: 'Dell Laptops',
        price: 'Call for Price',
        image: dellLaptopImg,
        specs: ['Intel Core i7', '16GB RAM', '512GB SSD', '13.4" 4K Display'],
        brand: 'Dell',
        stock: 'In Stock'
      },
      {
        id: 'hp-spectre-x360',
        name: 'HP Laptops',
        price: 'Call for Price',
        image: hpLaptopImg,
        specs: ['Intel Core i7', '16GB RAM', '1TB SSD', '13.5" OLED Touch'],
        brand: 'HP',
        stock: 'In Stock'
      },
      {
        id: 'lenovo-thinkpad-x1',
        name: 'Lenovo Laptops',
        price: 'Call for Price',
        image: lenovoLaptopImg,
        specs: ['Intel Core i7', '32GB RAM', '1TB SSD', '14" 4K Display'],
        brand: 'Lenovo',
        stock: 'In Stock'
      },
      {
        id: 'macbook-pro-14',
        name: 'MacBook',
        price: 'Call for Price',
        image: macbookImg,
        specs: ['Apple M3 Chip', '16GB RAM', '512GB SSD', '14.2" Liquid Retina'],
        brand: 'Apple',
        stock: 'In Stock'
      }
    ]
  },
  'toner-ink': {
    id: 'toner-ink',
    name: 'Toner & Ink',
    icon: '',
    description: 'Original and compatible toner cartridges.',
    items: [
      {
        id: 'hp-304a-toner',
        name: 'HP 304A Toner Cartridge',
        price: 'Call for Price',
        image: tonerCartridgeImg,
        specs: ['Black: 3500 pages', 'Cyan/Magenta/Yellow: 2800 pages', 'Original HP quality'],
        brand: 'HP',
        stock: 'In Stock'
      },
      {
        id: 'epson-502-ink',
        name: 'Epson 502 Ink Bottle Set',
        price: 'Call for Price',
        image: inkBottlesImg,
        specs: ['Black: 7500 pages', 'Color: 6000 pages', 'EcoTank compatible'],
        brand: 'Epson',
        stock: 'In Stock'
      }
    ]
  },
  cables: {
    id: 'cables',
    name: 'Cables',
    icon: '🔌',
    description: 'USB, network, printer cables and more.',
    items: [
      {
        id: 'usb-c-cable',
        name: 'USB-C to USB-C Cable',
        price: 'Call for Price',
        image: usbCableImg,
        specs: ['USB 3.1', '100W charging', '10Gbps data', 'Braided nylon'],
        brand: 'Anker',
        stock: 'In Stock'
      },
      {
        id: 'ethernet-cable',
        name: 'Cat6 Ethernet Cable',
        price: 'Call for Price',
        image: ethernetCableImg,
        specs: ['10ft length', 'Gigabit speed', 'RJ45 connectors', 'Snagless design'],
        brand: 'Belkin',
        stock: 'In Stock'
      }
    ]
  },
  servers: {
    id: 'servers',
    name: 'Servers',
    icon: '',
    description: 'Branded servers and workstations.',
    items: [
      {
        id: 'dell-poweredge-t440',
        name: 'Dell PowerEdge T440',
        price: 'Call for Price',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        specs: ['Intel Xeon Silver', '32GB RAM', '2TB HDD', 'Hot-swap drives'],
        brand: 'Dell',
        stock: 'In Stock'
      },
      {
        id: 'hp-proliant-dl380',
        name: 'HP ProLiant DL380 Gen10',
        price: 'Call for Price',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        specs: ['Intel Xeon Gold', '64GB RAM', '4TB Storage', 'Redundant power'],
        brand: 'HP',
        stock: 'In Stock'
      }
    ]
  },
  accessories: {
    id: 'accessories',
    name: 'Accessories',
    icon: '',
    description: 'Laptop bags, mouse, keyboards and more.',
    items: [
      {
        id: 'laptop-backpack',
        name: 'Business Laptop Backpack',
        price: 'Call for Price',
        image: backpackImg,
        specs: ['Fits up to 17" laptops', 'Water-resistant', 'Multiple compartments', 'Padded straps'],
        brand: 'Targus',
        stock: 'In Stock'
      },
      {
        id: 'wireless-mouse',
        name: 'Scettar Wireless Gaming Mouse',
        price: 'Call for Price',
        image: gamingMouseImg,
        specs: ['Wireless', '8K DPI', 'MagSpeed wheel', '70-day battery'],
        brand: 'Scettar',
        stock: 'In Stock'
      },
      {
        id: 'keyboard',
        name: 'Dierya DK61 Programmable Keyboard',
        price: 'Call for Price',
        image: keyboardImg,
        specs: ['Mechanical keys', 'RGB lighting', 'Programmable macros', 'USB-C connection'],
        brand: 'Dierya',
        stock: 'In Stock'
      }
    ]
  },
  'cctv-cameras': {
    id: 'cctv-cameras',
    name: 'CCTV Cameras',
    icon: '',
    description: 'HD cameras for home and office security.',
    items: [
      {
        id: 'hikvision-ds-2cd',
        name: 'Hikvision DS-2CD2347G2',
        price: 'Call for Price',
        image: hikvisionCctvImg,
        specs: ['4MP resolution', 'Night vision', 'Motion detection', 'Audio recording'],
        brand: 'Hikvision',
        stock: 'In Stock'
      },
      {
        id: 'dahua-security-camera',
        name: 'Dahua Security Camera',
        price: 'Call for Price',
        image: dahuaCctvImg,
        specs: ['2MP resolution', 'IR night vision', 'Weatherproof', 'Remote viewing'],
        brand: 'Dahua',
        stock: 'In Stock'
      }
    ]
  },
  'spare-parts': {
    id: 'spare-parts',
    name: 'Spare Parts',
    icon: '🔧',
    description: 'All printer spare parts available.',
    items: [
      {
        id: 'hp-fuser-kit',
        name: 'HP Fuser Kit',
        price: 'Call for Price',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        specs: ['Compatible with HP LaserJet', '100,000 page yield', 'Original HP part'],
        brand: 'HP',
        stock: 'In Stock'
      }
    ]
  },
  'binding-machines': {
  id: 'binding-machines',
  name: 'Binding Machines',
  icon: '',
  description: 'Comb, coil and thermal binding machines for the office.',
  items: [
    {
      id: 'comb-binding-machine',
      name: 'A4 Comb Binding Machine',
      price: 'Call for Price',
      image: bindingImg,
      specs: ['Binds up to 450 sheets', 'Manual punch & bind', 'A4 & letter size', 'Compact design'],
      brand: 'GBC',
      stock: 'In Stock'
    },
    {
      id: 'coil-binding-machine',
      name: 'A4 Coil Binding Machine',
      price: 'Call for Price',
      image: bindingImg,
      specs: ['Electric coil binder', '50 sheet capacity', 'Adjustable margin', 'Heavy duty'],
      brand: 'Fellowes',
      stock: 'In Stock'
    }
  ]
},
};

// Get single product item by category and product ID
export const getProductItem = (categoryId, productId) => {
  const category = productsData[categoryId];
  if (!category) return null;
  return category.items.find(item => item.id === productId) || null;
};