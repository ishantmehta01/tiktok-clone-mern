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
          channel="ishantmehta"
          description="This is lovely"
          song="99 PROBLEMS but React ain't any"
          likes={100}
          messages={48}
          shares={12}
        />
        <Video
          src="https://dms.licdn.com/playlist/C4E05AQE6lgFGo7xrcA/mp4-720p-30fp-crf28/0?e=1599742800&v=beta&t=rjpd5fcvGZ50_SlARs5z5Uq4ZGhiTZ7yZ-CnFMstaxI"
          id="2"
          channel="ishantmehta"
          description="This is lovely"
          song="99 PROBLEMS but React ain't any"
          likes={100}
          messages={48}
          shares={12}
        />
        <Video
          src="http://techslides.com/demos/sample-videos/small.mp4"
          id="3"
          channel="ishantmehta"
          description="This is lovely"
          song="99 PROBLEMS but React ain't any"
          likes={100}
          messages={48}
          shares={12}
        />
        <Video
          src="https://dms.licdn.com/playlist/C4E05AQE6lgFGo7xrcA/mp4-720p-30fp-crf28/0?e=1599742800&v=beta&t=rjpd5fcvGZ50_SlARs5z5Uq4ZGhiTZ7yZ-CnFMstaxI"
          id="4"
          channel="ishantmehta"
          description="This is lovely"
          song="99 PROBLEMS but React ain't any"
          likes={100}
          messages={48}
          shares={12}
        />
      </div>
    </div>
  );
}

export default App;
