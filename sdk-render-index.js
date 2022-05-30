const g_materialList = [
    {
        audio_codec: "AAC",
        audio_duration: 0,
        audio_url: "",
        codec: "AVC",
        cover: "",
        duration: 10.02,
        height: 1080,
        origin_file_name: "cg_10.mp4",
        origin_media: {
            fps: 24,
            height: 1080,
            width: 1920,
        },
        showDuration: 10.00,
        status: "OK",
        thubmnail: "",
        type: "VIDEO",
        url: "dist-sdk/resource/cg_10.mp4",
        uuid: "citbhd7qm2ac7qsgjiw86cftwe0gtbxc",
        width: 1920
    },
    {
        audio_codec: "",
        audio_duration: 0,
        audio_url: "",
        codec: "MJPEG",
        cover: "dist-sdk/resource/0D14F5FCDC26D328E612D4B75BB60323.jpg",
        duration: 3600,
        height: 1080,
        origin_file_name: "0D14F5FCDC26D328E612D4B75BB60323.jpg",
        origin_media: {
            width: 1080, fps: 30, height: 1289
        },
        showDuration: 5.00,
        status: "OK",
        thubmnail: "dist-sdk/resource/0D14F5FCDC26D328E612D4B75BB60323.jpg",
        type: "IMAGE",
        url: "dist-sdk/resource/0D14F5FCDC26D328E612D4B75BB60323.jpg",
        uuid: "5xntk72pvgs6aqklwui5fgik9irza0b2",
        width: 1289
    }
]; // g_materialList

let g_renderObject = null;
let g_selectedTagId = 0;
let g_selectedNode = null;
let g_show_duration = 0;

let g_play_slide = null;
let g_pts_label = null;
let g_play_info_label = null;
let g_play_pause_btn = null;
let g_seek_btn = null;
let g_seek_input = null;
let g_backstep_btn = null;
let g_set_volume_btn = null;
let g_volume_input = null;
let g_fullscreen_btn = null;

let g_timeline_info_textarea = null;

let g_add_material_video_track_1st = null;
let g_add_material_pip_track_2nd = null;

let g_rm_all_btn = null;
let g_rm_track_btn = null;
let g_track_idx_input = null;
let g_add_track_btn = null;
let g_rm_node_btn = null;

let g_crop_btn = null;
let g_hori_btn = null;
let g_vert_btn = null;
let g_angle_left_btn = null;
let g_angle_right_btn = null;
let g_move_node_track2_incr5_btn = null;
let g_move_node_track2_decr1_btn = null;
let g_split_node_track1st_start_incr1s_btn = null;
let g_split_node_track2nd_end_incr1s_btn = null;

let g_rm_filters_btn = null;
let g_add_filter_gray_btn = null;

function DurationFormatSubVal(val) {
    let valStr = val.toString();
    if (valStr.length < 2) {
        return '0' + valStr;
    }
    return valStr;
}

function DurationText(duration) {
    if (duration < 0) {
        return "Play";
    }
    let durationSecInt = Math.round(duration);
    return DurationFormatSubVal(Math.floor(durationSecInt / 3600))
        + ":" + DurationFormatSubVal(Math.floor((durationSecInt % 3600) / 60))
        + ":" + DurationFormatSubVal(Math.floor(durationSecInt % 60));
}


