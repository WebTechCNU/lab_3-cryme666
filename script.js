

const imageGallery = document.querySelector(".image-gallery");


const images = [
  {
    url: "original.webp",
    description: "Original"
    
    },

    {
      url: "green.jpg",
      description: "Sour Twist"
    },
    {
      url: "purple.jpg",
      description: "Passion Punch"
    },
    {
      url: "orange.png",
      description: "Mango"
    },
    
    {
      url: "yellow.jpg",
      description: "Lemon Ice"
      
    },
    {
      url: "zero.jpg",
      description: "Zero"
    },
    
    
    
    {
      url: "blue-refresh.jpg",
      description: "Blue Refresh"
      
    },
    
  ];
  
  
  for (let i = 0; i < 4; i++) {
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");
    
    const image = document.createElement("img");
    image.src = images[i].url;
    
    const imageDescription = document.createElement("div");
    imageDescription.classList.add("image-description");
    imageDescription.textContent = images[i].description;
    
    imageCard.appendChild(image);
    imageCard.appendChild(imageDescription);
    imageGallery.appendChild(imageCard);
  }
  
  function loadMore() {
    
    document.querySelector(".load-buttons button").style.display = "none";
    
    for (let i = 4; i <= 7; i++) {
      const imageCard = document.createElement("div");
      imageCard.classList.add("image-card");
      
      const image = document.createElement("img");
      image.src = images[i].url;
      
      const imageDescription = document.createElement("div");
      imageDescription.classList.add("image-description");
      imageDescription.textContent = images[i].description;
      
      imageCard.appendChild(image);
      imageCard.appendChild(imageDescription);
      imageGallery.appendChild(imageCard);
    }
    
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    
    
    setTimeout(function() {
      if (localStorage.getItem("subscribed") != "true") {
          document.getElementById('popup').style.display = 'block';
      }
  }, 15000);
  
    document.getElementById('accept-btn').addEventListener('click', function() {
      localStorage.clear();
      localStorage.setItem('subscribed', "true");
      document.getElementById('popup').style.display = 'none';
      alert('Дякуємо за приєднання!');
    });
    
    document.getElementById('reject-btn').addEventListener('click', function() {
      document.getElementById('popup').style.display = 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    
  
    setTimeout(function() {
      document.getElementById('reklama').style.display = 'block';
      
  }, 5000);

  setTimeout(function() {
    document.getElementById('close').style.display = 'flex';
    
}, 10000);

  
  
    document.getElementById('close').addEventListener('click', function() {
      document.getElementById('reklama').style.display = 'none';

    });
  });
  
  
  