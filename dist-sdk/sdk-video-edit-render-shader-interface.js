(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SHADER_INTERFACE = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const SHADER_NAME_DEFAULT       = "default";
const SHADER_NAME_LUT           = "lut";
const SHADER_NAME_GRAY          = "gray";
const SHADER_NAME_MIRROR_HORI   = "mirrorhori";
const SHADER_NAME_MIRROR_VERT   = "mirrorvert";

const SHADER_NAME_DEFAULT_NAME      = "默认";
const SHADER_NAME_LUT_NAME          = "lut";
const SHADER_NAME_GRAY_NAME         = "灰度";
const SHADER_NAME_MIRROR_HORI_NAME  = "水平镜像";
const SHADER_NAME_MIRROR_VERT_NAME  = "垂直镜像";

module.exports = {
    SHADER_NAME_DEFAULT     : SHADER_NAME_DEFAULT,
    SHADER_NAME_LUT         : SHADER_NAME_LUT,
    SHADER_NAME_GRAY        : SHADER_NAME_GRAY,
    SHADER_NAME_MIRROR_HORI : SHADER_NAME_MIRROR_HORI,
    SHADER_NAME_MIRROR_VERT : SHADER_NAME_MIRROR_VERT,

    SHADER_NAME_DEFAULT_NAME    : SHADER_NAME_DEFAULT_NAME,
    SHADER_NAME_LUT_NAME        : SHADER_NAME_LUT_NAME,
    SHADER_NAME_GRAY_NAME       : SHADER_NAME_GRAY_NAME,
    SHADER_NAME_MIRROR_HORI_NAME: SHADER_NAME_MIRROR_HORI_NAME,
    SHADER_NAME_MIRROR_VERT_NAME: SHADER_NAME_MIRROR_VERT_NAME,

    /***************************** BOTTOM **************************/
    BOTTOM : null
}; // module exports
},{}]},{},[1])(1)
});
