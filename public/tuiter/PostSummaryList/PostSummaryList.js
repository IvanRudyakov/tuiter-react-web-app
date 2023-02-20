const PostSummaryItem = (post) => {
    return(`
    <a href="#" class="list-group-item list-group-item-action gray-border">
        <div class="row">
            <div class="col-9 col-md-10 col-lg-9 col-xxl-10">
                <div class="light-font">
                    ${post.topic}
                </div>
                <div>
                    ${post.userName} <i class="fa fa-check-circle"></i> <span class="light-font"> - ${post.time}</span>
                </div>
                <div>
                    ${post.title}
                </div>
            </div>
            <div class="col-3 col-md-2 col-lg-3 col-xxl-2">
                <img src="${post.image}" class="w-100 h-100 rounded-corners-15"/>
            </div>
        </div>
    </a>
    `);
}
export default PostSummaryItem;





