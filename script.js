<script>
    let lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            document.body.classList.remove('scrolling-up');
            document.body.classList.add('scrolling-down');
        } else {
            document.body.classList.remove('scrolling-down');
            document.body.classList.add('scrolling-up');
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
</script>