function setup_dom() {
    g_play_slide = document.querySelector("#play_slide");
    g_play_slide.oninput = function () {
        console.log("CYL_createVideoEditRender - setupDom() - oninput ", g_play_slide.value, g_show_duration);
        const seekTime = (g_play_slide.value / 100.0) * g_show_duration;
        g_renderObject.pause();
        g_renderObject.seek(seekTime);
    };

    g_play_info_label = document.querySelector("#play-info-label");
    g_pts_label = document.querySelector("#pts-label");

    g_play_pause_btn = document.querySelector("#play-pause-btn");
    g_play_pause_btn.onclick = function(e) {
        g_renderObject.autoPlayPause();
    };

    g_seek_input = document.querySelector("#seek-input");
    g_seek_btn = document.querySelector("#seek-btn");
    g_seek_btn.onclick = function(e) {
        g_renderObject.seek(g_seek_input.value);
    };

    g_backstep_btn = document.querySelector("#backstep-btn");
    g_backstep_btn.onclick = function(e) {
        g_renderObject.backStep();
        g_renderObject.play1frame();
    };

    g_volume_input = document.querySelector("#volume-input");
    g_set_volume_btn = document.querySelector("#set-volume-btn");
    g_set_volume_btn.onclick = function(e) {
        g_selectedNode.node.setVolume(g_volume_input.value);
    };

    g_fullscreen_btn = document.querySelector("#fullscreen-btn");
    g_fullscreen_btn.onclick = function(e) {
        g_renderObject.fullScreen();
    };

    g_timeline_info_textarea = document.querySelector("#timeline-info-textarea");


    g_add_material_video_track_1st = document.querySelector("#add-video-track-1st");
    g_add_material_video_track_1st.onclick = function(e) {
        g_renderObject.setLoadingMask(true);
        g_renderObject.pushNodeByIdx(0, g_materialList[0]);
    };
    g_add_material_pip_track_2nd = document.querySelector("#add-pip-track-2nd");
    g_add_material_pip_track_2nd.onclick = function(e) {
        g_renderObject.setLoadingMask(true);
        g_renderObject.pushNodeByIdx(1, g_materialList[1]);
    };

    g_rm_all_btn = document.querySelector("#remove-all-btn");
    g_rm_all_btn.onclick = function(e) {
        g_renderObject.removeAll();
    };

    g_track_idx_input = document.querySelector("#track-idx-input");
    g_rm_track_btn = document.querySelector("#remove-track-btn");
    g_rm_track_btn.onclick = function(e) {
        g_renderObject.removeTraceByIdx(g_track_idx_input.value);
    };

    g_add_track_btn = document.querySelector("#add-track-btn");
    g_add_track_btn.onclick = function(e) {
        g_renderObject.createTrace();
        refresh();
    };

    g_rm_node_btn = document.querySelector("#rm-node-btn");
    g_rm_node_btn.onclick = function(e) {
        g_renderObject.rmNodeByTagId(g_selectedTagId);
    };

    g_crop_btn = document.querySelector("#crop-btn");
    g_crop_btn.onclick = function(e) {
        g_renderObject.beginCrop(g_selectedTagId);
    };

    g_hori_btn = document.querySelector("#hori-mirror-btn");
    g_hori_btn.onclick = function(e) {
        g_renderObject.set_tag_GL_MvHoriMirror(g_selectedTagId);
    };

    g_vert_btn = document.querySelector("#vert-mirror-btn");
    g_vert_btn.onclick = function(e) {
        g_renderObject.set_tag_GL_MvVertMirror(g_selectedTagId);
    };

    g_angle_left_btn = document.querySelector("#angle-left-btn");
    g_angle_left_btn.onclick = function(e) {
        g_renderObject.angleTurn(false);
    };

    g_angle_right_btn = document.querySelector("#angle-right-btn");
    g_angle_right_btn.onclick = function(e) {
        g_renderObject.angleTurn(true);
    };

    g_move_node_track2_incr5_btn = document.querySelector("#move-node-track2nd-incr5s-btn");
    g_move_node_track2_incr5_btn.onclick = function(e) {
        g_renderObject.moveByTraceIdxNodeIdx(1, 0, 5.0);
    };

    g_move_node_track2_decr1_btn = document.querySelector("#move-node-track2nd-decr1s-btn");
    g_move_node_track2_decr1_btn.onclick = function(e) {
        g_renderObject.moveByTraceIdxNodeIdx(1, 0, -1.0);
    };

    g_split_node_track1st_start_incr1s_btn = document.querySelector("#split-node-track1st-start-incr1s-btn");
    g_split_node_track1st_start_incr1s_btn.onclick = function(e) {
        g_renderObject.splitNodeByTraceIdxNodeIdx(0, 0, 1.0, 0.0);
    };

    g_split_node_track2nd_end_incr1s_btn = document.querySelector("#split-node-track2nd-end-incr1s-btn");
    g_split_node_track2nd_end_incr1s_btn.onclick = function(e) {
        g_renderObject.splitNodeByTraceIdxNodeIdx(1, 0, 0.0, 1.0);
    };


    g_rm_filters_btn = document.querySelector("#rm-filters-btn");
    g_rm_filters_btn.onclick = function(e) {
        g_renderObject.clearShader();
    };

    g_add_filter_gray_btn = document.querySelector("#filter-gray-btn");
    g_add_filter_gray_btn.onclick = function(e) {
        g_renderObject.addShader(SHADER_INTERFACE.SHADER_NAME_GRAY);
    };
} // setupDom

function refresh() {
    g_show_duration = g_renderObject.getShowMaxDuration();
    g_seek_input.max = g_show_duration;
    g_track_idx_input.max = g_renderObject.getMaxTraceLen();
}

