import vertical from "@/assets/roto-tank.png";
import horizontal from "@/assets/roto-tank.png";
import loft from "@/assets/roto-tank.png";
import septic from "@/assets/roto-septic.png";
import cone from "@/assets/roto-tank.png";
import chemical from "@/assets/roto-tank.png";
import pipes from "@/assets/roto-pipes.jpg";

export type Product = {
  id: string;
  name: string;
  capacity: string;
  category: "Domestic" | "Industrial" | "Agricultural" | "Sanitation" | "Chemical" | "Pipes";
  image: string;
  price: string;
  description: string;
};

export const products: Product[] = [
  { id: "t-1000", name: "1000L Water Tank", capacity: "1,000 L", category: "Domestic", image: vertical, price: "KSh 6,500", description: "Ideal for residential water storage and daily use." },
  { id: "t-2000", name: "2000L Water Tank", capacity: "2,000 L", category: "Domestic", image: vertical, price: "KSh 10,500", description: "Reliable storage for medium households and farms." },
  { id: "t-3000", name: "3000L Water Tank", capacity: "3,000 L", category: "Agricultural", image: vertical, price: "KSh 14,500", description: "Perfect for small commercial and agricultural use." },
  { id: "t-4000", name: "4000L Water Tank", capacity: "4,000 L", category: "Agricultural", image: vertical, price: "KSh 21,000", description: "Heavy-duty storage for farms and large households." },
  { id: "t-5000", name: "5000L Water Tank", capacity: "5,000 L", category: "Industrial", image: vertical, price: "KSh 24,500", description: "Designed for commercial and institutional water storage." },
  { id: "t-6000", name: "6000L Water Tank", capacity: "6,000 L", category: "Industrial", image: vertical, price: "KSh 27,500", description: "Designed for commercial and institutional water storage." },
  { id: "t-8000", name: "8000L Water Tank", capacity: "8,000 L", category: "Industrial", image: vertical, price: "KSh 32,500", description: "Designed for commercial and institutional water storage." },
  { id: "t-10000", name: "10,000L Water Tank", capacity: "10,000 L", category: "Industrial", image: vertical, price: "KSh 45,500", description: "Designed for commercial and institutional water storage." },
  { id: "t-16000", name: "16,000L Water Tank", capacity: "16,000 L", category: "Industrial", image: vertical, price: "KSh 67,500", description: "Large capacity tank for industrial and large-scale use." },
  { id: "t-20000", name: "20,000L Water Tank", capacity: "20,000 L", category: "Industrial", image: vertical, price: "KSh 98,500", description: "Large capacity tank for industrial and large-scale use." },
  { id: "t-24000", name: "24,000L Water Tank", capacity: "24,000 L", category: "Industrial", image: vertical, price: "KSh 135,000", description: "Large capacity tank for industrial and large-scale use." },
  { id: "h-2500", name: "Horizontal Transport 2500L", capacity: "2,500 L", category: "Agricultural", image: horizontal, price: "KSh 22,000", description: "Designed for transport on pickups and trailers. Ideal for irrigation runs." },
  { id: "loft-1000", name: "Compact Loft Unit", capacity: "1,000 L", category: "Domestic", image: loft, price: "KSh 9,800", description: "Slim rectangular profile fits standard ceiling cavities and small balconies." },
  { id: "septic-3500", name: "Underground Septic", capacity: "3,500 L", category: "Sanitation", image: septic, price: "KSh 38,000", description: "Reinforced ribbed shell handles soil pressure for safe underground installation." },
  { id: "cone-2000", name: "Cone Bottom Processor", capacity: "2,000 L", category: "Industrial", image: cone, price: "KSh 28,500", description: "Drainage-friendly cone bottom with steel support frame for processing." },
  { id: "chem-1500", name: "Chemical Storage 1500", capacity: "1,500 L", category: "Chemical", image: chemical, price: "KSh 19,500", description: "Chemical-resistant polyethylene formulation for fertilizers and process chemicals." },
  { id: "septic-5000", name: "Horizontal Septic Tank", capacity: "5,000 L", category: "Sanitation", image: septic, price: "KSh 58,000", description: "Heavy-duty ribbed horizontal septic tank for underground installation." },
  { id: "pvc-20", name: "20mm HDPE Pipe", capacity: "Per 100m", category: "Pipes", image: pipes, price: "KSh 5,200", description: '20mm (½" ) HDPE pipe for plumbing and water reticulation.' },
  { id: "pvc-25", name: "25mm HDPE Pipe", capacity: "Per 100m", category: "Pipes", image: pipes, price: "KSh 6,800", description: '25mm (¾" ) HDPE pipe for plumbing and water reticulation.' },
  { id: "pvc-40", name: "40mm HDPE Pipe", capacity: "Per 100m", category: "Pipes", image: pipes, price: "KSh 12,800", description: '40mm (1¼" ) HDPE pipe for mains and irrigation lines.' },
];

export const categories = ["All", "Domestic", "Industrial", "Agricultural", "Sanitation", "Chemical", "Pipes"] as const;

export const CONTACT_PHONE = "+254 762 090 909";
export const CONTACT_PHONE_TEL = "+254762090909";
export const WHATSAPP_NUMBER = "254762090909";
