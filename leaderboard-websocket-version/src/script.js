const params = new URLSearchParams(window.location.search);
//Pos 1
document.getElementById("name0").textContent = params.get("name0") || "GoWMan";
document.getElementById("points0").textContent = params.get("points0") || "4512";

//Pos 2
document.getElementById("name1").textContent = params.get("name1") || "Lyfesaver";
document.getElementById("points1").textContent = params.get("points1") || "74";
//Pos 3
document.getElementById("name2").textContent = params.get("name2") || "Nate";
document.getElementById("points2").textContent = params.get("points2") || "1208";
//Pos 4
document.getElementById("name3").textContent = params.get("name3") || "Geo";
document.getElementById("points3").textContent = params.get("points3") || "69";

//Pos 5
document.getElementById("name4").textContent = params.get("name4") || "Webby";
document.getElementById("points4").textContent = params.get("points4") || "41";

//Name
document.getElementById("pointName").textContent = params.get("pointName") || "Points";
const WEBSOCKET_URI = "ws://127.0.0.1:8080/";
const ws = new WebSocket(WEBSOCKET_URI);
ws.addEventListener("open", (event) => {
  console.log("Connected to Streamer.bot");

  ws.send(
    JSON.stringify({
      request: "Subscribe",
      id: "123",
      events: {
        Raw: ["SubAction"]
      }
    })
  );
});

ws.addEventListener("message", (event) => {
  if (!event.data) return;

  const data = JSON.parse(event.data);
  
  // handle event response here
  if (!data.event || !data.event.type) return;
if (data.data.name == "** Update Leaderboard **") {
  console.log(event.data);
  
  //Pos 1
document.getElementById("name0").textContent = data.data.arguments.userName0;
document.getElementById("points0").textContent = data.data.arguments.userValue0;

//Pos 2
document.getElementById("name1").textContent = data.data.arguments.userName1;
document.getElementById("points1").textContent = data.data.arguments.userValue1;

//Pos 3
document.getElementById("name2").textContent = data.data.arguments.userName2;
document.getElementById("points2").textContent = data.data.arguments.userValue2;

//Pos 4
document.getElementById("name3").textContent = data.data.arguments.userName3;
document.getElementById("points3").textContent = data.data.arguments.userValue3;

//Pos 5
document.getElementById("name4").textContent = data.data.arguments.userName4;
document.getElementById("points4").textContent = data.data.arguments.userValue4;

 // Name
  document.getElementById("pointName").textContent = data.data.arguments.valueName;
    
    }
});
