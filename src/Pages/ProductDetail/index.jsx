import React from "react";
import { useParams } from "react-router-dom";

import "./ProductDetail.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import ActionButton from "../../Component/Action/ActionButton";

function ProductDetail() {
  const { productId } = useParams();
  const starList = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

  const gameList = [
    // {
    //   id: "0",
    //   title: "",
    //   rating: "",
    //   price: "",
    //   genre: "",
    //   developer: "",
    //   publisher: "",
    //   release: "",
    //   downloads: "",
    //   esrb: "",
    //   status: "",
    //   age: "",
    //   requirement: {
    //     minimum: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
    //     recommended: { memory: "", storage: "", cpu: "", gpu: "", os: "" },
    //   },
    //   thumbnail: "",
    //   imageList: [],
    //   logo: "",
    //   description: "",
    // },
    {
      id: "0",
      title: "Grand Theft Auto V",
      rating: "5",
      price: "2,321",
      genre: "Adventure",
      developer: "Rockstar Games",
      publisher: "Rockstar Games",
      release: "05/14/20",
      downloads: "175",
      esrb: "R",
      status: "online",
      age: "18+",
      requirement: {
        minimum: {
          memory: "4",
          storage: "90",
          cpu: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs)",
          gpu: "NVIDIA 9800 GT 1GB",
          os: "Windows 10 64 Bit",
        },
        recommended: {
          memory: "8",
          storage: "90",
          cpu: "Intel Core i5 3470 @ 3.2GHZ (4 CPUs)",
          gpu: "NVIDIA GTX 660 2GB",
          os: "Windows 10 64 Bit",
        },
      },
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/GTAOnline.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_400x400_GameLogo-1000x1000-f6c47a98454049a5e63959f7b6f898c4fc22829c.png?h=270&quality=medium&resize=1&w=480",
      description:
        "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
    },
    {
      id: "1",
      title: "Valorant",
      rating: "4",
      price: "2500",
      genre: "Shooter",
      developer: "Riot Games",
      publisher: "Riot Games",
      release: "11/04/21",
      downloads: "15.9",
      esrb: "T",
      status: "online",
      age: "13+",
      requirement: {
        minimum: {
          memory: "4",
          storage: "20",
          cpu: "Intel Core 2 Duo E8400 (Intel)",
          gpu: "Intel HD 4000, Radeon R5 200",
          os: "Window 7/8",
        },
        recommended: {
          memory: "4",
          storage: "20",
          cpu: "Intel i3-4150 (Intel), Ryzen 3 1200",
          gpu: "GeForce GT 730, Radeon R7 240",
          os: "Window 10 (64-Bit)",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/valtall_1200x1600-300d8e4cb9bee9dbb1166b574b3bdc93?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-valorant-riotgames-ic1-400x270-ee924f75e8d4.png?h=270&quality=medium&resize=1&w=480",
      description:
        "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.",
    },
    {
      id: "2",
      title: "FIFA 23 Ultimate Edition",
      rating: "4",
      price: "4800",
      genre: "Sports",
      developer: "EA Canada",
      publisher: "Electronic Arts",
      release: "09/30/22",
      downloads: "10.3",
      esrb: "E",
      status: "Offline",
      age: "All",
      requirement: {
        minimum: {
          memory: "8",
          storage: "100",
          cpu: "Core i5 6600k",
          gpu: "GeForce GTX 1050 Ti",
          os: "Windows 10 64-bit",
        },
        recommended: {
          memory: "12",
          storage: "100",
          cpu: "Core i7 6700",
          gpu: "GeForce GTX 1660",
          os: "Windows 10 64-bit",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2022/07/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-fifa23ultimateeditionlimitedtimebonus-eacanada-editions-ic1-200x200-674fec977cfd.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Kick off your season with a boost! FIFA 23 Ultimate Edition includes 4600 FIFA Points. This is a soccer simulation game in which players engage in realistic matches with teams across international leagues. Players can practice penalty kicks, assign on-field strategies, and participate in a variety of game modes to improve their soccer skills.",
    },
    {
      id: "3",
      title: "STAR WARS Jedi: Survivor™",
      rating: "4",
      price: "3500",
      genre: "Adventure",
      developer: "Respawn Entertainment",
      publisher: "Electronic Arts",
      release: "04/28/23",
      downloads: "60",
      esrb: "T",
      status: "Offline",
      age: "18+",
      requirement: {
        minimum: {
          memory: "8",
          storage: "155",
          cpu: "4 core / 8 threads | Intel Core i7-7700",
          gpu: "Ryzen 5 1400",
          os: "Windows 10 64-bit",
        },
        recommended: {
          memory: "16",
          storage: "155",
          cpu: "4 core / 8 threads | Intel Core i5 11600K",
          gpu: "Ryzen 5 5600X",
          os: "Windows 10 64-bit",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2022/06/star-wars-jedi-survivor-keyart.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-starwarsjedisurvivorstandardedition-respawnentertainment-ic1-400x400-9ff568e5738d.png?h=270&quality=medium&resize=1&w=480",
      description:
        "The story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third-person galaxy-spanning action-adventure game from Respawn Entertainment and Lucasfilm Games.",
    },
    {
      id: "4",
      title: "Battlefield™ 2042",
      rating: "5",
      price: "1500",
      genre: "Action",
      developer: "DICE",
      publisher: "Electronic Arts",
      release: "11/19/21",
      downloads: "70",
      esrb: "M",
      status: "Online",
      age: "17+",
      requirement: {
        minimum: {
          memory: "8",
          storage: "100",
          cpu: "Core i5 6600K",
          gpu: "Nvidia GeForce GTX 1050 Ti",
          os: "64-bit Windows 10",
        },
        recommended: {
          memory: "16",
          storage: "100",
          cpu: "Core i5 6600K",
          gpu: "Nvidia GeForce RTX 3060",
          os: "64-bit Windows 10",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-battlefield2042-dice-ic1-400x400-9d42aed4f59b.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Battlefield™ 2042 marks the return to the iconic all-out warfare of the franchise. Squad up and bring a cutting-edge arsenal into massive-scale battlegrounds, set in a near-future world transformed by disorder.",
    },
    {
      id: "5",
      title: "Dead Space",
      rating: "5",
      price: "3000",
      genre: "Horror",
      developer: "Motive Studio",
      publisher: "Electronic Arts",
      release: "01/27/23",
      downloads: "65",
      esrb: "M",
      status: "Offline",
      age: "17+",
      requirement: {
        minimum: {
          memory: "8",
          storage: "50GB SATA SSD",
          cpu: "Core i5 8600",
          gpu: "Ryzen 5 2600x",
          os: "Window 10 64-bit",
        },
        recommended: {
          memory: "16",
          storage: "50GB SSD PCIe compatible",
          cpu: "Core i5 11600K",
          gpu: "Ryzen 5 5600X",
          os: "Window 10 64-bit",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2022/09/dead-space-classic-keyart.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-deadspace-motive…64eb642fc.png?h=270&quality=medium&resize=1&w=480",
      description:
        "The sci-fi survival horror classic returns, completely rebuilt to offer an even more immersive experience – including visual, audio, and gameplay improvements.",
    },
    {
      id: "6",
      title: "The Sims™ 4",
      rating: "5",
      price: "1500",
      genre: "Simulation",
      developer: "Maxis",
      publisher: "Electronic Arts",
      release: "02/02/23",
      downloads: "90",
      esrb: "T",
      status: "Online",
      age: "18+",
      requirement: {
        minimum: {
          memory: "4",
          storage: "26",
          cpu: "3.3 GHz Intel Core i3-3220",
          gpu: "NVIDIA GeForce 6600",
          os: "64 Bit Windows 10",
        },
        recommended: {
          memory: "8",
          storage: "51",
          cpu: "Intel core i5 (4 cores)",
          gpu: "NVIDIA GTX 650",
          os: "64 Bit Windows 10",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-sims-4-keyart.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-thesims4-electronicarts-ic1-400x400-b8a3c66fbb00.png?h=270&quality=medium&resize=1&w=480",
      description:
        "The Sims 4 is free to download! Unleash your imagination and create a unique world of Sims that’s an expression of you. Choose how Sims look, act, and dress, then manage the ups and downs of their everyday lives.",
    },
    {
      id: "7",
      title: "Madden NFL 23",
      rating: "4",
      price: "3000",
      genre: "Sports",
      developer: "Tiburon",
      publisher: "Electronic Arts",
      release: "08/19/22",
      downloads: "30",
      esrb: "E",
      status: "Online",
      age: "All",
      requirement: {
        minimum: {
          memory: "8",
          storage: "50",
          cpu: "Core i3-6100 @3.7GHz",
          gpu: "GeForce GTX 670",
          os: "Windows 10",
        },
        recommended: {
          memory: "16",
          storage: "50",
          cpu: "Core i5-3350 @3.40GHz",
          gpu: "GeForce GTX 680",
          os: "Windows 10",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2022/05/madden-23-keyart.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-maddennfl23-tiburon-ic1-400x400-f44e75afe807.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Play your way into the history books! Updates to your favorite modes deliver all-new ways to control your impact with every decision. Call the shots in Franchise, establish a legacy in Face of the Franchise: The League, and dominate in Madden Ultimate Team™.",
    },
    {
      id: "8",
      title: "GTA: Vice City – Definitive",
      rating: "5",
      price: "1500",
      genre: "Open world",
      developer: "Rockstar Games",
      publisher: "Rockstar Games",
      release: "02/15/23",
      downloads: "100",
      esrb: "M",
      status: "Offline",
      age: "17+",
      requirement: {
        minimum: {
          memory: "8",
          storage: "10",
          cpu: "Intel® Core™ i5-6600K",
          gpu: "Nvidia GeForce GTX 760 2GB",
          os: "Windows 10",
        },
        recommended: {
          memory: "16",
          storage: "10",
          cpu: "Intel® Core™ i7-6600K",
          gpu: "Nvidia GeForce GTX 970 4GB",
          os: "Windows 10",
        },
      },
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/vicecitystories.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-grandtheftautovicecitythedefinitiveedition-rockstargames-ic1-400x400-09731a63f67e.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Grand Theft Auto: Vice City: Welcome to the 1980s… Experience Tommy Vercetti’s tale of betrayal and revenge in the neon-soaked tropical sprawl of Vice City, a town brimming with excess, ready to be taken over, your way.",
    },
    {
      id: "9",
      title: "Mass Effect™ Legendary Edition",
      rating: "5",
      price: "3000",
      genre: "Action",
      developer: "BioWare",
      publisher: "Electronic Arts",
      release: "06/15/22",
      downloads: "78",
      esrb: "M",
      status: "Offline",
      age: "17+",
      requirement: {
        minimum: {
          memory: "8",
          storage: "120",
          cpu: "Intel Core i5 3570",
          gpu: "NVIDIA GTX 760",
          os: "64-bit Windows 10",
        },
        recommended: {
          memory: "16",
          storage: "120",
          cpu: "Intel Core i7-7700",
          gpu: "NVIDIA GTX 1070 ",
          os: "64-bit Windows 10",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2021/02/mass-effect-legendary-edition-key-art.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-masseffectlegendaryedition-bioware-ic1-400x400-2fb662c963a7.png?h=270&quality=medium&resize=1&w=480",
      description:
        "The Mass Effect™ Legendary Edition includes single-player base content and over 40 DLC from the highly acclaimed Mass Effect, Mass Effect 2, and Mass Effect 3 games, remastered and optimized for 4K Ultra HD.",
    },
    {
      id: "10",
      title: "It Takes Two",
      rating: "5",
      price: "2200",
      genre: "Adventure",
      developer: "Hazelight",
      publisher: "Electronic Arts",
      release: "06/10/22",
      downloads: "40",
      esrb: "T",
      status: "Offline",
      age: "18+",
      requirement: {
        minimum: {
          memory: "",
          storage: "50",
          cpu: "Intel Core i3-2100T",
          gpu: "Nvidia GeForce GTX 660",
          os: "Windows 8.1 64-bit or Windows 10 64-bit",
        },
        recommended: {
          memory: "",
          storage: "50",
          cpu: "Intel Core i5 3570K",
          gpu: "Nvidia GeForce GTX 980",
          os: "Windows 8.1 64-bit or Windows 10 64-bit",
        },
      },
      thumbnail:
        "https://media.contentapi.ea.com/content/dam/gin/images/2020/06/it-takes-two-keyart.jpg.adapt.crop1x1.767p.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-ittakestwo-hazelight-ic1-400x400-10a8bec2a659.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Embark on the craziest journey of your life in It Takes Two. Invite a friend to join for free with Friend’s Pass* and work together across a huge variety of gleefully disruptive gameplay challenges.",
    },
    {
      id: "11",
      title: "Grand Theft Auto V",
      rating: "5",
      price: "2300",
      genre: "Open world",
      developer: "Rockstar Games",
      publisher: "Rockstar Games",
      release: "05/14/20",
      downloads: "120",
      esrb: "M",
      status: "5",
      age: "17+",
      requirement: {
        minimum: {
          memory: "4",
          storage: "90",
          cpu: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz",
          gpu: "NVIDIA 9800 GT 1GB",
          os: "Windows 10 64 Bit",
        },
        recommended: {
          memory: "8",
          storage: "90",
          cpu: "Intel Core i5 3470 @ 3.2GHZ",
          gpu: "NVIDIA GTX 660 2GB",
          os: "Windows 10 64 Bit",
        },
      },
      thumbnail:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/V.jpg",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_400x400_GameLogo-1000x1000-f6c47a98454049a5e63959f7b6f898c4fc22829c.png?h=270&quality=medium&resize=1&w=480",
      description:
        "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
    },
    {
      id: "12",
      title: "NARAKA: BLADEPOINT",
      rating: "4",
      price: "1200",
      genre: "Action",
      developer: "24 Entertainment",
      publisher: "NetEase Montreal",
      release: "12/08/21",
      downloads: "",
      esrb: "E",
      status: "Online",
      age: "All",
      requirement: {
        minimum: {
          memory: "8",
          storage: "20",
          cpu: "Intel i5 4th generation",
          gpu: "NVIDIA GeForce GTX 750TI",
          os: "Windows 10 64-bit",
        },
        recommended: {
          memory: "16",
          storage: "20",
          cpu: "Intel i7 7th generation",
          gpu: "NVIDIA GeForce GTX 1060 6G",
          os: "Windows 10 64-bit",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/offer/0c6aee83b9b64372bf44a043001325f2/EGS_NARAKABLADEPOINT_24Entertainment_S2_1200x1600-88f4e1f1ee1ffa8f7a85bf4e3a492e7e?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-narakabladepoint-24entertainment-ic1-400x146-6f7be3db7ca0.png?h=270&quality=medium&resize=1&w=480",
      description:
        "NARAKA: BLADEPOINT is an up to 60-player PVP mythical action combat experience with martial arts inspired melee combat, gravity defying mobility, vast arsenals of melee & ranged weapons, legendary customizable heroes with epic abilities.",
    },
    {
      id: "13",
      title: "EBOLA 3",
      rating: "",
      price: "720",
      genre: "Horror",
      developer: "Indie Games Studio",
      publisher: "Indie Games Studio",
      release: "04/26/23",
      downloads: "25",
      esrb: "M",
      status: "Offline",
      age: "17+",
      requirement: {
        minimum: {
          memory: "8",
          storage: "26",
          cpu: "Intel CORE i5",
          gpu: "Nvidia Geforce 820m",
          os: "Windows 7/8/10",
        },
        recommended: {
          memory: "8",
          storage: "26",
          cpu: "Intel CORE i7",
          gpu: "NVIDIA GeForce GTX 1060",
          os: "Windows 7/8/10",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/spt-assets/8e51aa6f1a384da0a503435129af402a/ebola-3-d6lsq.png?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn1.epicgames.com/spt-assets/8e51aa6f1a384da0a503435129af402a/ebola-3-logo-1cs65.png?h=270&quality=medium&resize=1&w=480",
      description:
        "EBOLA 3 - is created in the spirit of the great classics of survival horrors. In this game, you will control the main character with a first-person camera which makes you feel like you’re in a real horror movie.",
    },
    {
      id: "14",
      title: "Dead Island 2",
      rating: "5",
      price: "3300",
      genre: "Horror",
      developer: "Deep Silver Dambuster Studios",
      publisher: "Deep Silver",
      release: "04/21/23",
      downloads: "89",
      esrb: "M",
      status: "Offline",
      age: "17+",
      requirement: {
        minimum: {
          memory: "10",
          storage: "70",
          cpu: "Intel Core i7-7700HQ",
          gpu: "GeForce GTX 1060",
          os: "Windows 10",
        },
        recommended: {
          memory: "10",
          storage: "70",
          cpu: "Intel Core i9-9900k",
          gpu: "GeForce RTX 2070 Super",
          os: "Windows 10",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/offer/236c74b4cd2e4e3099cbe2ebdc9686fd/EGS_DeadIsland2_DeepSilverDambusterStudios_S2_1200x1600-efc5201842cf642eb45f73227cd0789b?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-deadisland2-deepsilverdambusterstudios-ic1-400x196-9cbd3690d951.png?h=270&quality=medium&resize=1&w=480",
      description:
        "A deadly virus is spreading across Los Angeles, turning inhabitants into zombies. Bitten, infected, but more than just immune, uncover the truth behind the outbreak and discover who -or what- you are.",
    },
    {
      id: "15",
      title: "The Mortuary Assistant",
      rating: "4",
      price: "600",
      genre: "Horror",
      developer: "Darkstone Digital",
      publisher: "DreadXP",
      release: "10/25/22",
      downloads: "20",
      esrb: "M",
      status: "Offline",
      age: "17+",
      requirement: {
        minimum: {
          memory: "4",
          storage: "4",
          cpu: "2 GHz or higher",
          gpu: "geforce 960 or higher",
          os: "Windows 7 or higher",
        },
        recommended: {
          memory: "4",
          storage: "4",
          cpu: "2 GHz or higher",
          gpu: "geforce 960 or higher",
          os: "Windows 7 or higher",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/spt-assets/71e07bded36942308388b11038b369f5/download-the-mortuary-assistant-offer-zgvqq.png?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn1.epicgames.com/spt-assets/71e07bded36942308388b11038b369f5/the-mortuary-assistant-logo-1hl05.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Alone with the dead... Embalm corpses, banish demons, save your soul.",
    },
    {
      id: "16",
      title: "Maid of Sker",
      rating: "",
      price: "590",
      genre: "Horror",
      developer: "Wales Interactive",
      publisher: "Wales Interactive",
      release: "10/27/22",
      downloads: "35",
      esrb: "M",
      status: "Online",
      age: "17+",
      requirement: {
        minimum: {
          memory: "8",
          storage: "15",
          cpu: "Intel® Core™ i5-4460",
          gpu: "NVIDIA® GeForce® GTX 760",
          os: "Windows 7, 8.1, 10, 11 (64-bit)",
        },
        recommended: {
          memory: "8",
          storage: "15",
          cpu: "Intel i5-10500",
          gpu: "NVIDIA GeForce GTX 970",
          os: "Windows 10 64-bit",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/spt-assets/964693002c1b447c949b155c71727c45/maid-of-sker-1pomm.png?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn1.epicgames.com/spt-assets/964693002c1b447c949b155c71727c45/maid-of-sker-logo-13s8k.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Maid of Sker is a first-person survival horror, set in a remote hotel with a gory and macabre history from British folklore. Brave the nightmares of the Quiet Ones. Do not panic…don’t even breathe!",
    },
    {
      id: "17",
      title: "The Gravehouse",
      rating: "5",
      price: "360",
      genre: "Horror",
      developer: "Nuwenu Studio",
      publisher: "Nuwenu Studio",
      release: "04/10/23",
      downloads: "45",
      esrb: "T",
      status: "Online",
      age: "18+",
      requirement: {
        minimum: {
          memory: "2",
          storage: "16",
          cpu: "2.2 GHz Dual Core CPU",
          gpu: "NVIDIA GeForce 9800GTX",
          os: "Windows XP / Vista / 7 / 8 - 64 bits",
        },
        recommended: {
          memory: "3",
          storage: "16",
          cpu: "2.8 GHz Quad Core CPU",
          gpu: "NVIDIA GTX 460",
          os: "Windows Vista / 7 / 8 - 64 bits",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/spt-assets/e8c07b5d3fc24a7bbb02193fd194f17b/the-gravehouse-1mj6i.png?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn1.epicgames.com/spt-assets/e8c07b5d3fc24a7bbb02193fd194f17b/the-gravehouse-logo-14kk5.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Take on the role of an innocent, defenseless man in this horror survival game and experience evil like you've never experienced before: You are invited to the funeral of an unknown 'friend', but you never arrive. Instead, your path leads straight to a gloomy mansion...",
    },
    {
      id: "18",
      title: "My Lovely Wife",
      rating: "4",
      price: "1400",
      genre: "Strategy",
      developer: "GameChanger Studio",
      publisher: "Neon Doctrine",
      release: "06/07/22",
      downloads: "56",
      esrb: "T",
      status: "Offline",
      age: "18+",
      requirement: {
        minimum: {
          memory: "2048MB",
          storage: "4",
          cpu: "1GHz",
          gpu: "1GHz",
          os: "Windows 7 SP 1+",
        },
        recommended: {
          memory: "4096MB",
          storage: "4",
          cpu: "2GHz",
          gpu: "2GHz",
          os: "Windows 10",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/spt-assets/903c888b4ce14e1983a384b29ca29853/download-my-lovely-wife-offer-qhscc.png?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn1.epicgames.com/spt-assets/903c888b4ce14e1983a384b29ca29853/my-lovely-wife-logo-yfssn.png?h=270&quality=medium&resize=1&w=480",
      description:
        "My Lovely Wife delves into the depths of a man’s grief after the sudden death of his beloved wife. Explore one’s willingness to do anything for love and the importance of letting go in this mix of dating, management, and alchemy simulators.",
    },
    {
      id: "19",
      title: "This War of Mine",
      rating: "5",
      price: "520",
      genre: "Strategy",
      developer: "11 Bit Studios",
      publisher: "11 Bit Studios",
      release: "11/14/14",
      downloads: "75",
      esrb: "T",
      status: "Offline",
      age: "18+",
      requirement: {
        minimum: {
          memory: "2",
          storage: "6",
          cpu: "2.4 GHz Dual Core",
          gpu: "GeForce GTX 260",
          os: "Windows 7/8/10",
        },
        recommended: {
          memory: "4",
          storage: "6",
          cpu: "2.5+ GHz Quad Core",
          gpu: "NVIDIA GTX 660",
          os: "Windows 7/8/10",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/offer/91189432bbad4478afd611edff7f0339/EGS_ThisWarofMine_11bitstudiosSA_S4_1200x1600-117bcceb7b116f21e4935b154a9867e7?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-thiswarofmine-11bitstudiossa-ic2-128x128-a024e66ddf58.png?h=270&quality=medium&resize=1&w=480",
      description:
        "In This War Of Mine you do not play as an elite soldier, rather a group of civilians trying to survive in a besieged city; struggling with lack of food, medicine and constant danger from snipers and hostile scavengers.",
    },
    {
      id: "20",
      title: "Far Cry® 6",
      rating: "5",
      price: "3000",
      genre: "Open world",
      developer: "Ubisoft Toronto",
      publisher: "Ubisoft",
      release: "11/29/22",
      downloads: "90",
      esrb: "M",
      status: "Online",
      age: "17+",
      requirement: {
        minimum: {
          memory: "8",
          storage: "60 GB HDD (SSD recommended)",
          cpu: "Intel i5-4460 – 3.2 GHz",
          gpu: "Nvidia GTX 960 (4 GB)",
          os: "Windows 10 (20H1 or newer) – 64 bit",
        },
        recommended: {
          memory: "16",
          storage: "60 GB HDD (SDD) + 37 GB HD Textures",
          cpu: "Intel i7-7700 (3.6 GHz) or higher",
          gpu: "Nvidia GTX 1080 (8 GB) or higher",
          os: "Windows 10 (20H1 or newer) – 64 bit",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/fc6-logo-400x150-7808789f6a13.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Enter the adrenaline-filled world of a modern-day guerrilla revolution. With stunning vistas, visceral gunplay, and a huge variety of gameplay experiences, there's never been a better time to join the fight. Play the Far Cry® 6 FREE TRIAL and discover why GAME INFORMER calls it 'A nonstop thrill ride from start to finish.' And, when you buy the full game, all of your progression will be saved.",
    },
    {
      id: "21",
      title: "Marvel’s Spider-Man: Miles Morales",
      rating: "5",
      price: "3300",
      genre: "Open world",
      developer: "Insomniac Games, Nixxes Software",
      publisher: "PlayStation PC LLC",
      release: "11/18/22",
      downloads: "",
      esrb: "M",
      status: "Online",
      age: "17+",
      requirement: {
        minimum: {
          memory: "8",
          storage: "75 GB HDD space",
          cpu: "Intel Core i3-4160, 3.6 GHz",
          gpu: "NVIDIA GTX 950",
          os: "Windows 10 64-bit",
        },
        recommended: {
          memory: "16",
          storage: "75 GB SSD space",
          cpu: "Intel Core i5-4670, 3.4 Ghz",
          gpu: "NVIDIA GTX 1060 6GB",
          os: "Windows 10 64-bit",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S2_1200x1600-58989e7116de3f70a2ae6ea56ee202c6?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-marvelsspidermanmilesmorales-insomniacgamesnixxessoftware-ic1-400x400-32513a3f95a0.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Teenage Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. When a fierce power struggle threatens to destroy his home, Miles must take up the mantle of Spider-Man and own it.",
    },
    {
      id: "22",
      title: "Bus Driver Simulator",
      rating: "3",
      price: "900",
      genre: "Simulation",
      developer: "KishMish Games",
      publisher: "KishMish Games",
      release: "05/16/23",
      downloads: "65",
      esrb: "E",
      status: "Offline",
      age: "All",
      requirement: {
        minimum: {
          memory: "4",
          storage: "4",
          cpu: "1.9ghz Intel i5",
          gpu: "Nvidia GeForce GTX 460",
          os: "Windows / 64-bit",
        },
        recommended: {
          memory: "12",
          storage: "4",
          cpu: "Intel Core i5 3470 @ 3.2 GHz",
          gpu: "Nvidia Geforce GTX 980",
          os: "Windows / 64-bit",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/spt-assets/80a102deb2d74302aaed47665a28242c/bus-driver-simulator-101ef.jpg?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn1.epicgames.com/spt-assets/80a102deb2d74302aaed47665a28242c/bus-driver-simulator-logo-1de2z.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Try yourself in a role of a passenger bus driver! Complete journeys around the city and its suburbs, strictly following the schedule. Earn money by successfully delivering passengers and following the traffic laws.",
    },
    {
      id: "23",
      title: "The Lost Village",
      rating: "3",
      price: "720",
      genre: "Simulation",
      developer: "FunYoo Games",
      publisher: "FunYoo Games",
      release: "05/15/23",
      downloads: "",
      esrb: "A",
      status: "Online",
      age: "18+",
      requirement: {
        minimum: {
          memory: "4",
          storage: "3",
          cpu: "Intel i3-2000",
          gpu: "Geforce GTX 960",
          os: "Windows 7 64 bit",
        },
        recommended: {
          memory: "8",
          storage: "4",
          cpu: "Intel i7 7700K",
          gpu: "Geforce GTX 1060",
          os: "Windows 10 64 bit",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/spt-assets/7a8643df35a24a1fb3970e4020aa8cf1/the-lost-village-e6rea.png?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn1.epicgames.com/spt-assets/7a8643df35a24a1fb3970e4020aa8cf1/the-lost-village-logo-1f54o.png?h=270&quality=medium&resize=1&w=480",
      description:
        "'The Lost Village' is a unique 3D independent Roguelite + SLG game. You will perform as the son of the former Master to rebuild your village and sect.You will face the severe challenge of fantasyland and eventually lead your sect to glory.",
    },
    {
      id: "24",
      title: "Need for Speed™ Unbound",
      rating: "4",
      price: "3500",
      genre: "Racing",
      developer: "Criterion Games",
      publisher: "Electronic Arts",
      release: "12/02/22",
      downloads: "90",
      esrb: "T",
      status: "Offline",
      age: "18+",
      requirement: {
        minimum: {
          memory: "8",
          storage: "50",
          cpu: "Core i5-8600",
          gpu: "GTX 1050 Ti",
          os: "Windows 10 64-bit",
        },
        recommended: {
          memory: "16",
          storage: "50",
          cpu: "Core i7-8700",
          gpu: "GeForce RTX 2070 (8GB)",
          os: "Windows 10 64-bit",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/offer/9acb0d22292b48acaeb0eb38b391df93/EGS_NeedforSpeedUnbound_CriterionGames_S2_1200x1600-9633e095cbd48726c6025f64d3114bb8?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-needforspeedunboundstandardedition-criteriongames-ic1-400x400-18b74eda56f3.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Tear up the streets with friends as Need for Speed Unbound Vol 2 brings new ways to compare and compete with the squad in Lakeshore Online.",
    },
    {
      id: "25",
      title: "HOT WHEELS UNLEASHED™",
      rating: "5",
      price: "1500",
      genre: "Racing",
      developer: "Milestone S.r.l.",
      publisher: "Milestone S.r.l.",
      release: "09/30/21",
      downloads: "75",
      esrb: "E",
      status: "Offline",
      age: "All",
      requirement: {
        minimum: {
          memory: "8",
          storage: "22",
          cpu: "Intel Core i5-2500K",
          gpu: "GeForce GTX 1050",
          os: "Windows 8.1 64-Bit",
        },
        recommended: {
          memory: "16",
          storage: "22",
          cpu: "Intel Core i7-5820K",
          gpu: "GeForce GTX 1060",
          os: "Windows 8.1 64-Bit",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSUNLEASHED_MilestoneSrl_S2_1200x1600-30ec276e4019296d3efd50d5b6ffe1bc?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-hotwheelsunleashed-milestonesrl-ic5-400x234-ff9ef0614482.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Collect the best vehicles in the Hot Wheels™ universe, build spectacular tracks and dive into breathtaking races. The most iconic and sought after Hot Wheels™ vehicles are waiting for you. Get ready to make them race at full speed!",
    },
    {
      id: "26",
      title: "Darkwood",
      rating: "5",
      price: "330",
      genre: "Survival",
      developer: "Acid Wizard Studio",
      publisher: "Acid Wizard Studio",
      release: "10/13/22",
      downloads: "47",
      esrb: "M",
      status: "Active",
      age: "18+",
      requirement: {
        minimum: {
          memory: "4",
          storage: "6",
          cpu: "Intel Core 2 Duo 2.8Ghz",
          gpu: "GeForce 8800GT",
          os: "Windows Vista",
        },
        recommended: {
          memory: "6",
          storage: "6",
          cpu: "Intel i3",
          gpu: "GeForce GTX 660",
          os: "Windows 10 64-bit",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/spt-assets/f98517036ab5480ebd9c68d7249188b4/darkwood-1dl7j.jpg?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn1.epicgames.com/spt-assets/f98517036ab5480ebd9c68d7249188b4/darkwood-logo-1rvo5.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Darkwood - a new perspective on survival horror. Scavenge and explore a rich, ever-changing free-roam world by day, then hunker down in your hideout and pray for the morning light.",
    },
    {
      id: "27",
      title: "Outlast 2",
      rating: "5",
      price: "710",
      genre: "Survival",
      developer: "Red Barrels",
      publisher: "Red Barrels",
      release: "10/04/22",
      downloads: "80",
      esrb: "M",
      status: "Offline",
      age: "17+",
      requirement: {
        minimum: {
          memory: "4",
          storage: "30",
          cpu: "Intel Core i3-530",
          gpu: "NVIDIA Geforce GTX 260",
          os: "Windows Vista / 7 / 8 / 10, 64-bits",
        },
        recommended: {
          memory: "8",
          storage: "30",
          cpu: "Intel Core i5",
          gpu: "NVIDIA Geforce GTX 660",
          os: "Windows Vista / 7 / 8 / 10, 64-bits",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/offer/e3e1dbeede5a471c9932edb2f7b99f51/EGS_Outlast2_RedBarrels_S2_1200x1600-b84f788e04780de2edf02ac003246e4b?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn2.unrealengine.com/egs-outlast2-redbarrels-ic1-400x166-ca84f5b5f601.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Sullivan Knoth and his followers are preparing for the tribulations of the end of times at Temple Gate, a town, deep in the wilderness and hidden from civilization.",
    },
    {
      id: "28",
      title: "Lost Ruins",
      rating: "5",
      price: "470",
      genre: "Anime",
      developer: "Altari Games",
      publisher: "DANGEN Entertainment",
      release: "04/15/22",
      downloads: "70",
      esrb: "E",
      status: "Offline",
      age: "All",
      requirement: {
        minimum: {
          memory: "2",
          storage: "0.6",
          cpu: "1.6 GHz",
          gpu: "512 MB",
          os: "Windows 7",
        },
        recommended: {
          memory: "4",
          storage: "1",
          cpu: "2 GHz",
          gpu: "1 GB",
          os: "Windows 7, 8, 8.1, 10 x64",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/spt-assets/6a10229d28a8493c90a6952984ae06f3/download-lost-ruins-offer-m5inb.jpg?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn1.epicgames.com/spt-assets/6a10229d28a8493c90a6952984ae06f3/lost-ruins-logo-1oz3r.png?h=270&quality=medium&resize=1&w=480",
      description:
        "Lost Ruins is a 2D side-scrolling survival action game. Play as a young girl that has awoken in a strange place with no memories. With the aid of weapons, spells, and the guidance of the mysterious Beatrice, you will explore a dangerous world and topple incredible bosses.",
    },
    {
      id: "29",
      title: "ELEGIES: Aya",
      rating: "4",
      price: "575",
      genre: "Anime",
      developer: "Dream Squircle",
      publisher: "Dream Squircle",
      release: "05/12/23",
      downloads: "39",
      esrb: "A",
      status: "Offline",
      age: "18+",
      requirement: {
        minimum: {
          memory: "2",
          storage: "0.75",
          cpu: "1 GHz",
          gpu: "500 MB",
          os: "Windows 7 (SP1+)",
        },
        recommended: {
          memory: "4",
          storage: "1.5",
          cpu: "2 GHz Dual Core",
          gpu: "1 GB",
          os: "Windows 10",
        },
      },
      thumbnail:
        "https://cdn1.epicgames.com/spt-assets/9714e6bc74cb47e7ac31fca0ba6b699d/elegies-aya-1636b.png?h=480&quality=medium&resize=1&w=360",
      imageList: [],
      logo: "https://cdn1.epicgames.com/spt-assets/9714e6bc74cb47e7ac31fca0ba6b699d/elegies-aya-logo-1xtac.png?h=270&quality=medium&resize=1&w=480",
      description:
        "After losing his parents and barely escaping his burning home, Zach wakes up in the hospital where he meets Aya, the ghost of a girl. Who is she, and why can only Zach see her? Together they try to investigate Aya's past, which quickly awakens new dangers.",
    },
  ];

  const getGame = gameList.find((currentGame) => {
    return currentGame.id == productId;
  });

  return (
    <PageContainer>
      <SectionContainer className="detail_section">
        <div className="detail_content">
          <div className="detail_content_intro">
            <h1 className="detail_content_intro_head">{getGame.title}</h1>
            <div className="detail_content_intro_body">
              <div className="detail_content_intro_thumbnail">
                <img src={getGame.thumbnail} alt={getGame.title} />
              </div>
              <div className="detail_content_intro_text">
                <p>{getGame.description}</p>
                <div className="detail_content_bread">
                  <div className="detail_content_bread_item">
                    <span>Rating</span>
                    <strong>
                      {starList.find((currentStar, index) => {
                        return index + 1 == getGame.rating;
                      })}
                    </strong>
                  </div>
                  <div className="detail_content_bread_item">
                    <span>Genre</span>
                    <strong>{getGame.genre}</strong>
                  </div>
                  <div className="detail_content_bread_item">
                    <span>ESRB</span>
                    <strong>{getGame.esrb}</strong>
                  </div>
                  <div className="detail_content_bread_item">
                    <span>Downloads</span>
                    <strong>{getGame.downloads} Million</strong>
                  </div>
                  <div className="detail_content_bread_item">
                    <span>Status</span>
                    <strong>{getGame.status}</strong>
                  </div>
                  <div className="detail_content_bread_item">
                    <span>Age</span>
                    <strong>{getGame.age}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detail_content_specs">
            <div className="detail_content_specs_column">
              <span className="detail_content_specs_column_head">Minimum</span>
              <div className="detail_content_specs_column_item">
                <span>PROCESSOR</span>
                <p>{getGame.requirement.minimum.cpu}</p>
              </div>
              <div className="detail_content_specs_column_item">
                <span>HDD SPACE</span>
                <p>{getGame.requirement.minimum.storage} GB </p>
              </div>
              <div className="detail_content_specs_column_item">
                <span>VIDEO CARD</span>
                <p>{getGame.requirement.minimum.gpu}</p>
              </div>
              <div className="detail_content_specs_column_item">
                <span>MEMORY</span>
                <p>{getGame.requirement.minimum.memory} GB RAM</p>
              </div>
            </div>
            <div className="detail_content_specs_column">
              <span className="detail_content_specs_column_head">Maximum</span>
              <div className="detail_content_specs_column_item">
                <span>PROCESSOR</span>
                <p>{getGame.requirement.recommended.cpu}</p>
              </div>
              <div className="detail_content_specs_column_item">
                <span>HDD SPACE</span>
                <p>{getGame.requirement.recommended.storage} GB </p>
              </div>
              <div className="detail_content_specs_column_item">
                <span>VIDEO CARD</span>
                <p>{getGame.requirement.recommended.gpu}</p>
              </div>
              <div className="detail_content_specs_column_item">
                <span>MEMORY</span>
                <p>{getGame.requirement.recommended.memory} GB RAM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="detail_action">
          <div className="detail_action_thumbnail">
            <img src={getGame.logo} alt={getGame.title} />
          </div>
          <span className="detail_action_price">{getGame.price}</span>
          <div className="detail_action_btn">
            <ActionButton>ADD TO CART</ActionButton>
            <ActionButton>ADD TO WISHLIST</ActionButton>
          </div>

          <div className="detail_action_meta">
            <div className="detail_action_meta_item">
              <span className="detail_action_meta_item_title">Developer</span>
              <span>{getGame.developer}</span>
            </div>
            <div className="detail_action_meta_item">
              <span className="detail_action_meta_item_title">Publisher</span>
              <span>{getGame.publisher}</span>
            </div>
            <div className="detail_action_meta_item">
              <span className="detail_action_meta_item_title">
                Release Date
              </span>
              <span>{getGame.release}</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default ProductDetail;
