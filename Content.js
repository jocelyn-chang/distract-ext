const generateHTML = (pageName) => {
    return `<div id = "clouds">
    <h1>GET BACK TO STUDYING</h1>
    <div class="text">GET OFF OF ${pageName}</div>
    <div class="cloud1"></div>
</div>`
};

const generateSTYLING = () => {
    return `<style>
    body {
        background: #21A2FF;
        color: #fff;
        font-family: 'Archivo Black', sans-serif;
        max-height: 700px;
        overflow: hidden;
    }
    h1 {
        font-size: 150px;
        text-align: center;
        display: block;
        position: relative;
        height: 250px;
        top: 100px;
    }
    .text {
        font-size: 50px;
        text-align: center;
        display: block;
        position: relative;
        height: 100px;
        top: 120px;
    }</style>`
};


let pageName = "";
let domain = window.location.hostname;
let index1 = domain.indexOf(".");
let subdomain = domain.substring(index1 + 1);
let index2 = subdomain.indexOf(".");
pageName = (subdomain.substring(0, index2)).toUpperCase();

switch (window.location.hostname) {
    case "www.youtube.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML(pageName);
        break;
    case "www.instagram.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML(pageName);
        break;
    case "www.netflix.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML(pageName);
        break;
    case "www.pinterest.ca":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML(pageName);
        break;
    case "www.aritzia.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML(pageName);
        break;
    case "us.brandymelville.com": 
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML(pageName);
        break;
}