function refresh_node_btn(selected=true) {
    if (selected) {
        g_selectedNode = g_renderObject.getCanvasNodeTagID(g_selectedTagId);
        g_rm_node_btn.removeAttribute("disabled");
        g_set_volume_btn.removeAttribute("disabled");
        g_crop_btn.removeAttribute("disabled");
        g_hori_btn.removeAttribute("disabled");
        g_vert_btn.removeAttribute("disabled");
        g_angle_left_btn.removeAttribute("disabled");
        g_angle_right_btn.removeAttribute("disabled");
        g_rm_filters_btn.removeAttribute("disabled");
        g_add_filter_gray_btn.removeAttribute("disabled");

        g_play_info_label.textContent = "selected node tagId:" + g_selectedTagId;
    } else {
        g_selectedTagId = 0;
        g_selectedNode = null;
        g_rm_node_btn.setAttribute("disabled", true);
        g_set_volume_btn.setAttribute("disabled", true);
        g_crop_btn.setAttribute("disabled", true);
        g_hori_btn.setAttribute("disabled", true);
        g_vert_btn.setAttribute("disabled", true);
        g_angle_left_btn.setAttribute("disabled", true);
        g_angle_right_btn.setAttribute("disabled", true);
        g_rm_filters_btn.setAttribute("disabled", true);
        g_add_filter_gray_btn.setAttribute("disabled", true);

        g_play_info_label.textContent = "no selected node";
    }
}

