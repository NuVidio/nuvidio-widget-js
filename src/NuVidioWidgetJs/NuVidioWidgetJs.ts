import { NuVidioWidgetOptions } from "../types";

const WIDGET_BASE_PATH = 'https://widget.nuvidio.com';
// const WIDGET_BASE_PATH = 'https://hmlwidget.nuvidio.com'
const nuvidio: any = {
  loaded: false,
  _c: [] 
};
const methods = ['init'];
methods.forEach(methodName => {
  nuvidio[methodName] = function() {
    nuvidio._c.push([methodName, arguments]);
  }
});

function __addScripts(container: HTMLElement, ...urls: (string | { url: string; callback?: () => any })[]) {
  urls.forEach((u) => {
    const n = document.createElement('script');
    if (typeof u === 'string') n.src = u;
    else {
      n.src = u.url;
    }
    n.type = 'text/javascript';
    if (typeof u === 'object' && u.callback) {
      n.onload = u.callback;
    }
    container.appendChild(n);
  });
}

function importScripts() {
  let container = document.getElementById('nuvidio-widget');
  if (!container) {
    container = document.createElement('div');
    container.id = 'nuvidio-widget';
    document.body.appendChild(container);
  }
  if (!document.getElementById('nuvidio-widget-container')) {
    const c = document.createElement('div');
    c.id = 'nuvidio-widget-container';
    container.appendChild(c);
  }

  __addScripts(container, {
    url: `${WIDGET_BASE_PATH}/js/nuvidio-widget.min.js`,
    callback: () => {
      nuvidio.loaded = true;
      nuvidio._c.forEach((f: any[]) => {
        switch(f[0]) {
          case 'init': 
            (window as any).NuVidioWidget.init(...f[1]);
        }
      });
      nuvidio._c = [];
    }
  });
}

function setDepartment(identifier: string, options?: NuVidioWidgetOptions) {
  if (nuvidio.loaded) {
    if ((window as any).NuVidioWidget) {
      (window as any).NuVidioWidget.init(identifier, options);
    } else {
      throw new Error('Error to load NuVidio Widget');
    }
  } else {
    nuvidio.init(identifier, options);
  }
}

function removeWidget() {
  const i = document.getElementById('nuvidio-widget');
  if (i) {
    i.remove();
  }
}


export { setDepartment, removeWidget, importScripts };
