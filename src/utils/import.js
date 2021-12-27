import {defineAsyncComponent} from "vue";

export function registerComponent(app) {
    app.component('auth-layout', defineAsyncComponent(() => import('../layouts/auth')))
    app.component('default-layout', defineAsyncComponent(() => import('../layouts/default')))
}
