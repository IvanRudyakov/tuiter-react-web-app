import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = (post) => {
    return(`
    <div class="row mb-2">
        <div class="col-11">
            <div class="row g-0">
                <div class="col-1 pt-1 ps-2 white-background rounded-corners-l-30"><i class="fa fa-search"></i></div>
                <div class="col-11">
                    <input type="text" class="form-control rounded-corners-r-30" placeholder="Search Twitter"/>
                </div>
            </div>
        </div>
        <div class="col-1">
            <a href="#" class="d-flex h-100 flex-row justify-content-center align-items-center">
                <i class="fa fa-cog fa-2x blue"></i>
            </a>
        </div>
    </div>
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href="for-you.html">For You</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-inline">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
    </ul>
    <div class="spaceship-div">
        <img src="https://th.bing.com/th/id/OIP.8Jz0Ir_m8bM2vDr7et0xVQAAAA?pid=ImgDet&rs=1" class="mt-2 w-100 h-auto"/>
        <div class="spaceship-text">SpaceX's Starship</div>
    </div>
    ${PostSummaryList()}
    `);
}
export default ExploreComponent;





