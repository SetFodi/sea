import type { Lang } from "./i18n";

export type Loc = { ka: string; en: string };
export type IconName =
  | "droplet" | "beaker" | "cross" | "gear" | "filter" | "bolt" | "pump"
  | "gauge" | "membrane" | "flask" | "shield" | "microscope" | "engine"
  | "chip" | "valve" | "arrow";

export type ProductItem = {
  name: Loc;
  code?: string;
  img?: string;
  badge?: "new";
};

export type Subcat = {
  name: Loc;
  desc?: Loc;
  /** products: ProductItem[]; list: Loc[] */
  items: ProductItem[] | Loc[];
};

export type Source = { name: string; url: string; official?: boolean };

export type Category = {
  id: string;
  code: string;
  icon: IconName;
  img?: string;
  name: Loc;
  tagline: Loc;
  source?: Source;
  type: "products" | "list";
  note?: Loc;
  subcats: Subcat[];
};

export function pick(obj: Loc | undefined, lang: Lang): string {
  if (!obj) return "";
  return obj[lang] || obj.ka || obj.en || "";
}

export type Partner = {
  main: string;
  sub: string;
  logo: string;
  url: string;
};

export const PARTNERS: Partner[] = [
  { main: "GWP", sub: "Georgian Water", logo: "/partners/gwp.png", url: "https://gwp.ge/en/" },
  { main: "UWSCG", sub: "United Water Supply", logo: "/partners/uwscg.png", url: "https://water.gov.ge/" },
  { main: "SOCAR", sub: "Georgia Petroleum", logo: "/partners/socar.svg", url: "https://sgp.ge/en" },
  { main: "Wissol", sub: "Petroleum", logo: "/partners/wissol.svg", url: "https://wissol.ge/en/" },
  { main: "EVEX", sub: "Medical", logo: "/partners/evex.png", url: "https://evex.ge/en" },
  { main: "New Hospitals", sub: "Medical", logo: "/partners/new-hospitals.svg", url: "https://newhospitals.ge/en" },
];

export const CAT_PROD_ICON: Record<string, IconName> = {
  water: "membrane",
  chemical: "flask",
  medical: "cross",
  industrial: "gear",
};

