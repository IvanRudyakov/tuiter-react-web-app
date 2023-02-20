const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <div class="list-group-item gray-border">
            <i class="fab fa-twitter"></i></div>
        <a href="../home.html" class="list-group-item list-group-item-action gray-border">
            <i class="fa fa-home me-1"></i><span class="d-none d-xl-inline">Home</span></a>
        <a href="#" class="list-group-item list-group-item-action gray-border active">
            <i class="fa fa-hashtag me-1"></i><span class="d-none d-xl-inline">Explore</span></a>
        <a href="../notifications.html" class="list-group-item list-group-item-action gray-border">
            <i class="fa fa-bell me-1"></i><span class="d-none d-xl-inline">Notifications</span></a>
        <a href="../messages.html" class="list-group-item list-group-item-action gray-border">
            <i class="fa fa-envelope me-1"></i><span class="d-none d-xl-inline">Messages</span></a>
        <a href="../bookmarks/index.html" class="list-group-item list-group-item-action gray-border">
            <i class="fa fa-bookmark me-1"></i><span class="d-none d-xl-inline">Bookmarks</span></a>
        <a href="../lists.html" class="list-group-item list-group-item-action gray-border">
            <i class="fa fa-list me-1"></i><span class="d-none d-xl-inline">Lists</span></a>
        <a href="../profile.html" class="list-group-item list-group-item-action gray-border">
            <i class="fa fa-user me-1"></i><span class="d-none d-xl-inline">Profile</span></a>
        <a href="#" class="list-group-item list-group-item-action gray-border">
            <i class="fa fa-minus-circle me-1"></i><span class="d-none d-xl-inline">More</span></a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
}
export default NavigationSidebar;