/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='https://raw.githubusercontent.com/DeathBarmaglot/install/main/images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                rect: ['0px', '0px','300px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px'],
                transform: [[],['-180']]
            },
            {
                id: 'l22',
                type: 'image',
                rect: ['-835px', '-186px','1968px','395px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'z',
                type: 'image',
                rect: ['-1000px', '-177px','2888px','481px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"z.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'w',
                type: 'image',
                rect: ['-1154px', '35px','2600px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"w.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'o',
                type: 'image',
                rect: ['-888px', '-148px','1568px','347px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"o.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['29px', '80px','242px','72px','auto', 'auto'],
                text: "050 938 49 68<br>050 579 11 36<br>067 397 11 93",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 23, "rgba(253,253,253,1.00)", "900", "none", "normal"]
            },
            {
                id: 'b2',
                type: 'image',
                rect: ['-143px', '46px','113px','128px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.png",'0px','0px']
            },
            {
                id: 'r',
                type: 'image',
                rect: ['-167px', '-28px','1080px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"r.svg",'0px','0px'],
                transform: [[],[],[],['0.15','0.15']]
            },
            {
                id: 'b',
                type: 'image',
                rect: ['-92px', '-38px','900px','280px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'co3',
                type: 'image',
                rect: ['-165px', '49px','157px','128px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"co3.png",'0px','0px']
            },
            {
                id: 'k2',
                type: 'image',
                rect: ['-136px', '52px','82px','128px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"k.png",'0px','0px']
            },
            {
                id: 'k3',
                type: 'image',
                rect: ['25px', '-13px','640px','230px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"k.svg",'0px','0px'],
                transform: [[],[],[],['0.18','0.18']]
            },
            {
                id: 'k1',
                type: 'image',
                rect: ['-339px', '-27px','1434px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"k1.svg",'0px','0px'],
                transform: [[],[],[],['0.2','0.2']]
            },
            {
                id: 'Metal_Fach-SD-DUO',
                type: 'image',
                rect: ['-182px', '28px','165px','165px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Metal_Fach-SD-DUO.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_b}": [
                ["style", "left", '-92px'],
                ["style", "top", '-38px']
            ],
            "${_l22}": [
                ["style", "top", '-173px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '395px'],
                ["style", "opacity", '0'],
                ["style", "left", '-835px'],
                ["style", "width", '1968px']
            ],
            "${_b2}": [
                ["style", "top", '46px'],
                ["style", "height", '128px'],
                ["style", "left", '-143px'],
                ["style", "width", '113px']
            ],
            "${_Metal_Fach-SD-DUO}": [
                ["style", "top", '28px'],
                ["style", "height", '165px'],
                ["style", "left", '-182px'],
                ["style", "width", '165px']
            ],
            "${_k3}": [
                ["transform", "scaleX", '0.18'],
                ["style", "left", '40px'],
                ["transform", "scaleY", '0.18'],
                ["style", "top", '-13px']
            ],
            "${_Text2}": [
                ["style", "line-height", '23px'],
                ["transform", "scaleX", '0'],
                ["style", "font-weight", '900'],
                ["style", "left", '29px'],
                ["style", "font-size", '23px'],
                ["style", "top", '80px'],
                ["style", "text-align", 'center'],
                ["style", "height", '72px'],
                ["transform", "scaleY", '0'],
                ["color", "color", 'rgba(253,253,253,1.00)']
            ],
            "${_r}": [
                ["transform", "scaleX", '0.15'],
                ["style", "left", '-167px'],
                ["transform", "scaleY", '0.15'],
                ["style", "top", '-28px']
            ],
            "${_bg}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '-180deg'],
                ["style", "left", '0px'],
                ["style", "width", '300px']
            ],
            "${_k1}": [
                ["style", "top", '-27px'],
                ["transform", "scaleY", '0.2'],
                ["style", "height", '260px'],
                ["transform", "scaleX", '0.2'],
                ["style", "left", '-340px'],
                ["style", "width", '1434px']
            ],
            "${_co3}": [
                ["style", "top", '49px'],
                ["style", "height", '128px'],
                ["style", "left", '-165px'],
                ["style", "width", '157px']
            ],
            "${_w}": [
                ["style", "top", '35px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '260px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '-1154px'],
                ["style", "width", '2600px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_z}": [
                ["style", "top", '-177px'],
                ["style", "height", '481px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1000px'],
                ["style", "width", '2888px']
            ],
            "${_k2}": [
                ["style", "top", '52px'],
                ["style", "height", '128px'],
                ["style", "left", '-136px'],
                ["style", "width", '82px']
            ],
            "${_o}": [
                ["style", "top", '-148px'],
                ["style", "height", '347px'],
                ["style", "left", '-888px'],
                ["style", "width", '1568px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 25319,
            autoPlay: true,
            timeline: [
                { id: "eid57", tween: [ "style", "${_r}", "left", '-318px', { fromValue: '-167px'}], position: 5000, duration: 1176, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "style", "${_r}", "left", '-167px', { fromValue: '-318px'}], position: 7971, duration: 1176, easing: "easeOutQuad" },
                { id: "eid71", tween: [ "style", "${_z}", "opacity", '1', { fromValue: '0'}], position: 17893, duration: 1305 },
                { id: "eid84", tween: [ "style", "${_z}", "opacity", '0', { fromValue: '1'}], position: 24000, duration: 1305 },
                { id: "eid133", tween: [ "style", "${_Metal_Fach-SD-DUO}", "left", '-6px', { fromValue: '-182px'}], position: 13176, duration: 1176, easing: "easeOutQuad" },
                { id: "eid134", tween: [ "style", "${_Metal_Fach-SD-DUO}", "left", '-182px', { fromValue: '-6px'}], position: 16459, duration: 1176, easing: "easeOutQuad" },
                { id: "eid91", tween: [ "transform", "${_w}", "scaleX", '0.07', { fromValue: '0'}], position: 19670, duration: 1319 },
                { id: "eid92", tween: [ "transform", "${_w}", "scaleX", '0', { fromValue: '0.07'}], position: 24000, duration: 1305 },
                { id: "eid141", tween: [ "style", "${_l22}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid17", tween: [ "style", "${_l22}", "opacity", '0', { fromValue: '1'}], position: 17176, duration: 1176 },
                { id: "eid65", tween: [ "style", "${_k3}", "left", '-98px', { fromValue: '40px'}], position: 9147, duration: 1176, easing: "easeOutQuad" },
                { id: "eid67", tween: [ "style", "${_k3}", "left", '42px', { fromValue: '-98px'}], position: 12000, duration: 1176, easing: "easeOutQuad" },
                { id: "eid106", tween: [ "style", "${_z}", "left", '-1294px', { fromValue: '-1000px'}], position: 17893, duration: 1305, easing: "easeOutQuad" },
                { id: "eid105", tween: [ "style", "${_z}", "left", '-1000px', { fromValue: '-1294px'}], position: 24000, duration: 1305, easing: "easeOutQuad" },
                { id: "eid89", tween: [ "transform", "${_w}", "scaleY", '0.07', { fromValue: '0'}], position: 19670, duration: 1319 },
                { id: "eid90", tween: [ "transform", "${_w}", "scaleY", '0', { fromValue: '0.07'}], position: 24000, duration: 1305 },
                { id: "eid61", tween: [ "style", "${_k2}", "left", '37px', { fromValue: '-136px'}], position: 8984, duration: 1176, easing: "easeOutQuad" },
                { id: "eid63", tween: [ "style", "${_k2}", "left", '-136px', { fromValue: '37px'}], position: 12000, duration: 1176, easing: "easeOutQuad" },
                { id: "eid139", tween: [ "transform", "${_l22}", "scaleY", '0.1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid87", tween: [ "transform", "${_Text2}", "scaleX", '1', { fromValue: '0'}], position: 18351, duration: 1319 },
                { id: "eid88", tween: [ "transform", "${_Text2}", "scaleX", '0', { fromValue: '1'}], position: 24319, duration: 1000 },
                { id: "eid130", tween: [ "style", "${_k1}", "left", '-507px', { fromValue: '-340px'}], position: 13176, duration: 980, easing: "easeOutQuad" },
                { id: "eid132", tween: [ "style", "${_k1}", "left", '-337px', { fromValue: '-507px'}], position: 16459, duration: 980, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_b2}", "left", '21px', { fromValue: '-143px'}], position: 5000, duration: 1176, easing: "easeOutQuad" },
                { id: "eid41", tween: [ "style", "${_b2}", "left", '-143px', { fromValue: '21px'}], position: 7971, duration: 1176, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "style", "${_l22}", "top", '-167px', { fromValue: '-173px'}], position: 0, duration: 500 },
                { id: "eid16", tween: [ "style", "${_l22}", "top", '-239px', { fromValue: '-167px'}], position: 17176, duration: 1176 },
                { id: "eid35", tween: [ "style", "${_b}", "left", '-218px', { fromValue: '-92px'}], position: 1352, duration: 1176, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${_b}", "left", '-92px', { fromValue: '-218px'}], position: 4000, duration: 1176, easing: "easeOutQuad" },
                { id: "eid140", tween: [ "transform", "${_l22}", "scaleX", '0.1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid85", tween: [ "transform", "${_Text2}", "scaleY", '1', { fromValue: '0'}], position: 18351, duration: 1319 },
                { id: "eid86", tween: [ "transform", "${_Text2}", "scaleY", '0', { fromValue: '1'}], position: 24319, duration: 1000 },
                { id: "eid7", tween: [ "style", "${_o}", "left", '-638px', { fromValue: '-888px'}], position: 17176, duration: 1176, easing: "easeInQuad" },
                { id: "eid11", tween: [ "style", "${_o}", "left", '-370px', { fromValue: '-638px'}], position: 24129, duration: 1176, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_co3}", "left", '12px', { fromValue: '-165px'}], position: 764, duration: 1176 },
                { id: "eid23", tween: [ "style", "${_co3}", "left", '-165px', { fromValue: '12px'}], position: 4000, duration: 1176, easing: "easeOutQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-23495028");
