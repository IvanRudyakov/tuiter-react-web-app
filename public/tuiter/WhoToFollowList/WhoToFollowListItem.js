const WhoToFollowListItem = (who) => {
    return(`
    <a href="#" class="list-group-item list-group-item-action gray-border">
        <div class="row g-0 g-xl-2">
            <div class="col-2">
                <img src="../../images/${who.avatarIcon}" class="w-100 h-50px rounded-corners-50"/>
            </div>
            <div class="col-7">
                <div class="strong-font">
                    ${who.userName} <i class="fa fa-check-circle"></i>
                </div>
                <div>
                    @${who.handle}
                </div>
            </div>
            <div class="col-3">
                <div class="d-flex h-100 flex-row justify-content-center align-items-center">
                    <button class="btn btn-primary rounded-corners-30">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    </a>
    `);
}
export default WhoToFollowListItem;





