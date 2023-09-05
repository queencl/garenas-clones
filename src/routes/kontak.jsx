import { useState } from "react";
import "./kontak.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="navbarr">
        <div class="navbar-na">
          <img class="navbar-navv" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAAAkCAYAAABR03zvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJEMTkzOTk1RERDMTExRTk4MDNFQjAwNkI0REQwQTYwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJEMTkzOTk2RERDMTExRTk4MDNFQjAwNkI0REQwQTYwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkQxOTM5OTNEREMxMTFFOTgwM0VCMDA2QjRERDBBNjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkQxOTM5OTREREMxMTFFOTgwM0VCMDA2QjRERDBBNjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7n+TeTAAAUf0lEQVR42uxd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" alt=""></img>
          <a href={"kontak/1"}>Login</a>
        </div>
      </nav>

      <main>
        <div className="body-sign">
          <div className="input-box">
            <img className="kontak" src="/public/kontak.png" alt="" />
            <div></div>
            {/* <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg> */}
            <input className="kontao" type="text" placeholder="Temukan permasalahan anda"></input>
          </div>
        </div>
        <div className="b">
          <div>
            <h1 style={{textAlign: "center"}}>TOP ISSUE</h1>

            <img class="s" src="/public/s.jpg" alt="" />
          </div>
          <div  >

            <h1 style={{textAlign: "center"}}>GAME ASSISTANCE</h1>
            <div class="b" >
              <div style={{display: "flex", flexDirection: "column"}}>
              <div class="carrd">
                <img class="z" src="/public/contra.png" alt="" />
                </div>
                <div class="carrd">
                <img class="z" src="/public/aov.png" alt="" />
                </div>
                <div class="carrd">
                <img class="z" src="/public/undawnlog.png" alt="" />
                </div>
                <div class="carrd">
                <img class="z" src="/public/appstore@3x.png" alt="" />
                </div>
              </div>
              <div style={{display: "flex", flexDirection: "column"}}>
              <div class="carrd">
                <img class="z" src="/public/ff.png" alt="" />
                </div>
                <div class="carrd">
                <img class="z" src="/public/codm.png" alt="" />
                </div>
                <div class="carrd">
                <img class="z" src="/public/speeds.png" alt="" />
                </div>
              </div>

            </div>
          </div>


        </div>
      </main>
    </>
  )
}

export default App
