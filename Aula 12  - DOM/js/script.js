const listaPosts = [
  {
    id: 1,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/caramelo.jpg",
  },
  {
    id: 2,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/lulu.jpg",
  },
  {
    id: 3,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/pug.jpg",
  },
  {
    id: 4,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/zoiudo.jpg",
  },
  {
    id: 4,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/zoiudo.jpg",
  },
  {
    id: 4,
    titulo: "Lorem ipsum dolor sit amet.",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit. Nam ut tincidunt nisl. Duis consequat hendrerit metus id fermentum. Integer risus massa, fermentum lacinia pellentesque vel, congue nec ex. Etiam et tincidunt urna. Donec dolor justo, vehicula eu tincidunt id, eleifend eu leo. Donec eu dolor sapien. Maecenas et accumsan dolor, eget placerat massa.",
    imgURL: "./img/zoiudo.jpg",
  },
];

let container = document.querySelector(".container");

const criacaoPosts = () => {
  listaPosts.forEach((post) => {
    let card = `   
            <div class="card">
                <img class="card-img" src=${post.imgURL} /> 
                <h2 class="card-titulo"> ${post.titulo} </h2>
                <p class="card-descricao"> ${post.descricao} </p>
                <a href="form_adotar.html" ><button class="card-button">ADOTAR</button></a>               
               
            </div>
        `;
    container.innerHTML += card;
  });
};



window.onload = () => {
  criacaoPosts();

  card.forEach((card) => {
    card.addEventListener("mousemove", () => {
      card.style.backgroundColor = "yellow";
    });

    card.addEventListener("mouseout", () => {
      card.style.backgroundColor = "transparent";
    });

    card.lastElementChild.addEventListener("click", (event) => {
      console.log("acessou");
    });

  });
};


