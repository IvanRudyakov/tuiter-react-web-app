import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryList.js";

const PostSummaryList = () => {
    return(`
    <div class="list-group strong-font mt-2">
        ${posts.map(post => PostSummaryItem(post)).join('')}
    </div>
    `);
}
export default PostSummaryList;