function setup() {
    setup_dom();

    const config = {
        PlayerContId: "render1",
        APP_CANVAS_W: 640,
        APP_CANVAS_H: 360,
        LOADING_GIF: "dist-sdk/assets/icon-loading.gif"
    };
    g_renderObject = window.CYL_createVideoEditRender(config);

    g_renderObject.onVideoProbe = function(mediaInfo) {
        console.log("CYL_createVideoEditRender - g_renderObject.onVideoProbe ", mediaInfo);
        console.log("CYL_createVideoEditRender - g_renderObject.dumpMat() ", g_renderObject.dumpMat());
        console.log("CYL_createVideoEditRender - g_renderObject.getMaxTraceLen() ", g_renderObject.getMaxTraceLen());
        g_renderObject.setLoadingMask(false);

        const targetID  = mediaInfo.targetID;
        const isReload  = mediaInfo.isReload || false;
        const extra     = mediaInfo.extra || null;
        const uuid      = mediaInfo.uuid;
        const volume    = Math.max(0.0, mediaInfo.volume);
        const real_type = mediaInfo.real_type;

        if (isReload === true) {
            if (extra !== undefined && extra !== null) {
                // extra:
                //     hori_mirror:-1,
                //     vert_mirror":1,
                //     angle: 0
                //     angle_h: 0.9861111044883728
                //     angle_w: 1
                //     aspect_h: 0.9861111044883728
                //     aspect_w: 1
                //     ctx_h: 360
                //     ctx_w: 640
                //     gl_x: 0
                //     gl_y: 0
                //     level: 0
                //     node_type: 1001
                //     scale: 1
                //     shaders: ['default']
                //     tag: 1001
                //     tag_offset: 1000
                //     [[Prototype]]: Object

                if (extra.node_type === COMMON_DEF.NODE_TYPE_VIDEO)
                {
                    // --> shaders
                    const extra_shaders = extra.shaders;
                    for (let sdIdx = 0; sdIdx < extra_shaders.length; sdIdx++) {
                        const shaderName = extra_shaders[sdIdx];
                        if (shaderName === SHADER_INTERFACE.SHADER_NAME_DEFAULT) {
                            continue;
                        }

                        let sd_ret = g_renderObject.addShaderByTag(targetID, shaderName);
                        if (sd_ret === 0) {
                            // this.seek();
                        }
                    } // end for shaders

                    // --> angle
                    let angle_ret = g_renderObject.setNode_render_set_tag_GL_angle(targetID, extra.angle);
                    // --> scale
                    let scale_ret = g_renderObject.setNode_render_set_tag_GL_scale(targetID, extra.scale);
                    // --> position
                    let mv_ret = g_renderObject.setNode_GL_MvXY_ByTag(targetID, extra.gl_x, extra.gl_y);
                    // --> update inside
                    let inside_ret = g_renderObject.setNode_render_update_inside_by_canvas_size_and_angle(targetID);

                    // --> mirror
                    let mirror_hori_ret = g_renderObject.set_tag_GL_MvHoriMirror(targetID, extra.hori_mirror);
                    let mirror_vert_ret = g_renderObject.set_tag_GL_MvVertMirror(targetID, extra.vert_mirror);
                } // extra.node_type

                /*
                 * set volume
                 */
                if (real_type === COMMON_DEF.NODE_TYPE_AUDIO || real_type === COMMON_DEF.NODE_TYPE_VIDEO)
                {
                    console.log("CYL_createVideoEditRender - g_renderObject.onVideoProbe - is audio/video");
                    let canvasNode = g_renderObject.getCanvasNodeTagID(targetID);
                    // let result = {
                    //     traceIdx : 0,
                    //     nodeIdx : 0,
                    //     tagId : tagId,
                    //     node : null,
                    // };
                    if (canvasNode.node !== undefined && canvasNode.node !== null) {
                        console.log("CYL_createVideoEditRender - g_renderObject.onVideoProbe - canvasNode.node.setVolume", canvasNode.node, volume);
                        canvasNode.node.setVolume(volume);
                    }
                }

            } // end extra

            console.log("CYL_createVideoEditRender - g_renderObject.onVideoProbe - dump isReload:", g_renderObject.dumpMat(false));
            // return;

        } else { // ---------- Drag new node ---------------
            // @return base-canvas List
            console.log("CYL_createVideoEditRender - g_renderObject.onVideoProbe - new node");
            const renderTimeline = g_renderObject.dumpMat();
            // @return [idx1, idx2, ...]

            if (real_type === COMMON_DEF.NODE_TYPE_EXT_IMG || real_type === COMMON_DEF.NODE_TYPE_VIDEO) {
                console.log("CYL_createVideoEditRender - g_renderObject.onVideoProbe - new node is audio/video");
                let canvasNodeInfo = g_renderObject.getCanvasNodeTagID(targetID);
                if (canvasNodeInfo !== null && canvasNodeInfo.node !== null) {
                    canvasNodeInfo.node.bindExtra(g_renderObject.getExtraByTargetId(targetID));
                }
            }
            g_renderObject.dumpMat(true); // 必须放最后
            console.log("CYL_createVideoEditRender - g_renderObject.dumpMat() ", g_renderObject.dumpMat());
        }

    };
    g_renderObject.onVideoPlayTime = function(pts) {
        console.log("CYL_createVideoEditRender - g_renderObject.onVideoPlayTime ", pts);

        g_play_slide.value = (pts / g_show_duration) * 100;

        g_pts_label.textContent = DurationText(pts) + "/" + DurationText(g_show_duration);
    };
    g_renderObject.onVideoPlayFinished = function() {
        console.log("CYL_createVideoEditRender - g_renderObject.onVideoPlayFinished ");
    };
    g_renderObject.onAddHistory = function(timelineJson) {
        console.log("CYL_createVideoEditRender - g_renderObject.onAddHistory ", timelineJson);

        // g_timeline_info_textarea.value = JSON.stringify(timelineJson);

        let resultStr = "";
        const SPACE_STR = "    ";
        for (let i = 0; i < timelineJson.length; i++) {
            resultStr = resultStr + "Track[" + i + "]\r\n";

            for (let j = 0; j < timelineJson[i].length; j++) {
                const node = timelineJson[i][j];
                resultStr = resultStr +
                    SPACE_STR +"Node[" + j + "] targetId:" + node.targetId + "\r\n";
                resultStr = resultStr +
                    SPACE_STR + SPACE_STR +"splitStart:" + node.split_start + "\r\n" +
                    SPACE_STR + SPACE_STR +"splitEnd:" + node.split_end + "\r\n" +
                    SPACE_STR + SPACE_STR +"showStart:" + node.show_start + "\r\n" +
                    SPACE_STR + SPACE_STR +"showDuration:" + node.show_duration + "\r\n";
            }
        }

        g_timeline_info_textarea.value = resultStr;

        refresh();
    };
    g_renderObject.onRectLockTagID = function(tagId) {
        console.log("CYL_createVideoEditRender - g_renderObject.onRectLockTagID ", tagId);
        g_selectedTagId = tagId;
        refresh_node_btn(true);
    };
    g_renderObject.onClickTagID = function(tagId) {
        console.log("CYL_createVideoEditRender - g_renderObject.onClickTagID ", tagId);
        g_selectedTagId = tagId;
        if (tagId > 0) {
            refresh_node_btn(true);
        } else {
            refresh_node_btn(false);
        }
    };
    g_renderObject.onUnselectTagId = function() {
        refresh_node_btn(false);
    };

    console.log(g_renderObject);
    g_renderObject.main();
    g_renderObject.createTrace();
    // g_renderObject.getMaxTraceLen()
    // g_renderObject.setLoadingMask(true);
    // g_renderObject.pushNodeByIdx(0, g_materialList[0]);
} // run

window.addEventListener("wasmRenderEngineLoaded", function() {
    setup();
}); // wasmRenderEngineLoaded