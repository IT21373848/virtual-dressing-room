import './MyHome.css'

const MyHome =()=>{
    return(
        <div class = "FullPage">
            <h1 class="tt" >Dressing Room</h1>
            <div class = "contenar">
                <div class="dropdown">
  <button class="dropbtn">Try Out </button>
  <div class="dropdown-content">
    <a href="/dressroom/Male">Male</a>
    <a href="/dressroom/Female">Female</a>
  </div>
</div>
            </div>
        </div>
    );
};
export default MyHome;