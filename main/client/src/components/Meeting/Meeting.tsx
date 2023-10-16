export {}
// import React, { useEffect, useMemo, useRef, useState } from "react";
// import {
//   MeetingProvider,
//   useMeeting,
//   useParticipant,
//   Constants,
// } from "@videosdk.live/react-sdk";
// import ReactPlayer from "react-player";
// import Hls from "hls.js";

// const SpeakerView: React.FC = () => {
//     return null;
// }

// const ViewerView: React.FC = () => {
//     return null;
// }

// const App: React.FC = () => {
//     const [mode, setMode] = useState<"CONFERENCE" | "VIEWER" | null>(null);


//   return mode ? (
//     <MeetingProvider
//       config={{
//         meetingId: "w0nl-yxzv-lcl5",
//         micEnabled: true,
//         webcamEnabled: true,
//         name: "Alythç's Org",
//         mode,
//       }}
//       joinWithoutUserInteraction
//       token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIxMzhhZWQyZS1lY2MxLTQ2ZjMtOGIwZi01ZDQxYzgzMWI1ODAiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY5NzIwMzc2OCwiZXhwIjoxNjk3MjkwMTY4fQ.2oHK69Da0CMvIpYBFxEEAsmyEzuOTKd4F23DAvLrFwU"
//     >
//       {mode === Constants.modes.CONFERENCE ? <SpeakerView /> : <ViewerView />}
//     </MeetingProvider>
//   ) : (
//     <div>
//  <button
//   onClick={() => {
//     setMode(Constants.modes.CONFERENCE);
//   }}
// >
//   Join as Speaker
// </button>
// <button
//   style={{ marginLeft: 12 }}
//   onClick={() => {
//     setMode(Constants.modes.VIEWER);
//   }}
// >
//   Join as Viewer
// </button>

//     </div>
//   );
// };

// export default App;
