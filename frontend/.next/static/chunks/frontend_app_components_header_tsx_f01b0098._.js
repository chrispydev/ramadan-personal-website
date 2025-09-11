(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/app/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSliderWithModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const slides = [
    {
        id: "v1",
        type: "video",
        poster: "/slider/slider1.jpg",
        src: "/videos/video1.mp4",
        title: "Welcome to My Portfolio",
        description: "Watch my journey and projects in action."
    },
    {
        id: "v2",
        type: "video",
        poster: "/slider/slider2.jpg",
        src: "/videos/video2.mp4",
        title: "Project Showcase",
        description: "I commissioned a CHPS compound at Forster Home Nsuonano."
    },
    {
        id: "img1",
        type: "image",
        img: "/images/hero-slide.jpg",
        title: "Discover My Projects",
        description: "Explore my skills, experiences, and achievements."
    }
];
function HeroSliderWithModal() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentVideoSrc, setCurrentVideoSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Stop/start autoplay & page scroll when modal opens/closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSliderWithModal.useEffect": ()=>{
            if (isOpen) {
                var _swiperRef_current_autoplay_stop, _swiperRef_current_autoplay, _swiperRef_current;
                document.body.style.overflow = "hidden";
                (_swiperRef_current = swiperRef.current) === null || _swiperRef_current === void 0 ? void 0 : (_swiperRef_current_autoplay = _swiperRef_current.autoplay) === null || _swiperRef_current_autoplay === void 0 ? void 0 : (_swiperRef_current_autoplay_stop = _swiperRef_current_autoplay.stop) === null || _swiperRef_current_autoplay_stop === void 0 ? void 0 : _swiperRef_current_autoplay_stop.call(_swiperRef_current_autoplay);
                // user clicked play -> give the video element a moment to mount, then play
                setTimeout({
                    "HeroSliderWithModal.useEffect": ()=>{
                        var _videoRef_current;
                        (_videoRef_current = videoRef.current) === null || _videoRef_current === void 0 ? void 0 : _videoRef_current.play().catch({
                            "HeroSliderWithModal.useEffect": ()=>{
                            /* autoplay might fail in edge cases; user can press play */ }
                        }["HeroSliderWithModal.useEffect"]);
                    }
                }["HeroSliderWithModal.useEffect"], 50);
            } else {
                var _swiperRef_current_autoplay_start, _swiperRef_current_autoplay1, _swiperRef_current1;
                document.body.style.overflow = "";
                (_swiperRef_current1 = swiperRef.current) === null || _swiperRef_current1 === void 0 ? void 0 : (_swiperRef_current_autoplay1 = _swiperRef_current1.autoplay) === null || _swiperRef_current_autoplay1 === void 0 ? void 0 : (_swiperRef_current_autoplay_start = _swiperRef_current_autoplay1.start) === null || _swiperRef_current_autoplay_start === void 0 ? void 0 : _swiperRef_current_autoplay_start.call(_swiperRef_current_autoplay1);
                if (videoRef.current) {
                    try {
                        videoRef.current.pause();
                        videoRef.current.currentTime = 0;
                    } catch (e) {
                    /* ignore */ }
                }
            }
            return ({
                "HeroSliderWithModal.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["HeroSliderWithModal.useEffect"];
        }
    }["HeroSliderWithModal.useEffect"], [
        isOpen
    ]);
    // close modal on ESC
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSliderWithModal.useEffect": ()=>{
            const onKey = {
                "HeroSliderWithModal.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") {
                        setIsOpen(false);
                    }
                }
            }["HeroSliderWithModal.useEffect.onKey"];
            if (isOpen) window.addEventListener("keydown", onKey);
            return ({
                "HeroSliderWithModal.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["HeroSliderWithModal.useEffect"];
        }
    }["HeroSliderWithModal.useEffect"], [
        isOpen
    ]);
    const handleOpenVideo = (src)=>{
        if (!src) return;
        setCurrentVideoSrc(src);
        setIsOpen(true);
    };
    const handleClose = ()=>{
        setIsOpen(false);
        setCurrentVideoSrc(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mx-auto h-[450px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                    ],
                    spaceBetween: 20,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        clickable: true
                    },
                    loop: true,
                    onSwiper: (s)=>{
                        swiperRef.current = s;
                    },
                    className: "h-full",
                    children: slides.map((slide)=>{
                        var _slide_title, _slide_title1, _slide_title2;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            className: "h-full relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "h-[450px] relative w-full",
                                children: [
                                    slide.type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        width: 800,
                                        height: 450,
                                        src: slide.poster,
                                        alt: (_slide_title = slide.title) !== null && _slide_title !== void 0 ? _slide_title : "video poster",
                                        className: "absolute top-0 left-0 w-full h-full object-cover bg-center",
                                        draggable: false
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/components/header.tsx",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        width: 800,
                                        height: 450,
                                        src: slide.img,
                                        alt: (_slide_title1 = slide.title) !== null && _slide_title1 !== void 0 ? _slide_title1 : "slide image",
                                        className: "absolute top-0 left-0 w-full h-full object-cover bg-center",
                                        draggable: false
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/components/header.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/35"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/components/header.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl md:text-4xl font-bold",
                                                children: slide.title
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/components/header.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm md:text-lg max-w-2xl",
                                                children: slide.description
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/components/header.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this),
                                            slide.type === "video" && slide.src && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleOpenVideo(slide.src),
                                                className: "mt-6 inline-flex items-center justify-center bg-white/95 text-black rounded-full w-16 h-16 shadow-lg hover:scale-105 transform transition",
                                                "aria-label": "Play ".concat((_slide_title2 = slide.title) !== null && _slide_title2 !== void 0 ? _slide_title2 : "video"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: "w-6 h-6 ml-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5.5 3.5v17l14-8.5-14-8.5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/components/header.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/components/header.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/components/header.tsx",
                                                lineNumber: 153,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/app/components/header.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/components/header.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        }, slide.id, false, {
                            fileName: "[project]/frontend/app/components/header.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/frontend/app/components/header.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/components/header.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            isOpen && currentVideoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                "aria-modal": "true",
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4",
                onClick: (e)=>{
                    // close if clicked outside the player box
                    if (e.target === e.currentTarget) handleClose();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            "aria-label": "Close video",
                            className: "absolute top-2 right-2 z-50 text-white bg-black/40 rounded-full p-2 hover:bg-black/60",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/components/header.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            ref: videoRef,
                            controls: true,
                            autoPlay: true,
                            className: "w-full h-full object-cover",
                            playsInline: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: currentVideoSrc,
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/components/header.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this),
                                "Your browser does not support the video tag."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/components/header.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/components/header.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/components/header.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(HeroSliderWithModal, "Fl1rtN2ninsEcRdvrGFfUDeua0Q=");
_c = HeroSliderWithModal;
var _c;
__turbopack_context__.k.register(_c, "HeroSliderWithModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_app_components_header_tsx_f01b0098._.js.map