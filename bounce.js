style>

container
position: relative, width: 400px; 
height: 400px; 
border: 1px; 
solid #ccc; 
overflow: hidden;

bouncing-element {
width: 100px;
height: 100px; 
background-color: red; 
position: absolute animation: 
bounce 1s infinite alternate; 
transform-origin: 50% 50%; 
  z-index: 1;

content (
position: absolute;
top: 50px; left: 50px;
z-index: 2

}

content p font-size: 16px;
content img { max-width: 200px;

@keyframes bounce (
transform: translate(0, 0); 0%( 25%(
0): transform: translate(200px,
50%( transform: translate(200px, 200px);
75%( transform: translate(0, 200px);
100%( transform: translate(0, 0);
</style>

<body>
<div class="container">
<div class="bouncing-element"> The Realest Fractured Stoty </div> 
  </div>

<div class="content"> <p>This is some additional text that won't move with the bouncy words.</p> <img src="image.jpg" alt="Additional Image"> </div> </body>
