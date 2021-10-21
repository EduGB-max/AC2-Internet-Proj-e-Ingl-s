const banco = [
    {
        img: "https://www.clarksvilleonline.com/wp-content/uploads/2015/08/Back-to-the-Future-Part-1-and-2.jpg",
        tit: "Special : 31 Years of Back to the Future",
        txt: "Back to the Future is one of the best movies of the 80's and is still a very watched movie today, largely because of its theories with the times we live."
    },

    {
        img: "https://img.r7.com/images/willian-ou-douglas-costa-quem-e-o-titular-para-voce-22062018121814154?dimensions=660x360&&amp;&amp;&amp;&amp;&amp;&amp;resize=660x360&amp;crop=1200x654+0+41&amp;&amp;&amp;&amp;&amp;&amp;resize=660x360&amp;crop=1200x654+0+41",
        tit: "Which is the best reinforcement ? ",
        txt: "In recent months, the soccer market has become quite busy and talked about in Brazil."
    },

    {
        img: "https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQPpPxBx-XaBHv9uPMHdJJp3aiT5Xy7l1p2t1NGP8UDIN48mGDijpsWr7OzQUpEQYmWTEJqlYOIxHEnlbM3FQIj6vxI8wog6V_ENr4UfyXFdT-LY.jpg?r=e86",
        tit: "Squid game is the biggest series on Netflix of all time",
        txt: "Whether it's the mystery around the little old man or the music of the giant doll, Squid Game has taken over the screens of people all over the world."
    },

    {
        img: "https://www.tecnoandroid.it/wp-content/uploads/2021/09/eFootball-2022-Konami-PES-calcio.jpg",
        tit: "eFootball 2022 vs PES 2021, which one has better graphics?",
        txt: "eFootball PES 2021, a title much better finished than eFootball 2022."
    },

    {
        img: "https://www.tecnoandroid.it/wp-content/uploads/2021/09/eFootball-2022-Konami-PES-calcio.jpg",
        tit: "eFootball 2022 vs PES 2021, which one has better graphics?",
        txt: "eFootball PES 2021, a title much better finished than eFootball 2022."
    },

    {
        img: "https://www.tecnoandroid.it/wp-content/uploads/2021/09/eFootball-2022-Konami-PES-calcio.jpg",
        tit: "eFootball 2022 vs PES 2021, which one has better graphics?",
        txt: "eFootball PES 2021, a title much better finished than eFootball 2022."
    }
    ];

    const imgs = [];
    const h1s = [];
    const ps = [];

    window.addEventListener("DOMContentLoaded",function(){
        for(i = 0; i < banco.length; i++){
            imgs.push(document.querySelector("#imgN" + i));
            h1s.push(document.querySelector("#h1N" + i));
            ps.push(document.querySelector("#pN" + i));
        }
        //console.log(img);

        for(i = 0; i<banco.length; i++){
            imgs[i].src = banco[i].img;
            h1s[i].innerHTML = banco[i].tit;
            ps[i].innerHTML = banco[i].txt;
        }
    });