export const CATEGORIES: Category[] = [
  {
    id: "water",
    code: "NaClO·RO",
    icon: "droplet",
    img: "/hephis/container-disinfection.jpg",
    name: { ka: "წყლის დამუშავების სისტემები", en: "Water Treatment Systems" },
    tagline: {
      ka: "ნატრიუმ ჰიპოქლორიტი, ანტიოსმოსი, ფილტრაცია და დოზირება — სრული ხაზი.",
      en: "Sodium hypochlorite, reverse osmosis, filtration and dosing — the full line.",
    },
    source: { name: "HEPHIS", url: "https://www.hephis.com/", official: true },
    type: "products",
    subcats: [
      {
        name: { ka: "ნატრიუმ ჰიპოქლორიტის გენერატორები", en: "Sodium Hypochlorite Generators" },
        desc: {
          ka: "ადგილზე ქლორის გენერაცია სასმელი წყლის უსაფრთხო დეზინფექციისთვის.",
          en: "On-site chlorine generation for safe drinking-water disinfection.",
        },
        items: [
          { name: { ka: "ნატრიუმ ჰიპოქლორიტის გენერატორი", en: "Sodium Hypochlorite Generator" }, code: "HFT", img: "/hephis/sodium-hypochlorite-generator.jpg" },
          { name: { ka: "ინტეგრირებული ტიპის გენერატორი", en: "Integrated-Type Generator" }, code: "HFT-INT", img: "/hephis/hft-100-naclo.jpg" },
          { name: { ka: "სკიდზე მონტაჟებული ტიპი", en: "Skid-Mounted Type" }, code: "HFTS", img: "/hephis/2kg-naclo.jpg", badge: "new" },
          { name: { ka: "ელექტროლიზის უჯრედი", en: "Electrolysis Cell" }, code: "EC", img: "/hephis/electrolysis-cell.jpg" },
          { name: { ka: "2 კგ/სთ NaClO გენერატორი", en: "2 KG/hr NaClO Generator" }, code: "2KG-NaClO", img: "/hephis/2kg-naclo.jpg" },
          { name: { ka: "HFT-100-NaClO სადგური", en: "HFT-100-NaClO Plant Generator" }, code: "HFT-100", img: "/hephis/hft-100-naclo.jpg" },
          { name: { ka: "HFTS-20-NaClO სადგური", en: "HFTS-20-NaClO Plant Generator" }, code: "HFTS-20", img: "/hephis/hft-100-naclo.jpg" },
          { name: { ka: "კონტეინერული დეზინფექციის სისტემა", en: "Container Disinfection System" }, code: "CDS", img: "/hephis/container-disinfection.jpg" },
        ],
      },
      {
        name: { ka: "ანტიოსმოსური (RO) სისტემები", en: "RO Systems" },
        desc: {
          ka: "გაუმტკნარება და გაწმენდა — მცირე კვანძებიდან სამრეწველო დანადგარებამდე.",
          en: "Desalination and purification — from compact units to industrial plants.",
        },
        items: [
          { name: { ka: "მლაშე წყლის გაუმტკნარება", en: "Brackish Water Desalination" }, code: "BWRO", img: "/projects/g-28.jpg" },
          { name: { ka: "ზღვის წყლის გაუმტკნარება", en: "Seawater Desalination" }, code: "SWRO" },
          { name: { ka: "სუფთა წყლის სისტემა", en: "Pure Water System" }, code: "PW" },
          { name: { ka: "EDI ულტრა-სუფთა წყალი", en: "EDI Ultra-Pure Water System" }, code: "EDI" },
          { name: { ka: "ულტრაფილტრაციის სისტემა", en: "Ultrafiltration System" }, code: "UF", img: "/projects/g-28-1.jpg" },
          { name: { ka: "წყლის დარბილების სისტემა", en: "Water Softening System" }, code: "WS", img: "/projects/g-26-1.jpg" },
        ],
      },
      {
        name: { ka: "დოზირების სისტემის აქსესუარები", en: "Dosing System Accessories" },
        desc: {
          ka: "ზუსტი ქიმიური დოზირება და სანდო არმატურა.",
          en: "Precise chemical metering and reliable fittings.",
        },
        items: [
          { name: { ka: "დოზირების ტუმბო", en: "Dosing Pump" }, code: "DP", img: "/hephis/emec-dosing-pump.jpg" },
          { name: { ka: "EMEC MZ/MD მზომი ტუმბო", en: "EMEC MZ/MD Metering Pump" }, code: "25–2000 LPH", img: "/hephis/emec-dosing-pump.jpg" },
          { name: { ka: "ელექტრო ბურთულოვანი სარქველი", en: "Electric Ball Valve" }, code: "EBV", img: "/hephis/electric-ball-valve.jpg" },
          { name: { ka: "პულსაციის დემპფერი", en: "Pulsation Damper" }, code: "PD" },
          { name: { ka: "უსაფრთხოების / უკუწნევის სარქველი", en: "Safety / Back-Pressure Valve" }, code: "BPV", img: "/hephis/back-pressure-valve.jpg" },
        ],
      },
      {
        name: { ka: "ქლორის დიოქსიდის გენერატორი", en: "Chlorine Dioxide Generator" },
        items: [{ name: { ka: "ქლორის დიოქსიდის გენერატორი", en: "Chlorine Dioxide Generator" }, code: "ClO₂", img: "/hephis/chlorine-dioxide.jpg" }],
      },
      {
        name: { ka: "ნანო-კატალიზური გაწმენდა", en: "Nano-Catalytic Purification" },
        items: [
          { name: { ka: "ნანო-კატალიზური ელექტროლიზური გამწმენდი (აკვაკულტურა)", en: "Nano Catalytic Electrolytic Purification (Aquaculture)" }, code: "NCEP", img: "/hephis/nano-catalytic.jpg", badge: "new" },
        ],
      },
      {
        name: { ka: "ფტორის მასალები", en: "Fluorine Materials" },
        desc: { ka: "კოროზიამედეგი მასალები აგრესიული გარემოსთვის.", en: "Corrosion-resistant materials for aggressive media." },
        items: [
          { name: { ka: "PTFE მილი", en: "PTFE Tube" }, code: "PTFE", img: "/hephis/ptfe-tube.jpg" },
          { name: { ka: "PFA", en: "PFA" }, code: "PFA" },
          { name: { ka: "PVDF", en: "PVDF" }, code: "PVDF" },
        ],
      },
    ],
  },

  {
    id: "chemical",
    code: "CHEM",
    icon: "beaker",
    img: "/newtech/chemicals.jpg",
    name: { ka: "ქიმიური პროდუქცია", en: "Chemical Products" },
    tagline: {
      ka: "წყლის დამუშავების რეაგენტები ანტიოსმოსური, გამაგრილებელი და ქვაბის სისტემებისთვის.",
      en: "Water-treatment chemicals for RO, cooling-tower and boiler systems.",
    },
    source: { name: "NCC · Newtech Chemicals", url: "https://www.ncc.com.tr/" },
    type: "products",
    note: {
      ka: "ქართულენოვანი აღწერები მზადდება — სრული ჩამონათვალი მალე დაემატება.",
      en: "Georgian descriptions are being finalized — the full list will be added soon.",
    },
    subcats: [
      {
        name: { ka: "ანტიოსმოსური (RO) ქიმია", en: "RO Chemicals" },
        items: [
          { name: { ka: "RO ანტისკალანტი და დისპერსანტი", en: "RO Antiscalant & Dispersant" }, code: "RO-AS" },
          { name: { ka: "მემბრანის გამწმენდი რეაგენტები", en: "Membrane Cleaning Chemicals" }, code: "MC" },
          { name: { ka: "ბიოციდი", en: "Biocide" }, code: "BIO" },
          { name: { ka: "pH ბუსტერი", en: "pH Booster" }, code: "pH+" },
        ],
      },
      {
        name: { ka: "გამაგრილებელი კოშკის ქიმია", en: "Cooling Tower Chemicals" },
        items: [
          { name: { ka: "კოროზიის ინჰიბიტორი", en: "Corrosion Inhibitor" }, code: "CI" },
          { name: { ka: "ნადების ინჰიბიტორი", en: "Scale Inhibitor" }, code: "SI" },
          { name: { ka: "ბიოციდი / მიკრობიციდი", en: "Biocide / Microbicide" }, code: "MB" },
          { name: { ka: "ალგიციდი", en: "Algaecide" }, code: "ALG" },
        ],
      },
      {
        name: { ka: "ქვაბის წყლის ქიმია", en: "Boiler Water Chemicals" },
        items: [
          { name: { ka: "ჟანგბადის შემბოჭველი (DEHA)", en: "Oxygen Scavenger (DEHA)" }, code: "OS" },
          { name: { ka: "ტუტიანობის ბუსტერი", en: "Alkalinity Booster" }, code: "AB" },
          { name: { ka: "შლამის კონდიციონერი", en: "Sludge Conditioner" }, code: "SC" },
          { name: { ka: "კონდენსატის ხაზის დამუშავება", en: "Condensate Line Treatment" }, code: "CLT" },
        ],
      },
      {
        name: { ka: "დეზინფექტანტები და ზოგადი", en: "Disinfectants & General" },
        items: [
          { name: { ka: "დეზინფექტანტი", en: "Disinfectant" }, code: "DIS" },
          { name: { ka: "ანტისკალანტი", en: "Antiscalant" }, code: "AS" },
          { name: { ka: "კოაგულანტი / ფლოკულანტი", en: "Coagulant / Flocculant" }, code: "CF" },
        ],
      },
    ],
  },

  {
    id: "medical",
    code: "MED·LAB",
    icon: "cross",
    img: "/projects/g-28.jpg",
    name: { ka: "სამედიცინო და ლაბორატორიული აღჭურვილობა", en: "Medical & Laboratory Equipment" },
    tagline: {
      ka: "სამედიცინო და ლაბორატორიული პროდუქციის სრული ჯგუფები — დეტალები მოთხოვნით.",
      en: "Full groups of medical and laboratory products — details on request.",
    },
    source: { name: "HIPROVE", url: "https://www.hiprove.com/" },
    type: "list",
    subcats: [
      {
        name: { ka: "სამედიცინო მარაგი", en: "Medical Supplies" },
        items: [
          { ka: "ინექცია და ინფუზია", en: "Injection & Infusion" },
          { ka: "სახვევები და ბინტები", en: "Dressings & Bandages" },
          { ka: "სამედიცინო ტანსაცმელი", en: "Medical Wears" },
          { ka: "დრენაჟი და ირიგაცია", en: "Drainage & Irrigation" },
          { ka: "ზოგადი სამედიცინო მარაგი", en: "General Medical Supplies" },
          { ka: "სუნთქვა და ანესთეზია", en: "Breathing & Anaesthesia" },
          { ka: "სამედიცინო აღჭურვილობა", en: "Medical Equipment" },
          { ka: "პირველადი დახმარების ნაკრები", en: "First Aid Kits & Devices" },
          { ka: "სტომატოლოგიური პროდუქცია", en: "Dental Products" },
        ],
      },
      {
        name: { ka: "ლაბორატორია", en: "Laboratory" },
        items: [
          { ka: "ლაბორატორიული სახარჯი მასალა", en: "Laboratory Consumables" },
          { ka: "ლაბორატორიული აღჭურვილობა", en: "Laboratory Equipment" },
        ],
      },
      {
        name: { ka: "ვეტერინარია", en: "Veterinary" },
        items: [{ ka: "ვეტერინარული და ცხოველთა პროდუქცია", en: "Veterinary & Pet Products" }],
      },
    ],
  },

  {
    id: "industrial",
    code: "IND",
    icon: "gear",
    img: "/projects/g-24-6.jpg",
    name: { ka: "სამრეწველო აღჭურვილობა", en: "Industrial Equipment" },
    tagline: {
      ka: "ძრავები, საზღვაო ავტომატიკა და გემის მექანიზმები წამყვანი მწარმოებლებისგან.",
      en: "Engines, marine automation and ship machinery from leading makers.",
    },
    source: { name: "Hindustan Marine", url: "https://hindustanmarine.com/" },
    type: "list",
    subcats: [
      {
        name: { ka: "ძრავები — DG სეტი", en: "Engines — DG Set" },
        items: [
          { ka: "ძრავის ნაწილები", en: "Engine Spares" },
          { ka: "ძრავები", en: "Engines" },
          { ka: "გენერატორული აგრეგატი", en: "Generator Set" },
        ],
      },
      {
        name: { ka: "საზღვაო ავტომატიკა", en: "Marine Automation" },
        items: [
          { ka: "PLC კონტროლერები", en: "PLC" },
          { ka: "VFD სიხშირული ამძრავი", en: "VFD" },
          { ka: "ძაბვის ავტომატური რეგულატორი (AVR)", en: "Automatic Voltage Regulators (AVR)" },
          { ka: "ძრავის მართვის სისტემა", en: "Engine Control System" },
          { ka: "ხანძრის დეტექციის სისტემა", en: "Fire Detection System" },
          { ka: "წნევის მანომეტრი", en: "Pressure Gauge" },
          { ka: "სენსორები", en: "Sensors" },
          { ka: "სოლენოიდური სარქველი", en: "Solenoid Valve" },
          { ka: "ტრანსმიტერები", en: "Transmitters" },
        ],
      },
      {
        name: { ka: "გემის მექანიზმები", en: "Ship Machinery" },
        items: [
          { ka: "ჰაერის / გამაგრილებელი კომპრესორი", en: "Air / Chilling Compressor" },
          { ka: "ჰაერის საშრობი", en: "Air Dryer" },
          { ka: "რედუქტორი", en: "Gear Box" },
          { ka: "ჰიდრავლიკური ძრავა", en: "Hydraulic Motor" },
          { ka: "ჰიდრავლიკური ტუმბო", en: "Hydraulic Pump" },
          { ka: "ჰიდრავლიკური სარქველი", en: "Hydraulic Valve" },
          { ka: "ზეთის გამწმენდი", en: "Oil Purifier" },
          { ka: "ზეთ-წყლის სეპარატორი", en: "Oily Water Separator" },
          { ka: "წნევის გადამრთველი", en: "Pressure Switch" },
        ],
      },
    ],
  },
];

