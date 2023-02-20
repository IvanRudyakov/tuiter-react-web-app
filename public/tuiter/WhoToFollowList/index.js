import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
    <div class="list-group ps-4">
        <div class="list-group-item strong-font gray-border">
            Who to Follow
        </div>
        ${who.map(whoToFollow => WhoToFollowListItem(whoToFollow)).join('')}
    </div>
    `);
}
export default WhoToFollowList;

