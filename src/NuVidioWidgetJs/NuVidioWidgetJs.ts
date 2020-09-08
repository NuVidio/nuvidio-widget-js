import { NuVidioWidgetOptions } from "../types";

function addScripts(container: HTMLElement, ...urls: (string | { url: string;})[]) {
  urls.forEach((u) => {
    const n = document.createElement('script');
    if (typeof u === 'string') n.src = u;
    else {
      n.src = u.url;
    }
    n.type = 'text/javascript';
    container.appendChild(n);
  });
}

function addNuVidioWidget(identifier: string, options?: NuVidioWidgetOptions) {
  let container = document.getElementById('nuvidio-widget');
  if (!container) {
    container = document.createElement('div');
    container.id = 'nuvidio-widget';
    document.body.appendChild(container);
  }
  const c = document.createElement('div');
  c.id = 'nuvidio-widget-container';
  container.appendChild(c);

  addScripts(container,
    'https://widget.nuvidio.com/js/nuvidio-widget.min.js',
  );

  window.addEventListener('load', () => {
    if ((window as any).NuVidioWidget) {
      (window as any).NuVidioWidget.init(identifier, options);
    }
  });
}

function removeNuVidioWidget() {
  const i = document.getElementById('nuvidio-widget');
  if (i) {
    i.remove();
  }
}

export { addNuVidioWidget, removeNuVidioWidget };
