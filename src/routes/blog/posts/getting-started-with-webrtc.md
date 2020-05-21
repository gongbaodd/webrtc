---
title: 开始使用WebRTC
date: "2020-05-21"
---

在不了解 WebRTC 的 API 的情况下去创建基于 WebRTC 技术的应用是困难的。此部分将会讲解几个简单的 WebRTC 接口和用例。

## WebRTC API

WebRTC 标准包括两个技术，媒体捕捉和端对端传输。

媒体捕捉包括摄像头和麦克风，也包括屏幕录制。获取摄像头和麦克风可以使用`navigator.mediaDevices.getUserMedia()`捕获流，录制屏幕则使用`navigator.mediaDevices.getDisplayMedia()`。

端对端传输通过`RTCPeerConnection`接口实现。这对于 WebRTC 双端数据传输很重要。
