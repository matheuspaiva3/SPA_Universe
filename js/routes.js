export class Router {
  routes = {};
  add(page, pagename, bg) {
    this.routes[page] = {pagename , bg}
  }
  // addBg(page,bg){
  //     this.routes[page] = bg
  // }

  route(event) {
    event = event || window.event;

    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }
  handle() {
    const { pathname } = window.location;
    console.log(pathname);

    const route = this.routes[pathname] || this.routes["/404"];

    fetch(route.pagename)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html
        document.body.style.backgroundImage = route.bg
        });
    console.log(route.pagename);
  }
}
