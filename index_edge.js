/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

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
                id: 'r',
                type: 'image',
                rect: ['-167px', '13px','1080px','260px','auto', 'auto'],
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
                id: 'k3',
                type: 'image',
                rect: ['25px', '14px','640px','230px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"k.svg",'0px','0px'],
                transform: [[],[],[],['0.2','0.2']]
            },
            {
                id: 'k1',
                type: 'image',
                rect: ['-339px', '-41px','1434px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"k1.svg",'0px','0px'],
                transform: [[],[],[],['0.14','0.14']]
            },
            {
                id: 'Metal_Fach-SD-DUO',
                type: 'image',
                rect: ['-182px', '28px','165px','165px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Metal_Fach-SD-DUO.png",'0px','0px']
            },
            {
                id: 'delonghi2',
                type: 'image',
                rect: ['230px', '-20px','318px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"delonghi2.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'delonghi_phd_22',
                type: 'image',
                rect: ['-247px', '-33px','300px','295px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"delonghi_phd_22.png",'0px','0px'],
                transform: [[],['-5'],[],['0.4','0.4']]
            },
            {
                id: '_219106045_images_18488038873',
                type: 'image',
                rect: ['-247px', '-35px','300px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"219106045_images_18488038873.png",'0px','0px'],
                transform: [[],[],[],['0.4','0.4']]
            },
            {
                id: 'Untitled-1',
                type: 'image',
                rect: ['-203px', '-42px','200px','304px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-1.png",'0px','0px'],
                transform: [[],[],[],['0.4','0.4']]
            },
            {
                id: 'lo',
                type: 'image',
                rect: ['221px', '60px','369px','63px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lo.png",'0px','0px'],
                transform: [[],[],[],['0.4','0.4']]
            },
            {
                id: 'MF',
                type: 'image',
                rect: ['260px', '107px','200px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"MF.png",'0px','0px'],
                transform: [[],[],[],['0.73','0.73']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_b}": [
                ["style", "top", '-38px'],
                ["style", "opacity", '1'],
                ["style", "left", '-92px']
            ],
            "${_Metal_Fach-SD-DUO}": [
                ["style", "height", '165px'],
                ["style", "top", '28px'],
                ["style", "left", '-182px'],
                ["style", "width", '165px']
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
                ["color", "color", 'rgba(253,253,253,1.00)'],
                ["transform", "scaleY", '0']
            ],
            "${_delonghi_phd_22}": [
                ["style", "top", '-33px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "rotateZ", '-5deg'],
                ["transform", "scaleX", '0.4'],
                ["style", "left", '-247px'],
                ["transform", "skewX", '0deg']
            ],
            "${__219106045_images_18488038873}": [
                ["style", "top", '-35px'],
                ["transform", "scaleY", '0.4'],
                ["style", "left", '-247px'],
                ["transform", "scaleX", '0.4']
            ],
            "${_k1}": [
                ["style", "top", '-41px'],
                ["transform", "scaleY", '0.14'],
                ["style", "height", '260px'],
                ["transform", "scaleX", '0.14'],
                ["style", "left", '-340px'],
                ["style", "width", '1434px']
            ],
            "${_lo}": [
                ["style", "top", '60px'],
                ["transform", "scaleY", '0.4'],
                ["style", "left", '221px'],
                ["transform", "scaleX", '0.4']
            ],
            "${_delonghi2}": [
                ["style", "top", '-20px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '230px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_MF}": [
                ["style", "top", '107px'],
                ["transform", "scaleY", '0.73'],
                ["style", "left", '281px'],
                ["transform", "scaleX", '0.73']
            ],
            "${_o}": [
                ["style", "top", '-148px'],
                ["style", "height", '347px'],
                ["style", "opacity", '1'],
                ["style", "left", '-888px'],
                ["style", "width", '1568px']
            ],
            "${_l22}": [
                ["style", "top", '-173px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '395px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-835px'],
                ["style", "width", '1968px']
            ],
            "${_w}": [
                ["style", "top", '35px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '260px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '-1154px'],
                ["style", "width", '2600px']
            ],
            "${_r}": [
                ["style", "top", '13px'],
                ["transform", "scaleY", '0.15'],
                ["transform", "scaleX", '0.15'],
                ["style", "opacity", '1'],
                ["style", "left", '-167px']
            ],
            "${_co3}": [
                ["style", "height", '128px'],
                ["style", "top", '49px'],
                ["style", "left", '-165px'],
                ["style", "width", '157px']
            ],
            "${_bg}": [
                ["style", "top", '0px'],
                ["style", "width", '300px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '-180deg']
            ],
            "${_k3}": [
                ["style", "top", '14px'],
                ["transform", "scaleY", '0.2'],
                ["transform", "scaleX", '0.2'],
                ["style", "opacity", '1'],
                ["style", "left", '47px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_z}": [
                ["style", "top", '-177px'],
                ["style", "height", '481px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1294px'],
                ["style", "width", '2888px']
            ],
            "${_Untitled-1}": [
                ["style", "top", '-42px'],
                ["transform", "scaleY", '0.4'],
                ["style", "left", '-203px'],
                ["transform", "scaleX", '0.4']
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
                { id: "eid85", tween: [ "transform", "${_Text2}", "scaleY", '1', { fromValue: '0'}], position: 17635, duration: 1319 },
                { id: "eid86", tween: [ "transform", "${_Text2}", "scaleY", '0', { fromValue: '1'}], position: 24319, duration: 1000 },
                { id: "eid154", tween: [ "style", "${_MF}", "left", '111px', { fromValue: '281px'}], position: 13500, duration: 980, easing: "easeOutQuad" },
                { id: "eid155", tween: [ "style", "${_MF}", "left", '280px', { fromValue: '111px'}], position: 16459, duration: 980, easing: "easeOutQuad" },
                { id: "eid71", tween: [ "style", "${_z}", "opacity", '1', { fromValue: '0'}], position: 17893, duration: 1305 },
                { id: "eid84", tween: [ "style", "${_z}", "opacity", '0', { fromValue: '1'}], position: 24000, duration: 1305 },
                { id: "eid133", tween: [ "style", "${_Metal_Fach-SD-DUO}", "left", '-6px', { fromValue: '-182px'}], position: 13176, duration: 1176, easing: "easeOutQuad" },
                { id: "eid134", tween: [ "style", "${_Metal_Fach-SD-DUO}", "left", '-182px', { fromValue: '-6px'}], position: 16459, duration: 1176, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "style", "${_l22}", "top", '-167px', { fromValue: '-173px'}], position: 0, duration: 500 },
                { id: "eid16", tween: [ "style", "${_l22}", "top", '-239px', { fromValue: '-167px'}], position: 16250, duration: 1176 },
                { id: "eid91", tween: [ "transform", "${_w}", "scaleX", '0.07', { fromValue: '0'}], position: 17893, duration: 1319 },
                { id: "eid92", tween: [ "transform", "${_w}", "scaleX", '0', { fromValue: '0.07'}], position: 24000, duration: 1305 },
                { id: "eid141", tween: [ "style", "${_l22}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid17", tween: [ "style", "${_l22}", "opacity", '0', { fromValue: '1'}], position: 16250, duration: 1176 },
                { id: "eid142", tween: [ "style", "${_delonghi_phd_22}", "left", '-72px', { fromValue: '-247px'}], position: 5000, duration: 1176, easing: "easeOutQuad" },
                { id: "eid143", tween: [ "style", "${_delonghi_phd_22}", "left", '-247px', { fromValue: '-72px'}], position: 7971, duration: 1176, easing: "easeOutQuad" },
                { id: "eid159", tween: [ "style", "${_r}", "opacity", '0', { fromValue: '1'}], position: 7971, duration: 500 },
                { id: "eid65", tween: [ "style", "${_k3}", "left", '-111px', { fromValue: '47px'}], position: 9147, duration: 1013, easing: "easeOutQuad" },
                { id: "eid152", tween: [ "style", "${__219106045_images_18488038873}", "left", '-72px', { fromValue: '-247px'}], position: 13176, duration: 1176, easing: "easeOutQuad" },
                { id: "eid153", tween: [ "style", "${__219106045_images_18488038873}", "left", '-247px', { fromValue: '-72px'}], position: 16459, duration: 1176, easing: "easeOutQuad" },
                { id: "eid149", tween: [ "style", "${_lo}", "left", '24px', { fromValue: '221px'}], position: 9324, duration: 1176, easing: "easeOutQuad" },
                { id: "eid150", tween: [ "style", "${_lo}", "left", '221px', { fromValue: '24px'}], position: 12000, duration: 1176, easing: "easeOutQuad" },
                { id: "eid89", tween: [ "transform", "${_w}", "scaleY", '0.07', { fromValue: '0'}], position: 17893, duration: 1319 },
                { id: "eid90", tween: [ "transform", "${_w}", "scaleY", '0', { fromValue: '0.07'}], position: 24000, duration: 1305 },
                { id: "eid145", tween: [ "style", "${_delonghi2}", "left", '64px', { fromValue: '230px'}], position: 5500, duration: 1176, easing: "easeOutQuad" },
                { id: "eid146", tween: [ "style", "${_delonghi2}", "left", '230px', { fromValue: '64px'}], position: 7971, duration: 1176, easing: "easeOutQuad" },
                { id: "eid139", tween: [ "transform", "${_l22}", "scaleY", '0.1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid87", tween: [ "transform", "${_Text2}", "scaleX", '1', { fromValue: '0'}], position: 17635, duration: 1319 },
                { id: "eid88", tween: [ "transform", "${_Text2}", "scaleX", '0', { fromValue: '1'}], position: 24319, duration: 1000 },
                { id: "eid20", tween: [ "style", "${_co3}", "left", '12px', { fromValue: '-165px'}], position: 500, duration: 1176 },
                { id: "eid23", tween: [ "style", "${_co3}", "left", '-165px', { fromValue: '12px'}], position: 4000, duration: 1176, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_b}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 500 },
                { id: "eid147", tween: [ "style", "${_Untitled-1}", "left", '-30px', { fromValue: '-203px'}], position: 8984, duration: 1176, easing: "easeOutQuad" },
                { id: "eid148", tween: [ "style", "${_Untitled-1}", "left", '-203px', { fromValue: '-30px'}], position: 12000, duration: 1176, easing: "easeOutQuad" },
                { id: "eid7", tween: [ "style", "${_o}", "left", '-638px', { fromValue: '-888px'}], position: 17750, duration: 750, easing: "easeInQuad" },
                { id: "eid35", tween: [ "style", "${_b}", "left", '-218px', { fromValue: '-92px'}], position: 1088, duration: 1176, easing: "easeOutQuad" },
                { id: "eid140", tween: [ "transform", "${_l22}", "scaleX", '0.1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid161", tween: [ "style", "${_o}", "opacity", '0', { fromValue: '1'}], position: 24000, duration: 1305 },
                { id: "eid130", tween: [ "style", "${_k1}", "left", '-507px', { fromValue: '-340px'}], position: 13176, duration: 980, easing: "easeOutQuad" },
                { id: "eid132", tween: [ "style", "${_k1}", "left", '-337px', { fromValue: '-507px'}], position: 16459, duration: 980, easing: "easeOutQuad" },
                { id: "eid160", tween: [ "style", "${_k3}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 500 }            ]
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
