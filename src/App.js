import React from "react";
import Video from "./Video";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          src="http://techslides.com/demos/sample-videos/small.mp4"
          id="1"
        />
        <Video
          src="https://files3.lynda.com/secure/courses/2254042/VBR_MP4h264_main_SD/2254042_00_01_WL30_Why.mp4?dvvU4SNDhqEeu_IOVpMMDM8AJJ5NwrRCQbYpvL7iBMyxZ7ft5q6V1ktY7C9QYvnuxJiuJ7jUD5z-JYQB7kfkmcFHr5VROg-w4Mkdt0zezKNZVAIA8zQ2NZkdloyZj6M_PJ7QO_u3GjNtijp2TDpxaoCv76u8jQYlHjDd7jz5JQHWqV6l"
          id="2"
        />
        <Video
          src="https://dms.licdn.com/playlist/C4E05AQE6lgFGo7xrcA/mp4-720p-30fp-crf28/0?e=1599742800&v=beta&t=rjpd5fcvGZ50_SlARs5z5Uq4ZGhiTZ7yZ-CnFMstaxI"
          id="3"
        />
        <Video src="https://youtu.be/wxLwkwShWLw" id="4" />
        <Video src="https://youtu.be/wxLwkwShWLw" id="5" />
      </div>
    </div>
  );
}

export default App;
