const express = require('express');
const mydata = require("./database");
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/',(req, res)=> {
    res.send('Hello World!');
})

app.get('/create',async(req, res)=> {
    const cardData = [
        {
          "id": 1,
          "name": "Gaming Laptop",
          "description": "High-performance gaming laptop with RTX 4070 GPU and 16GB RAM.",
          "price": 1499.99,
          "image": "https://imgs.search.brave.com/COw5ZScyxUAxPGE8qoFd2Tebqp-P3BU6pX8JflNGZHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzczLzE0LzQ0/LzM2MF9GXzk3MzE0/NDQ5M19tQ0w4OGQz/Y01Nb3BlS0ZQWHVQ/bU00UVpqcjdzVVVR/OS5qcGc"
        },
        {
          "id": 2,
          "name": "Wireless Headphones",
          "description": "Noise-canceling wireless headphones with 40-hour battery life.",
          "price": 199.99,
          "image": "https://imgs.search.brave.com/Xo3fxq3e5QT57_yAp_a7AWU-ghIl-VKKMT0E-_7bPKA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFKQUNXVC13V0wu/anBn"
        },
        {
          "id": 3,
          "name": "Smartwatch",
          "description": "Feature-rich smartwatch with heart rate monitor and GPS.",
          "price": 249.99,
          "image": "https://imgs.search.brave.com/E3NSJnAGgZSwBJbi-2zErZXgvhYgaBEn22jAwB8d1UU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY5/MzI4Mjg2L3Bob3Rv/L3NtYXJ0d2F0Y2gu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVVuczFVMmZqYzBN/NURJenhXOHFvOFdt/X0s3YWZ4Zk5sd1JX/YWlYczQ2UE09"
        },
        {
          "id": 4,
          "name": "Mechanical Keyboard",
          "description": "RGB backlit mechanical keyboard with blue switches.",
          "price": 129.99,
          "image": "https://imgs.search.brave.com/EIIQASV6p9QjmYgOEQHoGrTKpbTyPn7XyyfE52LthE4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/aGl0ZS1rZXlib2Fy/ZC13aXRoLWxpZ2h0/cy1oaWdoLWFuZ2xl/XzIzLTIxNDk2ODAy/NDAuanBnP3NlbXQ9/YWlzX2h5YnJpZA"
        },
        {
          "id": 5,
          "name": "4K Monitor",
          "description": "32-inch 4K UHD monitor with HDR support and 144Hz refresh rate.",
          "price": 399.99,
          "image": "https://imgs.search.brave.com/3wnZm1mCu8p1Ky54etBL1ExGmTAnfOACpN26LrK_BT8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly85dG81/dG95cy5jb20vd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzUv/MjAyNS8wMi9TYW1z/dW5nLTQzMjItU21h/cnQtTW9uaXRvci1N/Ny1NNzBELTRLLVVI/RC13aXRoLVN0cmVh/bWluZy1UVi1TcGVh/a2Vycy1hbmQtVVNC/LUMuanBlZz93PTEy/MDAmaD02MDAmY3Jv/cD0x"
        },
        {
          "id": 6,
          "name": "Gaming Mouse",
          "description": "Ergonomic gaming mouse with 12 customizable buttons and RGB lighting.",
          "price": 79.99,
          "image": "https://imgs.search.brave.com/yX3EiEwj9iUvqZtuApwKwBcbW_wLawI12ApElMobJW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/MDU3NzQyNy9waG90/by9ib3ktdXNpbmct/Z2FtaW5nLW1vdXNl/LW9uLXRhYmxlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1J/QzB5bjZLQVNjZFZq/dTgzeHk4MktuX1Ix/cVBBZk83bDh6ZFVj/RWFILVlZPQ"
        },
        {
          "id": 7,
          "name": "Portable SSD",
          "description": "1TB ultra-fast portable SSD with USB-C support.",
          "price": 129.99,
          "image": "https://imgs.search.brave.com/2ZI0MyblEpiTT01bP4org3LvznMnMgdSrNSlsHR4Oo8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vcmlj/b3RlY2hzLmNvbS9j/ZG4vc2hvcC9maWxl/cy9tMjAtMTIwMC0x/LTY2OGY5ODNlNTRk/ZGQud2VicD92PTE3/MjA2ODY3Mzkmd2lk/dGg9MTIwMA"
        },
        {
          "id": 8,
          "name": "Smart Speaker",
          "description": "AI-powered smart speaker with voice assistant and premium sound.",
          "price": 99.99,
          "image": "https://imgs.search.brave.com/_cva-gaTWdncxeAwDj6Wt6ELpVKiairfKZ6hsBxQaL8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA3/NTM4MDEyNi9waG90/by92b2ljZS1jb250/cm9sbGVkLXNtYXJ0/LXNwZWFrZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPV95/VTZ3UF9GZUlWRmxh/cGpONFpGUm13ekJW/N1JNdHotWFZPTGlv/eHVjVXM9"
        },
        {
          "id": 9,
          "name": "Drone Camera",
          "description": "4K drone camera with advanced stabilization and 30-minute flight time.",
          "price": 799.99,
          "image": "https://imgs.search.brave.com/z9n4wnJaHkPPLT4Mj9-916gOM8wFx0Gr-WFoFkFnNek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjg4/MDI2NTM3L3Bob3Rv/L2ZseWluZy1kcm9u/ZS13aXRoLWNhbWVy/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9TndqWm1JSENN/OThPY25DSTdJVXFP/c1hyb0hJaVUzeFBO/Wk1KTEgyZlR4MD0"
        },
        {
          "id": 10,
          "name": "VR Headset",
          "description": "Next-gen VR headset with 4K resolution and 120Hz refresh rate.",
          "price": 599.99,
          "image": "https://imgs.search.brave.com/GK8LJ3oAHXmGy6Qh-g_PVSxYv7EgGx-vliaWVlGg-Sg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTI0/MDcyODA4L3Bob3Rv/L2FuLW9jdWx1cy1y/aWZ0LXZpcnR1YWwt/cmVhbGl0eS1oZWFk/c2V0LXRha2VuLW9u/LWFwcmlsLTEyLTIw/MTYuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTFjVWNLZXVj/VzZtdGpEVU1HaFAx/clFoa0k4ZldHTVB4/RXhKT3JHV1JLdnc9"
        }
      ]
    //   console.log(cardData);
      let ans = await mydata.insertMany(cardData);
    res.send('the card has been created successfully');
})

app.get('/delete', async(req, res) => {
    let ans = await mydata.deleteMany({});
    res.send("the card has been deleted successfully");
})

app.get('/card', async(req, res) => {
    let cardData = await mydata.find({});
    res.send(cardData);
})

const port = 5010;

app.listen(port, () => 
    console.log(`Server running on port 5010`)
);
