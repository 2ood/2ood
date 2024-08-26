<main>
    <section>
        <h1>Projects</h1>
        <columngroup>
        <column id="canvas"></column>
        <column>
            <card id="0" class="hide">
                This is a test summary 0
            </card>
            <card id="2" class="hide">
                This is a test summary 2
            </card>
        </column>
        </columngroup>
    </section>
</main>

<script>
    import { SVG } from '@svgdotjs/svg.js';
    import { onMount } from 'svelte'

onMount(async()=>{
    var svg = SVG().addTo("#canvas");
    var draw = svg.size('400px','1000px');
    var path = draw.path('M 200 100 Q 320 100 320 200 Q 320 300 200 300 Q 80 300 80 400 Q 80 500 200 500 Q 320 500 320 600 Q 320 700 200 700 Q 80 700 80 800 Q 80 900 200 900').stroke({color:'#DFD3C3',width:10,linecap: 'round', linejoin: 'round'}).fill('none');

    var dot_positions = [
        {id:0, cx : 200, cy: 100},{id:2, cx : 320, cy: 200},{id:4,cx : 200, cy: 300},
        {id:6,cx : 80, cy: 400},{id:8,cx : 200, cy: 500},{id:10,cx : 320, cy: 600},
        {id:12,cx : 200, cy: 700},{id:14,cx : 80, cy: 800},{id:16,cx : 200, cy: 900}
    ];
    
    var _positions = [
        {id:1,cx: 320, cy:100}, {id:3,cx:320, cy:300}, {id:5,cx:80, cy:300},
        {id:7,cx:80,cy:500},{id:9,cx:320,cy:500},{id:11,cx:320,cy:700}
    ];

    var dots = []

    dot_positions.forEach(p => {
        dots.push(draw.circle(20).attr({summary_id:p.id, cx:p.cx, cy:p.cy}).fill("#8D493A"));       
    });

    dots.forEach(dot=>{
        dot.on("mouseenter",evt=>{
            var summary = document.getElementById(evt.srcElement.getAttribute("summary_id"));
            console.log(summary);
            if(summary!=null) summary.classList.remove("hide");
        });
    });
    });
</script>
    