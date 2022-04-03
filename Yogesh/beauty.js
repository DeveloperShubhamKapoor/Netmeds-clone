/*beauty js file*/


var beautyData = [
    {
      img_url:
        "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/maybelline.jpg",
      name: "Maybelline",
    },
    {
      img_url:
        "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/garnier.jpg",
      name: "Garnier",
    },
    {
      img_url:
        "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/myglamm.jpg",
      name: "Myglamm",
    },
    {
      img_url:
        "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/colorbar.jpg",
      name: "Colobar",
    },
    {
      img_url:
        "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/plum.jpg",
      name: "Plum",
    },
      
    
  ];

  beautyData2nd=[
    { img_url:
      "https://www.netmeds.com/images/category/3495/thumb/face-wash-cleansers_1.jpg",
      name: "Face Wash & Cleanser", },
       { img_url:
      "https://www.netmeds.com/images/category/v1/525/thumb/body_care_200.jpg", name:
      "Body Care", }, 
      { img_url:
      "https://www.netmeds.com/images/category/v1/3476/thumb/nail_care_0.jpg", name:
      "Nail Care", },
       { img_url:
      "https://www.netmeds.com/images/category/v1/3784/thumb/skin_care_1.jpg", name:
      "Skin Care", },
       { img_url:
      "https://www.netmeds.com/images/category/v1/547/thumb/hair_care_0_200.jpg",
      name: "Hair Care", }, 
  ];

  beautyData3rd=[
    { img_url:
      "https://www.netmeds.com/images/category/551/thumb/hair_oil_1.jpg", name:"Hair Oils",},
       { img_url:
      "https://www.netmeds.com/images/category/553/thumb/Hair_Treatment_1.jpg", name:
      "Hair Treatment", },
      { img_url:
      "https://www.netmeds.com/images/category/v1/3704/thumb/hair_gels_waxes_200.jpg",
      name: "Hair Treatment", },
       { img_url:
      "https://www.netmeds.com/images/category/v1/3704/thumb/hair_gels_waxes_200.jpg",
      name: "Hair Perms & Texturizers", }, 
      { img_url:
      "https://www.netmeds.com/images/category/v1/3706/thumb/hair_sprays_mists_200.jpg",
      name: "Hair Sprays & Mists", }, 
  ];

  beautyData4th=[
    { img_url:
      "https://www.netmeds.com/images/category/v1/3420/thumb/shaving_200.jpg", name:
      "Shaving", }, 
      { img_url:
      "https://www.netmeds.com/images/category/v1/3002/thumb/razors_cartridges_0.jpg",
      name: "Razors & Cartridges", },
       { img_url:
      "https://www.netmeds.com/images/category/v1/3591/thumb/beard_oil_200.jpg", name:
      "Beard Oil", },
       { img_url:
      "https://www.netmeds.com/images/category/v1/3593/thumb/beard_wash_0.jpg", name:
      "Beard Washs", },
       { img_url:
      "https://www.netmeds.com/images/category/v1/3704/thumb/hair_gels_waxes_200.jpg",
      name: "Hair Gels & Waxes", },
  ];

  beautyData5th=[
    {
      img_url:
        "https://www.netmeds.com/images/category/3495/thumb/face-wash-cleansers_1.jpg",
      name: "Face Wash & Cleansers",
    },
    {
      img_url:
        "https://www.netmeds.com/images/category/3505/thumb/facial_kits_0.jpg",
      name: "Facial Kits",
    },
    {
      img_url:
        "https://www.netmeds.com/images/category/v1/3903/thumb/face_skin_care_200.jpg",
      name: "Face Skin Care",
    },
    {
      img_url:
        "https://www.netmeds.com/images/category/v1/3431/thumb/make_up_1.jpg",
      name: "Make-up",
    },
    {
      img_url:
        "https://www.netmeds.com/images/category/v1/3499/thumb/day_cream_200.jpg",
      name: "Day Cream",
    },
  ];
  beautyData.map(function (elem) {
    var h1=document.createElement("h1")
    
    var box = document.createElement("div");
    

    var img = document.createElement("img");
    img.src = elem.img_url;
    var Name = document.createElement("h4");
    Name.innerText = elem.name;

    box.append(img, Name);

    document.querySelector(".container1").append(box);
  });

  beautyData2nd.map(function (elem) {
  
    
    var box = document.createElement("div");
    

    var img = document.createElement("img");
    img.src = elem.img_url;
    var Name = document.createElement("h4");
    Name.innerText = elem.name;

    box.append(img, Name);

    document.querySelector(".container2").append(box);
  });

  beautyData3rd.map(function (elem) {
  
    
    var box = document.createElement("div");
    

    var img = document.createElement("img");
    img.src = elem.img_url;
    var Name = document.createElement("h4");
    Name.innerText = elem.name;

    box.append(img, Name);

    document.querySelector(".container3").append(box);
  });

  beautyData4th.map(function (elem) {
    
    var box = document.createElement("div");
    

    var img = document.createElement("img");
    img.src = elem.img_url;
    var Name = document.createElement("h4");
    Name.innerText = elem.name;

    box.append(img, Name);

    document.querySelector(".container4").append(box);
  });


  beautyData5th.map(function (elem) {
    
    
    var box = document.createElement("div");
    

    var img = document.createElement("img");
    img.src = elem.img_url;
    var Name = document.createElement("h4");
    Name.innerText = elem.name;

    box.append(img, Name);

    document.querySelector(".container5").append(box);
  });