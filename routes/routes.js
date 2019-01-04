const express = require("express");
const router = express.Router();
const Product = require("../models").KerbStone;

router.get("/", (req, res, next) => {
  Product.find({}, (err, products) => {
    if (err) return next(err);
    else console.log("product saved!");
    res.json(products);
  });
});

router.get("/admin", (req, res) => {
  res.render("index");
});

// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });
router.get("/admin", (req, res) => {
  res.render("index");
});
const dool = { kososher: "kirekhar" };

router.post("/admin", (req, res) => {
  let jaber = req.body;
  res.json(jaber);

  // Product.save((err, product) => {
  //   if (err) console.log("Error", err);
  //   else console.log("product saved!");
  //   res.json(product);
  // });
  // Product.find({}, (err, products) => {
  //   if (err) return next(err);
  //
  // });
});

const DATA = [
  [
    {
      genreEn: "jadval",
      genreFarsi: "جدول",
      genreId: "wet",
      type: "وت پرس",
      img: "/images/jadval/mobile/1.png",
      sizes: [
        {
          type: "۵۰*۳۰*۱۰",
          price: "۴۲۳۰۰",
          shipping: "۳۰۰۰"
        },
        {
          type: "۵۰*۳۰*۱۲.۵",
          price: "۴۷۰۰۰",
          shipping: "۳۰۰۰"
        },

        {
          type: "۵۰*۳۰*۱۵",
          price: "۵۲۸۰۰",
          shipping: "۳۰۰۰"
        }
      ]
    },
    {
      genreEn: "jadval",
      genreId: "kush",
      type: "پرس خشك",
      img: "/images/jadval/mobile/50.png",
      sizes: [
        {
          type: "۵۰*۳۰*۱۰",
          price: "۳۸۵۰۰",
          shipping: "۳۰۰۰"
        },
        {
          type: "۵۰*۴۰*۱۵",
          price: "۶۲۰۰۰",
          shipping: "۳۰۰۰"
        },
        {
          type: "۵۰*۵۰*۱۵",
          price: "۶۵۰۰۰",
          shipping: "۳۰۰۰"
        }
      ]
    },
    {
      genreEn: "jadval",
      genreId: "hand",
      type: "دستی",
      img: "/images/jadval/mobile/d1.png",
      sizes: [
        {
          type: "۵۰*۳۰*۶",
          price: "۴۲۳۰۰",
          shipping: "۳۰۰۰"
        },
        {
          type: "۵۰*۳۰*۸",
          price: "۴۷۰۰۰",
          shipping: "۳۰۰۰"
        },
        {
          type: "۵۰*۳۰*۱۰",
          price: "۵۲۸۰۰",
          shipping: "۳۰۰۰"
        }
      ]
    }
  ],
  [
    {
      genreEn: "blook",
      genreFarsi: "بلوک",
      genreId: "pooke",
      type: "سبك پوكه",
      img: "/images/blook/mobile/pooke.png",
      sizes: [
        {
          image: "#",
          type: "بلوک ته پر پوکه",
          size: "۴۰*۲۰*۲۰",
          price: "۱۲۷۰۰",
          shipping: "۵۰۰"
        },
        {
          image: "#",
          type: "بلوک ۵۰ پوکه",
          size: "۵۰*۲۰*۱۵",
          price: "۱۳۶۰۰",
          shipping: "۵۰۰"
        },
        {
          image: "#",
          type: "بلوک ۱۵ پوکه",
          size: "۴۰*۲۰*۱۵",
          price: "۱۱۲۰۰",
          shipping: "۵۰۰"
        },
        {
          image: "#",
          type: "تیغه ۱۰ پوکه فروه",
          size: "۴۰*۲۰*۱۰",
          price: "۹۳۵۰",
          shipping: "۵۰۰"
        }
      ]
    },
    {
      genreEn: "blook",
      genreId: "simani",
      type: "بلوك سيمانی",
      img: "/images/blook/mobile/simani.png",
      sizes: [
        {
          image: "#",
          type: "دیواری ته باز سیمانی",
          size: "۴۰*۲۰*۲۰",
          price: "۹۸۰۰-۱۰۸۰۰",
          shipping: "۵۰۰"
        },
        {
          image: "#",
          type: "دیواری ته پر سیمانی",
          size: "۴۰*۲۰*۲۰",
          price: "۱۰۸۰۰",
          shipping: "۵۰۰"
        },
        {
          image: "#",
          type: "بلوک ۵۰ سیمانی",
          size: "۵۰*۲۰*۱۵",
          price: "۱۲۰۰۰",
          shipping: "۵۰۰"
        },
        {
          image: "#",
          type: "بلوک ۱۵ سیمانی",
          size: "۵۰*۲۰*۱۵",
          price: "۹۴۰۰",
          shipping: "۵۰۰"
        },
        {
          image: "#",
          type: "تیغه ۱۰ سیمانی",
          size: "۴۰*۲۰*۱۰",
          price: "۷۶۰۰",
          shipping: "۵۰۰"
        },
        {
          image: "#",
          type: "بلوک سقفی سیمانی",
          size: "۴۰*۲۰*۲۵",
          price: "۱۰۸۰۰",
          shipping: "۵۰۰"
        },
        {
          image: "#",
          type: "کرومیت سقفی سیمانی",
          size: "۶۸.۵*۲۰*۲۰",
          price: "۱۵۰۰۰",
          shipping: "۵۰۰"
        }
      ]
    }
  ],
  [
    {
      genreEn: "kafpoosh",
      genreFarsi: "كفپوش",
      genreId: "khoshk",
      type: "پرس خشك",
      img: "/images/kafpoosh/wetpress/yellow.png",
      sizes: [
        {
          img: "/images/kafpoosh/mobile/transparent/40x40.png",
          type: "۴۰*۴۰ پرسی",
          inSquarefeet: "۶/۲۵ عدد",
          toosi: "۲۰۵۰۰۰",
          red: "۲۴۰۰۰۰",
          yellowmix: "۲۸۰۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/20x20.png",
          type: "۲۰*۲۰ پرسی",
          inSquarefeet: "۲۵ عدد",
          toosi: "۲۰۵۰۰۰",
          red: "۲۴۰۰۰۰",
          yellowmix: "۲۸۰۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          image: "#",
          type: "۱۰*۲۰ پرسی",
          inSquarefeet: "۴۹ عدد",
          toosi: "۲۰۵۰۰۰",
          red: "۲۴۰۰۰۰",
          yellowmix: "۲۸۰۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          image: "#",
          type: "۵۰*۵۰ پرسی",
          inSquarefeet: "۴ عدد",
          toosi: "۲۰۵۰۰۰",
          red: "۲۴۰۰۰۰",
          yellowmix: "۲۸۰۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          image: "#",
          type: "۳۰*۳۰ پرسی",
          inSquarefeet: "۱۱ عدد",
          toosi: "۲۰۵۰۰۰",
          red: "۲۴۰۰۰۰",
          yellowmix: "۲۸۰۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          image: "#",
          type: "۴۰*۴۰ نابینایان پرسی",
          inSquarefeet: "۶.۲۵ عدد",
          toosi: "۲۰۵۰۰۰",
          red: "۲۴۰۰۰۰",
          yellowmix: "۲۸۰۰۰۰",
          shipping: "۵۰۰۰"
        }
      ]
    },
    {
      genreEn: "kafpoosh",
      genreId: "press",
      type: "وت پرس",
      img: "/images/kafpoosh/mobile.jpg",
      sizes: [
        {
          img: "/images/kafpoosh/wetpress/red.png",
          type: "۵۰*۵۰*۸",

          inSquarefeet: "۴ عدد",

          toosi: "۲۵۰۰۰۰",
          red: "۳۰۰۰۰۰",
          yellowmix: "۳۵۰۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/wetpress/yellow.png",
          type: "۵۰*۵۰*۸",

          inSquarefeet: "۴ عدد",

          toosi: "۲۵۰۰۰۰",
          red: "۳۰۰۰۰۰",
          yellowmix: "۳۵۰۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/wetpress/grey.png",
          type: "۵۰*۵۰*۸",
          type_en: "50x50x8",
          inSquarefeet: "۴ عدد",
          inSquarefeet_en: "4 Piece",
          toosi: "۲۵۰۰۰۰",
          red: "۳۰۰۰۰۰",
          yellowmix: "۳۵۰۰۰۰",
          shipping: "۵۰۰۰"
        }
      ]
    },
    {
      genreEn: "kafpoosh",
      genreId: "vibrate",
      type: "ويبره",
      img: "/images/kafpoosh/mobile/transparent/39.jpg",
      sizes: [
        {
          img: "/images/kafpoosh/mobile/transparent/i.png",
          type: "آی خشک چین",

          inSquarefeet: "۲۳ عدد",

          toosi: "۱۲۵۰۰۰",
          red: "۱۴۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/6zeli.png",
          type: "خشک چین ۶ گوش",

          inSquarefeet: "۱۸ عدد",
          toosi: "۱۲۵۰۰۰",
          red: "۱۴۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/puzzle.png",
          type: "خشک چین پازل",
          inSquarefeet: "۱۶ عدد",
          toosi: "۱۲۵۰۰۰",
          red: "۱۴۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/tabbari.png",
          type: "خشک چین طبری",
          inSquarefeet: "۲۸ عدد",
          toosi: "۱۲۵۰۰۰",
          red: "۱۴۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/congere.png",
          type: "خشک چین کنگره",
          inSquarefeet: "۱۶ عدد",
          toosi: "۱۲۵۰۰۰",
          red: "۱۴۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/kandooyi.png",
          type: "خشک چین کندویی",
          inSquarefeet: "۱۸ عدد",
          toosi: "۱۲۵۰۰۰",
          red: "۱۴۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/koozeyi.png",
          type: "خشک چین کوزه ای و شنی",
          inSquarefeet: "۲۲ عدد",
          toosi: "۱۲۵۰۰۰",
          red: "۱۴۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/ajori.png",
          type: "خشک چین آجری",
          inSquarefeet: "۴۹ عدد",
          toosi: "۱۶۵۰۰۰",
          red: "۱۹۵۰۰۰",
          yellowmix: "۲۳۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/badbar.png",
          type: "بادبر",
          inSquarefeet: "۲۲ عدد",
          toosi: "۱۲۵۰۰۰",
          red: "۱۴۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/20x20.png",
          type: "۲۰*۲۰ ساده پوست ماری",
          inSquarefeet: "۲۵ عدد",
          toosi: "۱۴۵۰۰۰",
          red: "۱۶۵۰۰۰",
          yellowmix: "۱۹۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/40x40.png",
          type: "۴۰*۴۰ ساده پوست ماری",
          inSquarefeet: "۶/۲۵ عدد",
          toosi: "۱۴۵۰۰۰",
          red: "۱۶۵۰۰۰",
          yellowmix: "۱۹۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/lozipoostmari.png",
          type: "۵ ضلعی ساده پوست ماری",
          inSquarefeet: "۲۰ عدد",

          toosi: "۱۴۵۰۰۰",
          red: "۱۶۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/setareyi.png",
          type: "حیاطی ۴۰*۴۰ ستاره",
          inSquarefeet: "۶/۲۵ عدد",

          toosi: "۱۲۵۰۰۰",
          red: "۱۴۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/yasaman.png",
          type: "حیاطی ۴۰*۴۰ یاسمن",
          inSquarefeet: "۶/۲۵ عدد",

          toosi: "۱۲۵۰۰۰",
          red: "۱۴۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/sekeyi.png",
          type: "حیاطی ۳۰*۳۰ سکه ای",
          inSquarefeet: "۱۱ عدد",
          toosi: "۱۲۵۰۰۰",
          red: "۱۴۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/sangi.png",
          type: "حیاطی ۳۳*۳۳ قلوه سنگی",
          inSquarefeet: "۹ عدد",
          type_en: "40x40 Yard Rock",
          inSquarefeet_en: "9 Piece",
          toosi: "۱۲۵۰۰۰",
          red: "۱۴۵۰۰۰",
          yellowmix: "۱۷۵۰۰۰",
          shipping: "۵۰۰۰"
        }
      ]
    },
    {
      genreEn: "kafpoosh",
      genreId: "wash",
      type: "واش بتن",
      img: "/images/kafpoosh/mobile.jpg",
      sizes: [
        {
          img: "/images/kafpoosh/mobile/transparent/40x40.png",
          type: "۳۰x۳۰",
          inSquarefeet: "۴ عدد",
          toosi: "۲۵۰۰۰۰",
          red: "۳۰۰۰۰۰",
          yellowmix: "۳۵۰۰۰۰",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/40x40.png",
          type: "۴۰x۴۰",
          inSquarefeet: "۴ عدد",
          toosi: "۲۵۰۰۰۰",
          red: "۳۰۰۰۰۰",
          yellowmix: "۳۵۰۰۰۰",
          shipping: "۵۰۰۰"
        }
      ]
    }
  ],
  [
    {
      genreEn: "dal",
      genreFarsi: "دال بتنی",
      genreId: "light",
      type: "ترافیک سبک",
      img: "/images/dal/mobile/39.png",
      sizes: [
        {
          type: "۸۰*۶۰*۱۰",
          price: "۶۵۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۰۰*۶۰*۱۰",
          price: "۷۷۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۲۰*۶۰*۱۰",
          price: "۸۰۰۰۰۰",
          shipping: "۲۰۰۰۰"
        }
      ]
    },
    {
      genreEn: "dal",
      genreId: "heavy",
      type: "ترافیک سنگین",
      img: "/images/dal/mobile/44.png",
      sizes: [
        {
          type: "۸۰*۶۰*۱۵",
          price: "۷۷۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۰۰*۶۰*۱۵",
          price: "۹۳۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۲۰*۶۰*۱۵",
          price: "۱۰۰۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۵۰*۶۰*۱۵",
          price: "۱۴۷۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۵۰*۶۰*۲۰",
          price: "۱۸۳۰۰۰۰",
          shipping: "۵۰۰۰۰"
        },
        {
          type: "۲۰۰*۶۰*۲۰",
          price: "۲۳۰۰۰۰۰",
          shipping: "۵۰۰۰۰"
        }
      ]
    }
  ],
  [
    {
      genreEn: "mozayik",
      genreFarsi: "موزاییک",
      genreId: "simple",
      type: "ساده",
      img: "/images/mozayik/mobile/sade.png",
      sizes: [
        {
          img: "/images/kafpoosh/mobile/transparent/40x40",
          type: "ساده ایرانی ۳۰*۳۰ درجه ۱، درجه ۲",
          inSquarefeet: "۱۱ عدد",
          toosi: "۹۰۰۰۰/۷۰۰۰۰",
          red: "-",
          yellowmix: "-",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/40x40",
          type: "ساده ایرانی ۴۰*۴۰",
          inSquarefeet: "۶​​/۲۵ عدد",
          toosi: "۱۰۰۰۰۰",
          red: "-",
          yellowmix: "-",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/40x40",
          type: "گرانیتی ساده ۴۰*۴۰",
          inSquarefeet: "۶​​/۲۵ عدد",
          toosi: "۱۲۵۰۰۰",
          red: "-",
          yellowmix: "-",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/40x40",
          type: "مرمری ساده ۴۰*۴۰",
          inSquarefeet: "۶​​/۲۵ عدد",
          toosi: "۱۲۵۰۰۰",
          red: "-",
          yellowmix: "-",
          shipping: "۵۰۰۰"
        }
      ]
    },
    {
      genreEn: "mozayik",
      genreId: "hayati",
      type: "حياطی",
      img: "/images/mozayik/mobile/hayati.png",
      sizes: [
        {
          img: "/images/kafpoosh/mobile/transparent/40x40",
          type: "موزائیک گرانیتی حیاطی ۴۰*۴۰",
          inSquarefeet: "۶​​/۲۵ عدد",
          toosi: "۱۲۵۰۰۰",
          red: "-",
          yellowmix: "-",
          shipping: "۵۰۰۰"
        },
        {
          img: "/images/kafpoosh/mobile/transparent/40x40",
          type: "موزائیک مرمری حیاطی ۴۰*۴۰",
          inSquarefeet: "۶​​/۲۵ عدد",
          toosi: "۱۲۵۰۰۰",
          red: "-",
          yellowmix: "-",
          shipping: "۵۰۰۰"
        }
      ]
    }
  ],
  [
    {
      genreEn: "kaval",
      genreFarsi: "كول",
      genreId: "gerd",
      type: "گرد",
      img: "/images/kaval/mobile/2gerd.png",
      sizes: [
        {
          type: "۷۰",
          price: "۲۲۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۸۰",
          price: "۲۵۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۹۰",
          price: "۳۲۵۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۰۰",
          price: "۴۲۵۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۱۰",
          price: "۴۵۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۲۰",
          price: "۵۰۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۳۰",
          price: "۶۶۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "دوتکه ۱۰۰",
          price: "۴۲۵۰۰۰",
          shipping: "۲۰۰۰۰"
        }
      ]
    },
    {
      genreEn: "kaval",
      genreId: "anbari",
      type: "انباری",
      img: "/images/kaval/mobile/2anbari.png",
      sizes: [
        {
          type: "دوتکه ۱۰۰",
          price: "۴۲۵۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۰۰",
          price: "۴۲۵۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۱۰",
          price: "۴۵۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۲۰",
          price: "۵۰۰۰۰۰",
          shipping: "۲۰۰۰۰"
        },
        {
          type: "۱۴۰",
          price: "۶۰۵۰۰۰",
          shipping: "۲۰۰۰۰"
        }
      ]
    },
    {
      genreEn: "kaval",
      genreId: "kanaly",
      type: "بیضی",
      img: "/images/kaval/mobile/beyzi.png",
      sizes: [
        {
          type: "۱۲۰",
          price: "495000",
          shipping: "20000"
        }
      ]
    },
    {
      genreEn: "kaval",
      genreId: "takhte",
      type: "تخته",
      img: "/images/kaval/mobile/takhte.png",
      sizes: [
        {
          type: "۱۰۰*۲۵*۵",
          price: "۲۲۰۰۰۰",
          shipping: "۲۰۰۰۰"
        }
      ]
    }
  ],
  [
    {
      genreEn: "mobleman",
      genreFarsi: "مبلمان شهری",
      genreId: "mobleman",
      type: "استاپر",
      img: "/images/nimkat/bollards.png",
      sizes: [
        {
          type: "پروب"
        },
        { type: "پروب نوری" }
      ]
    },
    {
      genreEn: "mobleman",
      genreFarsi: "مبلمان شهري",
      genreId: "mobleman",
      type: "نیمکت",
      img: "/images/nimkat/nimkat.png",
      sizes: [
        {
          type: "نیمکت پایی"
        },
        {
          type: "منحنی"
        },
        {
          type: "ساده"
        }
      ]
    }
  ],
  [
    {
      genreEn: "nj",
      genreFarsi: "نيوجرسی",
      genreId: "jersey",
      type: "نيوجرسی",
      img: "/images/nj/nj.png",
      sizes: [
        {
          type: "۱۰۰*۷۰*۵۰",
          kg: "۴۵۰ کیلو"
        },
        {
          type: "۲۰۰*۷۰*۵۰",
          kg: "۹۰۰ کیلو"
        },
        {
          type: "۳۰۰*۱۱۰*۸۰",
          kg: "۳۴۰۰ کیلو"
        }
      ]
    },
    {
      genreEn: "nj",
      genreFarsi: "نيوجرسی",
      genreId: "mini",
      type: "مینی جرسی",
      img: "/images/nj/mini-nj.png",
      sizes: [
        {
          type: "۴۰*۴۰*۴۵",
          kg: "۹۵ کیلو"
        }
      ]
    }
  ]
];
router.get("/users", (req, res) => {
  res.send(DATA);
});

module.exports = router;
