import horizontal from "@/assets/tank-horizontal.jpg";
import vertical from "@/assets/tank-vertical.jpg";
import cone from "@/assets/tank-cone.jpg";
import loft from "@/assets/tank-loft.jpg";
import septic from "@/assets/tank-septic.jpg";
import chemical from "@/assets/tank-chemical.jpg";

export type Product = {
  id: string;
  name: string;
  capacity: string;
  category: "Domestic" | "Industrial" | "Agricultural" | "Sanitation" | "Chemical";
  image: string;
  ref: string;
  specs: { label: string; value: string }[];
  description: string;
};

export const products: Product[] = [
  {
    id: "vertical-5000",
    name: "Vertical Master 5000",
    capacity: "5,000 L",
    category: "Domestic",
    image: vertical,
    ref: "RT-V5K",
    specs: [
      { label: "Diameter", value: "1,850 mm" },
      { label: "Height", value: "2,100 mm" },
      { label: "Inlet", value: "1\" BSP" },
      { label: "Layers", value: "Triple HDPE" },
    ],
    description: "Our flagship household tank. Triple-layer construction with food-grade inner lining and reinforced UV outer skin.",
  },
  {
    id: "vertical-10000",
    name: "Industrial Vertical 10K",
    capacity: "10,000 L",
    category: "Industrial",
    image: vertical,
    ref: "RT-V10K",
    specs: [
      { label: "Diameter", value: "2,450 mm" },
      { label: "Height", value: "2,550 mm" },
      { label: "Inlet", value: "2\" BSP" },
      { label: "Layers", value: "Triple HDPE" },
    ],
    description: "Heavy-duty bulk storage for commercial estates, schools and processing facilities.",
  },
  {
    id: "horizontal-2500",
    name: "Horizontal Transport 2500",
    capacity: "2,500 L",
    category: "Agricultural",
    image: horizontal,
    ref: "RT-H2.5K",
    specs: [
      { label: "Length", value: "2,150 mm" },
      { label: "Width", value: "1,400 mm" },
      { label: "Inlet", value: "1.5\" BSP" },
      { label: "Use", value: "Mobile / Pickup" },
    ],
    description: "Designed for transport on pickups and trailers. Ideal for irrigation runs and remote water delivery.",
  },
  {
    id: "loft-1000",
    name: "Compact Loft Unit",
    capacity: "1,000 L",
    category: "Domestic",
    image: loft,
    ref: "RT-L1K",
    specs: [
      { label: "Length", value: "1,400 mm" },
      { label: "Width", value: "950 mm" },
      { label: "Height", value: "850 mm" },
      { label: "Profile", value: "Slim Loft" },
    ],
    description: "Slim rectangular profile fits standard ceiling cavities and small balconies.",
  },
  {
    id: "septic-3500",
    name: "Underground Septic",
    capacity: "3,500 L",
    category: "Sanitation",
    image: septic,
    ref: "RT-S3.5K",
    specs: [
      { label: "Length", value: "2,400 mm" },
      { label: "Inlet", value: "110 mm" },
      { label: "Outlet", value: "110 mm" },
      { label: "Burial", value: "Up to 1.5 m" },
    ],
    description: "Reinforced ribbed shell handles soil pressure for safe underground installation.",
  },
  {
    id: "cone-2000",
    name: "Cone Bottom Processor",
    capacity: "2,000 L",
    category: "Industrial",
    image: cone,
    ref: "RT-C2K",
    specs: [
      { label: "Diameter", value: "1,400 mm" },
      { label: "Cone Angle", value: "45°" },
      { label: "Frame", value: "Galvanized Steel" },
      { label: "Outlet", value: "Bottom 2\"" },
    ],
    description: "Drainage-friendly cone bottom with steel support frame for processing and dosing applications.",
  },
  {
    id: "chemical-1500",
    name: "Chemical Storage 1500",
    capacity: "1,500 L",
    category: "Chemical",
    image: chemical,
    ref: "RT-CH1.5K",
    specs: [
      { label: "Diameter", value: "1,200 mm" },
      { label: "Height", value: "1,500 mm" },
      { label: "Resistance", value: "Acid / Alkali" },
      { label: "Wall", value: "Reinforced" },
    ],
    description: "Chemical-resistant polyethylene formulation for safe storage of fertilizers and process chemicals.",
  },
];

export const categories = ["All", "Domestic", "Industrial", "Agricultural", "Sanitation", "Chemical"] as const;
