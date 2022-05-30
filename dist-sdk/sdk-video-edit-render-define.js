(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.COMMON_DEF = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.GLOBAL_PTS = 0;

const DEF_FPS = 24.0;
// const DEF_CONST_RESOLUTION_HORI_360P = "HORI_360P";
// const DEF_CONST_RESOLUTION_HORI_720P = "HORI_720P";
// const DEF_CONST_RESOLUTION_HORI_1080P = "HORI_1080P";

const DEF_GL_ROI_RECT_BORDER_WEIGHT = 5;
const DEF_GL_ROI_TOUCH_RECT_BORDER_WEIGHT = 15;

module.exports = {

    // RUN_DOMAIN : "editgongan.com",
    // API_HOST: "http://test.editgongan.com:8080",

    // RUN_DOMAIN : "39.106.146.94",
    // API_HOST: "http://106.12.129.37:8080",

    BOOT_FRIST_TRUE : "first_true",
    BOOT_FRIST_FALSE : "first_false",

    GL_VIDEO_TEX_NAME : "tex",
    GL_VIDEO_TEX_LUT_NAME : "externTex",

    GL_CANVAS_CONT_ID : "canvas-render",

    GL_SCALE_MIN_1_STEP : 0.5,

    GL_ROI_RECT_BORDER_WEIGHT : DEF_GL_ROI_RECT_BORDER_WEIGHT,
    GL_ROI_TOUCH_RECT_BORDER_WEIGHT : DEF_GL_ROI_TOUCH_RECT_BORDER_WEIGHT,
    GL_ROI_RECT_BORDER_INFO : 'rgba(255, 255, 255, 1.0) dashed ' + DEF_GL_ROI_RECT_BORDER_WEIGHT + 'px',
    GL_ROI_RECT_MVING_BORDER_INFO : 'none',
    GL_ROI_RECT_MOVE_DOWN_POS_NONE : "none",
    GL_ROI_RECT_MOVE_DOWN_POS_LEFT : "left",
    GL_ROI_RECT_MOVE_DOWN_POS_RIGHT : "right",
    GL_ROI_RECT_MOVE_DOWN_POS_TOP : "top",
    GL_ROI_RECT_MOVE_DOWN_POS_BOTTOM : "bottom",

    GL_CROP_MAX_MV_DISTANCE_STEP : 5,

    FIXED_FRAME_FPS : DEF_FPS,
    ONE_FRAME_DURATION : 1.0 / DEF_FPS,
    ONE_FRAME_DURATION_MS : 1000.0 / DEF_FPS,
    TAG_LEVEL_UNIT : 1000,

    TRACE_MASTER_IDX : 0,
    TRACE_TYPE_VIDEO : 'VIDEO',
    TRACE_TYPE_AUDIO : 'AUDIO',
    TRACE_TYPE_SUBTITLE : 'SUBTITLE',

    NODE_TYPE_ALL: 1000,
    NODE_TYPE_VIDEO: 1001,
    NODE_TYPE_AUDIO: 1002,
    NODE_TYPE_LUT:   1003, // unused
    NODE_TYPE_TEXT:  1004,
    NODE_TYPE_EXT_IMG: 1005,

    MATERIAL_TYPE_VIDEO : 'VIDEO',
    MATERIAL_TYPE_IMAGE : 'IMAGE',
    MATERIAL_TYPE_AUDIO : 'AUDIO',
    MATERIAL_TYPE_TEXT  : 'TEXT',
    MATERIAL_TYPE_UNKNOW  : 'UNKNOW',

    MATERIAL_APPEND_TYPE_NORMAL : 'APPEND-NORMAL',
    MATERIAL_APPEND_TYPE_PIP : 'VIDEO-IMAGE-PIP',

    MATERIAL_STATE_TRANSCODING : "TRANSCODING",
    MATERIAL_STATE_OK : "OK",

    MATERIAL_IMG_DEFAULT_DUR : 3600,
    MATERIAL_IMG_DEFAULT_SHOW_DUR : 5,

    FONT_FULL_WIDTH_TMP_ALIGN_DECR_PX : 4,

    TEXT_ALIGN_LEFT_ENUM : 0,
    TEXT_ALIGN_CENTER_ENUM : 1,
    TEXT_ALIGN_RIGHT_ENUM : 2,

    VIDEO_BTN_ID_PRE : "uuid-",
    FILTER_BTN_ID_PRE : "filter-shader-",

    COVER_AUDIO_IMAGE : "assets/audiotab.png",
    COVER_AUDIO_TEXT : "assets/texttab.png",

    // box-sizing:border-box;
    // border-right: 5px solid #191919;
    // border-left: 3px solid #191919;
    MAIN_BG_COLOR : "#3F3F3F",
    MAIN_BORDER_COLOR : "#191919",

    OPERATION_BG_COLOR : "#1F1F3F",
    NAVIGATE_TAB_BG_COLOR : "#111111",
    NAVIGATE_TAB_CONT_COLOR : "#000000",
    MATERIAL_SCROLL_BG_COLOR : "#333333",

    MATERIAL_TYPES : ["VIDEO", "IMAGE", "AUDIO", "TEXT"],
    MATERIAL_TYPES_NAME : [
        "<img class=\"nav-left-icon\" align=\"absmiddle\" width='20' src=\"assets/typevideo.png\"><span>视频</span>",
        "<img class=\"nav-left-icon\" align=\"absmiddle\" width='20' src=\"assets/typeimg.png\"><span>图片</span>",
        "<img class=\"nav-left-icon\" align=\"absmiddle\" width='20' src=\"assets/typeaudio.png\"><span>音频</span>",
        "<img class=\"nav-left-icon\" align=\"absmiddle\" width='20' src=\"assets/typetext.png\"><span>文字</span>"
    ],

    DEFAULT_MIN_TRACES_COUNT : 4,
    DEFAULT_VIDEO_TRACE_HEIGHT : 90,
    DEFAULT_AUDIO_TRACE_HEIGHT : 35,
    DEFAULT_TEXT_TRACE_HEIGHT : 35,
    DEFAULT_OTHERS_TRACE_HEIGHT : 50,

    TOP_NAV_HEIGHT : 30,

    CONST_MIN_TIMELINE_VERT_SLIDE : 0.0,
    CONST_MAX_TIMELINE_VERT_SLIDE : 1.0,
    CONST_MVS_TIMELINE_VERT_VALUE : 0.05,

    CONST_SUBTITLE_UUID : "subtitle",

    // CONST_ResourceBoxID       : "resource-container-materials",
    CONST_ResourceBoxVideoID  : "resource-container-materials-video",
    CONST_ResourceBoxImgID    : "resource-container-materials-img",
    CONST_ResourceBoxAudioID  : "resource-container-materials-audio",
    CONST_ResourceBoxTextID   : "resource-container-materials-text",
    CONST_FiltersBoxID        : "resource-container-filters",

    // FIRST/LAST FAST/BACK NEXT1Frame/BACK1Frame
    CONST_PLAY_BTN_SEEK_FIRST       : "FIRST",
    CONST_PLAY_BTN_SEEK_LAST        : "LAST",
    CONST_PLAY_BTN_SEEK_FAST        : "FAST",
    CONST_PLAY_BTN_SEEK_BACK        : "BACK",
    CONST_PLAY_BTN_SEEK_NEXT1Frame  : "NEXT-1-FRAME",
    CONST_PLAY_BTN_SEEK_BACK1Frame  : "BACK-1-FRAME",

    LOAD_MATERIAL_LIMIT : 100,
    LOAD_MATERIAL_TEXT : "加载中...",
    LOAD_MATERIAL_BTN_DEF_TEXT : "点击加载更多",

    TAG_ID_TMP_REPLACE_OFFSET : 90000,

    // shaders: ['default', 'mirrorvert', 'mirrorhori']
    CONST_SHADER_MIRROR_HORI : "mirrorhori", // 全局
    CONST_SHADER_MIRROR_VERT : "mirrorvert",

    CONST_NODE_MIRROR_DEFAULT : 11.0, // 局部
    CONST_NODE_MIRROR_HORI : -1.0, // 局部
    CONST_NODE_MIRROR_VERT : -1.0, // 局部

    CONST_SHADER_MIRROR_DEFAULT_ENUM : 0,
    CONST_SHADER_MIRROR_HORI_ENUM : 1,
    CONST_SHADER_MIRROR_VERT_ENUM : 2,

    CONST_RESOLUTION_HORI_360P : "HORI_360P",
    CONST_RESOLUTION_HORI_480P : "HORI_480P",
    CONST_RESOLUTION_HORI_720P : "HORI_720P",
    CONST_RESOLUTION_HORI_1080P : "HORI_1080P",

    CONST_MATERIAL_SELE_BORDER_WIDTH : 1,

    CONST_RESOLUTION_HORI_MAP : {
        "HORI_360P" : {w:640, h:360, desc:"低清"},
        "HORI_480P" : {w:854, h:480, desc:"标清"},
        "HORI_720P" : {w:1280, h:720, desc:"高清"},
        "HORI_1080P" : {w:1920, h:1080, desc:"超清"},
    },

    CONST_VIDEO_TYPES : ['mp4', 'flv', 'm3u8', 'ts', 'mov', 'avi', 'rmvb', 'mkv', 'm4v', '3gp', 'wmv', 'dat'],
    CONST_IMAGE_TYPES : ['jpeg', 'jpg', 'png', 'tiff', 'gif'],
    CONST_AUDIO_TYPES : ['mp3', 'aac', 'wav', 'pcm', 'ogg', 'flac', 'opus', 'ape', 'alac'],

    /***************************** IDS    **************************/
    CONST_NavigateID : "resource-container-navigate",

    /***************************** BOTTOM **************************/
    BOTTOM : null
}; // module exports
},{}]},{},[1])(1)
});
