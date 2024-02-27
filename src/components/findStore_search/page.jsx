"use client";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMapPin,
  faPhoneVolume,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import splitType from "split-type";
import styles from "@/components/findStore_search/findStore_search.module.css";
import "./findStore.css";
function Mapsection() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("");
  const options1 = [
    "Gujarat",
    "Telangana",
    "Kerela",
    "Karnataka",
    "Madhya_Pradesh",
    "West_Bengal",
    "Bihar",
    "Haryana",
    "Chandigarh",
    "Himachal_Pradesh",
    "Maharastra",
    "Goa",
    "Jharkhand",
    "Andhra_Pradesh",
    "Assam",
    "Punjab",
  ];
  const stateDistricts = [
    {
      state: "Gujarat",
      districts: [
        "Ahmedabad",
        "Dahod",
        "Rajpipla_Narmada",
        "Ankleshwar_Bharuch",
        "Gandhinagar",
        "Surat",
        "Vapi",
        "Vadodara",
        "Himatnagar",
        "Khedbrahma",
        "Anand",
        "Bhuj",
        "Rajkot",
        "Baroda",
        "Morbi",
        "Keshod",
        "Gondal",
        "Porbandar",
      ],
    },
    {
      state: "Telangana",
      districts: ["Hyderabad", "Warangal", "Karimnagar", "Khamman"],
    },
    {
      state: "Kerela",
      districts: [
        "Kochi",
        "Kannar",
        "Trivendrum",
        "Trichur",
        "Palakkad",
        "Calicut",
        "Kottayam",
        "Penthalmanna",
      ],
    },
    {
      state: "Karnataka",
      districts: [
        "Chitradurga",
        "Belgaun",
        "Bijapur",
        "Bidar",
        "Hubli",
        "Raichur",
        "Ballari",
        "Bagalkot",
        "Kalaburgi",
        "Hospet",
        "Bangalore",
        "Devangere",
      ],
    },
    {
      state: "Madhya_Pradesh",
      districts: [
        "Khandwa",
        "Khargone",
        "Burhanpur",
        "Bhopal",
        "Shujalpur",
        "Indore",
        "Shivpuri",
        "Ratlam",
        "Guna",
        "Jabalpur",
      ],
    },
    { state: "West_Bengal", districts: ["Kolkata", "Asansol", "Durgapur"] },
    {
      state: "Bihar",
      districts: [
        "Nalanda",
        "Gaya",
        "Mugattarpur",
        "Araah",
        "Darbhanga",
        "Saharsa",
        "Patna",
      ],
    },
    {
      state: "Haryana",
      districts: ["Ambala", "Kaithal", "Rewari", "Gurugram"],
    },
    { state: "Chandigarh", districts: ["Chandigarh"] },
    { state: "Himachal_Pradesh", districts: ["Una"] },
    {
      state: "Maharastra",
      districts: [
        "Bhandara",
        "Hinganghat",
        "Thane",
        "Chandrapur",
        "Gadchiroli",
        "Warora",
        "Wadsa",
        "Nandurbar",
        "Nagpur",
        "Washim",
        "Panvel",
        "Dhule",
        "Pune",
        "Ahmednagar",
        "Vashi",
        "Mumbai",
        "Yavatmal",
        "Amravati",
        "Gondia",
        "Dhule",
        "Akola",
      ],
    },
    { state: "Goa", districts: ["Margao"] },
    { state: "Jharkhand", districts: ["Jamshedpur", "Dhanbad"] },
    {
      state: "Andhra_Pradesh",
      districts: ["Kurnool"],
    },
    { state: "Assam", districts: ["Guwahati"] },
    { state: "Punjab", districts: ["Sangrur"] },
  ];
  const options2 =
    stateDistricts.find((item) => item.state === selectedOption1)?.districts ||
    [];
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("");

  const locationsData = {
    Gujarat: {
      Ahmedabad: [
        {
          content1: "SWAMI MARKETING - Ahmedabad",
          mapLocation: "Ahmedabad, Gujarat",
          phone: "97278 08833",
        },
        {
          content1: "MA UMIYA PLYWOOD & HARDWARE - Ahmedabad",
          mapLocation: "Ahmedabad, Gujarat",
          phone: "97278 08833",
        },
        {
          content1: "WOODLINK - Ahmedabad",
          mapLocation: "Ahmedabad, Gujarat",
          phone: "97278 08833",
        },
        {
          content1: "R D THAKKAR AND SONS - Ahmedabad",
          mapLocation: "Ahmedabad, Gujarat",
          phone: "97278 08833",
        },
        {
          content1: "DEVDEEP DÉCOR LLP - Ahmedabad",
          mapLocation: "Ahmedabad, Gujarat",
          phone: "97278 08833",
        },
      ],
      Dahod: [
        {
          content1: "BURHANI GENERAL HARDWARE - Dahod",
          mapLocation: "Dahod , Gujarat",
          phone: "90237 22900",
        },
      ],
      Rajpipla_Narmada: [
        {
          content1: "PAYAL PLY AND GLASS HARDWARE - Rajpipla-Narmada",
          mapLocation: "Rajpipla_Narmada, Gujarat",
          phone: "90237 22900",
        },
      ],
      Ankleshwar_Bharuch: [
        {
          content1: "JALARAM HARDWARE AND PLYWOOD CENTER - Ankleshwar Bharuch",
          mapLocation: "Ankleshwar-Bharuch, Gujarat",
          phone: "98752 49406",
        },
      ],
      Gandhinagar: [
        {
          content1: "RAJDHANI PLYWOOD - Gandhinagar",
          mapLocation: "Gandhinagar, Gujarat",
          phone: "97278 08833",
        },
      ],
      Surat: [
        {
          content1: "ARIHANT INTERIOR GALLERY - Surat",
          mapLocation: "Surat, Gujarat",
          phone: "81550 06003",
        },
        {
          content1: "KANAIYA HARDWARE - Surat",
          mapLocation: "Surat, Gujarat",
          phone: "81550 06003",
        },
      ],
      Vapi: [
        {
          content1: "FURNIPART - Vapi",
          mapLocation: "Vapi, Gujarat",
          phone: "81550 06003",
        },
      ],
      Vadodara: [
        {
          content1: "RK PATEL & CO. - Vadodara",
          mapLocation: "Vadodara, Gujarat",
          phone: "90237 22900",
        },
      ],
      Himatnagar: [
        {
          content1: "UMA SALES - Himatnagar",
          mapLocation: "Himatnagar, Gujarat",
          phone: "97278 08833",
        },
      ],
      Khedbrahma: [
        {
          content1: "LAXMI HARDWARE STORES - Khedbrahma",
          mapLocation: "Khedbrahma, Gujarat",
          phone: "97278 08833",
        },
      ],
      Anand: [
        {
          content1: "GAYATRI LAMINATES - Anand",
          mapLocation: "Anand, Gujarat",
          phone: "90237 22900",
        },
      ],
      Bhuj: [
        {
          content1: "SILVER BHUJ - Bhuj",
          mapLocation: "Bhuj, Gujarat",
          phone: "98793 21830",
        },
      ],
      Rajkot: [
        {
          content1: "DEVDEEP DÉCOR LLP - Rajkot",
          mapLocation: "Rajkot, Gujarat",
          phone: "97234 12040",
        },
      ],
      Surat: [
        {
          content1: "ROYALE TOUCHE SURAT - Surat",
          mapLocation: "Surat, Gujarat",
          phone: "81550 06003",
        },
      ],
      Baroda: [
        {
          content1: "ROYALE TOUCHE SALES - Baroda",
          mapLocation: "Baroda, Gujarat",
          phone: "90237 22900",
        },
      ],
      Morbi: [
        {
          content1: "RAJA WOODEN SUPPLIERS - Morbi",
          mapLocation: "Morbi, Gujarat",
          phone: "97234 12040",
        },
      ],
      Keshod: [
        {
          content1: "MILAN PLYWOOD - Keshod",
          mapLocation: "Keshod, Gujarat",
          phone: "97234 12040",
        },
      ],
      Gondal: [
        {
          content1: "BHOLENATH ENTERPRISES - Gondal",
          mapLocation: "Gondal, Gujarat",
          phone: "97234 12040",
        },
      ],
      Porbandar: [
        {
          content1: "M/S J K ENTERPRISE - Porbandar",
          mapLocation: "Porbandar, Gujarat",
          phone: "97234 12040",
        },
      ],
    },

    Telangana: {
      Hyderabad: [
        {
          content1: "SRI DATTA AGENCIES - Hyderabad",
          mapLocation: "Hyderabad, India",
          phone: "83470 09868",
        },
        {
          content1: "MAHAVEER ENTERPRISE - Hyderabad",
          mapLocation: "Hyderabad, India",
          phone: "83470 09868",
        },
        {
          content1: "SRI BALAJI IRON STEEL & HARDWARE MART - Hyderabad",
          mapLocation: "Hyderabad, India",
          phone: "83470 09868",
        },
      ],
      Warangal: [
        {
          content1: "KANDAKATLA ARJUN RAO GLASS MART - Warangal",
          mapLocation: "Warangal , India",
          phone: "83470 09868",
        },
      ],
      Karimnagar: [
        {
          content1: "LAXMI HARDWARE AND PLYWOOD - Karimnagar",
          mapLocation: "Karimnagar, India",
          phone: "83470 09868",
        },
      ],
      Khamman: [
        {
          content1: "SRI UMIYA HARDWARE - Khamman",
          mapLocation: "Khamman, India",
          phone: "83470 09868",
        },
      ],
    },

    Kerela: {
      Kochi: [
        {
          content1: "VPK DISTRIBUTORS - Kochi",
          mapLocation: "Kochi, India",
          phone: "92657 01798",
        },
      ],
      Kannar: [
        {
          content1: "K L ABDUL SATHAR IMPEX PVT LTD - Kannar",
          mapLocation: "Kannar , India",
          phone: "92657 01798",
        },
      ],
      Trivendrum: [
        {
          content1: "ARUN ENTERPRISES - Trivendrum",
          mapLocation: "Trivendrum, India",
          phone: "92657 01798",
        },
      ],
      Trichur: [
        {
          content1: "PLYLAND & HARDWARES - Trichur",
          mapLocation: "Trichur, India",
          phone: "92657 01798",
        },
      ],
      Palakkad: [
        {
          content1: "OLIVE PLY - Palakkad",
          mapLocation: "Palakkad, India",
          phone: "92657 01798",
        },
      ],
      Calicut: [
        {
          content1: "M K VENEERS & LAMINATES - Calicut",
          mapLocation: "Calicut, India",
          phone: "92657 01798",
        },
      ],
      Kottayam: [
        {
          content1: "FAIR TRADERS - Kottayam",
          mapLocation: "Kottayam, India",
          phone: "92657 01798",
        },
      ],
      Penthalmanna: [
        {
          content1: "WOOD PLY - Penthalmanna",
          mapLocation: "Penthalmanna, India",
          phone: "92657 01798",
        },
      ],
    },

    Karnataka: {
      Chitradurga: [
        {
          content1: "SRI MAHALAXMI FRAME WORKS - Chitradurga",
          mapLocation: "Chitradurga, India",
          phone: "81519 03444",
        },
      ],
      Belgaun: [
        {
          content1: "HEDA PLYWOODS - Belgaun",
          mapLocation: "Belgaun , India",
          phone: "81519 03444",
        },
      ],
      Bijapur: [
        {
          content1: "PREM HARDWARE - Bijapur",
          mapLocation: "Bijapur, India",
          phone: "81519 03444",
        },
      ],
      Bidar: [
        {
          content1: "SURYA PLYWOOD AND GLASS CENTER - Bidar",
          mapLocation: "Bidar, India",
          phone: "81519 03444",
        },
      ],
      Hubli: [
        {
          content1: "RVM BUILDZONE LLP - Hubli",
          mapLocation: "Hubli, India",
          phone: "81519 03444",
        },
      ],
      Raichur: [
        {
          content1: "SHANTI HARDWARE & PLYWOOD CENTRE - Raichur",
          mapLocation: "Raichur, India",
          phone: "81519 03444",
        },
      ],
      Ballari: [
        {
          content1: "JAIN HARDWARE - Ballari",
          mapLocation: "Ballari, India",
          phone: "81519 03444",
        },
      ],
      Bagalkot: [
        {
          content1: "PATIL PLYWOOD AND HARDWARE - Bagalkot",
          mapLocation: "Bagalkot, India",
          phone: "81519 03444",
        },
      ],
      Kalaburgi: [
        {
          content1: "HINDUSTAN TRADERS - Kalaburgi",
          mapLocation: "Kalaburgi, India",
          phone: "81519 03444",
        },
      ],
      Hospet: [
        {
          content1: "HEERA TRADE LINKS - Hospet",
          mapLocation: "Hospet, India",
          phone: "81519 03444",
        },
      ],
      Bangalore: [
        {
          content1: "OM TIMBER - Bangalore",
          mapLocation: "Bangalore, India",
          phone: "81519 03444",
        },
        {
          content1: "ANAND ENTERPRISES - Bangalore",
          mapLocation: "Bangalore, India",
          phone: "81519 03444",
        },
        {
          content1: "BHARAT WOOD - Bangalore",
          mapLocation: "Bangalore, India",
          phone: "81519 03444",
        },
      ],
      Devangere: [
        {
          content1: "N S JAYADEVA PLYWOODS - Devangere",
          mapLocation: "Devangere, India",
          phone: "81519 03444",
        },
      ],
    },

    Madhya_Pradesh: {
      Khandwa: [
        {
          content1: "SETHI PLYWOOD & GLASSS HOUSE - Khandwa",
          mapLocation: "Khandwa, India",
          phone: "95129 00101",
        },
      ],
      Khargone: [
        {
          content1: "SUMUKH PLYWOOD AND HARDWARE - Khargone",
          mapLocation: "Khargone , India",
          phone: "95129 00101",
        },
      ],
      Burhanpur: [
        {
          content1: "SHAAMA HARDWARE STORE - Burhanpur",
          mapLocation: "Burhanpur, India",
          phone: "95129 00101",
        },
      ],
      Bhopal: [
        {
          content1: "ARYA PLYWOODS - Bhopal",
          mapLocation: "Bhopal, India",
          phone: "95129 00101",
        },
      ],
      Shujalpur: [
        {
          content1: "KHURANA PLY & FURNITURE HOME - Shujalpur",
          mapLocation: "Shujalpur, India",
          phone: "95129 00101",
        },
      ],
      Indore: [
        {
          content1: "NATIONAL PLYWOOD GALLERY - Indore",
          mapLocation: "Indore, India",
          phone: "95129 00101",
        },
      ],
      Shivpuri: [
        {
          content1: "ASHISH HARDWARE & SANITARY STORE - Shivpuri",
          mapLocation: "Shivpuri, India",
          phone: "95129 00101",
        },
      ],
      Ratlam: [
        {
          content1: "AVIRAJ TIMBER AND PLYWOOD - Ratlam",
          mapLocation: "Ratlam, India",
          phone: "95129 00101",
        },
      ],
      Guna: [
        {
          content1: "NEW BRIJENDRA STORES - Guna",
          mapLocation: "Guna, India",
          phone: "95129 00101",
        },
      ],
      Jabalpur: [
        {
          content1: "NATRAJ TRADES - Jabalpur",
          mapLocation: "Jabalpur, India",
          phone: "95129 00101",
        },
      ],
    },

    West_Bengal: {
      Kolkata: [
        {
          content1: "THE LIVING IDEA - Kolkata",
          mapLocation: "Kolkata, India",
          phone: "83470 04478",
        },
      ],
      Asansol: [
        {
          content1: "SWASTIK PLY & GLASS - Asansol",
          mapLocation: "Asansol , India",
          phone: "83470 04478",
        },
      ],
      Durgapur: [
        {
          content1: "SHREE DURGA PLYWOOD - Durgapur",
          mapLocation: "Durgapur, India",
          phone: "83470 04478",
        },
      ],
    },

    Bihar: {
      Nalanda: [
        {
          content1: "M.R. GLASS AND HARDWARE PLY - Nalanda",
          mapLocation: "Nalanda, India",
          phone: "98211 99577",
        },
      ],
      Gaya: [
        {
          content1: "MODERN PLY HOUSE - Gaya",
          mapLocation: "Gaya , India",
          phone: "98211 99577",
        },
      ],
      Mugattarpur: [
        {
          content1: "MARUTI PLY AND GLASS - Mugattarpur",
          mapLocation: "Mugattarpur, India",
          phone: "98211 99577",
        },
      ],
      Araah: [
        {
          content1: "SHEKHAR INTERIOR SOLUTION - Araah",
          mapLocation: "Araah, India",
          phone: "98211 99577",
        },
      ],
      Darbhanga: [
        {
          content1: "APOLLO FURNITURE - Darbhanga",
          mapLocation: "Darbhanga, India",
          phone: "98211 99577",
        },
      ],
      Saharsa: [
        {
          content1: "SHYAM PLY - Saharsa",
          mapLocation: "Saharsa, India",
          phone: "98211 99577",
        },
      ],
      Patna: [
        {
          content1: "PATNA PLY - Patna",
          mapLocation: "Patna, India",
          phone: "98211 99577",
        },
      ],
    },

    Haryana: {
      Ambala: [
        {
          content1: "M.R. GLASS AND HARDWARE PLY - Ambala",
          mapLocation: "Ambala, India",
          phone: "95606 66675",
        },
      ],
      Kaithal: [
        {
          content1: "ARORA PLY AND HARDWARE STORE - Kaithal",
          mapLocation: "Kaithal , India",
          phone: "95606 66675",
        },
      ],
      Rewari: [
        {
          content1: "DUA PLYWOOD & TIMBER TRADERS- Rewari",
          mapLocation: "Rewari, India",
          phone: "95606 66675",
        },
      ],
      Gurugram: [
        {
          content1: "HARYANA TIMBER STORE - Gurugram",
          mapLocation: "Gurugram, India",
          phone: "95606 66675",
        },
      ],
    },

    Chandigarh: {
      Chandigarh: [
        {
          content1: "PLY SAMRAT - Chandigarh",
          mapLocation: "Chandigarh, India",
          phone: "95606 66675",
        },
      ],
    },

    Himachal_Pradesh: {
      Una: [
        {
          content1: "SHREE ROOP MARKETING - Una",
          mapLocation: "Una, India",
          phone: "98211 99577",
        },
      ],
    },
    
    Maharastra: {
      Bhandara: [
        {
          content1: "SINDH PLY AND GLASS AGENCIES - Bhandara",
          mapLocation: "Bhandara, India",
          phone: "97024 00627",
        },
      ],
      Hinganghat: [
        {
          content1: "KIRTI TRADERS - Hinganghat",
          mapLocation: "Hinganghat , India",
          phone: "97024 00627",
        },
      ],
      Thane: [
        {
          content1: "DURGA PLYWOOD CENTRE- Thane",
          mapLocation: "Thane, India",
          phone: "97024 00627",
        },
      ],
      Chandrapur: [
        {
          content1: "INTERIOR STUDIO - Chandrapur",
          mapLocation: "Chandrapur, India",
          phone: "97024 00627",
        },
      ],
      Gadchiroli: [
        {
          content1: "SACHIN FURNITURE WORKS AND ALUMINIUM - Gadchiroli",
          mapLocation: "Gadchiroli, India",
          phone: "97024 00627",
        },
      ],
      Warola: [
        {
          content1: "SHIVAM FURNITURE & PLYWOOD CENTER - Warola",
          mapLocation: "Warola, India",
          phone: "97024 00627",
        },
      ],
      Wadsa: [
        {
          content1: "RAKESH FUTNITURE - Wadsa",
          mapLocation: "Wadsa, India",
          phone: "97024 00627",
        },
      ],
      Nandurbar: [
        {
          content1: "C.M. PLY & LAMINATES - Nandurbar",
          mapLocation: "Nandurbar, India",
          phone: "97024 00627",
        },
      ],
      Nagpur: [
        {
          content1: "PLY RANGE - Nagpur",
          mapLocation: "Nagpur, India",
          phone: "97024 00627",
        },
      ],
      Washim: [
        {
          content1: "MANGALAM PLYWOOD - Washim",
          mapLocation: "Washim, India",
          phone: "97024 00627",
        },
      ],
      Panvel: [
        {
          content1: "KRISHNA PLYWOOD - Panvel",
          mapLocation: "Panvel, India",
          phone: "97024 00627",
        },
      ],
      Dhule: [
        {
          content1: "RATHOD PLY - Dhule",
          mapLocation: "Dhule, India",
          phone: "97024 00627",
        },
        {
          content1: "GANESH SALES - Dhule",
          mapLocation: "Dhule, India",
          phone: "97024 00627",
        },
      ],
      Pune: [
        {
          content1: "DALAL & ASSOCIATES - Pune",
          mapLocation: "Pune, India",
          phone: "97024 00627",
        },
        {
          content1: "CITYPLY - Pune",
          mapLocation: "Pune, India",
          phone: "97024 00627",
        },
        {
          content1: "DIVYA ENTERPRISE - Pune",
          mapLocation: "Pune, India",
          phone: "97024 00627",
        },
      ],
      Ahmednagar: [
        {
          content1: "JYOTI SALES CORPORATION - Ahmednagar",
          mapLocation: "Ahmednagar, India",
          phone: "97024 00627",
        },
      ],
      Vashi: [
        {
          content1: "SWASTIK PLYWOOD - Vashi",
          mapLocation: "Vashi, India",
          phone: "97024 00627",
        },
      ],
      Mumbai: [
        {
          content1: "MANGALAM PLY N LAMINATE - Mumbai",
          mapLocation: "Mumbai, India",
          phone: "97024 00627",
        },
        {
          content1: "SAMEER ENTERPRISES - Mumbai",
          mapLocation: "Mumbai, India",
          phone: "97024 00627",
        },
        {
          content1: "PARAS PLY - Mumbai",
          mapLocation: "Mumbai, India",
          phone: "97024 00627",
        },
        {
          content1: "PLY COTTAGE - Mumbai",
          mapLocation: "Mumbai, India",
          phone: "97024 00627",
        },
        {
          content1: "GOLDEN PLYWOOD - Mumbai",
          mapLocation: "Mumbai, India",
          phone: "97024 00627",
        },
        {
          content1: "HAWA TRADING COMPANY - Mumbai",
          mapLocation: "Mumbai, India",
          phone: "97024 00627",
        },
        {
          content1: "ARCHITEC POINT - Mumbai",
          mapLocation: "Mumbai, India",
          phone: "97024 00627",
        },
        {
          content1: "SAHU & SONS - Mumbai",
          mapLocation: "Mumbai, India",
          phone: "97024 00627",
        },
        {
          content1: "SWASTIK PLYWOOD & VENEERS - Mumbai",
          mapLocation: "Mumbai, India",
          phone: "97024 00627",
        },
        {
          content1: "VASAI TIMBER INDUSTRIES - Mumbai",
          mapLocation: "Mumbai, India",
          phone: "97024 00627",
        },

      ],
      Amravati: [
        {
          content1: "JAIN PLYWOOD - Amravati",
          mapLocation: "Amravati, India",
          phone: "97024 00627",
        },
      ],
      Gondia: [
        {
          content1: "ASHIRWAD PLYLAM - Gondia",
          mapLocation: "Gondia, India",
          phone: "97024 00627",
        },
      ],
      Akola: [
        {
          content1: "SHREE BALAJI PLYWOOD - Akola",
          mapLocation: "Akola, India",
          phone: "97024 00627",
        },
      ],
    },
    
    Goa: {
      Margao: [
        {
          content1: "SHREE HARDWARE AND CO - Margao",
          mapLocation: "Margao, India",
          phone: "97024 00627",
        },
      ],
    },

    Jharkhand: {
      Jamshedpur: [
        {
          content1: "JAMSHEDPUR HARDWARE AND SANITARY MART - Jamshedpur",
          mapLocation: "Jamshedpur, India",
          phone: "98211 99577",
        },
      ],
      Dhanbad: [
        {
          content1: "DHANBAD PLY - Dhanbad",
          mapLocation: "Dhanbad, India",
          phone: "98211 99577",
        },
      ],
    },

    Andhra_Pradesh: {
      Kurnool: [
        {
          content1: "MARUTI LAMINATES - Kurnool",
          mapLocation: "Kurnool, India",
          phone: "83470 09868",
        },
      ],
    },

    Assam: {
      Guwahati: [
        {
          content1: "H M TRADERS - Guwahati",
          mapLocation: "Guwahati, India",
          phone: "93289 04813",
        },
      ],
    },

    Punjab: {
      Sangrur: [
        {
          content1: "NEW GLASS HOUSE - Sangrur",
          mapLocation: "Sangrur, India",
          phone: "90237 29857",
        },
      ],
    },

  };
  const [selectedLocationContent, setSelectedLocationContent] = useState([
    {
      content1: "Please select State and City to search Royalè Touchè Experience Centre near your location.",
    },
  ]);
  const [getDirectionURL, setGetDirectionURL] = useState("");
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    if (isOpen2) setIsOpen2(false);
  };

  const handleOptionClick1 = (option) => {
    if (selectedOption1 !== option) {
      setSelectedOption2("");
    }

    setSelectedOption1(option);
    setIsOpen1(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    if (isOpen1) setIsOpen1(false);
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
  };
  const handleSearch = () => {
    if (!selectedOption1 || !selectedOption2) {
      alert("Please select both State and City");
      return;
    }
    updateSelectedLocationContent();
  };

  const updateSelectedLocationContent = () => {
    if (!selectedOption1 || !selectedOption2) {
      setSelectedLocationContent([
        {
          content1: "Please select both State and City",
        },
      ]);
      return;
    }

    const selectedLocations =
      locationsData[selectedOption1] &&
      locationsData[selectedOption1][selectedOption2]
        ? locationsData[selectedOption1][selectedOption2]
        : null;

    if (selectedLocations) {
      setSelectedLocationContent(selectedLocations);
    } else {
      setSelectedLocationContent([
        {
          content1: "No Experience Centre found in selected location. Send us a message if you need any help!",
        },
      ]);
    }
  };

  const storeRef = useRef("");
  let refs = useRef([]);
  useEffect(() => {
    setTimeout(() => {
      const ourText = new splitType(storeRef.current, { types: "chars" });
      const chars = ourText.chars;
      gsap.fromTo(
        chars,
        {
          y: 100,
          opacity: 0,
          rotate: "45deg",
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 2,
          rotate: "0deg",
          ease: "power4.out",
        }
      );
    }, 2300);
  }, []);
  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={word + "_" + i} className="findStore_text_animation_wrapper">
          {letters}
        </p>
      );
    });
    return body;
  };
  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div className={styles.Map_section}>
      <div className={styles.map_section1}>
        <div className={styles.content_Text} ref={storeRef}>
          {splitWords("Royalé Touché Experience Centre Near Me")}
        </div>
        <div className={styles.option_section}>
          <div
            className={`${styles.select_menu} ${isOpen1 ? styles.active : ""}`}
            onClick={toggleDropdown1}
          >

            <div className={styles.select_btn} onClick={toggleDropdown1}>
              <div className={styles.sBtn_text}>
                {selectedOption1 || "Select State"}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="14"
                viewBox="0 0 22 14"
                fill="none"
              >
                <path d="M2 2L11 11L20 2" stroke="black" strokeWidth="3" />
              </svg>
            </div>
            <ul className={styles.options}>
              {options1.map((option, index) => (
                <li
                  key={index}
                  className={styles.option}
                  onClick={() => handleOptionClick1(option)}
                >
                  <span className={styles.option_text}>{option}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`${styles.select_menu} ${isOpen2 ? styles.active : ""}`}
            onClick={toggleDropdown2}
          >
            <div className={styles.select_btn} onClick={toggleDropdown2}>
              <div className={styles.sBtn_text}>
                {selectedOption2 || "Select City"}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="14"
                viewBox="0 0 22 14"
                fill="none"
              >
                <path d="M2 2L11 11L20 2" stroke="black" strokeWidth="3" />
              </svg>
            </div>
            <ul className={styles.options}>
              {options2.map((option, index) => (
                <li
                  key={index}
                  className={styles.option}
                  onClick={() => handleOptionClick2(option)}
                >
                  <span className={styles.option_text}>{option}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className={styles.search_button} onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className={styles.map_section2}>
        <div className={styles.content30}>
          {selectedLocationContent.map((location, index) => (
            <>
            {/* <div>
              <p>sasasas</p>
              </div> */}
            <div key={index}>
              <p className={styles.content_1}>{location.content1}</p>
              {location.mapLocation && location.phone && (
                <div className={styles.main_content}>
                  {/* Display mapLocation and phone only if available */}
                  <div className={styles.content}>
                    <FontAwesomeIcon icon={faMapPin} className={styles.allsvg} />
                    <div className={styles.address}>{location.mapLocation}</div>
                  </div>
                  <div className={styles.content}>
                    <FontAwesomeIcon
                      icon={faPhoneVolume}
                      className={styles.allsvg}
                    />
                    <div className={styles.address}>{location.phone}</div>
                  </div>
                </div>
              )}
              {location.mapLocation && location.phone && (
                <div className={styles.content_border}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="371"
                    height="2"
                    viewBox="0 0 371 2"
                    fill="none"
                  >
                    <path
                      d="M0.5 1H371"
                      stroke="#CFB071"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              )}
            </div>
            </>
          ))}

        </div>
        <div className={styles.content70}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.802628858455!2d72.46987617617147!3d23.03101801601143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b09932f1e99%3A0x75fbb34492ff4f3e!2sRoyale%20Touche%20Wooden%20Floors!5e0!3m2!1sen!2sin!4v1708933279442!5m2!1sen!2sin"
            width="100%"
            height="720"
            allowfullscreen=""
            className={styles.map_frame}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Mapsection;
