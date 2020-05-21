---
title: 开始捕捉设备
date: "2020-05-21"
---

通过`navigator.mediaDevices`可以捕获到摄像头和麦克风的流数据。

最常用的方式是使用`getUserMedia()`获得`MediaStream`，它需要传入`MediaStreamConstraints`来指明要获取的媒体。

```js
async function getStream() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    return stream;
  } catch (err) {
    console.log(err);
  }
}
```

上面的函数会唤醒浏览器获取用户摄像头和麦克风的视频和音频流，如果用户拒绝，会抛出`PermissionDeniedError`如果没有设备，则会返回`NotFoundError`。

MDN 上有更对多关于[MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices)的解释。

## 查询设备信息

通过`enumerateDevices()`可以查找到更复杂的设备数据，它会返回`MediaDevicesInfo`的数组，用于描述每一个已知的外设，每个`MediaDeviceInfo`会有一个`kind`参数，值为`audioinput`、`audiooutput`或者`videoinput`，表明它是什么设备。

```js
await navigator.mediaDevices.enumerateDevices();
```

## 监听设备

通过监听`navigator.mediaDevices`的`devicechange`事件可以监听到设备是否被插入或拔出。

```js
navigator.mediaDevices.addEventListener("devicechange", (event) => {
  //...
});
```

## 本地回放

当已经获得`MediaStream`后，我们可以将它赋给本地的视频、音频组件。

```js
const stream = await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
});
const element = document.querySelector("video");
element.srcObject = stream;
```

HTML 标签里需要增加`autoplay`和`playsinline`，`autoplay`可以在流赋值后自动播放，`playsinline`则允许视频不必只在全屏情况下播放，有时也要加上`controls="false"`防止用户手动暂停流。

```html
<html>
<head><title>Local video playback</video></head>
<body>
    <video id="localVideo" autoplay playsinline controls="false"/>
</body>
</html>
```

## 媒体约束

`MediaStreamConstraints`是`getUserMedia()`的参数，它可以粗略指定视频媒体或者音频媒体，也可以指定对应的`deviceId`，推荐的做法是获取用户媒体时，先获取到设备是否连接再调用。

可以参考 MDN 查看更多有关[MediaStreamConstraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints)的内容。

而`MediaTrackConstraint`则定义`getDisplayMedia()`的参数，类似于`getUserMedia()`，不论输入和输出都是类似的数据结构。

```ts
{
    video: {
        cursor: 'always' | 'motion'| 'never',
        displaySurface: 'application' | 'browser' | 'monitor' | 'window'
    }
}
```

## 流和轨道

通过调用`MediaStream.getTracks()`可以获取到视频流和音频流对象`MediaStreamTrack`。

一个`MediaStreamTrack`拥有一个`kind`属性指明它是`audio`还是`video`，通过修改他的`enabled`属性可以打开或关闭这个轨道。一个轨道也有一个`remote`布尔值，表明它是否来自于`RTCPeerConnection`的端对端链接。