export type Project = { img: string; tag: Loc; title: Loc };

export const PROJECTS: Project[] = [
  { img: "g-25-6.jpg", tag: { ka: "RO დანადგარი", en: "RO plant" }, title: { ka: "ანტიოსმოსური სკიდი მართვის პანელით", en: "Reverse-osmosis skid with control panel" } },
  { img: "g-30-2.jpg", tag: { ka: "დოზირება", en: "Dosing" }, title: { ka: "დოზირების სადგური მართვის პანელით", en: "Dosing station with control panel" } },
  { img: "g-29.jpg", tag: { ka: "წყლის დამუშავება", en: "Water treatment" }, title: { ka: "სისტემა ლურჯი ავზით და სატუმბი კვანძით", en: "System with blue tank and pump unit" } },
  { img: "g-28.jpg", tag: { ka: "არმატურა", en: "Pipework" }, title: { ka: "მილგაყვანილობის კოლექტორი და სარქველები", en: "Pipe manifold and valves" } },
  { img: "g-26.jpg", tag: { ka: "RO დანადგარი", en: "RO plant" }, title: { ka: "ანტიოსმოსური სკიდი სამუშაო ზონაში", en: "Reverse-osmosis skid in service area" } },
  { img: "g-24-6.jpg", tag: { ka: "ინსტალაცია", en: "Installation" }, title: { ka: "დეზინფექციის სისტემა ობიექტზე", en: "Disinfection system on site" } },
  { img: "g-27-2.jpg", tag: { ka: "დოზირება", en: "Dosing" }, title: { ka: "მზომი ტუმბოს კვანძი", en: "Metering pump unit" } },
  { img: "g-25.jpg", tag: { ka: "მარილხსნარი", en: "Brine system" }, title: { ka: "მარილის გახსნისა და განზავების ავზები", en: "Salt dissolve & dilute tanks" } },
  { img: "g-24-1.jpg", tag: { ka: "დოზირება", en: "Dosing" }, title: { ka: "დოზირების სისტემა ლურჯი ავზებით", en: "Dosing system with blue tanks" } },
  { img: "g-23-3.jpg", tag: { ka: "მონტაჟი", en: "Installation" }, title: { ka: "რეზერვუარების მონტაჟი ობიექტზე", en: "Storage tank installation on site" } },
  { img: "g-26-3.jpg", tag: { ka: "ლოგისტიკა", en: "Logistics" }, title: { ka: "ავზებისა და აღჭურვილობის მიწოდება", en: "Tank and equipment delivery" } },
  { img: "g-25-4.jpg", tag: { ka: "რეგიონი", en: "Regional" }, title: { ka: "ობიექტი მთიან რეგიონში", en: "Site in a mountain region" } },
  { img: "g-24-3.jpg", tag: { ka: "დოზირება", en: "Dosing" }, title: { ka: "დოზირების ტუმბო ლურჯ ავზზე", en: "Dosing pump on blue tank" } },
  { img: "g-27.jpg", tag: { ka: "ობიექტი", en: "Field site" }, title: { ka: "სადგურის ოთახი და ტექნოლოგიური ავზები", en: "Plant room with process tanks" } },
  { img: "g-29-1.jpg", tag: { ka: "დოზირება", en: "Dosing" }, title: { ka: "ქიმიური დოზირების სადგური", en: "Chemical dosing station" } },
  { img: "g-24-5.jpg", tag: { ka: "მარილხსნარი", en: "Brine system" }, title: { ka: "მარილის მომზადების ავზები", en: "Salt preparation tanks" } },
];

export const CONTACT = {
  phone: "+995 555 123 456",
  phoneHref: "+995555123456",
  email: "info@sea.ge",
  addr: "Tbilisi, Georgia",
};
