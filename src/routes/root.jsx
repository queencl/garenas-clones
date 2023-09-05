import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="navbar">

        <img src="garena.png" alt="" srcset="" class="navbar-logo" />

    
        <div class="navbar-nav">
          <a href="#home">Beranda</a>
          <a href="#about">Game</a>
          <a href="#menu">Karir</a>
          <a href={"akun/1"}>Akun</a>
          <a href={"media/1"}>Media</a>
          <a href={"kontak/1"}>Kontak</a>
          <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
          </a>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
        </div>

        <div class="navbar-extra">
          <a href="#" id="search"><i data-feather="search"></i></a>
          <a href="#" id="shopping-cart"><i data-feather="shopping-cart"></i></a>
          <a href="#" id="menu"><i data-feather="menu"></i></a>
        </div>
      </nav>
      <div className='firstContent'>
        <div class='g-esports'>
          <img className ="bg-awal"src="p.jpg
" 
          />
          
        </div>
        <div className="gabungan" style={{ display: "flex", flexDirection: "column", zIndex: "1", position: "absolute", }}>
          <p className='garenaesport'>Garena Esports</p>
          <p className='textpemain'>Pemain profesional maupun talenta baru, kejar mimpimu di panggung kompetisi game persembahan</p>
          <p className='garenatext'>Garena</p>
        </div>
      </div>
      <div className='content-body'>
        <div>
         <p className='layanankami'>Layanan Kami</p>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <img class="logos" src="komunitas.png" alt="" srcset="" />
          <h2>Esport</h2>
          <p class="centered-text">Perintis dan penyelenggara turnamen esports sebagai wadah kompetitif untuk menyalurkan minat dan bakat para gamers mulai dari amatir hingga profesional.</p>
        </div>
        <div class="card">
          <img class="logos" src="games.png" alt="" />
          <h2>Game</h2>
          <p class="centered-text">
            Penyedia platform hiburan digital berupa berbagai game mobile dan PC terkemuka yang dapat dimainkan secara gratis.
          </p></div>
        <div class="card">
          <img class="logos" src="esport.png" alt="" />
          <h2>Komunitas</h2>
          <p class="centered-text">Penyedia wadah komunikasi untuk komunitas gamers di seluruh dunia, siapapun dan dimanapun mereka berada.</p>
        </div>
      </div>

      <footer>
        <div className="footer-top">
          <div className="left">
            <img src="garena.png" alt="" />
            <p>Gama Tower LT. 23-26, Jl. H. R. Rasuna Said Kav. C22, Karet Kuningan, Setiabudi, Jakarta 12940</p>
              <p>Tel: +62 21 80864211</p>
          </div>
          <div className="right">
            <ul>
              <li>Company</li>
              <li>Who We Are</li>
              <li>Karir</li>
            </ul>
            <ul>
              <li>
                Garena Pc
              </li>
              <li>
                Garena Mobile
              </li>
            </ul>
            <ul>
              <li>
                Service
              </li>
              <li>
                Kontak
              </li>
             <li>
                Akun
              </li>
            
            </ul>
          </div>
        </div>
      </footer>


      {/* <div class="konten">
        <img class="konten1" src="garena.png" alt="" />
        <p>Gama Tower LT. 23-26, Jl. H. R. Rasuna Said Kav. C22, Karet Kuningan, Setiabudi, Jakarta 12940
          Tel: +62 21 80864211</p>

          <div class="footer">
          <p>Company</p>
          <p>Platform</p>
          <p>Service</p>
        </div>
        <div class="footer2">
          <div>Who We Are
            Karir</div>
          <div>Garena PC
            Garena Mobile</div>
          <div>Kontak
            Akun</div>
        </div>


      </div> */}

      {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}


    </>
  )
}

export default App
